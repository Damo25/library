---
status: {accepted} 
date: {2024-11-26}
decision-makers: {John webb,Damian Knight}
consulted: {John}
informed: {John,Lewis}
---

# {new framework changes that are going to be made to the frontend deciding the new frmaeworks to be used going forwards with the library webiste}

## Context and Problem Statement

{Problem we had was that vue 3 was not responding with the other chosen frameworks and the team wanted to include tailwind as a front end framework into the project which was easier to use with react than vue 3}


## Decision Drivers

* {we need the front end to respond and work with the chosen technoldgy to enable to project to move forwards }
* {we need a coding enviroment that both me and john as front end will be able to understand and confidently code within}
  

## Considered Options

* {vue.js/bootsrap}
* {react/tailwind}

## Decision Outcome

Chosen option: "{react/tailwind}", because with the architecture design/pattern we are developing with this fits in exactly how we need it to due to react fitting the component based architecture pattern we are developing with and with us using the two tier client server arctiecture design this works perfectly meaning that we can keep a clear seperation between the front and backend of the software. due to issues with trying to get vue/bootstarp to work this new outcome is working way better and still fitting in with our arcitecture choices


### Consequences

* Good, because this fits with the arcitecture perfectly and is understood how to work with by me and john the front end developers on this project so will allow for clear development without many mistakes.
* Bad, because it has ment that we will haver to re do the coding enviroment and change around a few of our models to re imagine the new front end path we are taking


### Confirmation

the implementation of react/tailwind will be confirmed a few differant 
.code reviews is going to be one of the most important ways we will be going about this due to using component based pattern we will be doing most of the coding within smaller contained components and then building these into pages. so if code needs reviewing it will be easier to narrow down and find issues 

.user acceptance testing will be a very important way to assure that we have created a very easy to use and seemless front end experiance for the user 

<!-- This is an optional element. Feel free to remove. -->
## Pros and Cons of options 

### {react/tailwind}

* Good, because easy implementation using our architecture design/pattern
* Good, because well understood by the frondend developers
<!-- use "neutral" if the given argument weights neither for good nor bad -->
* Bad, because means for a re set up of the frontend coding enviroment
* … <!-- numbers of pros and cons can vary -->

### {vue/bootstrap}

* Good, because fits with the architecture design/pattern that we are using
* Good, because understood by forntend developers 
  
* Bad, because setup and use isnt working as well as thought out


<!-- This is an optional element. Feel free to remove. -->
## More Information

we will be going forward with react/tailwind due to all the factors above as this fits the vision of the project
