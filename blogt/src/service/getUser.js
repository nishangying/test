
let vpfid = '';
let vtoken = '';
let vanchor ='';
// let l_href = location.href;

// if(l_href.indexOf('?') > -1){
//     let href = location.href.split("?")[1];
//     var infoArr = href.split('&');
//     infoArr.forEach(function(item){
//         if(item.indexOf('pfid') > -1){
//             vanchor = item.replace('anchor_pfid=','');
//         }
//         if(item.indexOf('TOKEN') > -1){
//             vtoken = item.replace('HTTP_USER_TOKEN=','');
//         }
//         if(item.indexOf('UID') > -1){
//             vpfid = item.replace('HTTP_USER_UID=','');
//         }
//     })
// }
function getParam(name){
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let l_href = window.location.href;
    let pos = l_href.indexOf('?');
    let o = l_href.substr(pos);
    let r = o.substr(1).match(reg);
    if (r != null)return unescape(r[2]);
    return null;
}
vpfid = getParam('HTTP_USER_UID');
vtoken = getParam('HTTP_USER_TOKEN');
vanchor = getParam('anchor_pfid') || 0;

if(parseInt(vanchor) == 0 && ( typeof(anchor) != 'undefined' || anchor != 0 ) ){
    vanchor = anchor;
}
export{
    vpfid,
    vtoken,
    vanchor
}