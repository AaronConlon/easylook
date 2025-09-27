# GitHub Actions 前端构建自动部署配置说明

本项目已配置 GitHub Actions 自动构建和部署功能。每当 main 分支有新的推送或 PR 合并时，将自动执行以下操作：

1. 检出代码
2. 设置 Node.js 环境
3. 安装依赖并构建前端项目 (`packages/app-website`)
4. 压缩构建产物为 zip 文件
5. 通过 SCP 将压缩文件推送到远程服务器
6. 在远程服务器上解压并执行预设的 Docker 构建脚本

## 🔧 必需的 GitHub Secrets 配置

在使用此 Docker 自动部署功能前，您需要在 GitHub 仓库中配置以下 Secrets：

### 必需的 Secrets：

1. **`REMOTE_HOST`**
   - 值：`47.103.92.149`
   - 描述：远程服务器的 IP 地址

2. **`REMOTE_USER`** 
   - 值：`root`
   - 描述：远程服务器的登录用户名

3. **`SSH_PRIVATE_KEY`**
   - 值：SSH 私钥的完整内容
   - 描述：用于 SSH 连接的私钥（需要包含完整的私钥，包括头尾）

### 可选的 Secrets：

4. **`REMOTE_PORT`** (可选)
   - 默认值：`22`
   - 描述：SSH 连接端口

5. **`REMOTE_TARGET_PATH`** (可选)
   - 默认值：`/root/`
   - 描述：远程服务器上用于存放构建文件和执行脚本的路径

## 📝 如何配置 Secrets

1. 进入您的 GitHub 仓库页面
2. 点击 "Settings" 标签页
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 按钮
5. 添加上述必需的 Secrets

## 🔐 SSH 密钥配置

### 1. 生成 SSH 密钥对（如果还没有）：

```bash
ssh-keygen -t ed25519 -C "github-actions@your-domain.com"
```

### 2. 将公钥添加到远程服务器：

```bash
# 将公钥内容复制到远程服务器的 authorized_keys
cat ~/.ssh/id_ed25519.pub | ssh root@47.103.92.149 "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

### 3. 将私钥添加到 GitHub Secrets：

- 复制私钥的完整内容：`cat ~/.ssh/id_ed25519`
- 将内容粘贴到 GitHub Secrets 中的 `SSH_PRIVATE_KEY`

## 🚀 部署流程

工作流将执行以下步骤：

1. **代码检出**：获取最新代码
2. **环境准备**：设置 Node.js 18 环境，启用 Yarn 缓存
3. **依赖安装**：使用 `yarn install --frozen-lockfile` 安装依赖
4. **前端构建**：在 `packages/app-website` 目录执行 `yarn build`
5. **产物验证**：检查构建产物是否存在
6. **文件压缩**：将构建产物压缩为 `build.zip`
7. **文件传输**：使用 SCP 将压缩文件推送到远程服务器
8. **远程部署**：在远程服务器上解压文件并执行预设的 sh 脚本
9. **状态通知**：显示部署成功或失败的消息

## 🐳 VPS 端 Docker 架构

- **构建方式**：在 VPS 上通过您预设的 sh 脚本构建 Docker 镜像
- **Web 服务器**：Caddy 2.x（在您的脚本中配置）
- **SPA 支持**：通过 Caddyfile 配置 `try_files` 实现前端路由回退
- **构建产物来源**：GitHub Actions 构建并传输的前端文件

## 📁 文件传输流程

- **GitHub Actions 构建**：`./packages/app-website/build/` → `build.zip`
- **SCP 传输**：`build.zip` → `47.103.92.149:/root/` (或自定义路径)
- **VPS 处理**：解压 → 执行 sh 脚本 → Docker 镜像构建 → 容器运行

## 📋 VPS 脚本要求

GitHub Actions 会在远程服务器上寻找以下脚本之一：
- `rebuild-docker.sh`
- `rebuild-docker-caddy.sh`

该脚本应该：
1. 使用解压后的 `build/` 目录中的前端文件
2. 构建包含 Caddy 服务器的 Docker 镜像
3. 停止旧容器并启动新容器
4. 配置 Caddy 的 `try_files` 回退到 `index.html`

### 示例 VPS 脚本结构：

```bash
#!/bin/bash
# rebuild-docker.sh

# 构建新的 Docker 镜像（使用当前目录的 build/ 文件夹）
docker build -t easylook-website:latest .

# 停止并删除旧容器
docker stop easylook-website || true
docker rm easylook-website || true

# 运行新容器
docker run -d \
  --name easylook-website \
  --restart unless-stopped \
  -p 80:80 \
  easylook-website:latest

echo "✅ Docker 容器已重新部署"
```

## ⚠️ 注意事项

1. **VPS 脚本**：确保在 VPS 上有可执行的重建脚本 (`rebuild-docker.sh` 或 `rebuild-docker-caddy.sh`)
2. **Docker 环境**：确保远程服务器已安装 Docker 并正在运行
3. **权限检查**：确保远程服务器的目标目录有写入权限
4. **网络连通性**：确保 GitHub Actions runner 能够访问目标服务器
5. **SSH 配置**：确保 SSH 密钥配置正确，可以无密码登录
6. **端口占用**：确保远程服务器的 80 端口可用，或修改端口映射
7. **构建依赖**：确保 `packages/app-website` 目录下的 `package.json` 包含 `build` 脚本

## 🐛 故障排除

如果部署失败，请检查：

1. **GitHub Secrets** 是否正确配置
2. **SSH 密钥** 是否有效
3. **远程服务器** 是否可访问
4. **Docker 服务** 是否在远程服务器上运行
5. **端口冲突** 检查 80 端口是否被占用
6. **权限问题** 目标路径是否有写入权限
7. **镜像大小** 确保磁盘空间足够存储 Docker 镜像

### 常用调试命令

在远程服务器上检查容器状态：
```bash
# 查看运行中的容器
docker ps

# 查看容器日志
docker logs easylook-website

# 查看所有容器（包括停止的）
docker ps -a

# 查看 Docker 镜像
docker images
```

查看 GitHub Actions 日志可以获取详细的错误信息。

## 🔄 手动部署

如需手动部署，可以在服务器上执行：

```bash
# 停止旧容器
docker stop easylook-website
docker rm easylook-website

# 运行新容器
docker run -d \
  --name easylook-website \
  --restart unless-stopped \
  -p 80:80 \
  easylook-website:latest
```
