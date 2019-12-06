<template>
    <div class='wordPage'>
        <div class="topTemp" >
            <button v-show="pageIndex > 1" @click="go(2)">上一组</button>
            <input v-if="num == 100" v-model="val" placeholder='输入单词' type="text" name="" id="">
            <button v-if="num == 100" @click="go(1)">go</button>
            
            <button @click="go(3)">下一组</button>
        </div>
        <button @click="goBack()" class="goBack">goBack</button>
        
        <table>
            <!-- <tr v-for="(item,i) in list" :key="i" colspan="2">
                <td >{{item.word}}</td>
                <td>{{item.british}}</td>
                <td v-html="item.explain"></td>
            </tr> -->

            <tr v-for="(item,i) in list" :key="i" colspan="2">
                <td >{{item.word}}</td>
                <td>
                    <img v-if='item.type == 1' :src="item.imgUrl" alt="">
                    <p v-else v-html="item.txt"></p>
                </td>
                
            </tr>
            
        </table>
        <button @click="more()" v-show="ismore" class="lastText">加载更多数据</button>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'; 
import {wordArr} from './worddata'
    export default {
        data(){
            return{
                list:[],
                num:30,
                maxnum:0,
                ismore:false,
                val:'',
                pageIndex:1,
            }
        },
        mounted() {
            // window.addEventListener('scroll', this.fu,true);
            this.init();
            
        },
        methods:{
            ...mapActions([
                'nextaddAsync','reduceAsync'
            ]),
            ...mapMutations([
                'nextadd','reduce'
            ]),
            init(){
                this.pageIndex = this.$store.state.word.pageIndex;
                this.maxnum = this.$store.state.word.data.length;
                this.list = this.$store.state.word.data.slice(0,this.num);
                if(this.maxnum > this.num){
                    this.ismore = true;
                }else{
                    this.ismore = false;
                }
                
                
            },
            goBack(){
                this.$router.push({path:'/essay'});
            },
            go(i){
                if(i == 1){
                    this.list.forEach( (item,index) =>{
                        if(item.word == this.val){
                            let goHeight = 0;
                            goHeight = (index)*65;
                            document.body.scrollTop = goHeight;
                            document.documentElement.scrollTop = goHeight;
                            
                        }
                    })
                }else if( i ==3){
                    this.nextadd(this.pageIndex);
                    this.init();
                }else if(i == 2){
                    this.num = 30;
                    this.reduce(this.pageIndex);
                    this.init();
                }
            },
            more(){
                this.num += 20;
                if(this.num >= this.maxnum){
                    this.num = this.maxnum;
                }
                this.init();
            },
            









            fu(){
                if(!this.isLoading && this.maxnum > this.num){
                    if( this.getDocumentTop() + this.getWindowHeight() > this.getScrollHeight()-500){
                        setTimeout(() => {
                            this.next();
                        },2000)
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
           
        },
        
        destroyed(){
            window.removeEventListener('scroll', this.fu,true);   //  离开页面清除（移除）滚轮滚动事件
        }
    }
</script>

<style lang="scss" scoped>
    @function torem($px) {
        @return ($px / 75)+rem;
    }
    .wordPage{
        width: 100%;
        // height: 100vh;
        // background-image: url('../../assets/blog/bg/bg04.png');
        // background-size: 100% 100%;
        background: linear-gradient(to top, #aeadb6, #d6d5df);
        position: relative;
        padding: torem(40) torem(10) torem(100);
        overflow: scroll;
        .goBack{
            position: fixed;
            top: 2%;
            right: 5%;
            z-index: 10;
            height: torem(40);
            width: torem(150);
            background: #5ad4ea;
            color: #fff;
        }
        .topTemp{
            position: fixed;
            bottom: 1.5%;
            left: 0%;
            width: 100%;
            height: torem(40);
            padding: 0 torem(15);
            display: flex;
            justify-content: center;
            input{
                width: 50%;
                height: torem(50);
                padding-left: torem(10);
            }
            button{
                width: 15%;
                height: torem(50);
                background: linear-gradient(to top, #b96978, #b96978);
                color: #fff;
            }
        }
        
        table{
            height: 100%;
            border-collapse: collapse;
            
            tr{
                width: 100%;
                justify-content: space-between;
                align-items: center;
                height: torem(100);
                background: #fff;
                // td{
                //     color: #000;
                //     border: 1px solid #000;
                //     &:nth-child(1){
                //         width: 20%;
                //         font-size: torem(30);
                //     }
                //     &:nth-child(2){
                //         width: 20%;
                //         font-size: torem(30);
                //     }
                //     &:nth-child(3){
                //         width: 60%;
                //         font-size: torem(26);
                //     }
                    
                // }
                td{
                    color: #000;
                    border: 1px solid #000;
                    &:nth-child(1){
                        width: 20%;
                        font-size: torem(30);
                        padding-left: torem(10);
                    }
                    &:nth-child(2){
                       img{
                           width: 100%;
                           display: block;
                           padding: torem(5) 0;
                       }
                    }
                   
                    
                }

            }
            
        }
        .lastText{
            width: 100%;
            text-align: center;
            color: #000;
            margin-top: torem(30);
        }

        .temp{
            height: 100%;
            width: 100%;
            padding: torem(80) torem(20) torem(20);
            
            ul{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border: 1px solid #000;
                border-bottom: none;
                min-height: torem(100);
                max-height: torem(150);
                li{
                    color: #000;
                    &:nth-child(1){
                        width: 20%;
                        font-size: torem(30);
                    }
                    &:nth-child(2){
                        width: 20%;
                        font-size: torem(30);
                    }
                    &:nth-child(3){
                        width: 60%;
                        font-size: torem(26);
                    }
                    
                }
                
            }

        }
        
        // .lastText{
        //     position: absolute;
        //     bottom: 0;
        //     left: 0;
        //     width: 100%;
        //     text-align: center;
        //     color: #000;
        // }
       

    }
</style>