<template>
  <div>
    <h2>Memory Review</h2>
    <div v-if="shouldShowMemoryReview">
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
        <div class="control-buttons" v-if="shouldShowMemoryDetailsButton">
          <button
            type="submit"
            @click="showMemoryDetails"
          >Show Memory Details</button>
        </div>
        <div class="control-buttons" v-if="shouldShowMemoryResolutionButtons">
          <button
            type="submit"
            class="resolution-button"
            @click="handleMemoryResolution"
          >Took too long</button>
          <button
            type="submit"
            class="resolution-button"
            @click="handleMemoryResolution"
          >A little slow</button>
          <button
            type="submit"
            class="resolution-button"
            @click="handleMemoryResolution"
          >Quick</button>
        </div>
      </div>
    </div>
    <div v-if="shouldShowCongratulations">
      <h1>Congratulations</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MemoryRecordReview from '@/models/MemoryRecordReview';
import * as MemoryService from '@/services/MemoryService';

@Component
export default class MemoryReview extends Vue {
  private shouldShowMemoryReview = true;

  private shouldShowCongratulations = false;

  private currentMemoryRecord: MemoryRecordReview | undefined = undefined;

  private shouldShowMemoryDetailsButton = true;

  private shouldShowMemoryDetails = false;

  private shouldShowMemoryResolutionButtons = false;

  private memoriesToBeReviewed: Array<MemoryRecordReview> = [];

  created(): void {
    this.memoriesToBeReviewed = MemoryService.getMemories();
    this.currentMemoryRecord = this.memoriesToBeReviewed.shift();
  }

  private currentMemoryRecordPrompt(): string {
    let prompt = 'MISSING PROMPT';
    if (this.currentMemoryRecord && this.currentMemoryRecord.memoryRecord) {
      prompt = this.currentMemoryRecord.memoryRecord.prompt;
    }

    return prompt;
  }

  private currentMemoryRecordDetails(): string {
    let details = 'MISSING DETAILS';
    if (this.currentMemoryRecord && this.currentMemoryRecord.memoryRecord) {
      details = this.currentMemoryRecord.memoryRecord.details;
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
    this.currentMemoryRecord = this.memoriesToBeReviewed.shift();
    this.hideMemoryDetails();
    if (!this.currentMemoryRecord) {
      this.shouldShowMemoryReview = false;
      this.shouldShowCongratulations = true;
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
  .resolution-button {
    width: 25%;
  }
</style>
