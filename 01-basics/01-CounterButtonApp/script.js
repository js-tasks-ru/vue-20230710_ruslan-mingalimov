import { createApp,defineComponent } from './vendor/vue.esm-browser.js';



const Counter = defineComponent({
   name: 'counter',
   data() {
      return {
         counter: 0
      }
   },
});

// Создайте Vue приложение
 const app = createApp(Counter);
 const vm = app.mount('#app');

 window.vm = vm;