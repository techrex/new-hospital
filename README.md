# new-hospital
---
> 本项目使用Vue CLI 3搭建

## 编译命令
```
# 安装依赖
npm install

# 开发
npm run serve

# 编译打包
npm run build
```

## 项目结构
``` bash
.
├── node_modules/               # npm modules
│   └── ...
├── public/                     # 静态文件
│   ├── index.html              # index.html template
│   └── ...
├── src/                        # 源码目录
│   ├── api/                    # 接口文件目录
│   │   ├── webgisRest.js       # axios实例
│   │   └── ...
│   ├── assets/                 # 资源文件目录
│   │   └── ...
│   ├── router/                 # 路由文件目录
│   │   ├── index.js            # 路由守卫
│   │   └── router.js           # Vue-Router路由
│   ├── store/                  # 状态管理文件目录
│   │   └── index.js            # Vuex状态管理
│   ├── utils/                  # 公共工具目录
│   │   ├── index.js            # 全局工具索引
│   │   ├── cancelTokenMixin.js #cancelToken混入对象
│   │   ├── filter.js           # 全局过滤器
│   │   └── global.js           # 全局公共函数
│   ├── vendor/                 # 扩展文件目录
│   │   ├── index.js            # 扩展索引
│   │   ├── axios.js            # 引入axios
│   │   └── vant.js             # 引入Vant
│   ├── views/                  # 页面文件目录
│   │   └── ...
│   ├── App.vue                 # 项目入口App组件
│   └── main.js                 # 项目入口
├── babel.config.js             # babel配置
├── .browserslistrc             # 浏览器兼容性配置
├── .eslintrc.js                # eslint规则配置
├── .gitignore                  # git忽略配置
├── node_modules.zip            # npm modules压缩包
├── package.json
├── package-lock.json
├── postcss.config.js           # postcss配置
├── README.md                   # README
└── vue.config.js               # 项目配置（包括webpack配置）
```
### `src/main.js` 项目js入口
项目js入口

### `src/api` 接口文件目录
封装api接口请求

### `src/assets` 资源文件目录
需要webpack编译打包的资源目录

### `src/router` Vue-Router路由目录
1. `index.js` 配置路由守卫
2. `router.js` 配置Vue-Router路由

### `src/store` Vuex状态管理目录
配置Vuex状态管理模式

### `src/vendor` 扩展文件目录
1. `index.js` 引入扩展
2. `axios.js` 配置axios响应拦截器并注入到Vue中
4. `vant.js` 引入Vant组件库及自定义样式

### `src/utils` 公共工具目录
2. `index.js` 定义全局过滤器，全局注册混入对象
2. `filter.js` 全局过滤器
  `timeFormat` 时间格式化
3. `cancelTokenMixin.js` cancelTokenMixin混入对象：生成cancelToken并在组件销毁时取消请求
5. `global.js` 全局公共函数
  `toFirstUpperCase` 首字母大写