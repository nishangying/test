let obj = {
    randomNum(){
        let num = Math.floor(Math.random()*11);
        if(num < 10){
            num = `0${num}`;
        }
        return num;
    }
}


export default obj;