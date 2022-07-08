---
title: "Announcing Enmeshed V2"
date: 2022-06-27T12:00:00+02:00
categories:
    - blog
tags:
    - announcement
    - V2
---

We are currently working on Enmeshed version 2. We got a lot of feedback from the community and so we are improving Enmeshed in different areas to tackle it.

## Attributes

Attributes in Enmeshed have been a huge pain point during the integration using the Enmeshed Connector but also while using the Enmeshed App as an end user. For Enmeshed V2 we are working on a new way to handle, store and transfer Attributes.

For an overview of the changes regarding Attributes, please refer to the [corresponding blog post]({% post_url 2022-06-30-announcing-enmeshed-v2-attributes %}).

## Requests

Requests in Enmeshed always defined a way to exchange structured data. In Enmeshed V1 this was exclusively about attributes. Requests in V2 will also be able to exchange data without persisting them to the user's attributes, e.g. using a form.

In Enmeshed V1 `RelationshipTemplates` and `RequestMails` each defined their own way for exchanging Attributes. Further only the App could process them. When integrating via the Connector you had to manually process all Requests. For V2 we pulled the Request handling [from the User-Experience Layer to the Consumption layer]({% link _docs_explore/01-introduction.md %}/#layers). This enabled us to provide you with an API in the Connector to work with Requests. It also helped us making Request handling more flexible and easier to use.

We will publish a blog post with details about the changes regarding Requests in V2 in the coming days.

## Backwards compatibility

All these new features required a huge amount of changes behind the scenes. If we wanted to be backwards compatible, we would have had to spend a lot of extra work, which would have delayed the release by several weeks. Therefore we decided to pay the price that comes with this backwards incompatibility in favor of the earlier release date.

Backwards incompatiblity in this case means that all the data stored by the App and Connector V1 will be invalid and cannot be used anymore.

If you need a compatibility of V1 and V2, please contact us [here](https://www.js-soft.com/enmeshed/) and we will try to sort out a solution.

## Getting Prereleases

During the development of Enmeshed V2 we will continue to publish new versions of the Connector and the app. You will find docs of version 2 [here](https://enmeshed.eu/versions/2.0.0) and we are also constantly updating it.

If you are curious you can already check out one of the early [Connector versions](https://github.com/nmshd/cns-connector/pkgs/container/connector/versions) tagged as `alpha`. Keep in mind that these are highly experimental and shouldn't be used in production scenarios, because there can be API changes at any time.

## Feedback

As always we are happy to hear from you through the usual channels! Feel free to share your thoughts and feedback and discuss the changes in the [V2 GitHub Discussion](https://github.com/nmshd/feedback/discussions/17).
