---
title: "enmeshed Runtime"
permalink: /explore/runtime
toc: true
---

[enmeshed Runtime GitHub Repository](https://github.com/nmshd/runtime)

The Runtime wraps all features of enmeshed into a single programming interface. It is combining the various libraries to a powerful software stack, primarily based on TypeScript, which can be used on nearly every device on the world - and even in the browser.

Versions, local and remote data, synchronization, communication, and many more items are tracked by the Runtime in order to provide an easy-to-use interface.

## Runtime Flavors

Although the Runtime could be used by its own, it comes with two flavors:

- The AppRuntime with a focus of using it with a user interface as an application on a user's device, which is used within the enmeshed App
- The ConnectorRuntime with a focus on integration capabilities based on dedicated databases and virtualization, which is used for the enmeshed Connector

## Runtime Building Blocks

### Crypto Library <a href="https://github.com/nmshd/ts-crypto"><i class="fab fa-fw fa-github"/></a> {#crypto-library}

To separate the cryptographic interfaces from the used cryptographic library (e.g. libsodium), the crypto library acts as a wrapper. Additionally, cryptographically-related source code is bundled within this library.

This approach allows us to implement features for cryptographic classes, for example the serialization of keys. Additionally, security audits could focus on this library.

### Transport Library <a href="https://github.com/nmshd/runtime/tree/main/packages/transport"><i class="fab fa-fw fa-github"/></a> {#transport-library}

The implementation of the transport layer is the transport library. It combines the features of different third party libraries and the crypto library to support the following features:

- Communication with the Backbone
- Synchronization with the Backbone
- Encrypting and decrypting communication with other Identities
- Managing Identities and devices
- Managing cryptographic artifacts
- Cross-device synchronization of the datawallet

### Content Library <a href="https://github.com/nmshd/runtime/tree/main/packages/content"><i class="fab fa-fw fa-github"/></a> {#content-library}

To separate the actual payload of Messages from the Message structure and envelope, the content library was set up. It is a repository of interfaces and types which are used as the payload of communication between Identities.

Whereas the transport library implements the foundation of communication between Identities and the actual secure tunnel between Identities, the content library defines the payload on top of this tunnel. You can see it as the definition of a contract between all Identities.

- Attributes and AttributeValues
- Message formats like Mails, RequestMails, or technical messages
- Transactional formats like Requests

### Consumption Library <a href="https://github.com/nmshd/runtime/tree/main/packages/consumption"><i class="fab fa-fw fa-github"/></a> {#consumption-library}

Due to the fact that the Backbone cannot implement business logic to process content sent over the wire just like any other central service, the business logic needs to reside on the respective clients.

The consumption library implements this business logic and additionally introduces some local data structures for keeping track of the sent and received payload.

- Processors implementing logic what should be done if a RequestItem is accepted
- Local metadata structures on top of the data of the content library
- Local data structures

## Runtime Modules

The Runtime is built with the focus to be as modular as possible. Therefore, it is possible to write own Modules for it.

The Runtime provides its own builtin Modules. These Modules are available by default, but can be configured by the User of the Runtime. They can be configured using the `@nmshd/runtime:` prefix (e.g. `@nmshd/runtime:<module-name>`) as the location field in the Modules part of the Runtime configuration.

```jsonc
{
  // ...
  "modules": {
    "decider": {
      "enabled": true,
      "location": "@nmshd/runtime:DeciderModule"
    }
  }
}
```

Find a description of the available Modules in the following sections.

### Request Module

**Note:** This Module is responsible for important logic in the enmeshed ecosystem and is therefore enabled by default in every official enmeshed Application.
{: .notice--warning}

This Module makes heavy use of Requests, LocalRequests and Response. Head over to the description of our [data model]({% link _docs_integrate/data-model-overview.md %}), where you can find a detailed description of them.

The Module is responsible for:

- creating an incoming LocalRequest when a peer RelationshipTemplate is loaded
- scanning for Requests in received Messages to store it as incoming LocalRequests in the database
- scanning for Responses in received Messages to close outgoing LocalRequests in the database
- scanning for Requests in outgoing Messages to store it as outgoing LocalRequests in the database
- taking action when the User decides (accepts or rejects) a Request
  - when the Request came from a RelationshipTemplate the Module creates a Relationship with the contents of the User's Response if the User accepted the Request (rejection is currently not handled)
  - when the Request came from a Message the Module sends back a Message containing the User's Response (accept and reject)
- listen for an incoming Relationship to create a Request out of the RelationshipTemplate that was used to create the Relationship and to directly complete the Request using the Response sent in the Relationship's `creationContent`

### Decider Module

**Note:** This Module is responsible for important logic in the enmeshed ecosystem and is therefore enabled by default in every official enmeshed Application.
{: .notice--warning}

The Decider Module can be configured to automatically decide incoming Requests.
For this to work, each RequestItem must match a form that was previously configured.
The configuration also states how the RequestItem is processed, i.e. if it is rejected or accepted and in the latter case which parameters are used to do so.

If there is no suitable configuration for every [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) of a Request or at least one RequestItem is an [AuthenticationRequestItem]({% link _docs_integrate/data-model-overview.md %}#authenticationrequestitem) or a [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem), the Decider Module will not be able to automatically decide the Request.
In this case, the `status` of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) is moved from `DecisionRequired` to `ManualDecisionRequired` and the user must manually decide the Request.

### Message Module

For an overview about the mentioned events in this section please refer to the [Events]({% link _docs_integrate/connector-events.md %}) docs.

The Message Module is responsible for processing `transport.MessageReceived` events and re-publish them as events that are able to handle and consume in different situations.

In every case the MessageModule will publish a `consumption.relationshipEvent.<Relationship-ID-between-the-sender-and-you>` for e.g. reloading the Relationship including its newest Messages in an UI.

When the Message is a [Mail]({% link _docs_integrate/data-model-overview.md %}#mail) a `consumption.mailReceived` event will be published. This is useful if you only want to refresh your UI that is rendering structured Mails.

If you are interested in these events you need to enable this module, because it is not enabled by default.
