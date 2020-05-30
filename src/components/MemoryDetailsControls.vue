<template>
  <div>
    <ResolutionButton
      resolutionText="Show Memory Details"
      :onClick="onClick"
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
export default class MemoryDetailsControls extends Vue {
  @Prop({ required: true })
  private readonly onClick!: Function
}
</script>

<style scoped>
</style>
