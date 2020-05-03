Test me

<template>
  <div>
    <h2>Memory Review</h2>
    <div>
      <label>Prompt</label>
      <p>{{ currentMemoryRecordPrompt() }}</p>
    </div>
    <div>
      <label v-show="shouldShowMemoryDetails">Memory Details</label>
      <p v-show="shouldShowMemoryDetails">{{ currentMemoryRecordDetails() }}</p>
    </div>
    <button type="submit" @click="showMemoryDetails">Show Memory Details</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MemoryRecordReview from '@/models/MemoryRecordReview';
import MemoryRecord from '../models/MemoryRecord';

@Component
export default class MemoryReview extends Vue {
  currentMemoryRecord: MemoryRecordReview | null = new MemoryRecordReview(
    new MemoryRecord('this is the prompt', 'these are the details'),
  );

  shouldShowMemoryDetails = false;

  memoriesToBeReviewed: Array<MemoryRecordReview> = [];

  currentMemoryRecordPrompt(): string {
    let prompt = '';
    if (this.currentMemoryRecord && this.currentMemoryRecord.memoryRecord) {
      prompt = this.currentMemoryRecord.memoryRecord.prompt;
    }

    return prompt;
  }

  currentMemoryRecordDetails(): string {
    let details = '';
    if (this.currentMemoryRecord && this.currentMemoryRecord.memoryRecord) {
      details = this.currentMemoryRecord.memoryRecord.details;
    }

    return details;
  }

  showMemoryDetails(): void {
    this.shouldShowMemoryDetails = true;
  }
}
</script>

<style scoped>
</style>
