const path = require("path");

module.exports = {
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
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 1024,   // 小于1024 就会将图片转换为base64代码，写入到输出文件中
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};