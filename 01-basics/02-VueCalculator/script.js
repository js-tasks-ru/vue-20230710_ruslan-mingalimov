import { createApp,defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const App = defineComponent({
   name:'App',

   data() {
      return {       
         firstImput : 5, 
         secondImput: 6,
         action:'',
         result:0,
      }
   },
   methods: {

   },

   computed:{
      calculationActions(){
         switch(this.action) {
            case 'sum':  
               return this.firstImput + this.secondImput;          
            case 'subtract':  
            return this.firstImput - this.secondImput;
            case 'multiply':  
               return  this.firstImput * this.secondImput;
            case 'divide':  
               return  this.firstImput / this.secondImput;     
            default:    
               this.result;          
          }  
      }
   } 
   });

   const app =createApp(App);
   const vm = app.mount('#app');

   window.vm = vm;