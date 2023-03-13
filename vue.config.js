const { defineConfig } = require("@vue/cli-service");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}

module.exports = defineConfig({
  // 开发环境应为/，生产环境为./
  publicPath: process.env.NODE_ENV !== "development" ? "./" : "/",
  // productionSourceMap: process.env.NODE_ENV === "development", // 不需要生产环境的 source map
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      "/zjApp": {
        target: "http://localhost:8085",
        ws: true,
        changOrigin: true,
      },
    },
  },
  chainWebpack: (config) => {
    // 简写路径
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"))
      .set("@views", resolve("src/views"))
      .set("@api", resolve("src/api"))
      .set("@utils", resolve("src/utils"))
      .set("@store", resolve("src/store"))
      .set("@router", resolve("src/router"))
      .set("@js", resolve("src/js"));

    config.when(process.env.NODE_ENV !== "development", (config) => {
      config.optimization.minimizer("terser").tap((options) => {
        // 去除log
        options[0].terserOptions.compress.drop_console = true;
        // 去除debugger
        options[0].terserOptions.compress.drop_debugger = true;
        return options;
      });
    });
  },
});
