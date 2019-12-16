<template>
   <div class='headerNav'>
       <div class="nav">
           <img @click="switchBtn(1)" class='leftImg' src="../assets/bloghome/001.jpg" alt="">
           <span>駗騽験騚</span>
           <img @click="switchBtn(2)" class="rightImg" src="../assets/timg.jpg" alt="">
           
       </div>
       <div class="leftNav" :class="{leftNavTf:leftNavShow,leftNavTfOut:!leftNavShow && leftNavShowCount>0}">
       <!-- <div class="leftNav" v-show="leftNavShow"> -->
           <img class="leftImg" src="../assets/bloghome/001.jpg" alt="">
           
           <ul>
               <li v-for="(item,i) in leftArr" :key="i">
                    <!-- <router-link @click="goTo()" :to="item.router">{{item.name}}</router-link> -->
                    <span @click="goTo(item)">{{item.name}}</span>
               </li>
           </ul>
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
            leftArr:[
                {
                    name:"单词",
                    router:"word",
                },
                {
                    name:"相册",
                    router:"album",
                },{
                    name:"测试页面滑动",
                    router:"scrollpage",
                },{
                    name:"瀑布流相册",
                    router:"scrollphoto",
                },{
                    name:"keep-alive",
                    router:"list",
                },{
                    name:"vuexPage",
                    router:"vuexPage",
                },{
                    name:"生活",
                    router:"lifePage",
                },{
                    name:"demo",
                    router:"demo",
                },
                
            ],
            activeIndex:0,
            leftNavShow:false,
            leftNavShowCount:0,
            btnFlag:true,
            
        }
    },
    mounted(){
       
    },
    methods:{
        switchBtn(i){
            if(i == 1){
                if(this.btnFlag){
                    this.btnFlag = false;
                    this.leftNavShowCount++;
                    if(this.leftNavShow){
                        this.leftNavShow = false; 
                    }else{
                        this.leftNavShow = true; 
                    }
                    setTimeout( () => {
                        this.btnFlag = true;
                    },500)
                }
            }else{
                this.$router.push({path:'/'})
            }
        },
        goTo(val){
            this.$router.push({name:val.router});
            this.leftNavShow = false;
        }
    }
}
</script>
<style lang="scss" scoped>
@function torem($px) {
//   @return  $px / 75px * 1rem;
    @return ($px / 75)+rem;
}
    .headerNav{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: torem(100);
        z-index: 100;
        background: #676564;
        // background: $Cfff;
        .nav{
            font-size: torem(28);
            line-height: torem(100);
            text-align: center;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #000;
            padding: 0 4% 0 4%;
            .leftImg{
                width: torem(60);
                height: torem(60);
                border-radius: torem(30);
                animation: rotateImg 1.5s infinite ;
            }
            .rightImg{
                width: torem(60);
                height: torem(60);
                border-radius: torem(30);
                animation: rotateImg 1.5s infinite ;
            }
            span{
                color: #fff;
                font-weight: bold;
                font-size: torem(32);
            }
        }
        .leftNavInit{
            width: 65%;
            height: 100vh;
            background:#676564;
            position: absolute;
            left: -65%;
            top: torem(100);
            
        }
        .leftNav{
            width: 55%;
            height: 100vh;
            background:#676564;
            transform:  translateX(-450px); /*px*/
            .leftImg{
                width: torem(180);
                height: torem(180);
                border-radius: torem(100);
                margin: torem(30) torem(20) torem(20) torem(110);
            }

            ul{
                padding: torem(20) torem(0) 0 torem(60);
                li{
                    color: #fff;
                    font-weight: bold;
                    font-size: torem(30);
                    margin: torem(20) 0;
                    a{
                        color: #fff;
                    }
                }
            }
        }
        .leftNavTf{
            animation: myrotate .4s linear ;
            transform:  translateX(0px); /*px*/
        }
        
        @keyframes myrotate{
            0%{
                transform:  translateX(-450px);/*px*/
                opacity: .2;
            }
            25%{
                transform:  translateX(-300px);/*px*/
                opacity: .4;
            }
            50%{
                transform:  translateX(-190px);/*px*/
                opacity: .6;
            }
            75%{
                transform:  translateX(-90px);/*px*/
                opacity: .8;
            }
            100%{
                transform:  translateX(0px);/*px*/
                opacity: 1;
            }
        }
        .leftNavTfOut{
            animation: myrotateOut .4s linear ;
            transform:  translateX(-450px);/*px*/
        }
        @keyframes myrotateOut{
            100%{
                transform:  translateX(-450px);/*px*/
                opacity: .2;
            }
            75%{
                transform:  translateX(-300px);/*px*/
                opacity: .4;
            }
            50%{
                transform:  translateX(-190px);/*px*/
                opacity: .6;
            }
            25%{
                transform:  translateX(-90px);/*px*/
                opacity: .8;
            }
            0%{
                transform:  translateX(0px);/*px*/
                opacity: 1;
            }
        }
        @keyframes rotateImg{
            0%{
               transform: scale(1);
            }
            50%{
                transform: scale(.8);
            }
            100%{
                transform: scale(1);
            }
        }
    }
 
              
</style>
