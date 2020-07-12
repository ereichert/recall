<template>
  <div>
    <ControlButton
      displayText="Show Memory Details"
      :onClick="onClick"
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
export default class MemoryDetailsControls extends Vue {
  @Prop({ required: true })
  private readonly onClick!: Function
}
</script>

<style scoped>
</style>
