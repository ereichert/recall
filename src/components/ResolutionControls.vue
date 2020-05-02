<template>
  <div>
    <ControlButton
      resolutionText="Took too long"
      :onClick="onResolution"
    />
    <ControlButton
      resolutionText="A little slow"
      :onClick="onResolution"
    />
    <ControlButton
      resolutionText="Quick"
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
