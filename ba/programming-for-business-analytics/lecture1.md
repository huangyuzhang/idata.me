# Lecture 1

Date: 2018.09.27 10:00-12:00

## Definition of Database

A **Database** is a self-describing collection of integrated records.

A **Record** is a representation of some physical or conceptual object.

For example if you want to keep track of a business’ customers you would assign a record for each customer.

Each record has multiple **Attributes**, such as name, address and telephone number.

Individual names, addresses and so on are the **Data**.

The database is **Integrated** because it includes not only data items, but also the relationships among data items.

## Ralational Database

Microsoft Access is a relational database management application. It allows users to create storage structures for data, manipulate and analyse that data and format the data for output.

A **relational database** is a collection of data items organised as a set of formally described tables from which data can be accessed or assembled in many different ways without having to re-organise the tables.

:::tip Relational Databases

A relational database is a database that organizes information into one or more tables.
:::

## Datasheet View

Datasheet View is what we used when we created our table previously.

Datasheet View displays the table as a **grid**. The fields are displayed as columns, and the records are displayed as rows. The field names are listed as the column headers.

Datasheet View displays the data. If this table had **data**, it would be displayed in the **cells**.

Each **row** represents a **record**. If the table had say, five records, there would be five rows of data.

## Design View

**Design View** doesn't display any data. Therefore, there's more space available to display other settings.

In Design View, the **fields** are listed **vertically**. They are listed above and below each other as opposed to side-by-side.

In Design View, you can see the data type listed next to each field.

The way Design View works is, when you click on a field (in the top frame), the bottom frame displays the properties for that field. You can then change these properties as required.

## Primary Key

A primary key is the **unique identifier** for the table. Each value in this field will be unique - no two records on the table can have the same value in the primary key field.

:::tip
In Access, we set a key to "Autonumber".
:::

## Input Mask

Forces users to type in data in certain way. Create restrictions for users in Design View.

### Input Mask Cheat Sheet
| Character | Notes                                                                     |
| --------- | ------------------------------------------------------------------------- |
| 0         | User has to enter digit                                                   |
| 9         | User may enter optional digit                                             |
| #         | User can enter a digit, space, + or – signs                               |
| L         | User must enter a letter                                                  |
| ?         | User may enter an optional letter                                         |
| A         | User has to enter a letter or digit                                       |
| a         | User can enter a letter or digit                                          |
| &         | User has to enter either a character or a space                           |
| C         | User can enter optional characters or spaces                              |
| >         | Upper case                                                                |
| <         | Lower case                                                                |
| ""        | Characters within double quotes will be displayed literally               |
| \         | Causes the following character of the backslash to be displayed literally |
| !         | Causes the input mask to read left to right                               |

