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
        <p id='details-text'>memory details placeholder</p>
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
        >1</button>
        <button
          type="submit"
          class="resolution-button"
        >2</button>
        <button
          type="submit"
          class="resolution-button"
        >4</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import MemoryRecordReview from '@/models/MemoryRecordReview';
// import MemoryRecord from '../models/MemoryRecord';

@Component
export default class MemoryReview extends Vue {
  // currentMemoryRecord: MemoryRecordReview | null = new MemoryRecordReview(
  //   new MemoryRecord('this is the prompt', 'these are the details'),
  // );

  shouldShowMemoryDetailsButton = true;

  shouldShowMemoryDetails = false;

  shouldShowMemoryResolutionButtons = false;

  // memoriesToBeReviewed: Array<MemoryRecordReview> = [];

  // eslint-disable-next-line class-methods-use-this
  currentMemoryRecordPrompt(): string {
    // let prompt = '';
    // if (this.currentMemoryRecord && this.currentMemoryRecord.memoryRecord) {
    //   prompt = this.currentMemoryRecord.memoryRecord.prompt;
    // }

    // return prompt;
    return 'this is the prompt';
  }

  // currentMemoryRecordDetails(): string {
  //   let details = '';
  //   if (this.currentMemoryRecord && this.currentMemoryRecord.memoryRecord) {
  //     details = this.currentMemoryRecord.memoryRecord.details;
  //   }

  //   return details;
  // }

  showMemoryDetails(): void {
    this.shouldShowMemoryDetails = true;
    this.shouldShowMemoryDetailsButton = false;
    this.shouldShowMemoryResolutionButtons = true;
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
