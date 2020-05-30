<template>
  <div>
    <ResolutionButton
      resolutionText="Took too long"
      :onClick="onResolution"
    />
    <ResolutionButton
      resolutionText="A little slow"
      :onClick="onResolution"
    />
    <ResolutionButton
      resolutionText="Quick"
      :onClick="onResolution"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ResolutionButton from './ResolutionButton.vue';

@Component({
  components: {
    ResolutionButton,
  },
})
export default class ResolutionControls extends Vue {
  @Prop({ required: true })
  private readonly onResolution!: Function
}
</script>

<style scoped>
</style>
