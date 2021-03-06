const path = require("path");
const merge = require("webpack-merge");
const config = require("./webpack.base.js");

const clientConfig = {
	mode: "development",
	entry: "./src/client/index.js", // 打包入口
	output: {
		// 打包生成文件配置， 文件名 ， 存放路径
		filename: "index.js", // 文件名
		path: path.resolve(__dirname, "public"), // 存放在根目录为build的文件夹中
	},
	module: {
		// 规则
		rules: [
			{
				test: /\.css?$/, // 文件类型为css
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: "[name]_[local]_[hash:base64:5]",
						},
					},
				],
			},
			{
				test: /\.(png|jpeg|jpg|gif|svg)?$/,
				loader: "url-loader",
				options: {
					limit: 8000,
					publicPath: "/",
				},
			},
		],
	},
};

module.exports = merge(config, clientConfig);
