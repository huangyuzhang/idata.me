---
sidebarDepth: 2
---
# SQL Manipulation
## Introduction

SQL, **S**tructured **Q**uery **L**anguage, is a programming language designed to manage data stored in relational databases. SQL operates through simple, declarative statements. This keeps data accurate and secure, and helps maintain the integrity of databases, regardless of size.

The SQL language is widely used today across web frameworks and database applications. Knowing SQL gives you the freedom to explore your data, and the power to make better decisions. By learning SQL, you will also learn concepts that apply to nearly every data storage system.

:::tip Relational Databases
A _relational database_ is a database that organizes information into one or more tables.
:::

:::tip Table
A table is a collection of data organized into rows and columns. Tables are sometimes referred to as relations.
:::

:::tip Column
A column is a set of data values of a particular type.
:::

:::tip Row
A row is a single record in a table.
:::

## Data Types

- `INTEGER`, a positive or negative whole number
- `TEXT`, a text string
- `DATE`, the date formatted as YYYY-MM-DD for the year, month, and day
- `REAL`, a decimal value

## Statements

A statement is text that the database recognizes as a valid command. Statements always end in a semi-colon `;`

```sql
CREATE TABLE table_name (
   column_1 data_type,
   column_2 data_type,
   column_3 data_type
);
```

:::tip

1. `CREATE TABLE` is a clause. Clauses perform specific tasks in SQL. By convention, clauses are written in capital letters. Clauses can also be referred to as commands.
2. `table_name` refers to the name of the table that the command is applied to.
3. `(column_1 data_type, column_2 data_type, column_3 data_type)` is a parameter. A parameter is a list of columns, data types, or values that are passed to a clause as an argument. Here, the parameter is a list of column names and the associated data type.
   :::

### 1. CREATE 创建表格

Create a table called `celebs` with three columns: **id**(`INTEGER`), **name**(`TEXT`) and **age**(`INTEGER`).

```sql
CREATE TABLE celebs (
    id INTEGER,
    name TEXT,
    age INTEGER
);
```
| id  | name | age |
| --- | ---- | --- |
### 2. INSERT 添加数据

Use `INSERT` statement to insert rows (records) into table.

```sql
INSERT INTO celebs (id, name, age) VALUES (1, 'Justin Bieber', 21);
```
| id  | name          | age |
| --- | ------------- | --- |
| 1   | Justin Bieber | 21  |
:::tip

1. `INSERT INTO` is a clause that adds the specified row or rows.
2. `celebs` is the name of the table the row is added to.
3. `(id, name, age)` is a parameter identifying the columns that data will be inserted into.
4. `VALUES` is a clause that indicates the data being inserted. `(1, 'Justin Bieber', 21)` is a parameter identifying the values being inserted. Each value is corresponding to each column of `(id, name, age)`
   :::

### 3. SELECT 提取数据

`SELECT` statements are used to fetch data from a database.

```sql
SELECT name FROM celebs
```
| name |
| --- |
| Justin Bieber |
| Beyonce Knowles |
| Jeremy Lin |
| Taylor Swift |
:::tip

1. `SELECT` is a clause that indicates that the statement is a query. You will use `SELECT` every time you query data from a database.
2. `name` specifies the column to query data from.
3. `FROM celebs` specifies the name of the table to query data from. In this statement, data is queried from the `celebs` table.
   :::

You can also query data from all columns in a table with `SELECT`.

```sql
SELECT * FROM celebs
```

| id  | name            | age |
| --- | --------------- | --- |
| 1   | Justin Bieber   | 21  |
| 2   | Beyonce Knowles | 33  |
| 3   | Jeremy Lin      | 26  |
| 4   | Taylor Swift    | 26  |

### 4. UPDATE 修改数据

The `UPDATE` statement edits a row in the table. You can use the `UPDATE` statement when you want to change existing records.

```sql
UPDATE celebs
SET age = 22
WHERE id = 1;
```

| id  | name            | age |
| --- | --------------- | --- |
| 1   | Justin Bieber   | 22  |
| 2   | Beyonce Knowles | 33  |
| 3   | Jeremy Lin      | 26  |
| 4   | Taylor Swift    | 26  |
:::tip

1. `UPDATE` is a clause that edits a row in the table.
2. `celebs` is the name of the table.
3. `SET` is a clause that indicates the column to edit.

   - `age` is the name of the column that is going to be updated
   - `22` is the new value that is going to be inserted into the `age` column.

4. `WHERE` is a clause that indicates which row(s) to update with the new column value. Here the row with a `1` in the `id` column is the row that will have the `age` updated to `22`.
   :::

:::tip Replace content in batch
```sql
UPDATE table_name
SET column_name = REPLACE(column_name, 'old content', 'new content');
```
Use the above codes to batch modify the specified fields in a column.
:::
### 5. ALTER 变更表格

The `ALTER TABLE` statement added a new **column** to the table. You can use this command when you want to add columns to a table.

```sql
ALTER TABLE celebs
ADD COLUMN twitter_handle TEXT;
```

| id  | name            | age | twitter_handle |
| --- | --------------- | --- | -------------- |
| 1   | Justin Bieber   | 22  |                |
| 2   | Beyonce Knowles | 33  |                |
| 3   | Jeremy Lin      | 26  |                |
| 4   | Taylor Swift    | 26  |                |

:::tip

1. `ALTER TABLE` is a clause that lets you make the specified changes.
2. `celebs` is the name of the table that is being changed.
3. `ADD COLUMN` is a clause that lets you add a new column to a table.
   - `twitter_handle` is the name of the new column being added
   - `TEXT` is the data type for the new column
4. NULL is a special value in SQL that represents missing or unknown data. Here, the rows that existed before the column was added have NULL values for twitter_handle.

:::

### 6. DELETE 删除数据

The `DELETE` FROM statement deletes one or more rows from a table. 

Example: 
1. Update the table to include Taylor Swift's twitter handle.
2. Delete all of the rows that have a NULL value in the twitter column. 

```sql
UPDATE celebs
SET twitter_handle = '@taylorswift13'
WHERE id = 4;

DELETE FROM celebs
WHERE twitter_handle IS NULL;
```

| id  | name         | age | twitter_handle |
| --- | ------------ | --- | -------------- |
| 4   | Taylor Swift | 26  | @taylorswift13 |

:::tip Explanation
1. `DELETE FROM` is a clause that lets you delete rows from a table.
2. `celebs` is the name of the table we want to delete rows from.
3. `WHERE` is a clause that lets you select which rows you want to delete. Here we want to delete all of the rows where the twitter_handle column `IS NULL`.
4. `IS NULL` is a condition in SQL that returns true when the value is `NULL` and false otherwise.
:::

## Constraint

```sql
CREATE TABLE celebs (
   id INTEGER PRIMARY KEY, 
   name TEXT UNIQUE,
   date_of_birth TEXT NOT NULL,
   date_of_death TEXT DEFAULT 'Not Applicable',
);
```
**Constraints** that add information about how a column can be used are invoked after specifying the data type for a column. They can be used to tell the database to reject inserted data that does not adhere to a certain restriction.

1. `PRIMARY KEY` columns can be used to uniquely identify the row. Attempts to insert a row with an identical value to a row already in the table will result in a constraint violation which will not allow you to insert the new row.

2. `UNIQUE` columns have a different value for every row. This is similar to `PRIMARY KEY` except a table can have many different UNIQUE columns.

3. `NOT NULL` columns must have a value. Attempts to insert a row without a value for a `NOT NULL` column will result in a constraint violation and the new row will not be inserted.

4. `DEFAULT` columns take an additional argument that will be the assumed value for an inserted row if the new row does not specify a value for that column.

:::warning Exercise
[Exercise 1](exercises.md#exercise-1)
:::