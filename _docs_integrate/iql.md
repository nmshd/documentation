---
permalink: integrate/iql
---

The Enmeshed _Identity Query Language_ (IQL) is a domain-specific language to query IdentityAttributes using a concise and simple syntax. The IQL is tailored towards usage by non-technical users and integrators. The IQL is complete, i.e. it's expressive enough to query arbitrary subsets of IdentityAttributes and can thus serve as a replacement of the other types of queries dealing with IdentityAttributes.

## Basic Syntax

### Filter by Value Type

The most common usage of the IQL is to filter IdentityAttributes by their value types or tags. Value types are specified by directly using their names as terms in the query string. E.g. the following IQL query will match all phone numbers, i.e. all IdentityAttributes of value type _PhoneNumber_:

```
PhoneNumber
```

### Filter by Tags

Tags can be filtered for by prefacing the tag with a hash _#_. E.g. the following IQL query will match all IdentityAttributes whose tags contain the value _emergency_:

```
#emergency
```

### Conjunctions of Terms

Multiple query terms can be combined by using the and-operator `&&` or the or-operator `||` to retrieve the intersection or the union of the attributes matching the subqueries. E.g. in order to filter all the phone numbers which contain the _emergency_ tag use to following IQL query:

```
PhoneNumber && #emergency
```

To filter for the given and last name attributes in a single query use the or-operator:

```
GivenName || LastName
```

### Grouping and Order of Evaluation

Conjunctions can contain arbitrarily many subqueries and will be evaluated from left to right. In order to specify a certain order in which subqueries are to be executed or to group subqueries, use parentheses `()`. E.g. in order to combine the last two examples and to return emergency phone numbers as well as name information, use the following query:

```
( GivenName || LastName ) || ( PhoneNumber && #emergency )
```

**NOTE** Multiple levels of nested parentheses must be separated by a whitespace character: `( ( ... ) )`.

### Negation

To negate a subquery, i.e. to match the set complement of the subquery use the negation `!` operator. The following query will return all phone numbers which do not have an _emergency_ tag:

```
PhoneNumber && !#emergency
```

## Interactive Demo Playground

Use the following text area to test out different IQL queries. Below is a selection of IdentityAttributes which, if matched by the query, will have their background highlighted. The input area will also inform you of syntax errors.

{% include iql-demo.html %}
