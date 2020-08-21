//创建组件构造器对象

const cpnC = Vue.extend({
	template: `
	<div>
		<h2>这里是标题</h2>
		<p>这是内容11111111111</p>
		<p>这是内容22222222222</p>
	</div>
	`
})
//注册组件
Vue.component("my-cpn",cpnC)

//使用组件(必须挂载在某个vue实例下才可以使用)

const app = new Vue({
	el:"#app1",
	data:{
		message:"hello"
	}
})