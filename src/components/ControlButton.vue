<template>
  <button
    type="submit"
    class="control-button"
    @click="onClick"
  >{{ displayText }}</button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ControlButton extends Vue {
  @Prop({ required: true })
  private readonly displayText!: string

  @Prop({ required: true })
  private readonly onClick!: Function
}
</script>

<style scoped>
  .control-button {
    width: 25%;
  }
</style>
