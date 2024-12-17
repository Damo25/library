---
status: "Active"
date: {2024/11/26}
decision-makers: {John Webb, Damian Knight}
consulted: {Frontend Team, Backend Team, Everyone}
informed: {Everyone}
---
# Authorisation

## Context and Problem Statement

The system requires a mechanism to control access to features and data based on user roles. Ensuring a balance between security and ease of implementation is essential.

---

## Decision Drivers

* Security: Limit user actions based on predefined roles to prevent unauthorised access.
* Simplicity: Implement an access control method that aligns with the current project scope and development resources.
* Scalability: Accommodate future role expansions or modifications with minimal effort.

---

## Considered Options

**Role-Based Access Control (RBAC)**
**Attribute-Based Access Control (ABAC)**

---

## Decision Outcome

**Chosen Option**: **Role-Based Access Control (RBAC)**

RBAC is simpler to implement and aligns well with the predefined user role requirements. Roles are assigned to users, and access permissions are tied to these roles.

---

## Consequences

* **Good**:
Straightforward to set up and maintain with clear role definitions.
Easy integration with existing authentication mechanisms.

* **Bad**:
Changes in user roles require updates to the database.
Less flexible compared to attribute-based systems for complex policies.

---

# Data Validation

## Context and Problem Statement

Data received from users must be validated to ensure consistency, security, and integrity. Deciding where to perform validation is critical to protect the system from tampered or malformed data.

---

## Decision Drivers

* **Security: Protect against malicious data inputs.**
* **Reliability: Ensure that only valid data is processed by the backend systems.**
* **User Experience: Maintain a seamless user interaction while enforcing validation.**

---

## Considered Options

**Server-Side Validation**
**Client-Side Validation Only**

---

## Decision Outcome

**Chosen Option**: Server-Side Validation

Server-side validation provides a robust solution to ensure data integrity and security by processing all validation logic on the backend, irrespective of the client-side implementation.

### Consequences

**Good**:
Prevents tampering by malicious users.
Ensures consistent validation across different clients.

**Bad**:
Increased server processing load.
May result in slightly higher latency for validation feedback.

# Error Handling

## Context and Problem Statement

Errors occurring during system operation need to be communicated effectively without exposing sensitive details, particularly in production environments.

---

## Decision Drivers

* **Security: Protect sensitive system details from being exposed to potential attackers.**
* **Debugging: Facilitate problem resolution for developers.**
* **User Experience: Provide meaningful feedback to users without compromising system security.**

## Considered Options

**Generic Error Messages**
**Detailed Error Messages in Production**

## Decision Outcome

**Chosen Option**: **Generic Error Messages**

Using generic error messages in production environments helps maintain security by avoiding the disclosure of sensitive system information.

---

### Consequences

* **Good**:
Reduces the risk of attackers gaining insights into the system.
Simplifies communication with non-technical users by focusing on actionable feedback.

* **Bad**:
Debugging production issues may require access to detailed error logs.
Developers need to rely on backend logging systems for deeper insights into issues.
