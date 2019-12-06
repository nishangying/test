// 接口
import  request  from '../service/request.js' 

export function apiIndex1(search) {   //首页
    const data = {
        data: search
    }
    return request({ url: '/v2/activity/magicelvesadventure/act1_index', data })
}

export function apiInitQuestion(search) {   //问题
    const data = {
        data: search
    }
    return request({ url: '/v2/activity/magicelvesadventure/act1_question', data })
}

export function apiAnswer(search) {   //答题
    const data = {
        data: search
    }
    return request({ url: '/v2/activity/magicelvesadventure/act1_answer', data })
}

export function apiTask(search) {    //用户任务
    const data = {
        data: search
    }
    return request({ url: '/v2/activity/magicelvesadventure/act1_task', data })
}

export function apiLog(search) {    //抢夺日志
    const data = {
        data: search
    }
    return request({ url: '/v2/activity/magicelvesadventure/act1_log', data })
}



// ----------------------------two----------------------------
export function apiIndex2(search) {
    const data = {
        data: search
    }
    return request({ url: '/v2/activity/magicelvesadventure/act2_index', data })
}
export function apiUserRank(search) {
    const data = {
        data: search
    }
    return request({ url: '/v2/activity/magicelvesadventure/act2_user_rank', data })
}

export function apiUserRank1(search) {
    const data = {
        data: search
    }
    return request({ url: '/v2/activity/magicelvesadventure/act2_user_rank1', data })
}

