---
title: "Introduction"
permalink: /explore
toc: true
---

# What is enmeshed?

Enmeshed is an open source project combining various assets into an overarching digitalization approach for users and organizations. Its overall goal is to introduce a secure but easy-to-use way to share and request data and digital signatures between contacts.

A focus is the digitalization of the end user: enmeshed is bringing back control to the end user in an easy-to-use way and thus empowering its users to use the modern IT world which was usually an area only experts were able to cope with. With enmeshed the user actively takes part of the business processes, allowing a whole new digital experience.

On the other hand, many organizations are still having trouble to digitize their business processes. Enmeshed introduces a different mindset - as well as components and tools - on how to securely communicate with other organizations and users. All this is done while keeping an easy-to-integrate approach in mind.

The adjective "enmeshed" (\in'meshd\ or \en'meshd\ or /ɪnˈmeʃt/ ) means "to be entangled in s.th." or "parts which are patched together". Though sometimes used with a negative touch, nowadays we are all enmeshed in digital processes somehow, with more or less user satisfactory and effectiveness.

We think by not only connecting identities of users and organizations to those digital processes, but tightly interweaving them within the actual processes, the overall user experience and process efficiency will rise. Enmeshed identities have a secure, digital and modern link between each other, which is not only used for overall communication but for professional processes.

For us, being enmeshed is a very good thing: you know what is going on and the data which is used. You can take part in completely digital processes, without the hazzle of repeating yourself again and again. Even automated actions are available for end users.

Sounds promising? Learn more about why we are doing this in the next chapter.

# Why enmeshed?

Digitalization is one of the big challenges in the 21st century.

However, digitalization projects tend to be cumbersome, get out of time / budget, and get complicated very fast. The problem scope is so vast, that experts usually focus on specific topics and very few people have an overarching view on top of desirability, feasibility, and visibility.

The common approach to tackle the digitalization is a siloed-one, many software vendors, consulting agencies and technologies try to focus on some of the technical problems, but usually not all of them.

A digitalization of the "last mile" to the end user is usually not in scope of these approaches. This also includes the secure communication to the end user, which is often tackled by providing them with additional online accounts and multi factor authentication approaches to download specific information manually.

So far there is no user-centric approach for digitalization: Each organization creates own solutions for digitizing their specific business processes which are usually not compatible to other digitalization solutions. In the end the user has to manually combine the various solutions to manage its own digital life. This is why a user nowadays has so many different accounts, contact details, old master data, and so on...

You know what we mean? Have a look at the next chapter for a quick introduction on how enmeshed works.

# How does enmeshed work?

Enmeshed introduces an overarching solution, securely connecting users and organizations without the use of decentralized technologies like blockchains. However, it makes use of the decentralized mindset, like decentralized identities.

Mature technologies and architectures are used as a base for enmeshed. In combination with state-of-the-art encryption technologies, a complete web stack is used for all features, making enmeshed a very powerful yet portable and modular stack for solving many challenges within various scenarios and industries.

Enmeshed consists of three main components using different layers to communicate between:

## Components

- [App]({% link _docs_explore/50-app.md %}): Mobile and desktop software client for end users or small companies
- [Backbone]({% link _docs_explore/51-backbone.md %}): A central communication component routing messages between identities without having access to the payload
- [Connector]({% link _docs_explore/52-connector.md %}): Client for organizations which is hosted on-site with integration capabilities for business systems

## Layers

- [Backbone Layer]({% link _docs_explore/41-backbone-layer.md %}): Secured, zero-knowledge synchronization layer between App-to-Backbone or Connector-to-Backbone with cross-device capabilities and postal services
- [Transport Layer]({% link _docs_explore/42-transport-layer.md %}): Cross-identity secure communication tunnel App-to-App, App-to-Connector or Connector-to-Connector
- [Consumption Layer]({% link _docs_explore/43-consumption-layer.md %}): Cross-identity payload definitions and normalized data structures (schemas), as well as single-identity business logic implementation and data structures, either for persons or organizational identities.
- [Integration Layer]({% link _docs_explore/44-integration-layer.md %}): Single-identity integration logic to integrate existing business systems primarily for organizational identities.
- [User-Experience Layer]({% link _docs_explore/45-user-experience-layer.md %}): The user experience for enmeshed related features primarily for end users.

The following high-level picture shows the whole ensemble of enmeshed components and layers:

![High level architecture diagram of enmeshed components and layers]({{ '/assets/images/explore/layers.png' | relative_url }}){: .align-center}

The "Zero Knowledge Border" marks the area where data is encrypted or pseudonymized to a point that the Backbone operator has no chance of accessing personal data. The secure communication between identities happens within the [Transport Layer]({% link _docs_explore/42-transport-layer.md %}) based on a normalized enmeshed schema.

## Enmeshed App

End-users are able to install the [enmeshed App]({% link _docs_explore/50-app.md %}) from their favorite app stores for free. It will also available for various desktop operating systems.

The App provides the user experience for the user's digital identity. With it, the user can access the features of the transport, content and consumption layers.

It is possible to use multiple identities with the same App. It is also possible to use multiple Apps and devices with one identity.

## Enmeshed Backbone

The [enmeshed Backbone]({% link _docs_explore/51-backbone.md %}) provides the foundation to communicate between the components on the backbone layer. It hosts the central services which are required for a seamless experience across identities and the devices of one identity.

It is an encrypted storage layer for all kind of information. Although the messages, files, tokens, etc. have a certain expiry date, the data is stored on the backbone until this expiry date. Thus, the backbone acts as a data-access, backup and synchronization helper for the identities.

Due to the fact that devices of end-users are not always online, a "technical recipient" needs to be introduced which receives the (encrypted) messages from senders and stores them. The recipients are notified automatically by push channels.

The Backbone is based on a monolithic architecture and is highly virtualized with Docker containers. It is thus quite capable to scale vertically and horizontally.

## Enmeshed Connector

The client for organizations is the [enmeshed Connector]({% link _docs_explore/52-connector.md %}). It acts with a separate digital identity of the organization within the network of the organization. Thus, it is in the hands of the corresponding IT department and can be set up next to the organization's business systems using the majority of the features.

The Connector is hosted by a single Docker container and provides a REST API for all features of the transport layer. It can thus be perfectly used for integration purposes. The Connector transparently encrypts or decrypts the respective payload, synchronizes with the Backbone and keeps track of the Enmeshed data.

# Who is behind enmeshed?

The idea of enmeshed is based on the work of many others in the area of open source software, encryption, decentralized identities, decentralized ledgers, and so on. These approaches were combined by a group of people who envisioned a great digital experience for everybody.

So far, the primary implementation work has been done by j&amp;s-soft GmbH in Heidelberg, Germany.
