Test me

<template>
  <div>
    <h2>Memory Review</h2>
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
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MemoryRecordReview from '@/models/MemoryRecordReview';
import MemoryRecord from '../models/MemoryRecord';

@Component
export default class MemoryReview extends Vue {
  currentMemoryRecord: MemoryRecordReview | undefined = undefined;

  shouldShowMemoryDetailsButton = true;

  shouldShowMemoryDetails = false;

  shouldShowMemoryResolutionButtons = false;

  memoriesToBeReviewed: Array<MemoryRecordReview> = [
    new MemoryRecordReview(
      new MemoryRecord('this is the prompt', 'these are the details'),
    ),
    new MemoryRecordReview(
      new MemoryRecord('This is the second memory prompt.', 'These are the second memory details'),
    ),
  ];

  currentMemoryRecordPrompt(): string {
    let prompt = 'MISSING PROMPT';
    if (!this.currentMemoryRecord) {
      this.currentMemoryRecord = this.memoriesToBeReviewed.shift();
    }
    if (this.currentMemoryRecord && this.currentMemoryRecord.memoryRecord) {
      prompt = this.currentMemoryRecord.memoryRecord.prompt;
    }

    return prompt;
  }

  currentMemoryRecordDetails(): string {
    let details = 'MISSING DETAILS';
    if (this.currentMemoryRecord && this.currentMemoryRecord.memoryRecord) {
      details = this.currentMemoryRecord.memoryRecord.details;
    }

    return details;
  }

  showMemoryDetails(): void {
    this.shouldShowMemoryDetails = true;
    this.shouldShowMemoryDetailsButton = false;
    this.shouldShowMemoryResolutionButtons = true;
  }

  hideMemoryDetails(): void {
    this.shouldShowMemoryDetails = false;
    this.shouldShowMemoryDetailsButton = true;
    this.shouldShowMemoryResolutionButtons = false;
  }

  handleMemoryResolution(): void {
    this.currentMemoryRecord = this.memoriesToBeReviewed.shift();
    this.hideMemoryDetails();
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
