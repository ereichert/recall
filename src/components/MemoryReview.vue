<template>
  <div>
    <h2>Memory Review</h2>
    <div v-if="memoriesToBeReviewedAreReady">
      <div v-if="memState.shouldShowMemoryReview">
        <div id='prompt-area'>
          <label for='prompt-text'>Prompt</label>
          <p id='prompt-text'>{{ currentMemoryRecordPrompt() }}</p>
        </div>
        <div id="details-area">
          <div v-if="memState.shouldShowMemDetails">
            <label for='details-text'>Memory Details</label>
            <p id='details-text'>{{ currentMemoryRecordDetails() }}</p>
          </div>
        </div>
        <div id="control-area">
          <MemoryDetailsControls
            class="control-buttons"
            v-if="memState.shouldShowMemDetailsButtons"
            :onClick="showMemoryDetails"
          />
          <ResolutionControls
            class="control-buttons"
            v-if="memState.shouldShowMemResolutionButtons"
            :onResolution="handleMemoryResolution"
          />
        </div>
      </div>
      <div v-if="memState.shouldShowCongrats">
        <h1>Congratulations</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MemoryRecordReview from '@/models/MemoryRecordReview';
import * as MemoryService from '@/services/MemoryService';
import * as MemoryReviewStateService from '@/services/MemoryReviewStateService';
import ResolutionControls from './ResolutionControls.vue';
import MemoryDetailsControls from './MemoryDetailsControls.vue';

@Component({
  components: {
    ResolutionControls,
    MemoryDetailsControls,
  },
})
export default class MemoryReview extends Vue {
  private currentMemoryRecordReview: MemoryRecordReview | undefined = undefined;

  private memoriesToBeReviewed: Array<MemoryRecordReview> = [];

  private memoriesToBeReviewedAreReady = false;

  async created(): Promise<void> {
    this.memoriesToBeReviewed = await MemoryService.getAllMemoryRecordReviews();
    this.currentMemoryRecordReview = this.memoriesToBeReviewed.shift();
    this.memoriesToBeReviewedAreReady = true;
  }

  private get memState(): MemoryReviewStateService.MemoryRecordReviewState {
    if (this.currentMemoryRecordReview) {
      if (this.currentMemoryRecordReview.isResolved) {
        this.currentMemoryRecordReview = this.memoriesToBeReviewed.shift();
      }
    }

    return MemoryReviewStateService.transition(this.currentMemoryRecordReview);
  }

  private currentMemoryRecordPrompt(): string {
    let prompt = 'MISSING PROMPT';
    if (this.currentMemoryRecordReview && this.currentMemoryRecordReview.memoryRecord) {
      prompt = this.currentMemoryRecordReview.memoryRecord.prompt;
    }

    return prompt;
  }

  private currentMemoryRecordDetails(): string {
    let details = 'MISSING DETAILS';
    if (this.currentMemoryRecordReview && this.currentMemoryRecordReview.memoryRecord) {
      details = this.currentMemoryRecordReview.memoryRecord.details;
    }

    return details;
  }

  private showMemoryDetails(): void {
    if (this.currentMemoryRecordReview) {
      this.currentMemoryRecordReview.requestDetails();
    }
  }

  private handleMemoryResolution(): void {
    if (this.currentMemoryRecordReview) {
      this.currentMemoryRecordReview.resolve();
    }
  }
}
</script>

<style scoped>
  #prompt-area {
    border-bottom: thin solid gray;
    margin-bottom: 10px;
  }
  #details-area {
    height: 200px;
  }
  #control-area {
    height: 50px;
    background: lightgray;
    display: table;
    width: 100%
  }
  .control-buttons {
    height: 100%;
    display: table-cell;
    vertical-align: middle;
  }
</style>
