<template>
    <div class="lifePage">
       <p>将根据已有的meta标签来设置缩放比例</p>

    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
   
    mounted(){
       
        
    },
    methods:{
        
    },
    

}
</script>


<style lang="scss" scoped>
    @function torem($px) {
        @return ($px / 75)+rem;
    }
    .lifePage{
        text-align: center;
        color: #000;
        p{
            font-size: 20px;/*px*/
        }
        
    }
</style>