import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props:{
    count:{
      type:Number,
      default:0,
    }
    
  },
  methods: {
    incimentCount(count){
      this.$emit('update:count', count+1);
    }
  },
  template: `<button @click="incimentCount(count)" type="button" >{{ count }}</button>`,
});