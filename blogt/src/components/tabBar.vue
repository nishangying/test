<template>
    <div class='tabBar'>
        <div class="tabBar-child" :class="{active:index == 1}" @click="tab(1)">
            <slot name="left"></slot>
        </div>
        <div class="tabBar-child" :class="{active:index == 2}"  @click="tab(2)">
            <slot name="conter"></slot>
        </div>
        <div class="tabBar-child" :class="{active:index == 3}"  @click="tab(3)">
            <slot name="right"></slot>
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

        }
    },
    methods:{
        tab(i){
            this.$emit("tabNav",i)
        }
    }
}
</script>
<style lang="scss" scoped>
@function torem($px) {
  @return  $px / 75px * 1rem;
}
    .tabBar{
        width: 100%;
        height: torem(91px); 
        display: flex;
        justify-content: space-around;
        background: #30363c;
        .tabBar-child{
            width: 33.333%;
            height: torem(91px);
            line-height: torem(91px);
            color: #a3acb6 ;
            text-align: center;
            font-size: torem(26px);
        }
        .active{
            color: #fff;
            border-bottom: 1px solid #61d7b4;
            background: #275ed5; 
        }
    
    }
</style>
