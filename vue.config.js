const path = require("path");
const webpack = require("webpack");
module.exports = {
  // 导入jQuery
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",

        jQuery: "jquery",
        "windows.jQuery": "jquery",
      }),
    ],
  },

  // 基本路径
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  // 构建时的输出目录
  outputDir: "dist",
  // 放置静态资源的目录
  assetsDir: "static",
  // html输出的主路径
  indexPath: "index.html",
  // 文件名哈希
  filenameHashing: true,

  // 多页面配置，默认undefined
  pages: {
    index: {
      // 入口文件
      entry: "src/main.js",
      // 模板文件
      template: "public/index.html",
      // 在dist中输出文件名称
      filename: "index.html",
      // 当使用页面title时
      // template中的title标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "3D模型展示",
      // 在这个页面中包含的块，默认情况下会包含提取出来的通用的chunk和vender chunk
      chunk: ["chunk-vendors", "chunk-common", "index"],
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'
  },

  // 是否在保存时使用'eslint-loader'进行检查
  // true || 'warning' 输出编译警告到命令行，不影响编译
  // 'default' 强制输出为编译错误且导致编译失败
  // 'error' 将编译警告输出为编译错误且导致编译失败
  lintOnSave: true,

  // 是否使用包含运行时编译器的vue构建版本(使用会让应用多10kb)
  runtimeCompiler: false,

  // 想要Babel显示编译的依赖，默认为[]
  // transpileDependencies: [],
  // 生产环境的source map，默认为true
  // productionSourceMap: true,
  // 设置link和script标签跨域，默认为undefined
  // crossorigin: "",
  // 子资源的完整性保证，即在link和script上生成integrity属性，默认为false
  // integrity: false
  //  调整内部的 webpack 配置
  //   chainWebpack: (config) => {},
  configureWebpack: (config) => {
    config.resolve = {
      extensions: [".js", ".json", ".vue"],
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@c": path.resolve(__dirname, "./src/components"),
        assets: "@/assets",
        components: "@/components",
        network: "@/network",
        views: "@/views",
      },
    };
  }, //(Object | Function)

  // CSS相关选项

  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
  },

  // 配置webpack-dev-server行为
  devServer: {
    open: process.platform === "darwin",
    host: "localhost",
    port: "8080",
    https: false,
    // 代理跨域,值为String或者Object
    // proxy: "",
    // proxy: {
    //   "/api": {
    //     target: "<url>",
    //     ws: true,
    //     changeOrigin: true,
    //   },
    // },

    // cpu多于一个内核时自动启用多线程加载，用于生产构建
    // parallel: require('os').cpus().length > 1,
    // 不进行任何scheme验证的选项
    // pluginOptions: {
    //     foo: {
    //         //插件可以作为`options.pluginOptions.foo`来访问这些选项
    //     }
    // },
  },
};
