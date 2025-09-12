# TIPS

`globalthis` 是给 `react-query` 使用的。兼容 `chrome69`.

发版命令一般是：

`yarn versionup && yarn build && yarn move-build-index-html-to-version-html && yarn sync-to-cdn && yarn show-cdn-version-html-url && yarn move-build-to-build-backup`

注释一下：

- `yarn versionup` // 更新版本
- `yarn build` // 打包
- `yarn move-build-index-html-to-version-html` // index.html 改名成版本号
- `yarn sync-to-cdn` // 上传到 CDN
- `yarn show-cdn-version-html-url` // 显示上传到 CDN 的 html 地址
- `yarn move-build-to-build-backup` // 按版本归档到 build-backup 目录




