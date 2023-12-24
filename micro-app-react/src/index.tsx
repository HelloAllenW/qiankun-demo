import "./public-path.js";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function render(props: { container: any; }) {
  const { container } = props;
  ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

// qiankun生命周期钩子
export async function bootstrap() {}
export async function mount(props: any) {
  // 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
  render(props);
}
export async function unmount(props: any) {
  // 应用每次 切出/卸载 会调用的unmount方法，通常在这里我们会卸载微应用的应用实例
  ReactDOM.unmountComponentAtNode(
    props.container ? props.container.querySelector('#root') : document.getElementById('root'),
  );
}

// @ts-ignore
// 如果不是qiankun就执行，以支持独立开发
if(!window.__POWERED_BY_QIANKUN__){
  ReactDOM.render(<App />, document.getElementById('root'));
}

// web-vitals
reportWebVitals();
