---
sidebarDepth: 2
---

# Aggregate Functions

## Introduction

We've learned how to write queries to retrieve information from the database. Now, we are going to learn how to perform calculations using SQL.

Calculations performed on multiple rows of a table are called **aggregates**.

In this lesson, we have given you a table named `fake_apps` which is made up of fake mobile applications data.

Here is a quick preview of some important aggregates that we will cover in the next five exercises:

- `COUNT()`: count the number of rows
- `SUM()`: the sum of the values in a column
- `MAX()`/`MIN()`: the largest/smallest value
- `AVG()`: the average of the values in a column
- `ROUND()`: round the values in the column

Let's get started!

## COUNT( )

The fastest way to calculate how many rows are in a table is to use the `COUNT()` function.

`COUNT()` is a function that takes the name of a column as an argument and counts the number of non-empty values in that column.

```sql
SELECT COUNT(*)
FROM table_name;
```

Here, we want to count every row, so we pass `*` as an argument inside the parenthesis.

## SUM( )

SQL makes it easy to add all values in a particular column using `SUM()`.

`SUM()` is a function that takes the name of a column as an argument and returns the sum of all the values in that column.

What is the total number of downloads for all of the apps combined?

```sql
SELECT SUM(downloads)
FROM fake_apps;
```

This adds all values in the `downloads` column.

## MAX( ) / MIN( )

The `MAX()` and `MIN()` functions return the highest and lowest values in a column, respectively.

How many downloads does the most popular app have?

```sql
SELECT MAX(downloads)
FROM fake_apps;
```

The most popular app has 31,090 downloads!

`MAX()` takes the name of a column as an argument and returns the largest value in that column. Here, we returned the largest value in the `downloads` column.

`MIN()` works the same way but it does the exact opposite; it returns the smallest value.

## AVG( )

SQL uses the `AVG()` function to quickly calculate the average value of a particular column.

The statement below returns the average number of downloads for an app in our database:

```sql
SELECT AVG(downloads)
FROM fake_apps;
```

The `AVG()` function works by taking a column name as an argument and returns the average value for that column.

## ROUND( )

By default, SQL tries to be as precise as possible without rounding. We can make the result table easier to read using the `ROUND()` function.

`ROUND()` function takes two arguments inside the parenthesis:

1. a column name
2. an integer
   It rounds the values in the column to the number of decimal places specified by the integer.

```sql
SELECT ROUND(price, 0)
FROM fake_apps;
```

Here, we pass the column `price` and integer `0` as arguments. SQL rounds the values in the column to 0 decimal places in the output.

:::warning Mini Exercise
In the last exercise, we were able to get the average price of an app ($2.02365) using this query:

```sql
SELECT AVG(price)
FROM fake_apps;
```

Now, let's edit this query so that it rounds this result to 2 decimal places.

**Answer**

```sql
SELECT ROUND(AVG(price), 2) AS 'Rounded Average Price'
FROM fake_apps;
```

**Output**
|Rounded Average Price|
|:---:|
|2.02|

:::

## GROUP BY I

Oftentimes, we will want to calculate an aggregate for data with certain characteristics.

For instance, we might want to know the mean IMDb ratings for all movies each year. We could calculate each number by a series of queries with different `WHERE` statements, like so:

```sql
SELECT AVG(imdb_rating)
FROM movies
WHERE year = 1999;

SELECT AVG(imdb_rating)
FROM movies
WHERE year = 2000;

SELECT AVG(imdb_rating)
FROM movies
WHERE year = 2001;
```

and so on.

Luckily, there's a better way!

We can use `GROUP BY` to do this in a single step:

```sql
SELECT year,
   AVG(imdb_rating)
FROM movies
GROUP BY year
ORDER BY year;
```

`GROUP BY` is a clause in SQL that is used with aggregate functions. It is used in collaboration with the `SELECT` statement to arrange identical data into groups.

:::tip
The `GROUP BY` statement comes after any `WHERE` statements, but before `ORDER BY` or `LIMIT`.
:::

:::warning Mini Exercise 1
`COUNT()` and arranged `price` into groups.

**Answer**

```sql
SELECT price, COUNT(*) 
FROM fake_apps
GROUP BY price;
```

**Output**
| price | COUNT(*) |
| ----- | -------- |
| 0.0   | 73       |
| 0.99  | 43       |
| 1.99  | 42       |
| 2.99  | 21       |
| 3.99  | 9        |
| 14.99 | 12       |

:::

:::warning Mini Exercise 2
In the previous query, add a `WHERE` clause to count the total number of apps that have been downloaded more than 20,000 times, at each price.

**Answer**
```sql{3}
SELECT price, COUNT(*)
FROM fake_apps
WHERE downloads > 20000
GROUP BY price;
```
**Output**
| price | COUNT(*) |
| ----- | -------- |
| 0.0   | 26       |
| 0.99  | 17       |
| 1.99  | 18       |
| 2.99  | 7        |
| 3.99  | 5        |
| 14.99 | 5        |
:::

:::warning Mini Exercise 3
Write a new query that calculates the total number of downloads for each category.

Select `category` and `SUM(downloads)`.
**Answer**
```sql
SELECT category, SUM(downloads)
FROM fake_apps
GROUP BY category;
```
**Output**
| category | SUM(downloads) |
| -------- | -------------- |
| Books    | 160864         |
| Business | 178726         |
| Catalogs | 186158         |
| ...      | ...            |
:::

## GROUP BY II
Sometimes, we want to `GROUP BY` a calculation done on a column.

For instance, we might want to know how many movies have IMDb ratings that round to 1, 2, 3, 4, 5. We could do this using the following syntax:
```sql
SELECT ROUND(imdb_rating),
   COUNT(name)
FROM movies
GROUP BY ROUND(imdb_rating)
ORDER BY ROUND(imdb_rating);
```
However, this query may be time-consuming to write and more prone to error.

SQL lets us use column reference(s) in our `GROUP BY` that will make our lives easier.

- `1` is the first column selected
- `2` is the second column selected
- `3` is the third column selected
and so on.

The following query is equivalent to the one above:
```sql
SELECT ROUND(imdb_rating),
   COUNT(name)
FROM movies
GROUP BY 1
ORDER BY 1;
```
Here, the `1` refers to the first column in our `SELECT` statement, `ROUND(imdb_rating)`.

## HAVING

In addition to being able to group data using `GROUP BY`, SQL also allows you to filter which groups to include and which to exclude.

For instance, imagine that we want to see how many movies of different genres were produced each year, but we only care about years and genres with at least 10 movies.

We can't use `WHERE` here because we don't want to filter the rows; we want to filter groups.

This is where `HAVING` comes in.

`HAVING` is very similar to `WHERE`. In fact, all types of `WHERE` clauses you learned about thus far can be used with `HAVING`.

We can use the following for the problem:
```sql
SELECT year,
   genre,
   COUNT(name)
FROM movies
GROUP BY 1, 2
HAVING COUNT(name) > 10;
```
:::tip
- When we want to limit the results of a query based on values of the individual rows, use `WHERE`.
- When we want to limit the results of a query based on an aggregate property, use `HAVING`.

`HAVING` statement always comes after `GROUP BY`, but before `ORDER BY` and `LIMIT`.
:::

:::warning Mini Exercise
Suppose we have the query below:
```sql
SELECT price, 
   ROUND(AVG(downloads)),
   COUNT(*)
FROM fake_apps
GROUP BY price;
```
It returns the average downloads (rounded) and the number of apps – at each price point.

However, certain price points don't have very many apps, so their average downloads are less meaningful.

Add a `HAVING` clause to restrict the query to price points that have more than 10 apps.

**Question's Output**
| price | ROUND(AVG(downloads)) | COUNT(*) |
| ----- | --------------------- | -------- |
| 0.0   | 15762.0               | 73       |
| 0.99  | 15972.0               | 43       |
| 1.99  | 16953.0               | 42       |
| 2.99  | 17725.0               | 21       |
| 3.99  | 18742.0               | 9        |
| 14.99 | 19369.0               | 12       |

**Answer**
```sql{6}
SELECT price, 
   ROUND(AVG(downloads)),
   COUNT(*)
FROM fake_apps
GROUP BY price
HAVING COUNT(*) > 10;
```

**Answer's Output**
| price | ROUND(AVG(downloads)) | COUNT(*) |
| ----- | --------------------- | -------- |
| 0.0   | 15762.0               | 73       |
| 0.99  | 15972.0               | 43       |
| 1.99  | 16953.0               | 42       |
| 2.99  | 17725.0               | 21       |
| 14.99 | 19369.0               | 12       |
:::

:::warning Exercise
[Exercise 3: Trends In Startups](exercises.md#exercise-3)
:::