---
title: "Introduction"
permalink: /explore
toc: true
---

# What is Enmeshed?

Enmeshed is an open source project combining various assets into an overarching digitalization approach for users and organizations. Its overall goal is to introduce a secure but easy-to-use way to share and request data and digital signatures between contacts.

A focus is the digitalization of the end user: Enmeshed is bringing back control to the end user in an easy-to-use way and thus empowering its users to use the modern IT world which was usually an area only experts were able to cope with. With Enmeshed the user actively takes part of the business processes, allowing a whole new digital experience.

On the other hand, many organizations are still having trouble to digitalize their business processes. Enmeshed introduces a different mindset - as well as components and tools - on how to securely communicate with other organizations and users. All this is done while keeping an easy-to-integrate approach in mind.

The name Enmeshed is an adjective

Sounds promising? Learn more about why we are doing this in the next chapter.

# Why Enmeshed?

Digitalization is one of the big challenges in the 21st century.

However, digitalization projects tend to be cumbersome, get out of time / budget, and get complicated very fast. The problem scope is so vast, that experts usually focus on specific topics and very few people have an overarching view on top of desirability, feasibility, and visibility.

The common approach to tackle the digitalization is a siloed-one, many software vendors, consulting agencies and technologies try to focus on some of the technical problems, but usually not all of them.

A digitalization of the "last mile" to the end user is usually not in scope of digitalization approaches. This also includes the secure communication to the end user, which is often tackled by providing them with additional online accounts and multi factor authentication approaches to download specific information manually.

This is no user-centric approach for digitalization: Each organization creates own solutions for digitalizing their specific business processes which are usually not compatible to other digitalization solutions. In the end the user has to manually combine the differrent digitaliziation efforts of every contact to manage its own digitalization. This is why a user nowadays has so many different accounts, contact details, old master data, and so on...

Did we catch you or your organization on such a digitalization approach? Have a look at the next chapter for a quick introduction on how Enmeshed works.

# How does Enmeshed work?

Enmeshed introduces an overarching digitalization solution, securely connecting users and organizations without the use of decentralized technologies like blockchains. However, it makes use of the decentralized mindset, like decentralized identities.

Mature technologies and architectures are used as a base for Enmeshed. In combination with state-of-the-art encryption technologies, a complete web stack is used for all features, making Enmeshed a very powerful yet portable and modular digitalization stack.

Enmeshed consists of three main components using different layers to communicate between:

**Components:**

- [App](/explore/app): Mobile and desktop software client for end users or small companies
- [Backbone](/explore/backbone): A central communication component routing messages between identities without having access to the payload
- [Connector](/explore/connector): Client for organizations which is hosted on-site with integration capabilities for business systems

**Layers:**

- [Backbone Layer](/explore/layers/backbone): Secured, zero-knowledge synchronization layer between App<>Backbone or Connector<>Backbone with cross-device capabilities and postal services
- [Transport Layer](/explore/layers/transport): Cross-identity secure communication tunnel App<>App, App<>Connector or Connector<>Connector
- [Content Layer](/explore/layers/content): Cross-identity payload definitions and normalized data structures
- [Consumption Layer](/explore/layers/consumption): Single-identity business logic implementation and data structures, either for persons or organizational identities.
- [Integration Layer](/explore/layers/integration): Single-identity integration logic to existing business systems primarily for organizational identities.
- [User Experience Layer](/explore/layers/user-experience): The user experience for Enmeshed related features

## The Enmeshed App

End-users are able to install the [Enmeshed App](/explore/app) from their favorite app stores for free. It is also available to download for various desktop operating systems.

The App provides the user experience for the user's digital identity. With it, the user can access the features of the transport, content and consumption layers.

It is possible to use multiple identities with the same App. It is also possible to use multiple Apps with one identity.

## Enmeshed Backbone

The [Enmeshed Backbone](/explore/backbone) provides the foundation to communicate between the components on the backbone layer. It hosts the central services which are required for a seamless experience across identities and the devices of one identity.

It is an encrypted storage layer for all kind of information. Although the messages, files, tokens, etc. have a certain expiry date, the data is stored on the backbone until this expiry date. Thus, the backbone acts as an data-access, backup and synchronization helper for the identities.

Due to the fact that devices of end-users are not always online, a "technical recipient" needs to be introduced which receives the (encrypted) messages by senders and stores them. The recipients are notified automatically by push channels.

The Backbone is based on a micro-service architecture and is highly virtualized with Docker containers. It is thus quite capable to scale vertically and horizontally.

## Enmeshed Connector

The client for organizations is the [Enmeshed Connector](/explore/connector). It acts with a separate digital identity of the organization within the network of the organization. Thus, it is in the hands of the corresponding IT department and can be set up next to the organization's business systems using the majority of the features.

The Connector is hosted by a single Docker image and provides a REST API for all features of the transport layer. It can thus be perfectly used for integration purposes. The Connector transparently encrypts or decrypts the respective payload, synchronizes with the Backbone and keeps track of the Enmeshed data.

It so far is not capable communicating on a content, consumption and integration layer.

# Who is behind Enmeshed?

The idea of Enmeshed is based on the work of many others in the area of open source software, encryption, decentralized identities, decentralized ledgers, and so on. These approaches were combined by a group of people who envisioned a great digital experience for everybody.

The primary implementation provider is j&amp;s-soft GmbH in Heidelberg, Germany.
