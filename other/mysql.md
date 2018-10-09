# MySQL 命令大全

:::tip 登录 MySQL

```bash
mysql -u root -p
```

结果：

```bash
mysql>
```

:::

:::tip 增加新用户

```bash
grant 权限 on 数据库.* to 用户名@登录主机 identified by "密码"
```

如，增加一个用户 user1 密码为 password1，让其可以在本机上登录， 并对所有数据库有查询、插入、修改、删除的权限。首先用以 root 用户连入 mysql，然后键入以下命令：

grant select,insert,update,delete on _._ to user1@localhost Identified by "password1";

如果希望该用户能够在任何机器上登陆 mysql，则将 localhost 改为"%"。

如果你不想 user1 有密码，可以再打一个命令将密码去掉。

grant select,insert,update,delete on mydb.\* to user1@localhost identified by "";
:::

:::tip 修改密码

```
ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass';
```

:::

:::tip 显示数据库

```
show databases;
```

:::

:::tip 进入数据库

```
use 表名;
```

:::

:::tip 创建数据库

```
CREATE DATABASE 数据库名称;
```

:::

:::tip 展示表结构

```
DESCRIBE 表名;
```

:::

:::tip 显示表数据（详细参考 SQL 语法）

```sql
SELECT * FROM 表名;
```

:::

:::tip 修改表格字段名
以"name"字段设置时多输入一个"e"为例：

```sql
ALTER TABLE `数据库名`.`表名`
CHANGE COLUMN `namee` `name` INT(11) NULL DEFAULT NULL ;
```

:::
