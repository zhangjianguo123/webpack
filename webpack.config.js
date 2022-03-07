let path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/main.js", // 打包入口
    output: {
        path: path.resolve("./dist"), // 打出的文件名字 path.join(__dirname, "名字")
        filename: "newMain.js" // 打包文件下的js文件名称
    },
    mode:"development", // 生产环境或者开发环境
    // watch: true // 为true，运行脚本默认监听文件，当文件有改动，会自动打包
    devServer: {
        static: {
            directory: path.join(__dirname, "/"),
        },
    },
    plugins: [new HtmlWebpackPlugin()],
}