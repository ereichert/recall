<template>
  <nav>
    <ul>
      <li>Add Memory</li>
      <li><router-link to="/memories/review">Review Memories</router-link></li>
      <li>Edit Memories</li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ActionMenu extends Vue {
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 9px 0px;
  }
  li {
    padding: 9px 17px;
    text-align: left;
    display: inline;
  }
</style>
