const Path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/client/index.js", // 打包入口
	output: {
		// 打包生成文件配置， 文件名 ， 存放路径
		filename: "index.js", // 文件名
		path: Path.resolve(__dirname, "public"), // 存放在根目录为build的文件夹中
	},
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
