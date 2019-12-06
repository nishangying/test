<template>
<div class="home " :class="'bg'+randomNum">\

    <div class='view'>
        <router-view></router-view>
    </div>
    <btn-Nav @btnNav='btnNav'></btn-Nav>
    <load-Ing v-if="is_loading"></load-Ing>
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
    name: 'HelloWorld',
    components: {
       
    },
    data() {
        return {
            is_loading:false,
            randomNum:'00',
            index:'',
        }
    },
    mounted() {
        this.randomNum = obj.randomNum();
    },
    methods: {
        btnNav(i){
            if(this.index == i){
                return false;
            }
            this.index = i;
            if(i == 0){
                this.$router.push({ path:'/hessay'});
            }else if(i == 1){
                this.$router.push({ path:'/life'});
            }else if(i == 2){
                this.$router.push({ path:'/speak'});
            }else if(i == 3){
                // this.$router.push({ path:'/dream'});
                this.$router.push({ path:'/'});
            }else if(i == 5){
                this.$router.push({ path:'/skill'});
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




.home {
    cursor: pointer;
    width: 100%;
    // height:torem(1334);
    height: 100vh;
    overflow: scroll;
    
    background-size: 100% 100%;
    // opacity: .9;
    padding-bottom: torem(100);
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
    .view{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        // min-height: torem(1232);
        height: 92vh;
        overflow: scroll;
        
    }

    

    

}
</style>
