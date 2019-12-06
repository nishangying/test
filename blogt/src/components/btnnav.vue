<template>
   <div class='btnNav'>
       <div class="nav">
            <div class='item' @click="tab(i)" v-for="(item,i) in btnNav" :key="i" :class="{active:activeIndex == i}">
                <span>{{item}}</span>
            </div>
       </div>
       <div class="center" :class="{active:activeIndex == 5}" @click="tab(5)">
            <span>技术</span>
       </div>
   </div>
</template>
<script>
export default {
    props:{
        index:{
            type: Number,
        }
    },
    data(){
        return{
            btnNav:['随笔','生活','留言','梦想',],
            activeIndex:0,
        }
    },
    mounted(){
        if(this.$route.name == 'hessay'){
            this.addClass(0)
        }
        if(this.$route.name == 'life'){
            this.addClass(1)
        }
        if(this.$route.name == 'speak'){
            this.addClass(2)
        }
        if(this.$route.name == 'dream'){
            this.addClass(3)
        }
        if(this.$route.name == 'skill'){
            this.addClass(5)
        }
    },
    methods:{
        tab(i){
            this.activeIndex = i;
            this.$emit("btnNav",i)
        },
        addClass(i){
            this.activeIndex = i;
        }
    }
}
</script>
<style lang="scss" scoped>
@function torem($px) {
//   @return  $px / 75px * 1rem;
    @return ($px / 75)+rem;
}
    .btnNav{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: torem(100);
        z-index: 100;
        // background: $Cfff;
        .nav{
            font-size: torem(28);
            line-height: torem(100);
            text-align: center;
            display: flex;
            justify-content: space-between;
            color: $C000;
            .item{
                flex: 20%;
                &:nth-child(2){
                    // margin-right: torem(40);
                    margin-right: 8%;
                    text-align: right;
                    padding-right: torem(30);
                }
                &:nth-child(3){
                    // margin-left: torem(40);
                    margin-left: 8%;
                    text-align: left;
                    padding-left: torem(30);
                }
                &.active{
                    color: $Cac;
                    span{
                        background: #fff;
                        padding: torem(5) torem(10);
                        border-radius: torem(10);
                    }
                }
            }
        }
        .center{
            position: absolute;
            top: torem(-30);
            left: 45%;
            font-size: torem(28);
            width: torem(80);
            height: torem(80);
            border-radius: torem(50);
            color: $C000;
            text-align: center;
            line-height: torem(80);
            background: $Cfff;
            animation:mymove 3s infinite;
            -webkit-animation:mymove 3s infinite; /*Safari and Chrome*/
            animation-direction:alternate;/*轮流反向播放动画。*/
            animation-timing-function: ease-in-out; /*动画的速度曲线*/
            /* Safari 和 Chrome */
            -webkit-animation:mymove 3s infinite;
            -webkit-animation-direction:alternate;/*轮流反向播放动画。*/
            -webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
            &.active{
                color: $Cac;
            }
        }
        
    
    }
    @keyframes mymove
    {
        0%{
        transform: scale(.8);  /*开始为原始大小*/
        }
        25%{
            transform: scale(1.1); /*放大1.1倍*/
        }
        50%{
            transform: scale(0.9);
        }
        75%{
            transform: scale(1.1);
        }
        100%{
            transform: scale(.8);
        }

    }
    // Safari and Chrome
    @-webkit-keyframes mymove 
    {
        0%{
        transform: scale(.8);  /*开始为原始大小*/
        }
        25%{
            transform: scale(1.1); /*放大1.1倍*/
        }
        50%{
            transform: scale(0.9);
        }
        75%{
            transform: scale(1.1);
        }
        100%{
            transform: scale(.8);
        }
    }
              
</style>
