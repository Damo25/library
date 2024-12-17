---
status: "proposed"
date: {2024/11/14}
decision-makers: Lewis James
consulted: 
informed: {Everyone}
---

# <!-- short title, representative of solved problem and found solution -->

## Context and Problem Statement

How will the front and backend be able to communicate?
Due to the divide between a react frontend and a flask backend we will be making fetch requests from the frontend of the site to the backend which will then manipulate the data within the database test files

## Decision Drivers

* Simplicity and readability as we will want the code to be easily editable due to the indivodualistic nature of all components, as to follow our design architecture
* Security as a request should only be sent to the backend
 
## Considered Options

* Post fetch request
* built in Backend

## Decision Outcome

Chosen option: "POST fetch request", because this allows for us to follow our architecture pattern as well as our plans for using both flask and react

### Consequences

* Good, because allows for more rapid development of frontend and backend as they do not rely on eachother to work
* Bad, because Backend needs to be set up to operate as an API which increases the workload

### Confirmation

The implementation of the Databases will be validated by:

* Integrated testing: Ensuring that the frontend can communicate with the backend files effectively once a fetch request has been sent 
* Code reviews: Making sure that code commuincating with the frontend and Backend files are clear and consistent

## Pros and Cons of the Options

### Fetch Request

* Good, because allows for independ rapid development following the two-tier architecture we will be using
* Neutral, because more files need to be open at once for both ends to communicate with eachother
* Bad, because it creates a greater workload for the team, esspecially if the fetch is requesting to another language

### Built in

* Good, because errors are eaiser to find while working with one framework
* Neutral, because allows for more simplicity when trying to run the product
* Bad, because can delay the project if some developers have less experience in the language/framework compared to others


