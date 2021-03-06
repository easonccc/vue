## 生命周期
####  主要阶段
1. 挂载(初始化相关属性)
   - beforeCreate  在实例初始化之后，数据观测和事件配置之前被调用
     在beforeCreate生命周期函数执行的时候，data和methods中的数据还没有被初始化 不能访问
    - created  在实例创建完成后被立即调用
       这时候data和methods都已经被初始化好了 
     如果要调用methods中的方法，或者操作data中的数据，最早，只能在created中操作
    - beforeMount  在挂载开始之前被调用
    - mounted  el被新创建的VM.$el替换，并挂载到实例上去之后调用该钩子
2. 更新(元素或组件的变更操作)
   - beforeUpdate 数据更新时调用，发生正在虚拟DOM打补丁之前
   - update 由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子
3. 销毁(销毁相关属性)
    - beforeDestory 实例销毁之前调用
    - destoryed 实例销毁后调用

## 组件
**可以重复利用的HTML结构**
- 组件(Component)是Vue.js最强大的功能之一
- 组件可以扩展HTML元素 
- 可以复用
### 组件
#### 组件规范化 Web Components
存在的问题
- 我们希望尽可能多的重用代码
- 自定义组件的方式不太容易
- 多次使用组件可能导致冲突
 **Web Components通过创建封装好功能的定制元素解决上述问题**
### 组件注册
#### 全局注册
- Vue.component('组件名称'，{}) 第一个参数是标签名称，第二个参数是一个选项对象
- **全局组件** 注册后，任何**Vue实例**都可以使用
- 组件的定义--对象
  - 组件：在UI界面中有很多结构相同但是数据不一样的模块 为了重复利用这些模块 把这些模块封装起来
            组件就可以重复利用的HTML结构
组件的数据data 必须是一个函数 如果是对象的话 每次使用会在一个栈里面，所以使用其中一个会导致所有调用的这个组件都发生相应的变化 不能实现分而治之 
组件的数据data 必须是一个函数 并且要有返回值
组件的模板 内容必须是单个根元素 (简单来说就是当模板字符串中有两个及以上标签就用一个父级标签包裹)
- 使用 组件名称当做一个双标签使用 
```
    Vue.component('组件名称'，{
        data: 组件数据 (是一个函数 要return),
        template:组件模板内容 在这个里面访问data数据不用加this，
        methods: 方法 访问data数据要加this
    })
```
- 组件注意事项
 - 组件参数的data值必须是函数同时这个函数要求返回一个对象
 - 组件模板必须是单个根元素
 - 组件模板的内容可以是模板字符串
 - 组件可以重复使用多次 
    data中返回的是一个对象所以每个组件中的数据是私有的，即每个实例可以维护一份被返回对象的独立拷贝
 - 组件的命名：
    - 如果在普通标签模板中，必须使用短横线的方式使用组件(将每个单词用短横线分隔转化)
    - 如果使用驼峰式命名组件，那么在使用组件的时候，只能在字符串模板中用驼峰的方式使用组件(在字符串模板中使用驼峰的方式使用组件)
#### 局部注册
 - 只能在当前注册它的vue实例中使用(只能在注册他的父组件中使用)

### Vue组件之间传值
#### 父组件向子组件传值 
- 父组件发送的形式是以属性的形式绑定值到子组件身上 (核心：通过属性绑定传递)
- 然后子组件用属性props接收 传递属性值 以数组的形式 例` props:["name","value"]`
- 在props中使用驼峰形式，模板中需要使用短横线的形式 字符串形式的模板中没有这个限制
    - 在父组件的子组件标签名中 
### props传递数据原则
- 单项数据流 只允许父组件向子组件传递数据 不允许子组件向父组件传递信息
#### 子组件向父组件传值
- 子组件用$emit()触发事件
- $emit()第一个参数为 自定义的事件名称 第二个参数为需要传递的数据
- 父组件用v-on监听子组件的事件
#### 兄弟之间的传递 EventBus
- 兄弟之间传递数据需要借助于事件中心，通过事件中心传递数据
    - 提供事件中心`var hub = new Vue()`
- 传递数据方，通过一个事件触发hub.$emit(方法名，传递的数据)
- 接收数据方，通过mounted(){}钩子中 触发hub.$on()方法名
- 销毁事件 通过hub.$off()方法名销毁之后无法进行传递数据

### 组件插槽
- 组件的最大特性就是复用性，而用好插槽能大大提高组件的可复用能力
**组件插槽的作用**
- 父组件向子组件传递内容(模板的交互)
**具名插槽用法**
1. 插槽定义
 `例 <slot name="header"></slot>`
2. 插槽内容
 `例 <h1 slot="header">标题内容</h1>`
如果想在插槽中放入多个标签 可以在template中写上插槽名 内部可以添加多个插槽
```
<template slot="header">
    <h1></h1>
    <h2></h2>
</template>
```
**作用域插槽**
- 应用场景： 父组件对子组件的内容进行加工处理 (见笔记图片)