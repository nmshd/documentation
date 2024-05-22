---
title: "How does enmeshed work?"
permalink: /explore/how_does_enmeshed_work
toc: true
---

Enmeshed introduces an overarching solution, securely connecting users and organizations without the use of decentralized technologies like blockchains. However, it makes use of the decentralized mindset, like decentralized identities.

Mature technologies and architectures are used as a base for enmeshed. In combination with state-of-the-art encryption technologies, a complete web stack is used for all features, making enmeshed a very powerful yet portable and modular stack for solving many challenges within various scenarios and industries.

Enmeshed consists of three main components using different layers to communicate between:

## Components

- [App]({% link _docs_explore/50-app.md %}): Mobile and desktop software client for end users or small companies
- [Backbone]({% link _docs_explore/51-backbone.md %}): A central communication component routing Messages between identities without having access to the payload
- [Connector]({% link _docs_explore/52-connector.md %}): Client for organizations which is hosted on-site with integration capabilities for business systems

## Layers

- [Backbone Layer]({% link _docs_explore/41-backbone-layer.md %}): Secured, least-knowledge synchronization layer between App-to-Backbone or Connector-to-Backbone with cross-device capabilities and postal services
- [Transport Layer]({% link _docs_explore/42-transport-layer.md %}): Cross-identity secure communication tunnel App-to-App, App-to-Connector or Connector-to-Connector
- [Consumption Layer]({% link _docs_explore/43-consumption-layer.md %}): Cross-identity payload definitions and normalized data structures (schemas), as well as single-identity business logic implementation and data structures, either for persons or organizational identities.
- [Integration Layer]({% link _docs_explore/44-integration-layer.md %}): Single-identity integration logic to integrate existing business systems primarily for organizational identities.
- [User-Experience Layer]({% link _docs_explore/45-user-experience-layer.md %}): The user experience for enmeshed related features primarily for end users.

The following high-level picture shows the whole ensemble of enmeshed components and layers:

![High level architecture diagram of enmeshed components and layers]({{ '/assets/images/explore/layers.png' | relative_url }}){: .align-center}

The "Zero Knowledge Border" marks the area where data is encrypted or pseudonymized to a point that the Backbone operator has no chance of accessing personal data. The secure communication between identities happens within the [Transport Layer]({% link _docs_explore/42-transport-layer.md %}) based on a normalized enmeshed schema.

## Enmeshed App

End-users are able to install the [enmeshed App]({% link _docs_explore/50-app.md %}) from their favorite app stores for free. It is also available to download for various desktop operating systems.

The App provides the user experience for the user's digital identity. With it, the user can access the features of the transport, content and consumption layers.

It is possible to use multiple identities with the same App. It is also possible to use multiple Apps with one identity.

## Enmeshed Backbone

The [enmeshed Backbone]({% link _docs_explore/51-backbone.md %}) provides the foundation to communicate between the components on the backbone layer. It hosts the central services which are required for a seamless experience across identities and the devices of one identity.

It is an encrypted storage layer for all kind of information. Although the Messages, files, tokens, etc. have a certain expiry date, the data is stored on the backbone until this expiry date. Thus, the backbone acts as a data-access, backup and synchronization helper for the identities.

Due to the fact that devices of end-users are not always online, a "technical recipient" needs to be introduced which receives the (encrypted) Messages from senders and stores them. The recipients are notified automatically by push channels.

The Backbone is based on a microservice architecture and is highly virtualized with Docker containers. It is thus quite capable to scale vertically and horizontally.

## Enmeshed Connector

The client for organizations is the [enmeshed Connector]({% link _docs_explore/52-connector.md %}). It acts with a separate digital identity of the organization within the network of the organization. Thus, it is in the hands of the corresponding IT department and can be set up next to the organization's business systems using the majority of the features.

The Connector is hosted by a single Docker container and provides a REST API for all features of the transport layer. It can thus be perfectly used for integration purposes. The Connector transparently encrypts or decrypts the respective payload, synchronizes with the Backbone and keeps track of the enmeshed data.
