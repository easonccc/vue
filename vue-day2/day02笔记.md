### 分支循环结构
##### v-if 使用场景
	1. 多个元素通过条件判断展示或者隐藏某个元素。或者多个元素
	2. 进行两个视图之间的切换
##### v-show和v-if的区别
	1. v-show本质就是标签display设置为none，控制隐藏
		v-show只编译一次，后面其实就是控制css，而v-if不停的销毁和创建，所以v-show性能更好一点。
	2. v-if是动态的向DOM树内添加或者删除DOM元素
		v-if切换有一个局部编译/卸载的过程，切换过程中适当的销毁的重构内部的事件监听和子组件
### 循环结构
##### v-for
    1. 用于循环的数组，里面的值可以是对象，也可以是普通元素
	2. 不推荐同时使用v-if和v-for
	3. 当v-if与v-for一起使用时，v-for具有比v-if更高的优先级
```
	循环结构--遍历数组
	<li v-for="item in items"> {{item.msg}} </li>
	//item 自己定义的名字 代表数组里面的每一项
	//items 对应的是data中的数组
	
	循环结构--遍历对象
	<div v-if="v==13" v-for="(v,k,i) in obj"{{v+k+i}}</div>
	// v 代表对象的value
	// k 代表对象的键
	// i 代表索引
```
 ##### key的作用
- key来给每一个节点做一个唯一标识
- key的作用主要是为了高效的更新虚拟DOM
 ``` <li v-for="item in items" :key="item.id">...</li>   ```

