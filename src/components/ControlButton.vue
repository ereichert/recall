<template>
  <button
    type="submit"
    class="control-button"
    @click="onClick"
  >{{ displayText }}</button>
</template>

<script lang="ts">
import {
  Component, Emit, Vue, Prop,
} from 'vue-property-decorator';

@Component
export default class ControlButton extends Vue {
  @Prop({ required: true })
  private readonly displayText!: string

  @Emit('click')
  // eslint-disable-next-line class-methods-use-this
  private onClick(): void {
    console.log('ControlButton emitting click.');
  }
}
</script>

<style scoped>
  .control-button {
    width: 25%;
  }
</style>
