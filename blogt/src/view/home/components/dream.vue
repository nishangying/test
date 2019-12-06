<template>
    <div class='dream'>
        <p class='txt'>梦想太大,空间太小,放不下</p>
    </div>
</template>

<script>
export default {
    



}
</script>

<style lang="scss" scoped>
@function torem($px) {
//   @return  $px / 75px * 1rem;
    @return ($px / 75)+rem;
}
.dream{
    color: #000;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .txt{
        font-size: torem(40);
        width: 90%;
        text-align: center;
        font-weight: bold;
    }
}



</style>