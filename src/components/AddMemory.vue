<template>
  <div>
    <label for="add-memory-prompt">Prompt</label>
    <textarea id="add-memory-prompt" v-model="memoryRecord.prompt"/>
    <label for="add-memory-details">Memory</label>
    <textarea id="add-memory-details" v-model="memoryRecord.details"/>
    <button type="submit" @click="addMemory">Add Memory</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as MemoryService from '../services/MemoryService';
import MemoryRecord from '../models/MemoryRecord';

@Component
export default class AddMemory extends Vue {
  memoryRecord: MemoryRecord = new MemoryRecord();

  // eslint-disable-next-line class-methods-use-this
  addMemory(): void {
    MemoryService.addMemory(this.memoryRecord);
  }
}
</script>

<style scoped>
label{
  float: left;
  font-weight: bold;
}
textarea{
  display: block;
  width: 100%;
}
#add-memory-details {
  min-height: 10em;
}
</style>
