<template>
  <div id="app">
    <load-Ing v-if="isloading"></load-Ing>
    <router-view/>
    <return-Top></return-Top> 
  </div>
</template>

<script>
import Bus from './service/bus'
import { setTimeout } from 'timers';
export default {
  name: 'App',
  data(){
    return{
      isloading:false,
    }
  },
  mounted(){
      Bus.$on('isloading', content => { 
          if(content == 1){
            this.isloading = true;
          }else if(content == 2){
            setTimeout( () => {
              this.isloading = false;
              // Bus.$off('isloading');
            },500)
          }
      });   
  },
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
</style>
