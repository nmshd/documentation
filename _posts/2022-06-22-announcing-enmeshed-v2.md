---
title: "Announcing Enmeshed v2"
date: 2022-06-22T11:00:00+02:00
categories:
    - blog
tags:
    - announcement
    - v2
---

We are currently working on enmeshed version 2. At the moment we are in the alpha phase and have already published some [connector alpha versions](https://github.com/nmshd/cns-connector/pkgs/container/connector/versions) and [alpha versions for all of our core libraries](https://www.npmjs.com/search?q=%40nmshd).

- [What will be new in v2?](#what-will-be-new-in-v2)
  - [Attributes](#attributes)
  - [Requests](#requests)
- [Conclusion](#conclusion)

# What will be new in v2?

We got a lot of feedback from the community and we are currently working on improvements in different areas of enmeshed to tackle it. For a better overview this blog is divided into two sequential sections:

## Attributes

Attributes in enmeshed have been a huge painpoint during the integration using the Enmeshed Connector but also while using the Enmeshed App as an end user. For Enmeshed V2 we are working on a new way to handle, store and transfer attributes.

For an overview of the changes regarding the Attributes, please refer to the [corresponding blog post]({{ site.baseurl }}{% post_url 2022-06-22-announcing-enmeshed-v2-attributes %}).

## Requests

In Enmeshed V1 Requests existed in `RelationshipTemplates` and `RequestMails`, but only the app could process them. Additionally the documentation about these Requests wasn't good (?! bessere Formulierung). In Enmeshed V2 the Request handling is pulled from the App to the Libraries powering the App (and the Connector). This helped us to make the Request handling more flexible and to make it easier to use.

For an overview of requests, please refer to the [corresponding blog post]({{ site.baseurl }}{% post_url 2022-06-22-announcing-enmeshed-v2-requests %}).

# Conclusion

Always happy to hear your feedback and more details coming soon
