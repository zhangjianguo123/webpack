let { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: resolve(__dirname, "./dist"),
        clean: true, // 清理打包文件  
        assetModuleFilename: "images/[contenthash][ext]", // 定义打包过后的照片路径以及动态名称和原有后缀
    },
    mode: "development",
    devtool: "inline-source-map", // 精准报错信息与错误文件下，不在是编译后的报错文件以及行数
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // 映射打包好的html文件
            filename: "app.html", // 更改打包好的htm名字
            inject: "body" // 让导入的文件在head或者body中导入
        })
    ],
    devServer: {
        static: './dist'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: "asset/resource",
                generator: { // 优先级比output高
                    filename: "imgages/[contenthash][ext]"
                }
            }
        ]
    }
}