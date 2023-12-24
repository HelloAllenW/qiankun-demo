import './public-path'
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/common.css'

Vue.config.productionTip = false

// 定义一个Vue实例
let instance = null

// 渲染方法
function render(props = {}) {
  const { container } = props
  instance = new Vue({
    router,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

//微应用通过 props 获取通信方法
function storeTest(props) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true,
    );
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name,
      },
    });
}

// 暴露qiankun生命周期钩子
export async function bootstrap() {}
export async function mount(props) {
  // 在应用每次进入时调用
  storeTest(props);
  render(props);
}
export async function unmount() {
  // 应用每次 切出/卸载 均会调用
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}