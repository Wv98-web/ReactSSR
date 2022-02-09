import express from "express";
import { render } from "./utils";

// 虚拟Dom是真实DOM的一个javascript对象映射 提升页面渲染性能
// 服务器渲染ssr 首屏速度加快，seo效果提升

// 客户端渲染
// React代码在浏览器上执行，消耗的是用户浏览器的性能

// 服务器端渲染
// React代码在服务器上执行，消耗的是服务器端的性能

const app = express();
const port = 3000;

app.use(express.static("public")); // 请求静态文件，就到根目录找

app.get("*", function (req, res) {
	res.send(render(req));
});

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
