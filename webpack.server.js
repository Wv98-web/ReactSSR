const path = require("path");
const nodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge");
const config = require("./webpack.base.js");

const serverConfig = {
	target: "node", // 服务器的文件
	mode: "development",
	entry: "./src/server/index.js", // 入口
	output: {
		// 打包生成文件
		filename: "bundle.js", // 文件名
		path: path.resolve(__dirname, "build"), // 存放在根目录为build的文件夹中
	},
	externals: [nodeExternals()],
	module: {
		// 规则
		rules: [
			{
				test: /\.css?$/, // 文件类型为css
				use: [
					"isomorphic-style-loader",
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
		],
	},
};

module.exports = merge(config, serverConfig);
