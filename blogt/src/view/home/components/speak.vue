<template>
    <div class="speak">
        <div class='message'>
            <textarea name="" id="" v-model="text" cols="30" rows="10"></textarea>
            <div class='footer'>
                <p>{{time}}</p>
                <mt-button size="small" type="default">发布</mt-button>
            </div>
        </div>
        <ul class='list'>
            <li @click="details(index)" v-for="(item,index) in list" :key="index">
                <img class="leftTemp" :src="item.url" alt="">
                <div class='rightTemp'>
                    <p>{{item.content}}</p>
                    <p>{{item.time}}</p>
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
                    content:'你好！',
                    time:'2019 16:17:48',
                },{
                    url:require('../../../assets/blog/essay/l1.jpg'),
                    content:'你好！',
                    time:'2019 16:17:48',
                },{
                    url:require('../../../assets/blog/essay/l1.jpg'),
                    content:'你好！',
                    time:'2019 16:17:48',
                },{
                    url:require('../../../assets/blog/essay/l1.jpg'),
                    content:'你好！',
                    time:'2019 16:17:48',
                },{
                    url:require('../../../assets/blog/essay/l1.jpg'),
                    content:'你好！',
                    time:'2019 16:17:48',
                },{
                    url:require('../../../assets/blog/essay/l1.jpg'),
                    content:'你好！',
                    time:'2019 16:17:48',
                },{
                    url:require('../../../assets/blog/essay/l1.jpg'),
                    content:'你好！',
                    time:'2019 16:17:48',
                },{
                    url:require('../../../assets/blog/essay/l1.jpg'),
                    content:'你好！',
                    time:'2019 16:17:48',
                },{
                    url:require('../../../assets/blog/essay/l1.jpg'),
                    content:'你好！',
                    time:'2019 16:17:48',
                },{
                    url:require('../../../assets/blog/essay/l1.jpg'),
                    content:'你好！',
                    time:'2019 16:17:48',
                },{
                    url:require('../../../assets/blog/essay/l1.jpg'),
                    content:'你好！',
                    time:'2019 16:17:48',
                },
            ],
            text:'',
            time:'',
        }
    },
    mounted(){
        this.initTime();
    },
    methods:{
        initTime(){
            this.time = new Date().toLocaleString();
            setInterval( () => {
                this.time = new Date().toLocaleString();
            },1000)
        }
    },
    watch: {
         text:{   //深度监听的写法  
            immediate: true,
            handler(newName, oldName) {
               console.log(newName)
               console.log(oldName)
            },
        }
    },



}
</script>

<style lang="scss" scoped>
@function torem($px) {
//   @return  $px / 75px * 1rem;
    @return ($px / 75)+rem;
}
.speak{
    color: #000;
    height: 100%;
    .message{
        width: 100%;
        // height: torem(350);
        height: 26%;
        padding: torem(15);
        textarea{
            width: 100%;
            height: 70%;
            border-radius: torem(10);
            padding: torem(5);
        }
        .footer{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    .list{
        padding: torem(15);
        // height: torem(870);
        height: 74%;
        overflow: scroll;
        li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgb(102, 97, 97);
            padding: torem(10) 0;
            &:last-child{
                border-bottom:none;
            }
            .leftTemp{
                width: 20%;
                max-width: torem(130);
                height: torem(130);
                border-radius: torem(70);
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
                       text-align: right;
                    }
                }
            }
        }
    }
}



</style>