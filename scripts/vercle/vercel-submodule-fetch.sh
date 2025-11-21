#!/usr/bin/env bash
set -Eeuo pipefail

GITMODULES=".gitmodules"

# 根作用域声明变量
SUBMODULE_NAME=""
USERNAME=""
REPO_NAME=""
RAW_URL=""

echo " ---- VERCEL-SUBMODULE-FETCH ----"
echo " ---- VERCEL-SUBMODULE-FETCH ----"
echo " ---- VERCEL-SUBMODULE-FETCH ----"
echo " ---- VERCEL-SUBMODULE-FETCH ----"
echo "PWD: $(pwd)"

# 解析第一个 submodule
while read -r line; do
  # 去掉行首尾空格
  line="${line#"${line%%[![:space:]]*}"}"
  line="${line%"${line##*[![:space:]]}"}"

  # 匹配 submodule 名
  if [[ $line =~ ^\[submodule\ \"(.+)\"\]$ ]]; then
    SUBMODULE_NAME="${BASH_REMATCH[1]}"

  # 匹配 url
  elif [[ $line =~ ^url\ *=\ *(.*)$ ]]; then
    RAW_URL="${BASH_REMATCH[1]}"

    # 提取用户名和仓库名
    if [[ $RAW_URL =~ git@github\.com:([^/]+)/([^/]+)\.git ]]; then
      USERNAME="${BASH_REMATCH[1]}"
      REPO_NAME="${BASH_REMATCH[2]}"
    elif [[ $RAW_URL =~ https://github\.com/([^/]+)/([^/]+)\.git ]]; then
      USERNAME="${BASH_REMATCH[1]}"
      REPO_NAME="${BASH_REMATCH[2]}"
    else
      USERNAME=""
      REPO_NAME=""
    fi

    # 只取第一个 submodule
    break
  fi
done < "$GITMODULES"

# 输出检查
echo "SUBMODULE_NAME=$SUBMODULE_NAME"
echo "USERNAME=$USERNAME"
echo "REPO_NAME=$REPO_NAME"
echo "RAW_URL=$RAW_URL"




#
#
#
#

# 你已经在根作用域有这些变量
# SUBMODULE_NAME, USERNAME, REPO_NAME, RAW_URL

if [ -z "${GITHUB_ACCESS_TOKEN:-}" ]; then
  echo "GITHUB_ACCESS_TOKEN is empty!"
  exit 1
fi

# 生成带 token 的 HTTPS RAW_URL
NEXT_URL="https://oauth2:${GITHUB_ACCESS_TOKEN}@github.com/${USERNAME}/${REPO_NAME}.git"
#echo "NEXT_URL=$NEXT_URL"


git ls-remote "$NEXT_URL"

echo "Patching submodule $SUBMODULE_NAME RAW_URL..."
# 只替换指定 submodule 的 RAW_URL
# - 注意用 | 做分隔符，避免 RAW_URL 中的 /
sed -i".bak" "s|$RAW_URL|$NEXT_URL|" ".gitmodules"
#
## 同步 submodule
git submodule sync "$SUBMODULE_NAME"
#
## 初始化/更新 submodule
git submodule update --init --recursive "$SUBMODULE_NAME"
