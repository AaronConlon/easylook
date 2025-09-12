# hyx (means hybrid cross)

<img alt="hyx-logo" src="./packages/----pkg-uni/uni-assets/__RAW__/raw-logo/logo.svg" width="100" style="border-radius: 10%;" />

The project avoids using any **CROSS-PLATFORM** frameworks and instead focuses
on a **SINGLE** framework itself. However, we have shared common pages.

## this is a monorepo.

### shared

- ----pkg-config ......... 一些 eslint 配置
- ----pkg-platform ....... 平台特有包，里面是 h5/rn
- ----pkg-uni ............ 统一导出包，就是把 h5/rn 在这里统一导出

### apps

- app-website ............ 网站本身

### MEMO

### husky

项目只在 root 使用 husky，每次提交前会执行 记得
`node "$REPO_ROOT/scripts/monorepo-husky-lint-staged.cjs"` 检查，如需修改
lint，请修改此文件。

### rn

找到 `// RN-MONOREPO-MOD` 有一些正对 monorepo 修改的路径

多端必须指定 rn 一致版本：不然会出现 Invalid hook call. Hooks
"react": "xx.0.0",
"react-dom": "xx.0.0",
"react-native": "0.xx.0",




