let { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin") // 根据映射，自动生成html文件，并且自动导入打包后的js文件
const MiniCssExtractPligin = require("mini-css-extract-plugin") // 打包合并css代码
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const toml = require("toml")
const yaml = require("yaml")
const json5 = require("json5")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: resolve(__dirname, "./dist"),
        clean: true, // 清理打包文件  
        assetModuleFilename: "images/[contenthash][ext]", // 定义打包过后的照片路径以及动态名称和原有后缀
    },
    //production
    // development
    mode: "development",
    devtool: "inline-source-map", // 精准报错信息与错误文件下，不在是编译后的报错文件以及行数
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // 映射打包好的html文件
            filename: "app.html", // 更改打包好的htm名字
            inject: "body" // 让导入的文件在head或者body中导入
        }),
        new MiniCssExtractPligin({
            filename: "style/[contenthash].css"
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
            },
            {
                test: /\.(css|less)$/,
                use: [MiniCssExtractPligin.loader, "css-loader", "less-loader"]
            },
            { // 将后缀为csv、tsv的文件转为数据
                test: /\.(csv|tsv)$/,
                use: "csv-loader"
            },
            {// 将后缀为xml的表格文件转为数据
                test: /\.xml$/,
                use: "xml-loader"
            },

            // 解析json格式，在文件中导入直接使用
            {
                test: /\.toml$/,
                type: 'json',
                parser: {
                    parse: toml.parse
                }
            },
            {
                test: /\.yaml$/,
                type: 'json',
                parser: {
                    parse: yaml.parse
                }
            },
            {
                test: /\.json5$/,
                type: 'json',
                parser: {
                    parse: json5.parse
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [
                            ["@babel/plugin-transform-runtime"]
                        ]
                    }
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin() // 开启压缩css, 但必须是在mode为production生产时起作用
        ]
    }
}