---
status: "Proposed (under discussion)"
date: 14/11/2024
decision-makers: John Webb
consulted: Damian Knight
informed: John Webb, Damian Knight, Lewis James
---

# Back-end tech stack to be used for development

## Context and Problem Statement

What back end webframes will you be using and why will they be beneficial?

We will be using python and flask to communicate with the databases to effectively handle user and library data.

## Decision Drivers

* Readability as many python webframes allow for a programmer to make effective code but that is also not easy to follow.
* Refined code so that communcications through the backend from the frontend to the databases takes as little time as possible.

## Considered Options

* Flask
* Django
* Fast API

## Decision Outcome

Chosen option: "Flask", because there is a large amount of documentation about the webframe, as well as the simplicity compared to other webframes which will allow for quicker development times.

### Consequences

* Good, because it allows for quick, straightforward learning and development.
* Bad, because other webframes such as django are better for implementing SQL and database handling.
* Good, because it has easier readability, allowing other developers to understand it easier.
* Bad, as it is less effective compared to other webframes in terms of scalability.

### Confirmation

The implementation of the backend will be verified by:

* pytest:this will allow for all components of the backend to be checked and validated
* code simplicity: this will allow for eaiser to read code, which in turn will allow for easier to edit code

## Pros and Cons of the Options

### Flask:

### Pros:

* Simplicity and Documentation: Flask is known for its straightforward and minimalistic design, making it an excellent choice for developers looking to quickly learn and implement a back end. Its simplicity allows for a faster setup, which is beneficial for smaller projects or those with shorter timelines.

* Readability: Due to its minimalistic nature, Flask code is generally easier to read, which facilitates onboarding for new developers and supports a collaborative development environment.

### Cons:

* Scalability Limitations: Flask is not inherently designed with scalability in mind, which may make it less suitable for larger applications or those expecting significant growth in traffic.

* Less Built-in Database Support: While Flask can work with databases, it requires more manual setup compared to frameworks like Django, which comes with more built-in support for ORM and SQL database handling.


### Django:

### Pros:

* Comprehensive Documentation: Like Flask, Django also has extensive documentation and a large community, which can speed up development and troubleshooting.

* Scalability: With Django, applications can scale more effectively due to its structure and built-in support for handling large databases and high levels of traffic.

### Cons:

* Complexity: Django is a more extensive framework, which can make it harder to learn and implement, particularly for projects that require only a minimal back end.

* Readability and Maintenance: Django’s complex code structure may make it harder for new developers to read and follow the code, which can slow down development.
