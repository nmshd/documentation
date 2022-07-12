---
title: "Announcing Enmeshed v2 Requests"
date: 2022-07-01T12:00:00+02:00
categories:
    - blog
tags:
    - announcement
    - v2
    - Requests
toc: true
---

This is one of the blog posts regarding Enmeshed v2. For an overview of all Enmeshed v2 blog posts, please refer to the [Enmeshed v2 announcement blog post]({% post_url 2022-06-27-announcing-enmeshed-v2 %}).

This blog post requires a superficial understanding of the new attribute handling. Please refer to the [corresponding blog post]({% post_url 2022-06-30-announcing-enmeshed-v2-attributes %}) to learn more obout it if you are not yet familiar with it and head back.

This blog post will describe what Requests are in the Enmeshed universe and how they are used to exchange Attributes and establish Relationships.

## Requests

Requests in Enmeshed always defined a way to exchange structured data. In Enmeshed V1 this was exclusively about attributes. Requests in V2 will also be able to exchange data without persisting them to the user's attributes, e.g. using a form.

In Enmeshed V1 `RelationshipTemplates` and `RequestMails` each defined their own way for exchanging Attributes. Further only the App could process them. When integrating via the Connector you had to manually process all Requests. For V2 we pulled the Request handling [from the User-Experience Layer to the Consumption layer]({% link _docs_explore/01-introduction.md %}/#layers). This enabled us to provide you with an API in the Connector to work with Requests. It also helped us making Request handling more flexible and easier to use.

## Exchanging Requests

The simplest way to exchange Requests is using Messages. But for sending messages a Relationship is required. To create a Relationship we also wanted the possiblity to exchange Requests with the same structure.

### Relationships and RelationshipTemplates

The flow for entering a Relationship between the App and another App or Connector has changed significantly. The body of the RelationshipTemplate is now a strict type that can be processed by the App and the Connector. It looks as follows:

```ts
interface RelationshipTemplateBody {
    "@type": "RelationshipTemplateBody";
    title?: string;
    metadata?: object;
    onNewRelationship: Request;
    onExistingRelationship?: Request;
}
```

More about the structure of a Request will follow in the V2 documentation.

When the template is scanned by the App, the Request is validated and the User is given a form defined by the creator of the Template similar to the flow in V1. The App will then automatically create the Relationship when the User accepts the Request.

### Messages

Messages can now be used to exchange the same Requests that are used to enter a Relationship. A message can now simply contain the content `{ "@type": "Request", ... }` or `{ "@type": "Response", ... }`. The `RequestMail`, `AttributesChangeRequest` and `AttributesShareRequest` types are now deprecated and will be removed the future. Because the Enmeshed V2 App will stop processing these types we strictly advise against further using them.

## Modules managing Requests

The main component powering the Enmeshed App and the Enmeshed Connector is the Runtime. The Runtime is modular and we decided to use this to provide a module that automatically manages Requests. This module is highly important for the complete Enmeshed Logic and therefore automatically enabled and not possible to disable in the App and the Connector.

The module is responsible for:
- creating an incoming Request when a peer RelationshipTemplate is lodaded
- looking for Requests in received messages to create incoming Requests
- looking for Responses in received messages to close outgoing Requests
- looking for Requests in outgoing messages to create outgoing Requests
- taking action when the user decides (accepts or rejects) a Request
  - when the Request came from a Template the module creates a Relationship with the contents of the Users response if the User accepted the Request (rejection is currently not handled)
  - when the Request came from a Message the module sends back a Message containing the Users response (accept and reject)
- listen for an incoming Relationship to create a Request out of the RelationshipTemplate that was used to create the Relationship and to directly complete the Request using the Response sent with the RelationshipCreationChange

The second module is the Decider Module. At the moment this module is only responsible for moving a Request from the status `DecisionRequired` to the status `ManualDecisionRequired`. This indirection is necessary because the DeciderModule will automatically decide some Requests automatically without User interactions under certain conditions. We will publish a blog post about this when it is implemented.

