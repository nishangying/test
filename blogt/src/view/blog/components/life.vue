<template>
    <div class='life'>
        <div class='flow'>
            <div class="main">
                <div class='pin'>
                    <div class="item" v-for="(item,index) in urlList1" :key="index">
                        <img :src="item.url" alt="">
                    </div>
                </div>
            </div>
            <div class="main">
                <div class='pin'>
                    <div class="item" v-for="(item,index) in urlList2" :key="index">
                        <img :src="item.url" alt="">
                    </div>
                </div>
            </div>
            <div class="main">
                <div class='pin'>
                    <div class="item" v-for="(item,index) in urlList3" :key="index">
                        <img :src="item.url" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            imgUrl1:require('../../../assets/blog/life/l1.jpg'),
            imgUrl2:require('../../../assets/blog/life/bg11.png'),
            imgUrl3:require('../../../assets/blog/life/bg04.png'),
            imgUrl4:require('../../../assets/blog/life/bg02.png'),
            imgUrl5:require('../../../assets/blog/life/001.jpg'),
            urlList1:[],
            urlList2:[],
            urlList3:[],
            time1:'',
            time2:'',
            
        }
    },
    mounted() {
        // this.init();
        // window.addEventListener('scroll', this.scroll, true); 
    },
    beforeDestroy(){
        clearInterval(this.time1);
        clearInterval(this.time2);
    },
    methods:{
        init(){
            let pinO = document.getElementsByClassName('pin');
            let bodyCH = document.body.clientHeight;
            this.urlList1.push({url:this.imgUrl1});
            this.urlList2.push({url:this.imgUrl2});
            this.urlList3.push({url:this.imgUrl3});
            this.time1 =setInterval( () => {
                let min = Math.min(pinO[0].clientHeight,pinO[1].clientHeight,pinO[2].clientHeight);
                let max = Math.max(pinO[0].clientHeight,pinO[1].clientHeight,pinO[2].clientHeight);
                let num =Math.floor(Math.random()*4);
                if(max<= bodyCH){
                    if(min == pinO[0].clientHeight){
                        this.urlList1.push({url:this.setUrl(num)});
                    }
                    if(min == pinO[1].clientHeight){
                        this.urlList2.push({url:this.setUrl(num)});
                    }
                    if(min == pinO[2].clientHeight){
                        this.urlList3.push({url:this.setUrl(num)});
                    }
                }
            },50)
        },
        scroll(){
            this.time2 = setInterval(() => {
                let pinO = document.getElementsByClassName('pin');
                let bodyCH = document.body.clientHeight;
                let min = Math.min(pinO[0].clientHeight,pinO[1].clientHeight,pinO[2].clientHeight);
                let max = Math.max(pinO[0].clientHeight,pinO[1].clientHeight,pinO[2].clientHeight);
                let num =Math.floor(Math.random()*4);
                if(max<= bodyCH){
                    if(min == pinO[0].clientHeight){
                        this.urlList1.push({url:this.setUrl(num)});
                    }
                    if(min == pinO[1].clientHeight){
                        this.urlList2.push({url:this.setUrl(num)});
                    }
                    if(min == pinO[2].clientHeight){
                        this.urlList3.push({url:this.setUrl(num)});
                    }
                }
            }, 1000);
        },
        setUrl(i){
            switch(i){
                case 0:
                    return this.imgUrl1;
                    break;
                case 1:
                    return this.imgUrl2;
                    break;
                case 2:
                    return this.imgUrl3;
                    break;
                case 3:
                    return this.imgUrl4;
                    break;
                case 4:
                    return this.imgUrl5;
                    break;

            }
        }
    }



}
</script>

<style lang="scss" scoped>
@function torem($px) {
//   @return  $px / 75px * 1rem;
    @return ($px / 75)+rem;
}
.life{
    color: #000;
    height: 100%;
    .flow{
        display: flex;
        justify-content: space-between;
        .main{
            position: relative;
            width: 33%;
            .pin{
                padding: torem(10) 0 0 torem(10);
                float: left;
                .item{
                    padding: torem(10);
                    box-shadow: 0 0 torem(5) #ccc;
                    img{
                        width: 100%;
                        height: auto;
                    }
                }
            }
        }
    }
    
}



</style>