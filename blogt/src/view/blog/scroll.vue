<template>
    <div class='scrollpage'>
        <button @click="goBack()" class="goBack">goBack</button>
        <p class="num">{{dtop}}
        {{wHeight}}
        {{lHeight}}</p>
        <ul>
            <li v-for="(item,i) in list" :key="i">{{item}}</li>
        </ul>
        <p v-show="isLoading" class="lastText">正在加载更多数据</p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:[],
                isLoading:false,
                dtop:0,
                wHeight:0,
                lHeight:0,
            }
        },
        created(){
            this.list = Array.from(Array(25),(item,index) => index);
            console.log(this.list )
        },
       
        mounted() {
            window.addEventListener('scroll', this.fu,true)
        },
        methods:{
            fu(){
                this.dtop = this.getDocumentTop();
                this.wHeight = this.getWindowHeight();
                this.lHeight = this.getScrollHeight();
                if( this.getDocumentTop() + this.getWindowHeight() > this.getScrollHeight()-200){
                    this.isLoading = true;
                    setTimeout(() => {
                        this.next();
                    },1000)
                }
            },
            goBack(){
                this.$router.push({path:'/essay'});
            },
            next(){
                let list = Array.from(Array(10),(item,index) => index);
                this.list = this.list.concat(list);
                this.isLoading = false;
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
            }
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
    .scrollpage{
        width: 100%;
        height: 100%;
        position: relative;
        .goBack{
            position: fixed;
            top: 2%;
            right: 5%;
        }
        .num{
            position: fixed;
            font-size: torem(40);
            color: #000;
        }
        ul{
            padding: 3%;
            li{
                font-size: torem(32);
                color: #000;
                line-height: torem(100);
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