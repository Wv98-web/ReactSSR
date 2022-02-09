const Path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
	target: "node", // 服务器的文件
	mode: "development",
	entry: "./src/index.js", // 入口
	output: {
		// 打包生成文件
		filename: "bundle.js", // 文件名
		path: Path.resolve(__dirname, "build"), // 存放在根目录为build的文件夹中
	},
	externals: [nodeExternals()],
	module: {
		// 规则
		rules: [
			{
				test: /\.js?$/, // 检测文件类型
				loader: "babel-loader", // 使用loader 语法编译器
				exclude: /node_modules/, // 排除node_modules中的文件编译
				options: {
					// 额外配置
					presets: [
						"react",
						"stage-0",
						[
							"env", // 打包根据环境适配
							{
								targets: {
									browers: ["last 2 versions"], // 打包编译过程中babel兼容适配所有主流浏览器最后2个版本
								},
							},
						],
					],
				},
			},
		],
	},
};
