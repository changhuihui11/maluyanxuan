import { createApp } from 'vue'
import App from './App.vue'
// 引入路由
import router from './router/index'
let app = createApp(App)
// 引入字体图标的样式
import "./assets/fonts/iconfont.css"
// 引入flexible适配
import "./assets/flexible.js"
// 引入重置样式
import "./assets/reset.css"
// 引入组件样式
import vant from "vant"
import 'vant/lib/index.css'
app.use(vant)

app.use(router)
app.mount('#app')
