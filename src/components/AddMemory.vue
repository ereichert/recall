<template>
  <div>
    <label for="add-memory-prompt">Prompt</label>
    <textarea id="add-memory-prompt"/>
    <label for="add-memory-details">Memory</label>
    <textarea id="add-memory-details"/>
    <button type="submit" @click="addMemory">Add Memory</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MemoryService from '../services/MemoryService';

@Component
export default class AddMemory extends Vue {
  // eslint-disable-next-line class-methods-use-this
  addMemory(): void {
    // TODO: Track the prompts and memories and pass them to the dB call.
    MemoryService.addMemory('placeholder prompt', 'placeholder memory');
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
