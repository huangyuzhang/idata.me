(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{179:function(s,t,e){"use strict";e.r(t);var a=e(0),n=Object(a.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[s._m(0),s._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("教程前提")]),s._v(" "),e("ul",[e("li",[s._v("【服务器环境】：Linux")]),s._v(" "),e("li",[s._v("【web环境】：nginx")]),s._v(" "),e("li",[s._v("【安装域名】：git.abc.com（需更换为你的域名或IP）")]),s._v(" "),e("li",[s._v("【安装模式】：二进制安装（无需安装golang）")]),s._v(" "),e("li",[s._v("【数据库】：SQLite3")]),s._v(" "),s._m(1),s._v(" "),e("li",[s._v("【Gogs.io官方手册】："),e("a",{attrs:{href:"https://gogs.io/docs/installation",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://gogs.io/docs/installation"),e("OutboundLink")],1)])])]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),s._m(4),e("p",[s._v("结果如下：")]),s._v(" "),s._m(5),e("ol",{attrs:{start:"2"}},[e("li",[s._v("前往"),e("a",{attrs:{href:"https://gogs.io/docs/installation/install_from_binary.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("gogs.io官网"),e("OutboundLink")],1),s._v("获取对应二进制版本压缩包链接，如："),e("code",[s._v("https://dl.gogs.io/0.11.53/gogs_0.11.53_linux_amd64.zip")])]),s._v(" "),s._m(6)]),s._v(" "),s._m(7),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("本步骤详细参考"),e("a",{attrs:{href:"https://juejin.im/post/5a2696fcf265da43305e5423",target:"_blank",rel:"noopener noreferrer"}},[s._v("在个人服务器上搭建git服务，创建属于自己的私人仓库"),e("OutboundLink")],1)])]),s._v(" "),s._m(8),s._v(" "),e("p",[s._v("以上面创建的git用户登录远程服务器：")]),s._v(" "),s._m(9),s._m(10),s._v(" "),s._m(11),s._m(12),s._v(" "),s._m(13),s._v(" "),s._m(14),s._v(" "),s._m(15),s._v(" "),s._m(16),e("p",[s._v("* 如果服务器安装了宝塔面板，也可以使用面板的反向代理功能。")]),s._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("本章节具体细节及其他设置方式（如HTTPS设置），可参考gogs.io官方文档："),e("a",{attrs:{href:"https://gogs.io/docs/intro/faqs",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://gogs.io/docs/intro/faqs"),e("OutboundLink")],1)])]),s._v(" "),s._m(17),s._v(" "),e("p",[s._v("默认开启gogs.io服务的方式即在gogs目录执行以下命令，但是如果关闭了ssh进程就停止了。")]),s._v(" "),s._m(18),e("p",[s._v("Gogs 官方提供了一些第三方的守护式运行gogs.io的方法，下面摘抄了通过"),e("code",[s._v("systemd")]),s._v("的方法，更多方法请参考："),e("a",{attrs:{href:"https://gogs.io/docs/intro/faqs#%E5%A6%82%E4%BD%95%E4%BB%A5%E5%AE%88%E6%8A%A4%E8%BF%9B%E7%A8%8B%E5%BD%A2%E5%BC%8F%E8%BF%90%E8%A1%8C%EF%BC%9F",target:"_blank",rel:"noopener noreferrer"}},[s._v("如何以守护进程形式运行？"),e("OutboundLink")],1)]),s._v(" "),s._m(19),s._v(" "),e("p",[s._v("在 GitHub 上的 Gogs 仓库有一个 "),e("a",{attrs:{href:"https://github.com/gogs/gogs/blob/master/scripts/systemd/gogs.service",target:"_blank",rel:"noopener noreferrer"}},[s._v("systemd 服务模版文件"),e("OutboundLink")],1),s._v("，您需要做出一定的修改才能够使用它：")]),s._v(" "),s._m(20),s._v(" "),s._m(21),s._v(" "),e("p",[s._v("[可选] 如果您 Gogs 安装示例使用 MySQL/MariaDB、PostgreSQL、Redis 或 memcached，请去掉相应 After 属性的注释。")]),s._v(" "),s._m(22),s._v(" "),s._m(23)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"gogs-io-配置教程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gogs-io-配置教程","aria-hidden":"true"}},[this._v("#")]),this._v(" Gogs.io 配置教程")])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[this._v("【代码规范】："),t("code",[this._v("$")]),this._v("为远程服务器指令，"),t("code",[this._v("#")]),this._v("为本地服务器指令，"),t("code",[this._v(">")]),this._v("为远程服务器输出结果")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"安装准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装准备","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装准备")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",[t("li",[this._v("ssh链接服务器，通过以下代码了解服务器的处理器和位数：")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo "),e("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" name "),e("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{attrs:{class:"token function"}},[s._v("cut")]),s._v(" -f2 -d: "),e("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{attrs:{class:"token function"}},[s._v("uniq")]),s._v(" -c\n$ getconf LONG_BIT\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("> 2  Intel(R) Xeon(R) CPU   L5520  @ 2.27GHz\n> 64\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[this._v("为服务器添加用户 "),t("code",[this._v("git")]),this._v("，并分配目录"),t("code",[this._v("/home/git/")]),this._v("：")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ adduser -d /home/git -m "),e("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" \n"),e("span",{attrs:{class:"token comment"}},[s._v("# 用户名为git，若不存在改目录则会创建 ")]),s._v("\n"),e("span",{attrs:{class:"token comment"}},[s._v("# 输入设置git用户的密码")]),s._v("\n$ "),e("span",{attrs:{class:"token function"}},[s._v("chmod")]),s._v(" 755 /home/git\n$ "),e("span",{attrs:{class:"token function"}},[s._v("su")]),s._v(" "),e("span",{attrs:{class:"token function"}},[s._v("git")]),s._v("\n$ "),e("span",{attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" .ssh "),e("span",{attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{attrs:{class:"token function"}},[s._v("chmod")]),s._v(" 700 .ssh\n$ "),e("span",{attrs:{class:"token function"}},[s._v("touch")]),s._v(" .ssh/authorized_keys "),e("span",{attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{attrs:{class:"token function"}},[s._v("chmod")]),s._v(" 600 .ssh/authorized_keys\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"安装-gogs-io"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-gogs-io","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装 Gogs.io")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("ssh")]),this._v(" git@服务器ip地址 -p 端口号\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("此时会进入"),t("code",[this._v("git")]),this._v("用户的根目录，即上面创建的"),t("code",[this._v("/home/git/")]),this._v("，之后我们直接让服务器通过"),t("code",[this._v("wget")]),this._v("下载gogs.io的二进制版本，并解压缩：")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dl.gogs.io/0.11.53/gogs_0.11.53_linux_amd64.zip\n$ unzip gogs_0.11.53_linux_amd64.zip\n"),e("span",{attrs:{class:"token comment"}},[s._v("# 注意必须以git用户在命令行进行本操作，")]),s._v("\n"),e("span",{attrs:{class:"token comment"}},[s._v("# 这样解压缩的`gogs`文件夹的所有者是")]),s._v("\n"),e("span",{attrs:{class:"token comment"}},[s._v("# `git`，以便后面的安装。")]),s._v("\n$ "),e("span",{attrs:{class:"token function"}},[s._v("cd")]),s._v(" gogs\n$ ./gogs web\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("之后gogs会创建一个本地服务，监听"),t("code",[this._v(":3000")]),this._v("端口，此时我们在浏览器地址栏中输入网站IP（或域名）后面加入"),t("code",[this._v(":3000")]),this._v("进行访问，如："),t("code",[this._v("http://git.abc.com:3000/")]),this._v("。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("此时会进入 Gogs.io 的安装向导，最方便的就是选择 SQLite3 作为数据库，我们需要将域名和访问路径修改为自己网站的域名，用户选择为 "),t("code",[this._v("git")]),this._v("，并在最下面创建一个管理员用户，之后点安装，即可安装完成。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"nginx反向代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx反向代理","aria-hidden":"true"}},[this._v("#")]),this._v(" nginx反向代理")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("p",[s._v("安装完成之后我们需要通过如 "),e("code",[s._v("http://git.abc.com:3000")]),s._v("的方式访问网站，这样非常不美观，不过我们可以通过反向代理的方式来通过不包含端口号访问网站。\n在 "),e("code",[s._v("nginx.conf")]),s._v(" 文件中，将下面的 "),e("code",[s._v("server")]),s._v(" 部分增加至 "),e("code",[s._v("http")]),s._v(" 分区内并重载nginx的配置：")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-nginx line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),e("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),e("span",{attrs:{class:"token number"}},[s._v("80")]),e("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" git"),e("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("abc"),e("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),e("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),e("span",{attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),e("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),e("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("http")]),e("span",{attrs:{class:"token punctuation"}},[s._v(":")]),e("span",{attrs:{class:"token operator"}},[s._v("/")]),e("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v("localhost"),e("span",{attrs:{class:"token punctuation"}},[s._v(":")]),e("span",{attrs:{class:"token number"}},[s._v("3000")]),e("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"守护式运行-gogs-io"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#守护式运行-gogs-io","aria-hidden":"true"}},[this._v("#")]),this._v(" 守护式运行 Gogs.io")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ ./gogs web\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"systemd-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#systemd-服务","aria-hidden":"true"}},[this._v("#")]),this._v(" Systemd 服务")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("p",[s._v("更新 "),e("code",[s._v("User")]),s._v("、"),e("code",[s._v("Group")]),s._v("、"),e("code",[s._v("WorkingDirectory")]),s._v("、"),e("code",[s._v("ExecStart")]),s._v(" 和 "),e("code",[s._v("Environment")]),s._v(" 为相对应的值。其中 "),e("code",[s._v("WorkingDirectory")]),s._v(" 为您的 Gogs 实际安装路径根目录。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("Simon：按照上述教程安装不需要做任何修改")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("当您完成修改后，请将文件保存至 "),t("code",[this._v("/etc/systemd/system/gogs.service")]),this._v("，然后通过 "),t("code",[this._v("sudo systemctl enable gogs")]),this._v(" 命令激活，最后执行 "),t("code",[this._v("sudo systemctl start gogs")]),this._v("。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("您可以通过 "),t("code",[this._v("sudo systemctl status gogs -l")]),this._v(" 或 "),t("code",[this._v("sudo journalctl -b -u gogs")]),this._v(" 命令检查 Gogs 的运行状态。")])}],!1,null,null,null);n.options.__file="gogs.md";t.default=n.exports}}]);