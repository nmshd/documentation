---
# Start automatic generation
permalink: integrate/iql-syntax
published: true
title: "IQL Syntax"
type: scenario
toc: true
properties:
  - id: SC048
  - category: Manage Attributes
  - description: Description of the IQL Syntax
  - customer: All
  - component: integrate
  - level: Advanced
  - implementation status: DONE
  - documentation status: DONE
  - published: true
  - link: iql-syntax
require:
required_by:
# End automatic generation
---

The enmeshed _Identity Query Language_ (IQL) is a domain-specific language to query IdentityAttributes using a concise and simple syntax. The IQL is tailored towards usage by non-technical users and integrators. The IQL is complete, i.e. it's expressive enough to query arbitrary subsets of IdentityAttributes and can thus serve as a replacement for IdentityAttributeQueries. IQL queries can be used as part of a [request]({% link _docs_use-cases/use-case-consumption-execute-an-iqlquery.md %}).

## Basic Syntax

### Filter by Value Type

The most common usage of the IQL is to filter [IdentityAttributes]({% link _docs_integrate/attribute-values.md %}#identity-attributes) by their [value types]({% link _docs_integrate/attribute-values.md %}#identity-attributes) or tags. Value types are specified by directly using their names as terms in the query string. For example, the following IQLQuery will match all phone numbers, i.e. all IdentityAttributes of value type _PhoneNumber_:

```iql
PhoneNumber
```

[Simple IdentityAttributes]({% link _docs_integrate/attribute-introduction.md %}#simple-identityattributes) can be filtered by their values using the equality operator '='. For example, the following IQLQuery will match all LastName of value _Miller_:

```iql
LastName=Miller
```

[Complex IdentityAttributes]({% link _docs_integrate/attribute-introduction.md %}#complex-identityattributes) can be queried individually on their fields by concatenating the field's name with the IdentityAttribute's type, separated by a period character '.' and then specifying the target value after the equality operator '='. For example, the following IQLQuery will match all German StreetAddresses:

```iql
StreetAddress.country=DE
```

### Filter by Tags

Tags can be filtered for by prefacing the tag with a hash _#_. For example, the following IQLQuery will match all IdentityAttributes whose tags contain the value _emergency_:

```iql
#emergency
```

### Conjunctions of Terms

Multiple query terms can be combined by using the and-operator `&&` or the or-operator `||` to retrieve the intersection or the union of the IdentityAttributes matching the subqueries. For example, in order to filter all the phone numbers which contain the _emergency_ tag use the following IQLQuery:

```iql
PhoneNumber && #emergency
```

To filter for the given and last name IdentiyAttributes in a single query use the or-operator:

```iql
GivenName || LastName
```

### Grouping and Order of Evaluation

Conjunctions can contain arbitrarily many subqueries and will be evaluated from left to right. In order to specify a certain order in which subqueries are to be executed or to group subqueries, use parentheses `()`. For example, in order to combine the last two examples and to return emergency phone numbers as well as name information, use the following query:

```iql
( GivenName || LastName ) || ( PhoneNumber && #emergency )
```

**NOTE** Multiple levels of nested parentheses must be separated by a whitespace character: `( ( ... ) )`.
{: .notice--info}

### Negation

To negate a subquery, i.e. to match the set complement of the subquery, use the negation `!` operator. The following query will return all phone numbers which do not have an _emergency_ tag:

```iql
PhoneNumber && !#emergency
```

### Whitespaces in Tags and Values

Tags and values which contain whitespaces must be wrapped in single quotes. For example, the following IQLQuery will match all StreetAddresses in the city of 'Weil am Rhein' which are tagged as _Primary Address_:

```iql
StreetAddress.city='Weil am Rhein' && #'Primary Address'
```

## Interactive Demo Playground

Use the following text area to test out different IQL queries. Below is a selection of IdentityAttributes which, if matched by the query, will have their background highlighted. The input area will also inform you of syntax errors.

{% include iql-demo.html %}
