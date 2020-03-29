<template>
  <div id="app">
    <h1>{{ appName }}</h1>
    <div id="main-content">
      <AddMemory/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AddMemory from './components/AddMemory.vue';
import * as ConfigService from './services/ConfigService';

@Component({
  components: {
    AddMemory,
  },
})
export default class App extends Vue {
  appName = 'missing app name';

  constructor() {
    super();
    ConfigService.initConfig(process.env.NODE_ENV === 'production');
    const possibleAppName = ConfigService.get('appName');
    if (possibleAppName) {
      this.appName = possibleAppName;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#main-content{
  margin-left: 10%;
  margin-right: 10%;
}
</style>
