<template>
    <div class='scrollPhoto'>
        <button @click="goBack()" class="goBack">goBack</button>
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
        <p v-show="isLoading" class="lastText">正在加载更多数据</p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:[],
                isLoading:false,
                imgUrl1:require('../../assets/blog/life/l1.jpg'),
                imgUrl2:require('../../assets/blog/life/bg11.png'),
                imgUrl3:require('../../assets/blog/life/bg04.png'),
                imgUrl4:require('../../assets/blog/life/bg02.png'),
                imgUrl5:require('../../assets/blog/life/bg05.png'),
                imgUrl6:require('../../assets/blog/life/bg04.png'),
                imgUrl7:require('../../assets/blog/life/bg05.png'),
                imgUrl8:require('../../assets/blog/life/bg06.png'),
                imgUrl9:require('../../assets/blog/life/bg09.png'),
                imgUrl10:require('../../assets/blog/life/bg10.png'),
                urlList1:[],
                urlList2:[],
                urlList3:[],
                time1:'',
                time2:'',
            }
        },
        created(){
            this.list = Array.from(Array(25),(item,index) => index);
        },
       
        mounted() {
            window.addEventListener('scroll', this.fu,true);
            this.init();
        },
        methods:{
            init(){
                let pinO = document.getElementsByClassName('pin');
                let bodyCH = document.body.clientHeight;
                for(let i =0; i< 7;i++){
                    let num1 =Math.floor(Math.random()*10);
                    let num2 =Math.floor(Math.random()*10);
                    let num3 =Math.floor(Math.random()*10);
                    this.urlList1.push({url:this.setUrl(num1)});
                    this.urlList2.push({url:this.setUrl(num2)});
                    this.urlList3.push({url:this.setUrl(num3)});
                }
                
            },
            fu(){
                if( this.getDocumentTop() + this.getWindowHeight() > this.getScrollHeight()-500){
                    this.isLoading = true;
                    // setTimeout(() => {
                        this.next();
                    // },200)
                }
            },
            goBack(){
                this.$router.push({path:'/essay'});
            },
            next(){
                let pinO = document.getElementsByClassName('pin');
                let bodyCH = document.body.clientHeight;
                let min = Math.min(pinO[0].clientHeight,pinO[1].clientHeight,pinO[2].clientHeight);
                let max = Math.max(pinO[0].clientHeight,pinO[1].clientHeight,pinO[2].clientHeight);
                let num =Math.floor(Math.random()*10);
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
            },
            
            //可视窗口高度
            getWindowHeight() {
                return document.documentElement.clientHeight;
            },
            //文档高度
            getScrollHeight() {
               return document.documentElement.scrollHeight;
            },
            //滚动高度
            getDocumentTop() {
                return document.documentElement.scrollTop;
            },
            setUrl(i){
                switch(i){
                    case 0:
                        return this.imgUrl1;
                        break;
                    case 1:
                        return this.imgUrl1;
                        break;
                    case 2:
                        return this.imgUrl2;
                        break;
                    case 3:
                        return this.imgUrl3;
                        break;
                    case 4:
                        return this.imgUrl4;
                        break;
                    case 5:
                        return this.imgUrl5;
                        break;
                    case 6:
                        return this.imgUrl6;
                        break;
                    case 7:
                        return this.imgUrl7;
                        break;
                    case 8:
                        return this.imgUrl8;
                        break;
                    case 9:
                        return this.imgUrl9;
                        break;
                    case 10:
                        return this.imgUrl10;
                        break;
                }
            },
        },
        
        destroyed(){
            console.log('over')
            window.removeEventListener('scroll', this.fu,true);   //  离开页面清除（移除）滚轮滚动事件
        }
    }
</script>

<style lang="scss" scoped>
    @function torem($px) {
        @return ($px / 75)+rem;
    }
    .scrollPhoto{
        width: 100%;
        height: 100%;
        position: relative;
        .goBack{
            position: fixed;
            top: 2%;
            right: 5%;
            z-index: 10;
        }
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
        .lastText{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            text-align: center;
            color: #000;
        }

    }
</style>