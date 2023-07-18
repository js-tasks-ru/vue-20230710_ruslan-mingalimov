import { createApp,defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const App = defineComponent({
   name:'App',

   data() {
      return {       
         
         actions:{
            firstImput : 5, 
            secondImput: 6,
            action:'',
            result:0,
         }
      }
   },
   methods: {
      
   },

   computed:{
      calculationActions(){
         
         switch(this.actions.action) {
            case 'sum':  
           
                this.actions.result = this.actions.firstImput + this.actions.secondImput;
                break
          
            case 'subtract':  
                this.actions.result = this.actions.firstImput - this.actions.secondImput;
                break

            case 'multiply':  
                this.actions.result = this.actions.firstImput * this.actions.secondImput;
                break

            case 'divide':  
                this.actions.result = this.actions.firstImput / this.actions.secondImput;     
                break          
          }

          
         return this.actions.result = this.actions.result;    
      }
   } 

   });

   const app =createApp(App);
   const vm = app.mount('#app');

   window.vm = vm;