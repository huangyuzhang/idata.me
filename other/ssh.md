---
title: ssh 设置教程
sidebar: auto
sidebarDepth: 2
footer: Copyright © 2018 Yuzhang Huang
---
# SSH 服务器设置教程
## SSH 加密连接设置
### 为本机创建 SSH 密钥
在本机命令行中输入以下代码创建本机密钥。
```bash
ssh-keygen -t rsa -C "youremail@example.com"
```
你需要把邮件地址换成你自己的邮件地址，然后一路回车，使用默认值即可，由于这个Key也不是用于军事目的，所以也无需设置密码。

如果一切顺利的话，可以在当前机器的用户主目录里找到`.ssh`目录，里面有`id_rsa`和`id_rsa.pub`两个文件，这两个就是SSH Key的秘钥对，`id_rsa`是私钥，不能泄露出去，`id_rsa.pub`是公钥，可以放心地告诉任何人。

### 将本地 SSH 公钥对添加到服务器

之后我们可以到自己的服务器或者 GitHub 账号中添加该账户。

GitHub的设置比较简单，在 "Account Settings" 里面找到 "SSH Keys" 添加即可。

如果是自己的服务器或者 VPS，则有两种方法，原理相同。

【方法一】：以 `root` 用户为例，在服务器root根目录中找到 `.ssh` 文件夹，将 SSH 密钥对添加到 "authorized_keys" 文件中（一行一个）。（如果没有该文件夹可以新建一个）

【方法二】：在本地客户端的命令行中输入以下代码直接将本机的公钥提交到远程服务器中，即自动完成上一步骤的操作。（期间需要输入一次服务器的ssh密码）

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub root@远程服务器的IP地址 -p 端口号
```
