let path = require("path")
module.exports = {
    entry: "./src/main.js", // 打包入口
    output: {
        path: path.resolve("./dist"), // 打出的文件名字 path.join(__dirname, "名字")
        filename: "index.js" // 打包文件下的js文件名称
    },
    mode:"development", // 生产环境或者开发环境
    watch: true // 为true，运行脚本默认监听文件，当文件有改动，会自动打包
}