let path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/main.js", // 打包入口
    output: {
        path: path.resolve("./dist"), // 打出的文件名字 path.join(__dirname, "名字")
        filename: "newMain.js" // 打包文件下的js文件名称
    },
    mode: "development", // 生产环境或者开发环境
    // watch: true // 为true，运行脚本默认监听文件，当文件有改动，会自动打包
    devServer: {
        hot: true,
        open: true,
        // host: "0.0.0.0",
        port: 9000,
        static: {
            directory: path.join(__dirname, "/dist"),
        },
    },
    plugins: [new HtmlWebpackPlugin({
        filename: "index.html", // 映射模板的html于根目录下，于打包出的js自动关联
        template: "./src/admin.html" // 被映射模板的位置
    })],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    }
}