---
sidebarDepth: 2
---

# SQL Exercises

## Exercise 1

:::tip Task 1
Create a table named `friends` with three columns:

- `id` that stores `INTEGER`
- `name` that stores `TEXT`
- `birthday` that stores `DATE`

:::

:::tip Task 2
Add Jane Doe to `friends`.

Her birthday is May 30th, 1990.

:::

:::tip Task 3

Let's make sure that Jane has been added to the database:

```sql
SELECT * FROM friends;
```

Check for two things:

- Is `friends` table created?
- Is Jane Doe added to it?
  :::

:::tip Task 4

Let's move on!

Add two of your friends to the table.

Insert an `id`, `name`, and `birthday` for each of them.
:::

:::tip Task 5

Jane Doe just got married! Her new last name is "Smith".

Update her record in `friends`.

:::
:::tip Task 6

Add a new column named `email`.
:::

:::tip Task 7
Update the email address for everyone in your table.

Jane Smith's email is j`ane@codecademy.com`.
:::

:::tip Task 8
Wait, Jane Smith is not a real person.

Remove her from `friends`.
:::

:::tip Task 9
Great job! Let's take a look at the result one last time:

```sql
SELECT * FROM friends;
```

:::

## Answer 1

```sql
-- Task 1
CREATE TABLE friends (
  id INTEGER,
  name TEXT,
  birthday DATE
);

-- Task 2
INSERT INTO friends (id, name, birthday) VALUES (1, 'Jane Doe', '1990-05-30');

-- Task 3
SELECT * FROM friends;
```

| id  | name          | birthday   |
| --- | ------------- | ---------- |
| 1   | Jane Doe      | 1990-05-30 |
| 2   | Ted Kang      | 1993-06-06 |
| 3   | Mike Thompson | 1989-12-11 |

```sql
-- Task 4
INSERT INTO friends (id, name, birthday) VALUES (2, 'Ted Kang', '1993-06-06');

INSERT INTO friends (id, name, birthday) 
VALUES (3, 'Mike Thompson', '1989-12-11');

-- Task 5
UPDATE friends
SET name = 'Jane Smith'
WHERE name = 'Jane Doe';

-- Task 6
ALTER TABLE friends
ADD COLUMN email TEXT;

-- Task 7
UPDATE friends
SET email = 'jane@codecademy.com'
WHERE name = 'Jane Smith';

UPDATE friends
SET email = 'ted.kang@yeah.net'
WHERE name = 'Ted Kang';

UPDATE friends
SET email = 'mikethompson6@live.cn'
WHERE name = 'Mike Thompson';

-- Task 8
DELETE FROM friends
WHERE name = 'Jane Smith';

-- Task 9
SELECT * FROM friends;
```

| id  | name          | birthday   | email                 |
| --- | ------------- | ---------- | --------------------- |
| 2   | Ted Kang      | 1993-06-06 | ted.kang@yeah.net     |
| 3   | Mike Thompson | 1989-12-11 | mikethompson6@live.cn |

## Exercise 2
We have put together a table of restaurants called `nomnom` and we need your help to answer some questions. Use the SQL commands you just learned and find the best dinner spots in the city.

**The schema of this table**
| name | neighborhood | cuisine | review | price | health |
| ---- | ------------ | ------- | ------ | ----- | ------ |
|      |              |         |        |       |        |

:::tip Task 1
Start by getting a feel for the `nomnom` table.
:::

:::tip Task 2
What are the distinct `neighborhoods`?
:::

:::tip Task 3
What are the distinct `cuisine` types?
:::

:::tip Task 4
Suppose we would like some `Chinese` takeout.

What are our options?
:::

:::tip Task 5
Return all the restaurants with `reviews` of 4 and above, descending ordered by `review`.

Rename the titles of `name` and `review`.
:::

:::tip Task 6
Suppose Abbi and Ilana want to have a fancy dinner date.

Return all the restaurants that are `Italian` and `$$$`.
:::

::tip Task 7
Your coworker Trey can't remember the exact name of a restaurant he went to but he knows it contains the word 'meatball' in it.

Can you find it for him using a query?
:::

:::tip Task 8
Let's order delivery to the house!

Find all the close by spots in `Midtown`, `Downtown` or `Chinatown`.

(OR can be used more than once)
:::

:::tip Task 9
Find all the `health` grade pending restaurants (empty values).
:::

:::tip Task 10
Create a Top 10 Restaurants Ranking based on `review`s.
:::

:::tip Task 11
Use a `CASE` statement to change the rating system to:

- `review > 4.5` is Extraordinary
- `review > 4` is Excellent
- `review > 3` is Good
- `review > 2` is Fair
- Everything else is Poor
Don't forget to rename the new column!
:::


## Answer 2

```sql
# Task 1
SELECT * FROM nomnom;
```

```sql
# Task 2
SELECT DISTINCT neighborhood FROM nomnom;
```

```sql
# Task 3
SELECT DISTINCT cuisine FROM nomnom;
```

```sql
# Task 4
SELECT name FROM nomnom
WHERE cuisine = 'Chinese';
```

```sql
# Task 5
SELECT name AS '名称', review AS '评分'
FROM nomnom
WHERE review >= 4 
ORDER BY review DESC;
```

```sql
# Task 6
SELECT * FROM nomnom
WHERE cuisine = 'Italian'
AND price = '$$$';
```

```sql
# Task 7
SELECT * FROM nomnom
WHERE name LIKE "%meatball%";
```

```sql
# Task 8
SELECT * FROM nomnom
WHERE neighborhood = 'Midtown' 
OR neighborhood = 'Downtown' 
OR neighborhood = 'Chinatown';
```

```sql
# Task 9
SELECT * FROM nomnom
WHERE health IS NULL;
```

```sql
# Task 10
SELECT * FROM nomnom
ORDER BY review DESC
LIMIT 10;
```

```sql
# Task 11
SELECT name, review,
	CASE
  	WHEN review > 4.5 THEN 'Extraordinary'
    WHEN review > 4 THEN 'Excellent'
    WHEN review > 3 THEN 'Good'
    WHEN review > 2 THEN 'Fair'
    ELSE 'Poor'
  END
AS '评级'
FROM nomnom;
```
| name | review | 评级 |
| ---- | ------ |-- |
|Peter Luger Steak House |	4.4	|Excellent|
|Jongro BBQ|	4.5|	Excellent|
|Pocha 32	|4|	Good|
|...|...|...|


## Exercise 3
Howdy! It's your first day as a TechCrunch reporter. Your first task is to write an article on the rising trends in the startup world.

To get you started with your research, your boss emailed you a **project.sqlite** file that contains a table called `startups`. It is a portfolio of some of the biggest names in the industry.

Write queries with aggregate functions to retrieve some interesting insights about these companies.

What are you waiting for? Let's get started!

:::tip Task 1
Getting started, take a look at the startups table:
:::

:::tip Task 2
Calculate the total number of companies in the table.
:::

:::tip Task 3
We want to know the total value of all companies in this table.

Calculate this by getting the `SUM()` of the `valuation` column.
:::

:::tip Task 4
What is the highest amount raised by a startup?

Return the maximum amount of money `raised`.
:::

:::tip Task 5
Edit the query so that it returns the maximum amount of money `raised`, during 'Seed' stage.
:::

:::tip Task 6
What year is the oldest company on the list `founded` on?
:::

**Let's find out the valuations among different sectors:**

:::tip Task 7
Return the average `valuation`.
:::

:::tip Task 8
Return the average `valuation`, in each `category`.
:::

:::tip Task 9
Return the average `valuation`, in each `category`.

Round the averages to two decimal places.
:::

:::tip Task 10
Return the average `valuation`, in each `category`.

Round the averages to two decimal places.

Lastly, order the list from highest averages to lowest.
:::

**What are the most competitive markets?**

:::tip Task 11
First, return the name of each `category` with the total number of companies that belong to it.
:::

:::tip Task 12
Next, filter the result to only include categories that have more than three companies in them.

What are the most competitive markets?
:::

**Let's see if there's a difference in startups sizes among different locations:**

:::tip Task 13
What is the average size of a startup in each `location`?
:::

:::tip Task 14
What is the average size of a startup in each `location`, with average sizes above 500?
:::

## Answer 3
```sql
# Task 1
SELECT * FROM startups;
```

```sql
# Task 2
SELECT COUNT(*) 
FROM startups;
```

```sql
# Task 3
SELECT SUM(valuation) 
FROM startups;
```

```sql
# Task 4
SELECT MAX(raised) 
FROM startups;
```

```sql
# Task 5
SELECT MAX(raised) 
FROM startups
WHERE stage = 'Seed';
```

```sql
# Task 6
SELECT MIN(founded)
FROM startups;
```

```sql
# Task 7
SELECT AVG(valuation)
FROM startups;
```

```sql{2}
# Task 8
SELECT category, AVG(valuation)
FROM startups
GROUP BY category;
```

```sql{2}
# Task 9
SELECT category, ROUND(AVG(valuation), 2)
FROM startups
GROUP BY category;
```

```sql{2,4,5}
# Task 10
SELECT category, ROUND(AVG(valuation), 2)
FROM startups
GROUP BY 1 # = GROUP BY category
ORDER BY 2 DESC;
```

```sql
# Task 11
SELECT category, COUNT(*)
FROM startups
GROUP BY 1;
```

```sql
# Task 12
SELECT category, COUNT(*)
FROM startups
GROUP BY 1
HAVING COUNT(*) > 3;
```

```sql
# Task 13
SELECT location, AVG(employees)
FROM startups
GROUP BY 1;
```

```sql
# Task 14
SELECT location, AVG(employees)
FROM startups
GROUP BY 1
HAVING AVG(employees) > 500;
```

Video walkthrought of Exercise 3: [Learn SQL: Trends In Startups](https://www.youtube.com/watch?v=-7fN2eWUTmI)