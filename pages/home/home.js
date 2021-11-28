const app = getApp();
Page({
    data: {
        tabbarData: app.ColorUi.tabbar,
        sys_navBar: app.ColorUi.tools.sys_navBar,
        sys_capsule: app.ColorUi.tools.sys_capsule(),
        sys_scrollTop: 0,
        swiperList: [{img: "/static/img/mp-cu.png"}, {img: "/static/img/8v2yr.png"}, {img: "/static/img/qhgtb.png"}],
        navData: [{
            title: '基础',
            sub: [{icon: 'cicon-set', name: 'system', title: '系统'},
                {icon: 'cicon-paint', name: 'theme', title: '主题'},
                {icon: 'cicon-topbar', name: 'navbar', title: '导航栏'},
                {icon: 'cicon-palette', name: 'background', title: '背景'},
                {icon: 'cicon-Aa', name: 'text', title: '文本'},
                {icon: 'cicon-magic', name: 'icon', title: '图标'},
                {icon: 'cicon-DarkMode', name: 'shadow', title: '阴影'},
                {icon: 'cicon-box', name: 'border', title: '边框'}
            ]
        },
        {
            title: '视图',
            sub: [{icon: 'cicon-avatar', name: 'avatar', title: '头像'},
                {icon: 'cicon-Tt', name: 'title', title: '标题'},
                {icon: 'cicon-tag', name: 'tag', title: '标签'},
                {icon: 'cicon-ellipse', name: 'button', title: '按钮'},
                {icon: 'cicon-pic', name: 'image', title: '图片'},
                {icon: 'cicon-code-box', name: 'code', title: '代码'},
                {icon: 'cicon-progress', name: 'progress', title: '进度条'},
                {icon: 'cicon-loader-fill', name: 'loading', title: '加载'}
            ]
        },
        {
            title: '布局',
            sub: [{icon: 'cicon-view-agenda', name: 'flex', title: '容器'},
                {icon: 'cicon-view-agenda', name: 'menu', title: '菜单'},
                {icon: 'cicon-dashboard', name: 'fixed', title: '浮动'},
                {icon: 'cicon-card', name: 'card', title: '卡片'},
                {icon: 'cicon-view-list', name: 'list', title: '列表'},
                {icon: 'cicon-grid', name: 'grid', title: '栅栏'},
                {icon: 'cicon-stock', name: 'timeline', title: '时间轴'},
                {icon: 'cicon-grid', name: 'table', title: '表格'}
            ]
        },
        {
            title: '交互',
            sub: [{icon: 'cicon-popover', name: 'popover', title: '气泡框'},
                {icon: 'cicon-stop', name: 'modal', title: '模态框'},
                {icon: 'cicon-subtitles', name: 'toast', title: '轻提示'},
                {icon: 'cicon-view-quilt', name: 'drawer', title: '抽屉'},
                {icon: 'cicon-view-day', name: 'collapse', title: '折叠面板'},
                {icon: 'cicon-view-array', name: 'tab', title: '选项卡'},
                {icon: 'cicon-view-carousel', name: 'swiper', title: '轮播图'},
                {icon: 'cicon-git-commit', name: 'steps', title: '步骤条'}
            ]
        },
        {
            title: '表单',
            sub: [{icon: 'cicon-input', name: 'input', title: '输入框'},
                {icon: 'cicon-radiobox', name: 'radio', title: '单选框'},
                {icon: 'cicon-checkbox', name: 'checkbox', title: '复选框'},
                {icon: 'cicon-toggle', name: 'switch', title: '开关'},
                {icon: 'cicon-view-headline', name: 'picker', title: '选择器'}
            ]
        }],
    },
    onLoad() {

    },
    // 监听用户滑动页面事件。
    onPageScroll(e) {
        // 注意：请只在需要的时候才在 page 中定义此方法，不要定义空方法。以减少不必要的事件派发对渲染层-逻辑层通信的影响。
        // 注意：请避免在 onPageScroll 中过于频繁的执行 setData 等引起逻辑层-渲染层通信的操作。尤其是每次传输大量数据，会影响通信耗时。
        // https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onPageScroll-Object-object
        this.setData({
            sys_scrollTop: e.scrollTop
        })
    },
})
