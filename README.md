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
