<template>
    <div class="index " :class="'bg'+randomNum">
        <div class='header'>
            <img src="../../assets/bloghome/001.jpg" alt="">
        </div>
        <div class="viewport" >
            <div class="swiper" ref='scrollDom'>
                <div class='content' v-for="(item,i) in txtArr" :key="i">
                    <p>{{item}}</p>
                </div>
            </div>
        </div>
        <div class='last'>
            <div class='btn'>
                <button @click="go(1)">主页</button>
                <button @click="go(2)">主页</button>
            </div>
            <img class='er' src="../../assets/er.jpg" alt="">
        </div>
    </div>
</template>

<script>
import {
    Toast,
} from 'mint-ui';

import {
    setTimeout
} from 'timers';

import { setViewFixed,setViewRelative } from '../../service/setview'
import obj from '../../service/util'
// -----------------------------test
 export default {
    name: 'index',
    components: {
       
    },
    data() {
        return {
            is_loading:false,
            randomNum:'00',
            index:'',
            txtArr:['过去','珍惜现在','未来可期','过去'],
            setInt:'',
        }
    },
    mounted() {
        this.randomNum = obj.randomNum();
        this.myswiper();
    },
    methods: {
        myswiper(){
            var swiperWidth = document.documentElement.offsetWidth;
            this.nextSwiper();
            // setInterval( ()=>{
            //     this.nextSwiper();
            // },5000)
        },
        nextSwiper(){
            


        },

        // nextSwiper(){
        //     let speed = 0;
        //     this.setInt = setInterval( ()=> {
        //         speed+=5;  
        //         if(speed>=1125){
        //            speed = 0; 
        //         }
        //         this.$refs.scrollDom.style.left =`-${speed}px`;
        //     },50)
        // },

        go(i){
            if(i == 1){
                this.$router.push({path:'/blog'})
            }else{
                this.$router.push({path:'/home'})
            }
            
        }

    }
}
</script>

<style lang="scss" scoped>
@function torem($px) {
    // @return $px / 75px * 1rem;
    @return ($px / 75)+rem;
}




.index {
    cursor: pointer;
    width: 100%;
    height: 100vh;
    overflow: scroll;
    background-size: 100% 100%;
    padding-top: torem(100);
    .header{
        width: 100%;
        text-align: center;
        img{
            width: 40%;
            border-radius: 50%;
        }
    }
    .viewport{
        width: 100%;
        height: torem(300);
        overflow: hidden;
        position: relative;
        .swiper{
            position: absolute;
            top: 0;
            left: 0;
            width: 400%;
            height: 100%;
            .content{
                padding: torem(20) torem(10);
                width: 25%;
                height: 100%;
                float: left;
                opacity: .7;
                text-align: center;
                p{
                    height: 100%;
                    background: linear-gradient(to right, #d93427, #fa6253);
                    line-height: torem(260);
                    font-size: torem(46);
                    font-weight: bold;
                    color: #000;
                }
            }
        }
        .swiperLeft{
             animation: toleft 2s linear ;
        }
        @keyframes toleft{
            0%{
                transform:  translateX(0px);
            }
            
            100%{
                transform:  translateX(-375px);
            }
        }
    }
    .last{
        width: 100%;
        text-align: center;
        margin-top: torem(100);
        .btn{
            width: 100%;
            padding: 5%;
            display: flex;
            justify-content: space-around;
            button{
                width: torem(200);
                height: torem(60);
                background: linear-gradient(to right, #d93427, #fa6253);
                color: #fff; 
            }
        }
        img{
            width: 40%;
        }
    }
    
    &.bg00{
        background-image: url('../../assets/blog/bg/bg00.png');
    }
    &.bg01{
        background-image: url('../../assets/blog/bg/bg01.png');
    }
    &.bg02{
        background-image: url('../../assets/blog/bg/bg02.png');
    }
    &.bg03{
        background-image: url('../../assets/blog/bg/bg03.png');
    }
    &.bg04{
        background-image: url('../../assets/blog/bg/bg04.png');
    }
    &.bg05{
        background-image: url('../../assets/blog/bg/bg05.png');
    }
    &.bg06{
        background-image: url('../../assets/blog/bg/bg06.png');
    }
    &.bg07{
        background-image: url('../../assets/blog/bg/bg07.png');
    }
    &.bg08{
        background-image: url('../../assets/blog/bg/bg08.png');
    }
    &.bg09{
        background-image: url('../../assets/blog/bg/bg09.png');
    }
    &.bg10{
        background-image: url('../../assets/blog/bg/bg10.png');
    }
    &.bg11{
        background-image: url('../../assets/blog/bg/bg11.png');
    }
    

    

    

}
</style>
