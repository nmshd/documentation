---
title: "Announcing Enmeshed V2 Attributes"
date: 2022-06-30T12:00:00+02:00
categories:
    - blog
tags:
    - announcement
    - V2
    - attributes
---

This is one of the blog posts regarding Enmeshed V2. For an overview of all V2 blog posts, please refer to the [V2 announcement blog post]({% post_url 2022-06-27-announcing-enmeshed-v2 %}).

- [V1 Attributes](#v1-attributes)
- [V2 Attributes](#v2-attributes)
- [Conclusion](#conclusion)

# V1 Attributes

So far, attributes in Enmeshed have only been name/value pairs for identities, e.g.:

```json
{
    "@type": "Attribute",
    "@version": 1,
    "name": "Person.givenName",
    "value": "Max"
}
```

Attributes are uniquely identified by name for each identity. There are considerable implications by this approach which have been voiced by the community so far. The major painpoints with the current approach are:

-   Only string values are supported
-   Having multiple attributes of the same name (e.g. `Comm.email`) is not really possible
-   There is no clear definition and normalization of attribute names and values
-   Documentation of names, possible values and the whole concept behind is too sparse
-   Complex attributes (like an address) are not possible out of the box
-   There is no semantic validation of attribute values
-   No binary content is possible as an attribute value and thus binary content (like files) could not be stored or shared as attributes
-   There is no inheritance of attributes. An attribute can only be queried by a name with an exact match by a string comparison. Different addresses, e.g. a street address or a post office box cannot be queried with a single query
-   Attributes can only be stored for identities and not for relationships
-   A manual user decision is always required to change attributes, even if the user has no say in the attributes at all (e.g. a company moves its headquarters and would like to update the primary address)
-   Querying attributes of a user by only supplying a name is too broad and error prone

# V2 Attributes

We therefore decided to completely revamp the attribute handling to a new version, which unfortunately will be backward-incompatible to the old attribute handling. Otherwise, we would have to live with too many constraints.

To get started with the V2 Attributes here you can see the same attribute as shown above in the V1 Attributes section transferred to a V2 Attribute:

```json
{
    "@type": "Attribute",
    "@version": 2,
    "value": {
        "@type": "GivenName",
        "value": "Max"
    },
    "store": "<address>" // Enmeshed address the attribute is associated to
}
```

Below please find the major changes of the new attribute handling:

-   Attributes no longer have a string value but a flexible type as a value, which could be extended, meaning:
    -   No longer only string value support
    -   Attribute values can be documented much easier
    -   Complex attributes now work out of the box, like Person or Address
    -   Semantic validation of attribute values is now possible (e.g. phone numbers, e-mail addresses or tax ids)
    -   Binary content is now possible, i.e. storing and querying files as attributes of identities
-   The attribute value type is replacing the attribute name most of the time
    -   With typed attribute values introduced above, we no longer require a specific attribute name to be set. The normalized type `GivenName` replaces the old attribute name `Person.givenName` and so on.
    -   Due to inheritance of attribute values, querying a super type `Address` would imply, that the user could select between a stored `StreetAddress` and a stored `PostalBoxAddress`. On the other hand, querying a `StreetAddress` automatically implies, that only the stored `StreetAddress` can be selected.
-   Multiple attribute values of the same type are supported
    -   Thus, multiple addresses or communication properties are supported inherently
    -   The user can decide between possible attribute values if multiple values do fit to the query
-   Further semantics of an attribute can be set by tagging an attribute according to predefined or custom attribute tags. Whereas an attribute's type defines its structure (e.g. `Address`) the attribute's tags might define that it is a work or a private address.
    -   Tags introduce a new semantic metadata set to an attribute, allowing to specify its predominant use.
    -   With tags it is possible to differentiate attributes with the same type:
        -   An attribute StreetAddress with value X is stored with tags `personal` and `official`
        -   A second attribute StreetAddress with value Y is stored with tag `work`
        -   Value Y will be proposed to the user if a StreetAddress with tag `work` is queried
-   In addition to the tags, we would like to introduce a relationship store concept, with which attributes can be stored between identities on a per-relationship base. This comes in handy for use cases with relationship-specific or contract-specific attributes:
    -   Think about a customerNumber which needs to be stored between a user and a webshop somehow. It doesn't belong to the user but it also does not belong to the webshop.
    -   Additionally, this concept can be used for submitting relationship metadata like company brand/theme information, possible actions a user could trigger for the relationship or other cool stuff.
    -   A restriction of who can change the relationship attribute can block users messing around with `their customerId`.

# Conclusion

All in all, many changes which will make the attribute management of and between identities much more mature. Together with a new way of handling requests (and responses) about that we'll be blogging in the near future, we think Enmeshed has a much more holistic feature set.
