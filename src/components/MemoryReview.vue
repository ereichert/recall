<template>
  <div>
    <h2>Memory Review</h2>
    <div v-if="memoryReviewStateService.shouldShowMemoryReview">
      <div id='prompt-area'>
        <label for='prompt-text'>Prompt</label>
        <p id='prompt-text'>{{ currentMemoryRecordPrompt() }}</p>
      </div>
      <div id="details-area">
        <div v-if="shouldShowMemoryDetails">
          <label for='details-text'>Memory Details</label>
          <p id='details-text'>{{ currentMemoryRecordDetails() }}</p>
        </div>
      </div>
      <div id="control-area">
        <MemoryDetailsControls
          class="control-buttons"
          v-if="shouldShowMemoryDetailsButton"
          :onClick="showMemoryDetails"
        />
        <ResolutionControls
          class="control-buttons"
          v-if="shouldShowMemoryResolutionButtons"
          :onResolution="handleMemoryResolution"
        />
      </div>
    </div>
    <div v-if="memoryReviewStateService.shouldShowCongratulations">
      <h1>Congratulations</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MemoryRecordReview from '@/models/MemoryRecordReview';
import * as MemoryService from '@/services/MemoryService';
import MemoryReviewStateService from '@/services/MemoryReviewStateService';
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

  private shouldShowMemoryDetailsButton = true;

  private shouldShowMemoryDetails = false;

  private shouldShowMemoryResolutionButtons = false;

  private memoriesToBeReviewed: Array<MemoryRecordReview> = [];

  private memoryReviewStateService = new MemoryReviewStateService();

  created(): void {
    this.memoriesToBeReviewed = MemoryService.getMemories();
    this.currentMemoryRecordReview = this.memoriesToBeReviewed.shift();
    this.memoryReviewStateService.transition(this.currentMemoryRecordReview);
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
    this.shouldShowMemoryDetails = true;
    this.shouldShowMemoryDetailsButton = false;
    this.shouldShowMemoryResolutionButtons = true;
  }

  private hideMemoryDetails(): void {
    this.shouldShowMemoryDetails = false;
    this.shouldShowMemoryDetailsButton = true;
    this.shouldShowMemoryResolutionButtons = false;
  }

  private handleMemoryResolution(): void {
    this.currentMemoryRecordReview = this.memoriesToBeReviewed.shift();
    this.hideMemoryDetails();
    this.memoryReviewStateService.transition(this.currentMemoryRecordReview);
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
