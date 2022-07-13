---
title: "Enmeshed Runtime"
permalink: /explore/runtime
toc: true
---

[Enmeshed Runtime GitHub Repository](https://github.com/nmshd/cns-runtime)

The Runtime wraps all features of Enmeshed into a single programming interface. It is combining the various libraries to a powerful software stack, primarily based on TypeScript, which can be used on nearly every device on the world - and even in the browser.

Versions, local and remote data, synchronization, communication, and many more items are tracked by the Runtime in order to provide an easy-to-use interface.

## Runtime Building Blocks

### Crypto Library <a href="https://github.com/nmshd/cns-crypto"><i class="fab fa-fw fa-github"/></a> {#crypto-library}

To separate the cryptographic interfaces from the used cryptographic library (e.g. libsodium), the crypto library acts as a wrapper. Additionally, cryptographically-related source code is bundled within this library.

This approach allows us to implement features for cryptographic classes, for example the serialization of keys. Additionally, security audits could focus on this library.

### Transport Library <a href="https://github.com/nmshd/cns-transport"><i class="fab fa-fw fa-github"/></a> {#transport-library}

The implementation of the transport layer is the transport library. It combines the features of different third party libraries and the crypto library to support the following features:

-   Communication with the Backbone
-   Synchronization with the Backbone
-   Encrypting and decrypting communication with other identities
-   Managing identities and devices
-   Managing cryptographic artifacts
-   Cross-device synchronization of the datawallet

### Content Library <a href="https://github.com/nmshd/cns-content"><i class="fab fa-fw fa-github"/></a> {#content-library}

To separate the actual payload of messages from the message structure and envelope, the content library was set up. It is a repository of interfaces and types which are used as the payload of communication between identities.

Whereas the transport library implements the foundation of communication between identities and the actual secure tunnel between identities, the content library defines the payload on top of this tunnel. You can see it as the definition of a contract between all identities.

-   Attributes
-   Claims
-   Message formats like Mails, RequestMails, technical messages
-   Transactional formats like Requests

### Consumption Library <a href="https://github.com/nmshd/cns-consumption"><i class="fab fa-fw fa-github"/></a> {#consumption-library}

Due to the fact that the Backbone cannot implement business logic to process content sent over the wire just like any other central service, the business logic needs to reside on the respective clients.

The consumption library implements this business logic and additionally introduces some local data structures for keeping track of the sent and received payload.
