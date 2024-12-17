---
status: "proposed"
date: {2024/11/14}
decision-makers: Lewis James
consulted: 
informed: {Everyone}
---

# <Creation and implementation of test databases>

## Context and Problem Statement

How will you be implementing and using databases effectively for the project?

We will be using using a smaller set of databases compared to the amount needed to hold the required userbase, which will hold fake data, so that all tests can be done effectively but without spending lots of time creating fake data.

## Decision Drivers

* Having enough data to work with that all user cases can be tested.
* Limiting the amount of data being added so that an effective amount of time can be spent on making the product instead.

## Considered Options

* large Scale customer/admin database.
* small scale customer/admin database.

## Decision Outcome

Chosen option: "large scale users and small scale admin", because this can accurately reflect the ratio of customers to employee accounts that will need to be held on the system once it has been rolled  out to the general public.

### Consequences

* Good, because it allows for accurate representation of accurate system.
* Bad, because with smaller test sizes this could lead to problems that arent seen until full roll out of product.

### Confirmation

The implementation of the Databases will be validated by:

* Integrated testing: Ensuring that the backend can communicate with the database files through SQLite
* Code reviews: Making sure that code commuincating with the databases and the database files are clear and consistent

## Pros and Cons of the Options

### Large scale

* Good, because it allows for a testing of many different error cases before roll out to the public
* Bad, because it takes a much large amount of time to create because this will need to be an automated process

  ### Small scale

* Good, because it takes less time away from development while allowing the developers to test for specific cases they wish to research
* Bad, because if developers only test a limited amount of data there can be errors in the code which the developers might not find until the product is rolled out to the public

