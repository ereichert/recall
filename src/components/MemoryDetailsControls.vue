<template>
  <div>
    <ControlButton
      displayText="Show Memory Details"
      @click="onClick"
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
export default class MemoryDetailsControls extends Vue {
  @Emit('show-details')
  // eslint-disable-next-line class-methods-use-this
  private onClick(): void {
    console.log('MemoryDetails button clicked.');
  }
}
</script>

<style scoped>
</style>
