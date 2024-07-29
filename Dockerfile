# 使用官方的 Node.js 镜像作为基础镜像
FROM node:20-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm ci

# 复制整个项目
COPY . .

# 构建 Next.js 应用
RUN npm run build

# 暴露应用运行的端口（默认情况下 Next.js 运行在 3000 端口）
EXPOSE 80

# 启动 Next.js 应用
CMD ["npm", "start"]