# 使用帮助

> 项目源码 https://github.com/repertory/ng-antd-admin

## 脚手架

使用脚手架可以更加方便的初始化项目，生成模板代码，节省开发时间。

**生成页面命令**

```bash
ng g .:page --name=NAME [options]
```

例如通过以下代码可以快速生成完整页面

```bash
ng g .:page --name=page/name --children
```

**生成页面参数**

--name

组件名称(必选)

--styleext

样式文件扩展名（默认 less）

--path

指定组件创建目录（相当于执行时所在的目录）

--spec

是否生成 .spec 测试文件

--children

是否生成子路由（默认 false）
