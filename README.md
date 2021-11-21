# mp-cu Beta V3.2.6

#### 介绍
本项目为 colorui3.x 微信小程序原生版。

colorui3.x 地址： https://github.com/weilanwl/coloruiBeta

<hr/>

需要先升级小程序开发工具到 `2021-10-11` 之后的版本, 
然后，检查根目录下，`project.config.json` 配置文件内的 `"setting"` 节点下，是否配置了：

``` 
"useCompilerPlugins": [
    "sass"
]
```

如果没有配置，需要手动配置一下，应该就没问题了。
