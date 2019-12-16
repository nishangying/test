<template>
    <div class='demoPage'>
        <video id="source_1" controls autoplay loop muted type="video/mp4" src="../../assets/mp4/demo.mp4" >
         
        </video>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'; 
import {wordArr} from './worddata'
    export default {
        data(){
            return{
                
            }
        },
        mounted() {
            // window.addEventListener('scroll', this.fu,true);
          
        },
        methods:{
           
            
           
        },
        
        
        
    }
</script>

<style lang="scss" scoped>
    @function torem($px) {
        @return ($px / 75)+rem;
    }
    .demoPage{
        #source_1{
            width: 100%;
            source{
                width: 100%;
            }
        }
       

    }
</style>