---
title: "Announcing Enmeshed v2 Requests"
date: 2022-07-13T1:00:00+02:00
categories:
    - blog
tags:
    - announcement
    - v2
    - Requests
toc: true
---

This is one of the blog posts regarding Enmeshed v2. For an overview of all Enmeshed v2 blog posts, please refer to the [Enmeshed v2 announcement blog post]({% post_url 2022-06-27-announcing-enmeshed-v2 %}).

This blog post requires a superficial understanding of the new Attribute handling. Please refer to the [corresponding blog post]({% post_url 2022-06-30-announcing-enmeshed-v2-attributes %}) to learn more about it if you are not yet familiar with it.

This blog post describes what Requests are in the Enmeshed universe and how they are used to exchange Attributes and establish Relationships.

When we mention "the App" or "the Connector" in this blog post, we mean the official [Enmeshed App]({% link _docs_explore/50-app.md %}) and [Enmeshed Connector]({% link _docs_explore/52-connector.md %}).

Keep in mind that we cannot describe all details in this blog post. Refer to the V2 documentation for further information about how Requests are working "under the hood".

## Requests

Requests in Enmeshed always defined a way to exchange structured data. In Enmeshed V1 this was exclusively about exchanging structured Attributes with its AttributesChangeRequest and AttributesShareRequest. In V1 there also was no defined response structure, as well as no track record of Requests and their status. Thus, V1 Requests were quite limited.

Requests in V2 extend the Request featureset by providing more structured Requests, as well as Requests for unstructured data. Additionally, they are not fixed to the Identitity's Attributes. One example is a form you can send to a User, which contains some questions in natural language, which does not affect the Attributes. Another example is a Multi-Factor-Authentication Request which might be available in the future.

In Enmeshed V1 `RelationshipTemplates` and `RequestMails` each defined their own way for exchanging Attributes. Further only the App could process them. When integrating via the Connector you had to manually process all Requests. For V2 we pulled the Request handling [from the User-Experience Layer to the Consumption layer]({% link _docs_explore/01-introduction.md %}/#layers). This enabled us to provide you with an API in the Connector to work with Requests. It also helped us making Request handling more flexible and easier to use.

## Exchanging Requests

The simplest way to exchange Requests is using Messages. But for sending Messages a Relationship is required. To create a Relationship we also wanted the possiblity to exchange Requests with the same structure.

### Relationships and RelationshipTemplates

The flow for establishing a Relationship between the App and another App or Connector has changed significantly. The body of the RelationshipTemplate is now a strict type that can be processed by the App and the Connector. It looks as follows:

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

When the RelationshipTemplate is scanned by the App, the Request (defined by the creator of the Template) is rendered for the User. This is similar to the flow in V1. The App will then automatically create the Relationship when the User accepts the Request.

### Messages

Messages can now be used to exchange the same Requests that are used to enter a Relationship. A Message can now simply contain the content `{ "@type": "Request", ... }` or `{ "@type": "Response", ... }`. The `RequestMail`, `AttributesChangeRequest` and `AttributesShareRequest` types are now deprecated and will be removed in the future. Because the Enmeshed V2 App will stop processing these types we strictly advise against further using them.

So far, only one Request can be sent with one Message. This is intentional, as with RequestItemGroups and RequestItems, various data or actions can be requested. If there is the need to submit multiple Requests, send multiple Messages.

## Modules managing Requests

The main component powering the Enmeshed App and the Enmeshed Connector is the Runtime. The Runtime is modular and we decided to use this to provide two Modules for managing Requests: the [Request Module]({% link _docs_explore/60-runtime.md %}#request-module) and the [Decider Module]({% link _docs_explore/60-runtime.md %}#decider-module).

The Decider Module is in its early stages and we will inform you about it in the future.
