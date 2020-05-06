Test me

<template>
  <div>
    <h2>Memory Review</h2>
    <div id='prompt-area'>
      <label for='prompt-text'>Prompt</label>
      <p id='prompt-text'>{{ currentMemoryRecordPrompt() }}</p>
    </div>
    <div v-if="shouldShowMemoryDetails">
      <label for='details-text'>Memory Details</label>
      <p id='details-text'>memory details placeholder</p>
    </div>
    <button
      type="submit"
      v-if="shouldShowMemoryDetailsButton"
      @click="showMemoryDetails"
    >Show Memory Details</button>
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

  shouldShowMemoryDetails = false;

  shouldShowMemoryDetailsButton = true;

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
  }
}
</script>

<style scoped>
  #prompt-area {
    border-bottom: solid gray;
    margin-bottom: 10px;
  }
</style>
