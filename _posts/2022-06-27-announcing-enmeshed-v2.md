---
title: "Announcing enmeshed V2"
date: 2022-06-27
categories:
  - blog
tags:
  - announcement
  - v2
---

We are currently working on enmeshed version 2. We got a lot of feedback from the community and so we are improving enmeshed in different areas to tackle it.

## Attributes

Attributes in enmeshed have been a huge pain point during the integration using the enmeshed Connector but also while using the enmeshed App as an end User. For enmeshed V2 we are working on a new way to handle, store and transfer Attributes.

For an overview of the changes regarding Attributes, please refer to the [corresponding blog post]({% post_url 2022-06-30-announcing-enmeshed-v2-attributes %}).

## Requests

Requests in enmeshed always defined a way to exchange structured data. In enmeshed V1 this was exclusively about Attributes. Requests in V2 will also be able to exchange data without persisting them to the User's Attributes, e.g. using a form.

In enmeshed V1 `RelationshipTemplates` and `RequestMails` each defined their own way for exchanging Attributes. Further only the App could process them. When integrating via the Connector you had to manually process all Requests. For V2 we pulled the Request handling [from the User-Experience Layer to the Consumption layer]({% link _docs_explore/01-how_does_enmeshed_work.md %}#layers). This enabled us to provide you with an API in the Connector to work with Requests. It also helped us making Request handling more flexible and easier to use.

For an overview of Requests, please refer to the [corresponding blog post]({% post_url 2022-07-13-announcing-enmeshed-v2-requests %}).

## Backwards compatibility

All these new features required a huge amount of changes behind the scenes. If we wanted to be backwards compatible, we would have had to spend a lot of extra work, which would have delayed the release by several weeks. Therefore we decided to pay the price that comes with this backwards incompatibility in favor of the earlier release date.

Backwards incompatiblity in this case means that all the data stored by the App and Connector V1 will be invalid and cannot be used anymore.

If you need a compatibility of V1 and V2, please contact us [here](https://www.js-soft.com/enmeshed/) and we will try to sort out a solution.

## Getting Prereleases

During the development of enmeshed V2 we will continue to publish new versions of the Connector and the app.

If you are curious you can already check out one of the early [Connector versions](https://github.com/nmshd/cns-connector/pkgs/container/connector/versions) tagged as `alpha`. Keep in mind that these are highly experimental and shouldn't be used in production scenarios, because there can be API changes at any time.

## Feedback

As always we are happy to hear from you through the usual channels! Feel free to share your thoughts and feedback and discuss the changes in the [V2 GitHub Discussion](https://github.com/nmshd/feedback/discussions/17).
