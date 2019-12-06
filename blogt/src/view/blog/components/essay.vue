<template>
    <div class='essay'>
        <div class='swiper'>
            <mt-swipe class='mt-swipe' :auto="4000" :show-indicators="false">
                <mt-swipe-item>
                    <img src="../../../assets/blog/essay/01.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../../../assets/blog/essay/02.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../../../assets/blog/essay/03.jpg" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <ul class="list">
            <li @click="details(item.id)" v-for="(item,index) in list" :key="index">
                <img class="leftTemp" :src="item.url" alt="">
                <div class='rightTemp'>
                    <p>{{item.tit}}</p>
                    <p>{{item.time}}</p>
                    <p>{{item.content}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {essaylArr} from '../test'
export default {
    data(){
        return{
            list:[
               
            ]
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            this.list = essaylArr;
        },
        details(i){
            console.log(i)
        }
    }

}
</script>

<style lang="scss" scoped>
@function torem($px) {
//   @return  $px / 75px * 1rem;
    @return ($px / 75)+rem;
}
.essay{
    height: 100%;
    color: #000;
    .swiper{
        width: 100%;
        padding: torem(15);
        height: torem(300);
        // background: #fff;
        text-align: center;
        line-height: torem(300);
        font-size: torem(30);
        .mt-swipe{
            background: #fff;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .list{
        padding: 0 torem(15) torem(15);
        // height: torem(900);
        // height: 50%;
        // overflow: scroll;
        li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgb(102, 97, 97);
            padding: torem(20) 0;
            &:last-child{
                border-bottom:none;
            }
            .leftTemp{
                width: 20%;
                max-width: torem(130);
                height: torem(130);
                display: block;
            } 
            .rightTemp{
                width: 80%;
                p{
                    &:nth-child(1){
                        font-size: torem(28);
                        font-weight: bold;
                    }
                    &:nth-child(2){
                        font-size: torem(24);
                    }
                    &:nth-child(3){
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;   //（行数）
                        -webkit-box-orient: vertical;
                    }


                }
            }
        }
    }
}


</style>