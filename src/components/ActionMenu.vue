<template>
  <nav>
    <ul>
      <li><router-link to="/memories/review">Memory Review</router-link></li>
      <li><router-link to="/memories/add">Add Memory</router-link></li>
      <li><router-link to="/memories/edit">Edit Memories</router-link></li>
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
