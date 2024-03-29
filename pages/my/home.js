const app = getApp();

Page({
    data: {
        scrollTop: 0,
    },
    tapToUrl(e) {
        wx.navigateTo({
            url: e.currentTarget.dataset.url
        })
    },
    tapCopy(e) {
        wx.setClipboardData({
            data: e.currentTarget.dataset.value,
            success() {
                wx.showToast({
                    title: '复制成功！',
                    icon: 'none'
                })
            },
            fail() {
                wx.showToast({
                    title: '复制失败！',
                    icon: 'none'
                })
            },
        });
    },
    //喝杯咖啡
    tapToCoffee() {
        wx.previewImage({
            urls: ['https://tc.pengqi.club/i/2023/11/02/65435e34d65ad.webp'],
            current: 'https://tc.pengqi.club/i/2023/11/02/65435e34d65ad.webp',
            showmenu: true,
        })
    },
    // 监听用户滑动页面事件。
    onPageScroll(e) {
        // 注意：请只在需要的时候才在 page 中定义此方法，不要定义空方法。以减少不必要的事件派发对渲染层-逻辑层通信的影响。
        // 注意：请避免在 onPageScroll 中过于频繁的执行 setData 等引起逻辑层-渲染层通信的操作。尤其是每次传输大量数据，会影响通信耗时。
        // https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onPageScroll-Object-object
        this.setData({
            scrollTop: e.scrollTop
        })
    },
})
