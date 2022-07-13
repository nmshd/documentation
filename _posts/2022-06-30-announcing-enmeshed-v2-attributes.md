---
title: "Announcing Enmeshed V2 Attributes"
date: 2022-06-30T12:00:00+02:00
categories:
    - blog
tags:
    - announcement
    - V2
    - Attributes
toc: true
---

This is one of the blog posts regarding Enmeshed V2. For an overview of all V2 blog posts, please refer to the [V2 announcement blog post]({% post_url 2022-06-27-announcing-enmeshed-v2 %}).

In this blog post we want to talk about pain points of the V1 Attributes and how we reworked the Attributes to tackle them.

## V1 Attributes

So far, Attributes in Enmeshed have only been name/value pairs for Identities, e.g.:

```json
{
    "@type": "Attribute",
    "name": "Person.givenName",
    "value": "Max"
}
```

Attributes are uniquely identified by name for each Identity. There are considerable implications by this approach which have been voiced by the community so far. The major pain points with the current approach are:

-   Only string values are supported
-   Having multiple Attributes of the same name (e.g. `Comm.email`) is not really possible
-   There is no clear definition and normalization of Attribute names and values
-   Documentation of names, possible values and the whole concept behind is too sparse
-   Complex Attributes (like an address) are not possible out of the box
-   There is no semantic validation of Attribute values
-   No binary content is possible as an Attribute value and thus binary content (like files) could not be stored or shared as Attributes
-   There is no inheritance of Attributes. An Attribute can only be queried by a name with an exact match by a string comparison. Different addresses, e.g. a street address or a post office box cannot be queried with a single query
-   Attributes can only be stored for Identities and not for Relationships
-   A manual user decision is always required to change Attributes, even if the user has no say in the Attributes at all (e.g. a company moves its headquarters and would like to update the primary address)
-   Querying Attributes of a user by only supplying a name is too broad and error prone

## V2 Attributes

We therefore decided to completely revamp the Attribute handling to a new version, which unfortunately will be backward-incompatible to the old Attribute handling. Otherwise, we would have to live with too many constraints.

To get started with the V2 Attributes here you can see the same Attribute as shown above in the V1 Attributes section transferred to a V2 Attribute:

```json
{
    "@type": "IdentityAttribute",
    "owner": "<an-address>",
    "value": {
        "@type": "GivenName",
        "value": "Max"
    }
}
```

Below you can find the major changes of the new Attribute handling:

-   Attributes no longer have a string value but a flexible type as a value, which could be extended, meaning:
    -   No longer only string value support
    -   Attribute values can be documented much easier
    -   Complex Attributes now work out of the box, like `Person` or `Address`
    -   Semantic validation of Attribute values is now possible (e.g. phone numbers, e-mail addresses or tax ids)
    -   Binary content is now possible, i.e. storing and querying Files as Attributes of Identities
-   The Attribute value type is replacing the Attribute name most of the time
    -   With typed Attribute values introduced above, we no longer require a specific Attribute name to be set. The normalized type `GivenName` replaces the old Attribute name `Person.givenName` and so on.
    -   Due to inheritance of Attribute values, querying a super type `Address` would imply, that the user could select between a stored `StreetAddress` and a stored `PostalBoxAddress`. On the other hand, querying a `StreetAddress` automatically implies, that only the stored `StreetAddress` can be selected.
-   Multiple Attribute values of the same type are supported
    -   Thus, multiple addresses or communication properties are supported inherently
    -   The user can decide between possible Attribute values if multiple values do fit to the query
-   Further semantics of an Attribute can be set by tagging an Attribute according to predefined or custom Attribute tags. Whereas an Attribute's type defines its structure (e.g. `Address`) the Attribute's tags might define that it is a work or a private address.
    -   Tags introduce a new semantic metadata set to an Attribute, allowing to specify its predominant use.
    -   With tags it is possible to differentiate Attributes with the same type:
        -   An Attribute `StreetAddress` with value X is stored with tags `personal` and `official`.
        -   A second Attribute `StreetAddress` with value Y is stored with tag `work`.
        -   Value Y will be proposed to the user if a `StreetAddress` with tag `work` is queried.
-   In addition to the tags, we would like to introduce a Relationship store concept, with which Attributes can be stored between Identities on a per-Relationship base. This comes in handy for use cases with Relationship-specific or contract-specific Attributes:
    -   Think about a customer number which needs to be stored between a user and a webshop somehow. It doesn't belong to the user but it also does not belong to the webshop.
    -   Additionally, this concept can be used for submitting Relationship metadata like company brand/theme information, possible actions a user could trigger for the relationship or other cool stuff.
    -   A restriction of who can change the Relationship Attribute can block users messing around with their `customerId`.

## Conclusion

All in all, many changes which will make the Attribute management of and between Identities much more mature. Together with a [new way of handling Requests (and Responses)]({% post_url 2022-07-13-announcing-enmeshed-v2-requests %}), we think Enmeshed has a much more holistic feature set.
