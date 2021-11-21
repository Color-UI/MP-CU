const app = getApp();

Component({
    data: {
        colorName: ''
    },
    options: {
        addGlobalClass: true
    },
    properties: {
        data: {
            type: Object,
            optionalTypes: Array,
            value: {}
        }
    },
    lifetimes: {
        attached() {
            this.setData({
                colorName: app.tools.getColor()
            });
        }
    },
})