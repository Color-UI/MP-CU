// import config from '/config/index'
import tools from '/utils/tools'
import {ColorUIStore} from '/store/index'

/**
 *  ColorUi 主Js文件
 * @param   theme               设置默认主题
 * @param   main                设置默认强调色
 * @param   text                设置默认字号等级(0-4)
 * @param   fotter              显示底部colorUI版权(如果属于开源作品，请带上Colorui版权！！！)
 * @param   homePath            设置首页路径(一些组件会用到跳回主页，请每个项目设置好！)
 * @param   autoChangeTheme     是否开启随系统切换主题
 * @param   tabbar              配置系统tabbar
 */


export default class ColorUI {
    constructor({
        theme = 'light',					
        main = 'blue',						
        text = 1,							 
        footer = true,						
        homePath = '/pages/home/home',		
        autoChangeTheme = true,             
        tabbar = [{                         
            title: '文档',
            icon: '/static/tab_icon/document.png',
            curIcon: '/static/tab_icon/document_cur.png',
            url: '/pages/home/home',
            type: 'tab'
        },
        {
            title: '模板',
            icon: '/static/tab_icon/tpl.png',
            curIcon: '/static/tab_icon/tpl_cur.png',
            url: '/pages/template/home',
            type: 'tab'
        },
        {
            title: '社区',
            icon: '/static/tab_icon/comment.png',
            curIcon: '/static/tab_icon/comment_cur.png',
            url: '/pages/community/home',
            type: 'tab'
        },
        {
            title: '发现',
            icon: '/static/tab_icon/find.png',
            curIcon: '/static/tab_icon/find_cur.png',
            url: '/pages/find/home',
            type: 'tab'
        },
        {
            title: '我的',
            icon: '/static/tab_icon/my.png',
            curIcon: '/static/tab_icon/my_cur.png',
            url: '/pages/my/home',
            type: 'tab'
        }],
    }) {
        this.theme = theme,						
        this.main = main,						
        this.text = text,							
        this.footer = footer,						
        this.homePath = homePath,		
        this.autoChangeTheme = autoChangeTheme,
        this.tabbar = tabbar
        this.store = {}
        this.tools = tools
        
    }
    setStore(){
        this.store = ColorUIStore(this)
    }
    getColorUiStore (){
        return this.store
    }
    getColorUiTools (){
        return this.tools
    }
    getColorUiTabbar (){
        return this.tabbar
    }
}