const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === "development"; // 启动时设置的全局变量，会有都在process.env当中。

var config = {
    target: "web",
    entry: path.join(__dirname, "src/index.js"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "stylus-loader"  //stylus 很好用的css预处理器  (可以研究一下)
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                // use: [
                //     {
                //         loader: "url-loader",
                //         options: {
                //             limit: 8192,   // 小于1024 就会将图片转换为base64代码，写入到输出文件中
                //             name: '[name].[ext]'
                //         }
                //     }
                // ]
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ]
};

if(isDev){
    config.devServer = {
        port: '8000',
        host: "0.0.0.0",
        overlay: {
            errors: true //让错误直接显示到网页上
        }
    }
}

module.exprots = config;