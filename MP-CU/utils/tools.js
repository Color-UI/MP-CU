module.exports = {
    sys_capsule() {
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (!capsule) {
            console.log('getMenuButtonBoundingClientRect error');
            capsule = {bottom: 56, height: 32, left: 278, right: 365, top: 24, width: 87};
        }
        return capsule;
    },
    //实例是否为路由栈的第一个页面
    sys_isFirstPage() {
        let pages = getCurrentPages();
        return pages.length === 1
    },
    //getColor 随机生成库内颜色名
    getColor() {
        let colorArr = ['yellow', 'orange', 'red', 'pink', 'mauve', 'purple', 'blue', 'cyan', 'green', 'olive', 'grey', 'brown'];
        return colorArr[Math.floor(Math.random() * colorArr.length)]
    }
}