
import {wordArr,wordArr1} from '../../view/blog/worddata'
export default{
    state:{
        data:wordArr,
        pageIndex:1,
    },
    getters:{
       
    },
    mutations: {
        nextadd(state,index){
            if(index == 1){
                state.data = wordArr1;
                state.pageIndex = 2 ;
            }
           
            
           
        },
        reduce(state,index){
            if(index == 2){
                state.data = wordArr;
                state.pageIndex = 1 ;
            }
        }
    },
    actions: {
        nextaddAsync( context, index ) {
            setTimeout( () => {
              context.commit( 'nextadd', index ); //context提交
            }, 1000)
        },
        reduceAsync( context, index ) {
            setTimeout( () => {
              context.commit( 'reduce', index ); //context提交
            }, 1000)
        },
    }
} 