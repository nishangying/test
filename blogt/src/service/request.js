import axios from 'axios';
import qs from	'qs';  //把入参转换成fromData的形式
import { vpfid, vtoken } from './getUser'
import { Toast } from 'mint-ui';
import Bus from './bus'
//请求拦截器
// 设置api域名

let baseURL = langApi;

const service = axios.create({
    //baseURL: process.env.BASE_API,
    baseURL,
    timeout: 30000, //请求超时时间
})
service.interceptors.request.use(
   
    config => {
        //在请求之前做点什么
        config.method = 'post'
        // var params = new URLSearchParams();
        // params.append('HTTP_USER_UID', pfid); 
        // params.append('HTTP_USER_TOKEN', token); 
        const configData = {
            ...config.data.data,
            HTTP_USER_UID:vpfid,
            HTTP_USER_TOKEN:vtoken
        }
        config.data = qs.stringify(configData);
        // Indicator.open();
        Bus.$emit('isloading', 1);
        return config
    },
    error => {
        //请求错误处理
        console.log('request error:' + error)
        return Promise.reject(error)
    }
)

//响应拦截器
// Indicator.close(),
service.interceptors.response.use(
    response => {
        // Indicator.close();
        Bus.$emit('isloading', 2);
        if (response.data.ret_code == 0) {
            return response.data
        } else {
            Toast({
                message: response.data.ret_msg,
                position: 'middle',
                duration: 2000
            });
            return Promise.reject(response.data)
        }
    },
    error => {
        Toast({
            message: response.data.ret_msg,
            position: 'middle',
            duration: 2000
        });
        console.log('response error:' + error)
        return Promise.reject(error)
    }
)

export default service