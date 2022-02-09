import React from "react";
import ReactDOM from "react-dom";
import Home from "../containers/Home";

// 同构:一套React代码，在服务器端执行一次，再在客户端再执行一次

/**
 * 实现同构
 * 配置 webpack.client.js
 * 创建 client文件夹 用来放客户端代码源文件
 * 把组件渲染到根节点上
 */

// hydrate
ReactDOM.hydrate(<Home />, document.getElementById("root"));
