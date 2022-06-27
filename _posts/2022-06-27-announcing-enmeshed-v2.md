---
title: "Announcing Enmeshed V2"
date: 2022-06-27T12:00:00+02:00
categories:
    - blog
tags:
    - announcement
    - V2
---

We are currently working on Enmeshed version 2. At the moment we are in the alpha phase and have already published some [connector alpha versions](https://github.com/nmshd/cns-connector/pkgs/container/connector/versions) and [alpha versions for all of our core libraries](https://www.npmjs.com/search?q=%40nmshd).

We got a lot of feedback from the community and we are currently working on improvements in different areas of Enmeshed to tackle it.

## Attributes

Attributes in Enmeshed have been a huge painpoint during the integration using the Enmeshed Connector but also while using the Enmeshed App as an end user. For Enmeshed V2 we are working on a new way to handle, store and transfer Attributes.

We will publish a blog post with details about the changes regarding Attributes in Enmeshed V2 in the coming days.

## Requests

In Enmeshed V1 `RelationshipTemplates` and `RequestMails` both defined their own way for exchanging Attributes, but only the app could process them. For Enmeshed V2 we pulled the Request handling [from the User-Experience Layer to the Consumption layer]({% link _docs_explore/01-introduction.md %}/#layers). This enabled us to provide you with an API in the Connector to work with Requests. It also helped us to make the Request handling more flexible and to make it easier to use.

We will publish a blog post with details about the changes regarding Requests in Enmeshed V2 in the coming days.
