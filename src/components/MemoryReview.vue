<template>
  <div>
    <h1>Memory Review</h1>
    <label>Prompt</label>
    <p>{{ currentMemoryRecordPrompt() }}</p>
    <label v-show="showMemoryDetails">Memory Details</label>
    <p v-show="showMemoryDetails">Memory Placeholder</p>
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

  showMemoryDetails = true;

  memoriesToBeReviewed: Array<MemoryRecordReview> = [];

  currentMemoryRecordPrompt(): string {
    let prompt = '';
    if (this.currentMemoryRecord && this.currentMemoryRecord.memoryRecord) {
      prompt = this.currentMemoryRecord.memoryRecord.prompt;
    }

    return prompt;
  }
}
</script>

<style scoped>
</style>
