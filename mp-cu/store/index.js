import Store from '../utils/store'


const ColorUIStore  = (config) =>{
    const store =  new Store({
        debug: true, // 关闭内部日志的输出。
        state: {
            sys_theme: wx.getStorageSync('sys_theme')?wx.getStorageSync('sys_theme'):config.theme,
            sys_main: wx.getStorageSync('sys_main')?wx.getStorageSync('sys_main'):config.main,
            sys_text: wx.getStorageSync('sys_text')?wx.getStorageSync('sys_text'):config.text,
        },
        methods: {
            //设置主题
            setTheme(data) {
                store.setState({
                    sys_theme: data,
                });
                wx.setStorageSync('sys_theme', data);
                //uni.getSystemInfoSync().theme
            },
            //设置主颜色
            setMain(data) {
                store.setState({
                    sys_main: data,
                });
                wx.setStorageSync('sys_main', data);
            },
            //设置字号等级
            setText(data) {
                store.setState({
                    sys_text: data,
                });
                wx.setStorageSync('sys_text', data);
            },
            _toHome() {
                wx.switchTab({
                    url: config.homePath,
                    fail(res) {
                        console.log(res);
                    }
                });
            },
            _backPage() {
                if (this.sys_isFirstPage) {
                    this._toHome();
                } else {
                    wx.navigateBack({
                        delta: 1,
                        fail(res) {
                            console.log(res);
                        }
                    });
                }
            },
            //实例是否为路由栈的第一个页面
            sys_isFirstPage() {
                return getCurrentPages().length === 1
            },
        }
    });
    return store;
}

module.exports = {
    ColorUIStore 
};