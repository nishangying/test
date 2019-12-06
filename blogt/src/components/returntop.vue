<template>
    <div class='returnTemp'>
         <img v-if='is_return' @click="returnTop()" class='returnTop' src="../assets/top.png" alt="">
    </div>
</template>
<script>
export default {
    data(){
        return{
            is_return:false,
        }
    },
    mounted(){
        //监听页面滚动
        window.addEventListener("scroll", () => {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (parseInt(scrollTop) > 800) {
                this.is_return = true;
            } else {
                this.is_return = false;
            }
        })
    },
    methods:{
        returnTop(){
            document.body.scrollTop = 400;
            document.documentElement.scrollTop = 400;
        }
    }

}
</script>
<style lang="scss" scoped>
    @function torem($px) {
        // @return $px / 75px * 1rem;
        @return ($px / 75)+rem;
    }
    .returnTemp{
        .returnTop{
            position: fixed;
            top: 55%;
            right: 0;
            z-index: 15;
            width: torem(50);
            height: torem(71);
        }
    }
</style>
