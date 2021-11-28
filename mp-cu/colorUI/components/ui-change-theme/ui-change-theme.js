Component({
    data: {
        color: ['red', 'orange', 'yellow', 'olive', 'green', 'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown', 'grey'],
    },
    options: {
        addGlobalClass: true,
        multipleSlots: true,
    },
    properties: {
        ui: {
            type: String,
            value: ''
        },
    },
    lifetimes: {
        created() {

        },
        attached() {

        },
        ready() {

        },
    },
    observers: {
        /*'scrollTop'(res) {
            this.opacityStatus();
        },*/
    },
    methods: {
        tapThemeChange(e) {
            console.log(e.currentTarget.dataset.value)
            this.setTheme(e.currentTarget.dataset.value);
        },
        /*chooseColor(val) {
            this.triggerEvent('setMain', val);
        }*/
    }
})