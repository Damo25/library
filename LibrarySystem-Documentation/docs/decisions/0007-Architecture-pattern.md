---
status: "Accepted"
date: {2024/11/29}
decision-makers: {John Webb, Damian Knight}
consulted: {Frontend Team, Backend Team, Everyone}
informed: {Everyone}
---

# component based architecture pattern for development due to its seemless incorporation with react development which is the main development proccess 

## Context and Problem Statement

The system architecture pattern
## Decision Drivers

Many reasons that this architecture pattern is the way we are working with development 

. due to the many errors that can arise within development, working in component based architecture is going to allow for easy testing and maintenance of the code base 
as we will easly be able to find and contain issue causing areas of code allowing for easy problem solving and maintance.

.due to containing many of the elements of the code into components this is going to allow them to be universally used across many of the pages of the website 
this makes the pages consistant across the website and allows for them to be used again making development efficient and easy to work in a team 
as you can allocate in different development 

---

## Considered Options

1. **Component Based**   
2. **Model View ViewModel MVVM**

---

## Decision Outcome

**Chosen Option**: **Component Based**



---

### Consequences

* **Good**:  
.easy maintenance for the code base and for testing easier to test due to most code being within components which are easily findable and mostly used in multiple areas

.fits in really well with the architecture design three tier client server that we are going with 

* **Bad**:  
  . if the size of our front end gets too big we will end up with a lot of components spread across the pages which could cause issues with content management  


---

### Confirmation

The implementation of the component based pattern will be regulated by
 
- User Acceptance Testing to allow for us to be able to keep close eye on the UI and see that its a good experiance for the user 
- Code Reviews allow for us to be able to maintain the components we are creating and keep code working and maintained

---

## Pros and Cons of the Options

### Model View view model MVVM

* **Good**:  
  . due to way this works you can keep the actual base of the UI and the way this is presentated seperate from the backend business logic going into the frontend

  . this is good for testing as due to the the seperate areas there is more clear layers to the software when testing 
 

* **Bad**:  
   . due to the fact of adding two more layers to the development when using this pattern for a smaller project with 3 of us this can over complicate the project making development slower and a lot harder 

---



## More Information

due to the high usability of component based development with our project and chosen technologies while also not having the disadvantagee of making the project too big to manage for a small development team
we will be going with component based architecture pattern for the development with react/tailwind
