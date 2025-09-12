未知原因，monorepo 直接建立 `----pkg-uni/uni-x-componetns` 引用会出错。所以把目录改为
`----pkg-uni/__uni-shared__/uni-x-components`。

这样 ln 引用就正常了。

TOOD 其原因可能是不能 ln 第一层目录，也可能是 ln cache 问题，待解决。

X as Cross

X 开头代表跨平台组件