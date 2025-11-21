## 该项目包函 submodule

### 一次性把 submodule 拉回来:

`git clone --recursive git@github.com:SolidZORO/hyx-admin-3-single.git`

### 保持 submodule 同步:

`git pull --recurse-submodules && git submodule update --init --recursive`

## 如果项目是空的:

删掉 `.gitmodules`

`git submodule init`

`git submodule add git@github.com:SolidZORO/hyx-shared-codes.git src/__shared__`

然后可以用 `git submodule status` 检查状态

## TIPS

`globalthis` 是给 `react-query` 使用的。兼容 `chrome69`.

请基于 `.env.example` 创建两个 dotenv，分别对应

- 开发：`.env.development`
- 生产：`.env.production`

# 0fff99
