# GitHub Actions 环境变量配置指南

## 🔧 **环境变量设置方法**

### **1. 在 GitHub Actions 中设置（推荐）**

在 `.github/workflows/build-and-deploy.yml` 中，您可以在不同级别设置环境变量：

#### **A. Job 级别（整个任务可用）**
```yaml
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    env:
      NODE_ENV: production
      CI: true
```

#### **B. Step 级别（单个步骤可用）**
```yaml
- name: 构建前端项目
  run: |
    cd packages/app-website
    yarn build
  env:
    # RSBuild 配置
    GENERATE_SOURCEMAP: false
    NODE_ENV: production
    
    # React 应用环境变量（REACT_APP_ 前缀）
    REACT_APP_API_BASE_URL: ${{ secrets.API_BASE_URL }}
    REACT_APP_APP_VERSION: ${{ github.sha }}
    REACT_APP_BUILD_TIME: ${{ github.run_number }}
    REACT_APP_ENVIRONMENT: production
    
    # 自定义构建配置
    REACT_APP_COMMIT_HASH: ${{ github.sha }}
    REACT_APP_BRANCH: ${{ github.ref_name }}
```

### **2. 使用 GitHub Secrets**

对于敏感信息，在 GitHub 仓库设置中添加 Secrets：

#### **需要添加的 Secrets：**
```
# 服务器连接（已有）
REMOTE_HOST: "47.103.92.149" 
REMOTE_USER: "root"
SSH_PRIVATE_KEY: "..."
REMOTE_TARGET_PATH: "/home/root/easylook"

# 应用配置（新增）
API_BASE_URL: "https://your-api.com"
DATABASE_URL: "..."
THIRD_PARTY_API_KEY: "..."
```

#### **在工作流中使用：**
```yaml
env:
  REACT_APP_API_URL: ${{ secrets.API_BASE_URL }}
  REACT_APP_KEY: ${{ secrets.THIRD_PARTY_API_KEY }}
```

### **3. 动态环境变量**

您还可以动态生成环境变量：

```yaml
- name: 设置动态环境变量
  run: |
    echo "BUILD_TIMESTAMP=$(date -u +%Y%m%d_%H%M%S)" >> $GITHUB_ENV
    echo "SHORT_SHA=${GITHUB_SHA:0:7}" >> $GITHUB_ENV

- name: 构建项目
  run: |
    cd packages/app-website
    yarn build
  env:
    REACT_APP_BUILD_ID: ${{ env.BUILD_TIMESTAMP }}
    REACT_APP_COMMIT_SHORT: ${{ env.SHORT_SHA }}
```

## 🎯 **常用环境变量示例**

### **React/前端应用常用变量：**
```yaml
env:
  # React 环境变量（必须以 REACT_APP_ 开头）
  REACT_APP_VERSION: ${{ github.ref_name }}
  REACT_APP_BUILD_NUMBER: ${{ github.run_number }}
  REACT_APP_COMMIT_HASH: ${{ github.sha }}
  REACT_APP_BUILD_TIME: ${{ github.run_number }}
  REACT_APP_ENVIRONMENT: production
  
  # API 配置
  REACT_APP_API_BASE_URL: ${{ secrets.API_BASE_URL }}
  REACT_APP_CDN_URL: ${{ secrets.CDN_URL }}
  
  # 功能开关
  REACT_APP_ENABLE_ANALYTICS: true
  REACT_APP_DEBUG_MODE: false
```

### **构建工具配置：**
```yaml
env:
  # RSBuild/Webpack 配置
  NODE_ENV: production
  GENERATE_SOURCEMAP: false
  ANALYZE_BUNDLE: false
  
  # Node.js 配置
  NODE_OPTIONS: "--max-old-space-size=8192"
  
  # Yarn 配置
  YARN_CACHE_FOLDER: ~/.yarn-cache
```

## 📝 **在您的项目中应用**

基于您的 RSBuild 配置，我建议添加以下环境变量：

```yaml
- name: 构建前端项目
  run: |
    cd packages/app-website
    yarn build
  env:
    # RSBuild 构建配置
    NODE_ENV: production
    GENERATE_SOURCEMAP: false
    
    # 应用信息
    REACT_APP_VERSION: ${{ github.ref_name }}
    REACT_APP_COMMIT: ${{ github.sha }}
    REACT_APP_BUILD_NUMBER: ${{ github.run_number }}
    
    # API 配置（根据实际需求添加）
    REACT_APP_API_BASE_URL: ${{ secrets.API_BASE_URL || 'https://your-default-api.com' }}
    
    # 部署环境标识
    REACT_APP_ENVIRONMENT: production
```

## 🔒 **安全最佳实践**

1. **敏感信息** → 使用 GitHub Secrets
2. **公开信息** → 可以直接在 workflow 中设置
3. **环境特定** → 考虑使用 Environment Secrets
4. **命名规范** → React 应用使用 `REACT_APP_` 前缀

## 💡 **提示**

- 所有以 `REACT_APP_` 开头的环境变量会自动注入到前端构建中
- 使用 `${{ secrets.VAR_NAME || 'default_value' }}` 语法提供默认值
- 可以在构建日志中通过 `echo` 验证环境变量是否正确设置（注意不要输出敏感信息）

## 📋 **完整的 GitHub Secrets 配置清单**

### **必需的服务器连接 Secrets：**
```
REMOTE_HOST: "47.103.92.149"
REMOTE_USER: "root"
SSH_PRIVATE_KEY: "-----BEGIN OPENSSH PRIVATE KEY-----\n..."
REMOTE_TARGET_PATH: "/home/root/easylook"
```

### **应用环境变量 Secrets（根据需要配置）：**
```
# 应用基础信息
REACT_APP_NAME: "EasyLook Website"

# API 端点配置
REACT_APP_API_BASE_URL: "https://your-api.com"
REACT_APP_CDN_URL: "https://your-cdn.com" 
REACT_APP_UPLOAD_URL: "https://your-upload.com"
REACT_APP_PAGE_CNAME: "easylook_website"

# 功能配置
REACT_APP_ENABLE_DARK_THEME: "true"

# 调试配置（可选）
REACT_APP_DEBUG_BAR_PASSWORD_HASH: "your_debug_hash"
```

### **配置步骤：**
1. 进入 GitHub 仓库 → Settings → Secrets and variables → Actions
2. 点击 "New repository secret"
3. 逐一添加上述 Secrets
4. 根据您的实际环境修改对应的值

### **注意事项：**
- 🔒 **SSH_PRIVATE_KEY** 必须包含完整的私钥内容（包括头尾）
- 🌐 **API URLs** 请使用实际的 API 地址
- 🎨 **PAGE_CNAME** 用于 API 调用中的页面标识符
- 🔧 不需要的环境变量可以不配置，工作流会使用默认值或跳过
