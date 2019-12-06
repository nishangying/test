
let scrollTop = 0; 
let scrollTopTo = 0;

window.addEventListener("scroll", () => {
    scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    
})
//弹窗是禁止底部页面滚动
export function setViewFixed() {
    document.getElementsByTagName("body")[0].style.height = '100%';
    document.getElementsByTagName("body")[0].style.overflowY = 'hidden';
    document.getElementsByTagName("body")[0].style.position  = 'fixed';
    scrollTopTo = scrollTop;
}
//关闭弹框是  取消禁止底部页面滚动
export function setViewRelative(){
    document.getElementsByTagName("body")[0].style.height = 'auto';
    document.getElementsByTagName("body")[0].style.overflowY = 'auto';
    document.getElementsByTagName("body")[0].style.position = 'relative';
    document.body.scrollTop = scrollTopTo;
    document.documentElement.scrollTop = scrollTopTo;

}
