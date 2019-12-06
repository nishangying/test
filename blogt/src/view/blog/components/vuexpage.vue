<template>
    <div class="vuexPage">
        <!-- <p>{{$store.state.count}}</p> -->
        <!-- <p>{{getcount}}</p> -->
        <p>{{count}}</p>
        
        <div class="bottomTemp">
            <button @click="btn(1)">+</button>
            <button @click="btn(2)">-</button>
        </div>
        <ul>
            <li v-for="(item,i) in priceArr.data" :key="i">{{item.name}}-----------{{item.price}}</li>
            
        </ul>
        <div class="bottomTemp">
            <button @click="removeBtn(1)">删除</button>
            <button @click="removeBtn(2)">涨价</button>
            <button @click="removeBtn(3)">减价</button>
        </div>

    </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'; 
export default {
    data(){
        return{

        }
    },
    // computed:{
    //     getcount(){
    //         return this.$store.getters.getCount;
    //     }
    
    // },
    computed:mapState({
        // count:'count',
        count:(state) =>state.price.num,
        priceArr:'price',
    }),
    mounted(){
       
        
    },
    methods:{
        ...mapGetters([
            'getCount','delete'
        ]),
        ...mapMutations([
            'addCount','reduce','add','minusPrice2','removeData'
        ]),
        ...mapActions([
            'cmadd','cmred','addAsync','minusPrice2Async','removeDataAsync'
        ]),
        btn(i){
            if(i == 1){
                // this.$store.commit('addCount');
                // this.$store.dispatch('cmadd')
                this.cmadd();
            }else{
                // this.$store.commit('reduce');
                // this.$store.dispatch('cmred')
                this.cmred();
            }
        },
        removeBtn(i){
            if(i == 1){
                // this.removeData();
                this.removeDataAsync();
            }
            if(i == 2){
                //    this.add(5);
                this.addAsync(5);
            }else if(i == 3){
                //    this.minusPrice2(2);c
                this.minusPrice2Async(3);
            }
        }
    },
    

}
</script>


<style lang="scss" scoped>
    @function torem($px) {
        @return ($px / 75)+rem;
    }
    .vuexPage{
        text-align: center;
        color: #000;
        p{
            font-size: torem(60);
        }
        .bottomTemp{
            button{
                width: torem(100);
                height: torem(40)
            }
        }
    }
</style>