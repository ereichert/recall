<template>
  <button
    type="submit"
    class="resolution-button"
    @click="onClick"
  >{{ resolutionText }}</button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ControlButton extends Vue {
  @Prop({ required: true })
  private readonly resolutionText!: string

  @Prop({ required: true })
  private readonly onClick!: Function
}
</script>

<style scoped>
  .resolution-button {
    width: 25%;
  }
</style>
