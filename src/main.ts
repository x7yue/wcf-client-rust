import { createApp, Directive } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/styles/index.scss";
import "uno.css";
import "element-plus/theme-chalk/src/message.scss";
import "element-plus/theme-chalk/src/loading.scss";
import { router } from '@/router';
import 'dayjs/locale/zh-cn';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { createPinia } from 'pinia';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import * as directives from "@/directives";
import { Splitpanes, Pane } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';

const app = createApp(App);
// 自定义指令
Object.keys(directives).forEach(key => {
  app.directive(key, (directives as { [key: string]: Directive })[key]);
});
// 引入所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.component('Splitpanes', Splitpanes);
app.component('Pane', Pane);
app.use(ElementPlus, {
  size: 'small',
  locale: zhCn
});
app.use(router);
app.use(createPinia());
app.mount("#app");