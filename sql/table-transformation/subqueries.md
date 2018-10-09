# Subqueries

As said before, we'll begin learning about table transformation through subqueries. **Subqueries**, sometimes referred to as inner queries or nested queries, are used to transform table data by nesting one query within another query.

:::tip Warm-up Exercise
We'll be working with an airport database. Let's begin by looking at the data tables.

Select ten rows from the `flights` table.

```sql
SELECT *
FROM flights
LIMIT 10;
```

:::

## Non-Correlated Subqueries I

Let's continue with subqueries.

Imagine that you are the head of air traffic control. In our airplanes database, you'd like to know which flights had an origin airport with an elevation greater than 2000 feet. We can do this with a subquery.

We first create an inner query, or subquery, that finds the airports with elevation greater than 2000 from the airports table:

```sql
SELECT code
  FROM airports
  WHERE elevation > 2000;
```

Next, we take the result set of the inner query and use it to filter on the flights table, to find the flight detail that meets the elevation criteria.

```sql
SELECT *
FROM flights
WHERE origin in (
    SELECT code
    FROM airports
    WHERE elevation > 2000);
```

As shown above, a subquery is nested within another query to give us our desired result.

:::tip Mini Exercise
Using the same pattern from the example above, find flight information about flights where the origin elevation is less than 2000 feet.

**Answer**

```sql{4,5,6}
SELECT *
FROM flights
WHERE origin in(
  SELECT code
  FROM airports
  WHERE elevation < 2000
);
```

:::

## Non-Correlated Subqueries II

Great! The query we just ran is just one kind of subquery, what we refer to as a non-correlated subquery. A **non-correlated subquery（非关联子查询）** is a subquery that can be run independently of the outer query and as we saw, can be used to complete a multi-step transformation.

Let's try one more non-correlated subquery. Perhaps we'd like to look at a selection of flights whose origin airport is a seaplane base, designated by `SEAPLANE_BASE`. The facility type of an airport is located in the `fac_type` field of the airports table.

```sql
SELECT *
FROM flights
WHERE origin in (
    SELECT code
    FROM airports
    WHERE fac_type = 'SEAPLANE_BASE');
```

:::tip Mini Exercise
Using the same pattern, find flight information about flights where the Federal Aviation Administration region (`faa_region`) is the Southern region (`ASO`).

**Answer**

```sql{6}
SELECT *
FROM flights
WHERE origin in(
  SELECT code
  FROM airports
  WHERE faa_region = 'ASO');
```

:::

## Non-Correlated Subqueries III

The non-correlated subquery examples we've used so far utilized two tables (flights and airports), but we can also perform transformations on a single table. For instance, sometimes we need to aggregate in multiple steps - like taking an average of a count.

Imagine you’d like to know how many flights there are on average, for all Fridays in a given month from the flights table. First, we’d need to calculate the number of flights per day, and then we’d need to calculate the average based on the daily flight count for each day of the week. We can do this all in one step using a subquery:

```sql
SELECT a.dep_month,
       a.dep_day_of_week,
       AVG(a.flight_count) AS average_flights
  FROM (
        SELECT dep_month,
              dep_day_of_week,
               dep_date,
               COUNT(*) AS flight_count
          FROM flights
         GROUP BY 1,2,3
       ) a
  GROUP BY 1,2
  ORDER BY 1,2;
```

The inner query provides the count of flights by day, and the outer query uses the inner query’s result set to compute the average by day of week of a given month.
