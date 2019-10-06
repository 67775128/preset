module.exports = (api, options, rootOptions) => {
    // 修改 `package.json` 里的字段
  if (options.mockjs) {
    api.extendPackage({
      devDependencies: {
        "mockjs": "^1.0.1-beta3"
      }
    });
  }
    // 复制并用 ejs 渲染 `./template` 内所有的文件
    
    api.render({
      './src': './template'
    })
    console.log(options, rootOptions)
  }