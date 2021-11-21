Component({
    data: {
        cur: 0,
    },
    options: {
        addGlobalClass: true
    },
    properties: {
        circular: {
            type: Boolean,
            value: true
        },
        autoplay: {
            type: Boolean,
            value: true
        },
        interval: {
            type: Number,
            value: 3000
        },
        duration: {
            type: Number,
            value: 800
        },
        info: {
            type: Array,
            value: []
        },
        swiperCss: {
            type: String,
            value: 'bg-none'
        },
        mode: {
            type: String,
            value: 'default'
        },
        dotStyle: {
            type: String,
            value: 'default'
        },
        dotCur: {
            type: String,
            value: 'bg-black'
        },
        height: {
            type: String,
            value: '340rpx'
        },
        imgHeight: {
            type: String,
            value: '272rpx'
        },
        imgName: {
            type: String,
            value: 'img'
        }
    },
    methods: {
        swiperChange(e) {
            //console.log(e.detail.current)
            this.setData({
                cur: e.detail.current
            })
        },
        toTap(e) {
            let item = e.currentTarget.dataset.item;
            console.log(item)
            //this.triggerEvent("close");
        },
    }
})