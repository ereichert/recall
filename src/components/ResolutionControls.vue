<template>
  <div>
    <ControlButton
      displayText="Quick"
      :onClick="onResolution"
    />
    <ControlButton
      displayText="A little slow"
      :onClick="onResolution"
    />
    <ControlButton
      displayText="Took too long"
      :onClick="onResolution"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ControlButton from './ControlButton.vue';

@Component({
  components: {
    ControlButton,
  },
})
export default class ResolutionControls extends Vue {
  @Prop({ required: true })
  private readonly onResolution!: Function
}
</script>

<style scoped>
</style>
