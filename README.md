### master 
+ build

### lesson-1 
+ index文件说明
  + react
  + react-dom
+ jsx原理

### lesson-2-style 
+ 样式引入和使用相关
  + styled-components
+ 按需引入类
  + classnames

### lesson-3-componnets l
+ 组件化开发
  + export { default as TodoHeader } from ''
+ 组件传值
  + props children
+ 组件传值校验
  + prop-types
+ state(class独有)
+ setState(异步)
  ```js
    this.setState((preState, preProps) => {
            return {
                isLiked: '❤'
            }
        },()=>{
    })
    
    this.setState({
        isLiked: '❤'
        },()=>{
    })
  ```
+ 内嵌innerHTML
  + dangerouslySetInnerHTML
### lesson-4-on 事件
+  onClick
+  onChange
+  onKeyUp

### lesson-5-lifecycle

### lesson-6-hooks 
+ 它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
+ useState
+ useEffect 

### lesson-7-context
+ Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。
+ createContext
+ Provider
+ Consumer
+ dynamic : 通过Provider组件传递value的内容,子组件用static contextType = ThemeContext获取内容

### lesson-8-HOC
+ react-app-rewired (需要配置)
+ customize-cra

### lesson-9-redux(手动连接)
+ getState dispatch subscribe 
+ createStore
+ combineReducers

### lesson-10-react-redux
+ Provider connect
+ redux-thunk (异步)
+ store.js
    ```js
    import { createStore, applyMiddleware } from 'redux'
    import thunk from 'redux-thunk';
    import Reducer from './reducers'
    export default createStore(Reducer, applyMiddleware(thunk))
    ```

### lesson-10-router
+ react-router-dom
  + HashRouter / BrowserRouter
  + Route
  + Link
    + 显示传参: match(to="/xx?params=xxx")
    + 隐式传参: location里面取值
     ```js
     to={
         pathname:'/xxx',
         state:{
             name:'tgc'
         }
     }
      ```
  + NavLink(相对于Link有active类名)
  + Redirect
  + Switch
  + exact : 完全(准确的)匹配, 比如说 path="/artical" 会匹配(占用)  path="/artical/:id" 使后者显示不出, 加exact可解决
  + withRouter (给自定义组件添加Route API => BackHome)

### 开启gzip打包
+ customize-cra => `config-overrides.js`
    ```js
    const { override, fixBabelImports, addLessLoader } = require('customize-cra');
    const CompressionWebpackPlugin = require('compression-webpack-plugin');
    const themeColor = require('./theme');
    process.env.GENERATE_SOURCEMAP = "false";// 去除.map
    module.exports = override(
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
        }),
        addLessLoader({
            javascriptEnabled: true,
            modifyVars: { ...themeColor },
        }),
        (config) => {
            config.plugins = [
                ...config.plugins,
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: /\.js$|\.json$|\.css/,
                    threshold: 0, // 只有大小大于该值的资源会被处理
                    minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
                    deleteOriginalAssets: false // 删除原文件
                })
            ]
            return config
        }
    );
    ```