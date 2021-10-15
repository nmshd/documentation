---
title: "Technical Building Blocks"
permalink: /explore/technical-building-blocks
toc: true
toc_title: Building Blocks
---

On a more technical level, the components consist of the following technical building blocks:

- Enmeshed App
  - App Binary
  - App UI
  - App Runtime
- Enmeshed Backbone
  - Backbone Landscape
  - Backbone Services
  - Backbone Libraries
- Enmeshed Connector
  - Connector Docker Image
  - Connector API
  - Connector Runtime
- Enmeshed Runtime
  - Crypto Library
  - Transport Library
  - Content Library
  - Consumption Library

# Enmeshed App

## Platform-dependant App Binaries

For each of the various platforms, each version of the app is packaged into a platform-dependant binary. This binary is then executable / installable for the users. The binaries of the Enmeshed App are created, maintained and published by j&amp;s-soft GmbH.

Following binaries are currently created:

- iOS App for the Apple AppStore
- Android App Bundle for the Google PlayStore
- Electron App for Microsoft Windows

## Platform-dependant App Sourcecode and Build environment

Alongside the platform-independant code, platform-dependant source code is sometimes necessary. Also the build-steps and processes vary across the different platforms.

- Cordova Environment for building iOS and Android apps
- Electron Environment for building Windows applications
- Web Environment for developing the app

## App User Interface

The user interface of the Enmeshed App is platform-independently built with [OpenUI5](https://openui5.org/), a JavaScript framework for user interfaces primarily used for business applications.

## App Runtime

The Enmeshed business logic for the app is extending the [Enmeshed Runtime](#enmeshed-runtime) with app-specific implementations, like multi-profile support, local data handling or automations. You can think of the App Runtime as a more user-interface-friendly way of the Enmeshed Runtime.

# Enmeshed Backbone

The Enmeshed Backbone embraces the whole centrally hosted services. It consists of the underlying infrastructure, its hosted services, and the libraries used within the services. The Enmeshed Backbone is hosted and maintained by j&amp;s-soft GmbH.

## Backbone Landscapes (Runtime)

Usually there are three Backbone Landscapes hosted in parallel: dev, stage and prod.

- Dev Landscape: Is used for Backbone development purposes only and shouldn't be used for Enmeshed clients
- Stage Landscape: Is used for Enmeshed tests on the current Backbone version or might be used for tests on a future Backbone version
- Prod Landscape: All productive environments should access the prod landscape only. Only the prod landscape has a productive configuration like scalability, replication or operations in place.

It is possible to bring up additional landscapes on a temporary basis. These could be used for security or performance tests.

## Backbone Infrastructure (Runtime)

All required infrastructure and infrastructure services, like a database, a load balancer or a file storage are combined within the infrastructure building block. The infrastructure itself is not Enmeshed-specific, the composition of services and the overall configuration however is.

The current infrastructure provider is Microsoft Azure.

## Backbone Services (Runtime)

(Micro-)Services of the Backbone are deployed on a Kubernetes cluster within the Backbone Infrastructure. These services implement the Enmeshed business logic on top of the infrastructure services provided by the Backbone Infrastructure.

The following services are available on the runtime:

- Devices
- Files
- Messages
- Relationships
- Tokens

## Backbone Services and Libraries (Designtime)

The implementation of the Enmeshed logic is done via the respective services, libraries are used for common source code. The open sourcing of the Backbone is still in progress.

# Enmeshed Connector

## Connector Docker Image

The Connector is usually deployed with a Docker image. The Docker images can be fetched from [registry.enmeshed.eu](https://registry.enmeshed.eu/) from your Docker client. The Docker images are created, maintained and published by j&amp;s-soft GmbH.

## Connector Runtime

Just like the [App Runtime](#app-runtime) extends the [Enmeshed Runtime](#enmeshed-runtime) for user interfaces, the Connector Runtime is extending the [Enmeshed Runtime](#enmeshed-runtime) for the use within services and programs. For example, it maps REST-API-calls to Enmeshed business-logic.

## Connector API

to-be-documented

## Connector Modules

to-be-documented

# Enmeshed Runtime

[Enmeshed Runtime GitHub Repository](https://github.com/nmshd/cns-runtime)

The Runtime wraps all features of Enmeshed into a single programming interface. It is combining the various libraries to a powerful software stack, primarily based on TypeScript, which can be used on nearly every device on the world - and even in the browser.

Versions, local and remote data, synchronization, communication, and many more items are tracked by the Runtime in order to provide an easy-to-use interface.

## Crypto Library

[Crypto Library GitHub Repository](https://github.com/nmshd/cns-crypto)

To separate the cryptographic interfaces from the used cryptographic library (e.g. libsodium), the crypto library acts as a wrapper. Additionally, cryptographically-related source code is bundled within this library.

This approach allows us to implement features for cryptographic classes, for example the serialization of keys. Additionally, security audits could focus on this library.

## Transport Library

[Transport Library GitHub Repository](https://github.com/nmshd/cns-transport)

The implementation of the transport layer is the transport library. It combines the features of different third party libraries and the crypto library to support the following features:

- Communication with the Backbone
- Synchronization with the Backbone
- Encrypting and decrypting communication with other identities
- Managing identities and devices
- Managing cryptographic artifacts
- Cross-device synchronization of the datawallet

## Content Library

[Content Library GitHub Repository](https://github.com/nmshd/cns-content)

To separate the actual payload of messages with the message structure and envelope, the content library was set up. It is a repository of interfaces and types which are used as the payload of communication between identities.

Whereas the transport library implements the foundation of communication between identities and the actual secure tunnel between identities, the content library defines the payload on top of this tunnel. You can see it as the definition of a contract between all identities.

- Attributes
- Claims
- Message formats like Mails, RequestMails, technical messages
- Transactional formats like Requests

## Consumption Library

[Consumption Library GitHub Repository](https://github.com/nmshd/cns-consumption)

Due to the fact that the Backbone cannot implement business logic to process content sent over the wire just like any other central service, the business logic needs to reside on the respective clients.

The consumption library implements this business logic and additionally introduces some local data structures for keeping track of the sent and received payload.
