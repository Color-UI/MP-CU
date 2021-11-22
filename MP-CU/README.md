# MP CU

本项目为 colorui3.x 微信小程序原生版。

colorui3.x 默认只支持uni-app，本项目中colorui框架为移植修改版。

colorui3.x 地址： https://github.com/weilanwl/coloruiBeta

本项目地址：https://github.com/Color-UI/MP-CU/tree/beta-v3.2

<hr/>

### 准备配置

需要先升级小程序开发工具到 `2021-10-11` 之后的版本,
然后，检查根目录下，`project.config.json` 配置文件内的 `"setting"` 节点下，是否配置了：

``` 
"useCompilerPlugins": [
    "sass"
]
```

如果没有配置，需要手动配置一下，应该就没问题了。


### 框架配置

在根目录的 `app.js` 文件里引入相关配置, 注意, 请不要修改 `cu_config` 和 `cu_tools` 名字,否则, 会报错：

``` 

const mp_cu_config = require('/MP-CU/app/config/index');
const mp_cu_tools = require('/MP-CU/utils/tools');

App({
    onLaunch() {

    },
	.....
	.....
	// 注意不要修改前面的名字，`cu_config` 和 `cu_tools`
    cu_config: mp_cu_config,
    cu_tools: mp_cu_tools,
})

```


然后在根目录的 `app.scss` 文件里引入相关框架的css文件。

``` 

@import './MP-CU/colorui/scss/ui';


// 实际项目中，可删除下面的相关文件和引用，因为图标太多，体积较大，可能你项目里并不需要这么多图标，建议自行添加需要的扩展icon图标引用。
// @import './MP-CU/app/icon/doc';

```


相关文件路径：

``` 

/MP-CU/app/config/index.js'  // 一些框架的配置项

/MP-CU/utils/tools.js'  // 一些框架中使用的方法函数，可复用。

```


### 组件使用方式

挂载组件，在 `app.json` 或 `xxx.json` 文件里配置

``` 

"usingComponents": {
	"ui-sys": "MP-CU/colorui/components/ui-sys/ui-sys"
}

```


custom-tab-bar 文件夹是不需要的，只是本框架演示demo用的自定义tabBar，实际项目中，自行考虑整合。

