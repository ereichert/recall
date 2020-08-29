<template>
  <div>
    <ControlButton
      displayText="Quick"
      @click="onResolution(3)"
    />
    <ControlButton
      displayText="A little slow"
      @click="onResolution(2)"
    />
    <ControlButton
      displayText="Took too long"
      @click="onResolution(1)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import ControlButton from './ControlButton.vue';

@Component({
  components: {
    ControlButton,
  },
})
export default class ResolutionControls extends Vue {
  @Emit('resolution')
  // eslint-disable-next-line class-methods-use-this
  private onResolution(resolutionVal: number): number {
    console.log(`ResolutionControl ${resolutionVal} clicked.`);
    return resolutionVal;
  }
}
</script>

<style scoped>
</style>
