<template>
    <div class='demoPage'>
        <video
            autoPlay="autoplay"
            loop="loop"
            muted
            :poster="bannerImg"
            x5-video-player-type="h5"
            x5-playsinline="true"
            playsinline="true"
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            x5-video-player-fullscreen="false"
            ref='vid'
            >
            <source src="../../assets/mp4/demo.mp4" type="video/mp4" />
        </video>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'; 
import {wordArr} from './worddata'
    export default {
        data(){
            return{
                bannerImg:require('../../assets/blog/bg/bg01.png'),
                
            }
        },
        mounted() {
            // window.addEventListener('scroll', this.fu,true);
            window.addEventListener('touchstart', this.videoStart,true);
        },
        methods:{
            videoStart() {
                if (this.$refs.vid.paused) {
                    this.$refs.vid.play();
                }
            }
            
           
        },
        
        
        
    }
</script>

<style lang="scss" scoped>
    @function torem($px) {
        @return ($px / 75)+rem;
    }
    .demoPage{
        video{
            width: 100%;
            source{
                width: 100%;
            }
        }
       

    }
</style>