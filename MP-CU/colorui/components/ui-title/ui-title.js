Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    properties: {
        title: {
            type: String,
            value: ''
        },
        depth: {
            type: Number,
            optionalTypes: String,
            value: 0
        },
        subTitle: {
            type: String,
            value: ''
        },
        ui: {
            type: String,
            value: ''
        },
        bg: {
            type: String,
            value: 'bg-none'
        },
        text: {
            type: String,
            value: 'text-a'
        },
        desc: {
            type: String,
            value: 'text-c'
        },
        dot: {
            type: String,
            value: 'ui-BG-Main'
        },
        line: {
            type: String,
            value: 'ui-BG-Main'
        },
        isIcon: {
            type: Boolean,
            value: false
        },
        hasDot: {
            type: Boolean,
            value: false
        },
        hasLine: {
            type: Boolean,
            value: false
        },
        align: {
            type: String,
            value: 'left'
        },
        tpl: {
            type: String,
            value: 'default'
        },
        inLine: {
            type: Boolean,
            value: false
        }
    }
})