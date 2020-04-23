<template>
  <div id="app">
    <h1>{{ appName }}</h1>
    <div id="main-content">
      <Menu/>
      <AddMemory/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AddMemory from './components/AddMemory.vue';
import * as ConfigService from './services/ConfigService';
import { ConfigKeys } from './services/ConfigService';
import * as MemoryService from './services/MemoryService';
import Menu from './components/Menu.vue';

@Component({
  components: {
    AddMemory,
    Menu,
  },
})
export default class App extends Vue {
  appName = 'missing app name';

  constructor() {
    super();
    ConfigService.initConfig(process.env.NODE_ENV === 'production');
    const possibleAppName = ConfigService.get(ConfigKeys.APP_NAME);
    if (possibleAppName) {
      this.appName = possibleAppName;
    }
    MemoryService.initWithConfig();
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
