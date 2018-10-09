# Lecture 2

Date: 2018.10.04 10:00-12:00

## Types of Database Relationships

- **One-to-One**: A row in table A can have only one matching row in table B, and vice versa.
- **One-to-Many (or Many-to-One)**: A row in table A can have many matching rows in table B, but a row in table B can have only one matching row in table A.
- **Many-to-Many**: A row in table A can have many matching rows in table B, and vice versa. This is achieved through the use of a third table (commonly called a junction table) that contains lookup data for both tables.

## Creating a Relationship

In relational database terms, a **relationship** is a situation where multiple tables can contain related data that is linked by a common field.

A relationship consists of a parent table and a child table. The child table references the parent table by having a field that matches a field in the parent table. The child's field is referred to as a **foreign key**. The parent's field is the **primary key**.

## Parameters

## The Expression Builder

- **Built-in functions**. For example, Count(), Date(), and MsgBox().
- **Constants**. Such as True, False, NULL.
- **Operators**. For example >=, &, Or
- **Fields**. From tables, queries, forms, and reports.
