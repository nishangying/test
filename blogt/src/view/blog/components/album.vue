<template>
    <div class='album'>
        <div class='photo' @click="touch()" :class="{rotateTemp:isrotate}"> 
            <div class="imgTemp">
                <img src="../../../assets/bloghome/leftImg.png" alt="">
            </div>
            <div class="imgTemp">
                <img src="../../../assets/bloghome/leftImg.png" alt="">
            </div>
            <div class="imgTemp">
                <img src="../../../assets/bloghome/leftImg.png" alt="">
            </div>
            <div class="imgTemp">
                <img src="../../../assets/bloghome/leftImg.png" alt="">
            </div>
            <div class="imgTemp">
                <img src="../../../assets/bloghome/leftImg.png" alt="">
            </div>
            <div class="imgTemp">
                <img src="../../../assets/bloghome/leftImg.png" alt="">
            </div>
           
        </div>    
    </div>  
</template>

<script>
export default {
    data(){
        return{
            isrotate:false,
        }
    },
    mounted(){
        this.touch();
    },
    methods:{
        touch(){
            // console.log(11111111)
            if(this.isrotate){
                this.isrotate = false;
            }else{
                this.isrotate = true;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@function torem($px) {
    @return ($px / 75)+rem;
}
.album{
    background: #fff;
    height: 100vh;
    width: 100vw;
    padding-top: 80%;
    .photo{
        margin: 0 auto;
        width: torem(400);
        height: ttorem(400);
        transform-style: preserve-3d;
        // transform: rotateY(-30deg) rotateX(-27deg);
        position: relative;
        .imgTemp{
            width: torem(400);
            height:torem(400);
            position: absolute;
            img{
                width: torem(400);
                height: torem(400);
                display: block;
               
            }
            &:nth-child(1){
                transform: translateZ(-100px);
                animation: imgOne 5s linear infinite;
                transition: all 3s linear;
            }
            @keyframes imgOne{
                0%{
                    transform: translateZ(-100px);
                }
                50%{
                    transform: translateZ(-160px);
                }
                100%{
                    transform: translateZ(-100px);
                }
            }
            &:nth-child(2){
                transform: translateZ(100px);
                animation: imgTwo 5s linear infinite;
                transition: all 3s linear;
            }
            @keyframes imgTwo{
                0%{
                    transform: translateZ(100px);
                }
                50%{
                    transform: translateZ(160px);
                }
                100%{
                    transform: translateZ(100px);
                }
            }
            &:nth-child(3){
                transform:rotateY(-90deg) translateZ(-100px);
                animation: imgThree 5s linear infinite;
                transition: all 3s linear;
            }
            @keyframes imgThree{
                0%{
                    transform:rotateY(-90deg) translateZ(-100px);
                }
                50%{
                    transform:rotateY(-90deg) translateZ(-160px);
                }
                100%{
                    transform:rotateY(-90deg) translateZ(-100px);
                }
            }
            
            &:nth-child(4){
               transform:rotateY(-90deg) translateZ(100px);
               animation: imgFour 5s linear infinite;
               transition: all 3s linear;
            }
            @keyframes imgFour{
                0%{
                    transform:rotateY(-90deg) translateZ(100px);
                }
                50%{
                    transform:rotateY(-90deg) translateZ(160px);
                }
                100%{
                    transform:rotateY(-90deg) translateZ(100px);
                }
            }
            &:nth-child(5){
               transform:rotateX(-90deg) translateZ(-100px);
               animation: imgFive 5s linear infinite;
               transition: all 3s linear;
            }
            @keyframes imgFive{
                0%{
                    transform:rotateX(-90deg) translateZ(-100px);
                }
                50%{
                    transform:rotateX(-90deg) translateZ(-160px);
                }
                100%{
                    transform:rotateX(-90deg) translateZ(-100px);
                } 
            }
            &:nth-child(6){
               transform:rotateX(-90deg) translateZ(100px);
               animation: imgSix 5s linear infinite;
               transition: all 3s linear;
            }
            @keyframes imgSix{
                0%{
                    transform:rotateX(-90deg) translateZ(100px);
                }
                50%{
                    transform:rotateX(-90deg) translateZ(160px);
                }
                100%{
                    transform:rotateX(-90deg) translateZ(100px);
                }
            }
        }
    }
    .rotateTemp{
        animation: rotateT 10s linear infinite
    }
    @keyframes rotateT{
        0%{
            transform: rotateX(0deg) rotateY(0deg);
        }
        100% {
            transform: rotateX(360deg) rotateY(360deg);
        }
    }
}
</style>