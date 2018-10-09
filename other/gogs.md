---
sidebar: auto
---
# Gogs.io 配置教程
:::tip 教程前提
- 【服务器环境】：Linux
- 【web环境】：nginx
- 【安装域名】：git.abc.com（需更换为你的域名或IP）
- 【安装模式】：二进制安装（无需安装golang）
- 【数据库】：SQLite3
- 【代码规范】：`$`为远程服务器指令，`#`为本地服务器指令，`>`为远程服务器输出结果
- 【Gogs.io官方手册】：[https://gogs.io/docs/installation](https://gogs.io/docs/installation)
:::
## 安装准备
1. ssh链接服务器，通过以下代码了解服务器的处理器和位数：
```bash
$ cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c
$ getconf LONG_BIT
```
结果如下：
```
> 2  Intel(R) Xeon(R) CPU   L5520  @ 2.27GHz
> 64
```
2. 前往[gogs.io官网](https://gogs.io/docs/installation/install_from_binary.html)获取对应二进制版本压缩包链接，如：`https://dl.gogs.io/0.11.53/gogs_0.11.53_linux_amd64.zip`
3. 为服务器添加用户 `git`，并分配目录`/home/git/`：
```bash{2,3}
$ adduser -d /home/git -m git 
# 用户名为git，若不存在改目录则会创建 
# 输入设置git用户的密码
$ chmod 755 /home/git
$ su git
$ mkdir .ssh && chmod 700 .ssh
$ touch .ssh/authorized_keys && chmod 600 .ssh/authorized_keys
```
:::tip
本步骤详细参考[在个人服务器上搭建git服务，创建属于自己的私人仓库](https://juejin.im/post/5a2696fcf265da43305e5423)
:::

## 安装 Gogs.io
以上面创建的git用户登录远程服务器：
```bash
ssh git@服务器ip地址 -p 端口号
```
此时会进入`git`用户的根目录，即上面创建的`/home/git/`，之后我们直接让服务器通过`wget`下载gogs.io的二进制版本，并解压缩：
```bash{3,4,5}
$ wget https://dl.gogs.io/0.11.53/gogs_0.11.53_linux_amd64.zip
$ unzip gogs_0.11.53_linux_amd64.zip
# 注意必须以git用户在命令行进行本操作，
# 这样解压缩的`gogs`文件夹的所有者是
# `git`，以便后面的安装。
$ cd gogs
$ ./gogs web
```
之后gogs会创建一个本地服务，监听`:3000`端口，此时我们在浏览器地址栏中输入网站IP（或域名）后面加入`:3000`进行访问，如：`http://git.abc.com:3000/`。

此时会进入 Gogs.io 的安装向导，最方便的就是选择 SQLite3 作为数据库，我们需要将域名和访问路径修改为自己网站的域名，用户选择为 `git`，并在最下面创建一个管理员用户，之后点安装，即可安装完成。

## nginx反向代理
安装完成之后我们需要通过如 `http://git.abc.com:3000`的方式访问网站，这样非常不美观，不过我们可以通过反向代理的方式来通过不包含端口号访问网站。
在 `nginx.conf` 文件中，将下面的 `server` 部分增加至 `http` 分区内并重载nginx的配置：
```nginx
server {
    listen 80;
    server_name git.abc.com;

    location / {
        proxy_pass http://localhost:3000;
    }
}
```
\* 如果服务器安装了宝塔面板，也可以使用面板的反向代理功能。
:::tip
本章节具体细节及其他设置方式（如HTTPS设置），可参考gogs.io官方文档：[https://gogs.io/docs/intro/faqs](https://gogs.io/docs/intro/faqs)
:::

## 守护式运行 Gogs.io
默认开启gogs.io服务的方式即在gogs目录执行以下命令，但是如果关闭了ssh进程就停止了。
```bash
$ ./gogs web
```
Gogs 官方提供了一些第三方的守护式运行gogs.io的方法，下面摘抄了通过`systemd`的方法，更多方法请参考：[如何以守护进程形式运行？](https://gogs.io/docs/intro/faqs#%E5%A6%82%E4%BD%95%E4%BB%A5%E5%AE%88%E6%8A%A4%E8%BF%9B%E7%A8%8B%E5%BD%A2%E5%BC%8F%E8%BF%90%E8%A1%8C%EF%BC%9F)

### Systemd 服务
在 GitHub 上的 Gogs 仓库有一个 [systemd 服务模版文件](https://github.com/gogs/gogs/blob/master/scripts/systemd/gogs.service)，您需要做出一定的修改才能够使用它：

更新 `User`、`Group`、`WorkingDirectory`、`ExecStart` 和 `Environment` 为相对应的值。其中 `WorkingDirectory` 为您的 Gogs 实际安装路径根目录。
> Simon：按照上述教程安装不需要做任何修改

[可选] 如果您 Gogs 安装示例使用 MySQL/MariaDB、PostgreSQL、Redis 或 memcached，请去掉相应 After 属性的注释。

当您完成修改后，请将文件保存至 `/etc/systemd/system/gogs.service`，然后通过 `sudo systemctl enable gogs` 命令激活，最后执行 `sudo systemctl start gogs`。

您可以通过 `sudo systemctl status gogs -l` 或 `sudo journalctl -b -u gogs` 命令检查 Gogs 的运行状态。