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
            <li @click="details(index)" v-for="(item,index) in list" :key="index">
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
export default {
    data(){
        return{
            list:[
                {
                    url:require('../../../assets/blog/essay/l1.jpg'),
                    tit:'人生若只是如初见',
                    content:'古代诗人对于爱情的向往和眷恋几乎有一种说不出的情节，留下了无尽脍炙人口的爱情诗。多数人在谈论爱情走到尽头，没有了当初的美好时都喜欢用，“人生若只如初见，何事秋风悲画扇来形容。”',
                    time:'发布时间：18-08-1713:47'
                },{
                    url:require('../../../assets/blog/essay/l2.jpg'),
                    tit:'人生若只是如初见',
                    content:'古代诗人对于爱情的向往和眷恋几乎有一种说不出的情节，留下了无尽脍炙人口的爱情诗。多数人在谈论爱情走到尽头，没有了当初的美好时都喜欢用，“人生若只如初见，何事秋风悲画扇来形容。”',
                    time:'发布时间：18-08-1713:47'
                },{
                    url:require('../../../assets/blog/essay/l3.jpg'),
                    tit:'人生若只是如初见',
                    content:'古代诗人对于爱情的向往和眷恋几乎有一种说不出的情节，留下了无尽脍炙人口的爱情诗。多数人在谈论爱情走到尽头，没有了当初的美好时都喜欢用，“人生若只如初见，何事秋风悲画扇来形容。”',
                    time:'发布时间：18-08-1713:47'
                },{
                    url:require('../../../assets/blog/essay/l4.jpg'),
                    tit:'人生若只是如初见',
                    content:'古代诗人对于爱情的向往和眷恋几乎有一种说不出的情节，留下了无尽脍炙人口的爱情诗。多数人在谈论爱情走到尽头，没有了当初的美好时都喜欢用，“人生若只如初见，何事秋风悲画扇来形容。”',
                    time:'发布时间：18-08-1713:47'
                },{
                    url:require('../../../assets/blog/essay/l5.jpg'),
                    tit:'人生若只是如初见',
                    content:'古代诗人对于爱情的向往和眷恋几乎有一种说不出的情节，留下了无尽脍炙人口的爱情诗。多数人在谈论爱情走到尽头，没有了当初的美好时都喜欢用，“人生若只如初见，何事秋风悲画扇来形容。”',
                    time:'发布时间：18-08-1713:47'
                },
                {
                    url:require('../../../assets/blog/essay/l5.jpg'),
                    tit:'人生若只是如初见',
                    content:'古代诗人对于爱情的向往和眷恋几乎有一种说不出的情节，留下了无尽脍炙人口的爱情诗。多数人在谈论爱情走到尽头，没有了当初的美好时都喜欢用，“人生若只如初见，何事秋风悲画扇来形容。”',
                    time:'发布时间：18-08-1713:47'
                },{
                    url:require('../../../assets/blog/essay/l4.jpg'),
                    tit:'人生若只是如初见',
                    content:'古代诗人对于爱情的向往和眷恋几乎有一种说不出的情节，留下了无尽脍炙人口的爱情诗。多数人在谈论爱情走到尽头，没有了当初的美好时都喜欢用，“人生若只如初见，何事秋风悲画扇来形容。”',
                    time:'发布时间：18-08-1713:47'
                },{
                    url:require('../../../assets/blog/essay/l5.jpg'),
                    tit:'人生若只是如初见',
                    content:'古代诗人对于爱情的向往和眷恋几乎有一种说不出的情节，留下了无尽脍炙人口的爱情诗。多数人在谈论爱情走到尽头，没有了当初的美好时都喜欢用，“人生若只如初见，何事秋风悲画扇来形容。”',
                    time:'发布时间：18-08-1713:47'
                },
                {
                    url:require('../../../assets/blog/essay/l5.jpg'),
                    tit:'人生若只是如初见',
                    content:'古代诗人对于爱情的向往和眷恋几乎有一种说不出的情节，留下了无尽脍炙人口的爱情诗。多数人在谈论爱情走到尽头，没有了当初的美好时都喜欢用，“人生若只如初见，何事秋风悲画扇来形容。”',
                    time:'发布时间：18-08-1713:47'
                },
            ]
        }
    },
    mounted(){

    },
    methods:{
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
        // height: torem(300);
        height: 25%;
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
        // height: torem(920);
        height: 75%;
        overflow: scroll;
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