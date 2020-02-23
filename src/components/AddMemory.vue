<template>
  <div>
    <label for="add-memory-prompt">Prompt</label>
    <textarea id="add-memory-prompt"/>
    <label for="add-memory-details">Memory</label>
    <textarea id="add-memory-details"/>
    <button type="submit">Add Memory</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AddMemory extends Vue {}
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
