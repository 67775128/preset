module.exports = (api, options, rootOptions) => {
    // 修改 `package.json` 里的字段
    // 复制并用 ejs 渲染 `./template` 内所有的文件
    api.render('./template')
    console.log(options, rootOptions)
  }