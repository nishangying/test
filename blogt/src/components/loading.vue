<template>
    <div class='loading'>
        <!-- <div class='spinner'>
           
        </div> -->
        <mt-spinner :size='60' :type="3" color="#fff"></mt-spinner>
    </div>
</template>
<script>
import { Spinner } from 'mint-ui';
export default {
}
</script>
<style lang="scss" scoped>
.loading{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .89);
    opacity: 0.8;
    filter: alpha(opacity=80);
    display: flex;
    justify-content: center;
    align-items: center;
    .spinner{
        position: fixed;
        z-index: 20;
        box-sizing: border-box;
        width: 50px;
        height: 50px;
        left: 50%;
        top: 50%;
        margin-top: -30px;
        margin-left: -30px;
        border-radius: 100%;
        border: 10px solid rgba(255, 255, 255, 0.8);
        border-top-color: #1d5ed3;
        -webkit-animation: spin 1s infinite linear;
        animation: spin 1s infinite linear;

    }
}
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
    
</style>
