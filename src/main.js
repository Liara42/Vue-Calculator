import { createApp } from 'vue';
import App from './App.vue';
//import store from './store.js';

import ControlBoard from './components/ControlBoard.vue';
import OutputScreen from './components/OutputScreen.vue';

const app = createApp(App);

//app.use(store);

app.component('control-board', ControlBoard);
app.component('output-screen', OutputScreen);

app.mount('#app');
