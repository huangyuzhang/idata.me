---
title: Nginx 服务器常用命令
sidebar: auto
sidebarDepth: 2
footer: Copyright © 2018 Yuzhang Huang
---

# Nginx 服务器常用命令

## 启动 Nginx

```bash
nginx
```

## 查看 Nginx 进程

```bash
ps -ef|grep nginx
```

说明：nginx 的进程由主进程和工作进程组成。

## Nginx 重载配置

```bash
nginx -s reload
```

说明：常用于对 ningx 配置修改之后的刷新

## 查看 Nginx 版本

```bash
nginx -v
```

## 查看 Nginx 完整配置信息

```bash
nginx -V
```

说明：nginx 版本信息，编译版本，配置参数
