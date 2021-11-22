const app = getApp();

Component({
    data: {
        fixed: true,
        sys_statusBar: app.cu_config.sys_statusBar,
        sys_navBar: app.cu_config.sys_navBar
    },
    options: {
        addGlobalClass: true
    },
    properties: {
        noNav: {
            type: Boolean,
            value: false
        },
        noSafe: {
            type: Boolean,
            value: false
        },
        bottom: {
            type: Boolean,
            value: false
        },
        bg: {
            type: String,
            value: 'bg-none'
        },
        val: {
            type: Number,
            value: 0
        },
        width: {
            type: Number,
            optionalTypes: String,
            value: 0
        },
        opacity: {
            type: Boolean,
            value: false
        },
        opacityVal: {
            type: Number,
            value: 0
        },
        index: {
            type: Number,
            optionalTypes: String,
            value: 0
        },
        placeholder: {
            type: Boolean,
            value: false
        },
        sticky: {
            type: Boolean,
            value: false
        },
        noFixed: {
            type: Boolean,
            value: false
        },
        ui: {
            type: String,
            value: ''
        },
        clickTo: {
            type: Boolean,
            value: false
        },
        zIndex: {
            type: Number,
            value: 0
        },
        navBar: {
            type: Number,
            value: 0
        }
    }
})