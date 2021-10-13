---
title: "Component Overview"
permalink: /explore/components
---

Enmeshed introduces the following components:

- Enmeshed App
- Enmeshed Backbone
- Enmeshed Connector

# Enmeshed App

End-users are able to install the Enmeshed App from their favorite app stores for free. It is also available to download for various desktop operating systems.

The app provides the user experience for the user's digital identity. With it, the user can access the features of the transport and consumption layers.

# Enmeshed Backbone

The Enmeshed Backbone is the backbone of the transport layer, providing the foundation to communicate between the identities. It hosts the central services which are required for a seamless experience between the identities and the devices of one identity.

It is an encrypted storage layer for all kind of information. Although the messages, files, tokens, etc. have a certain expiry date, the data is stored on the backbone until this expiry date. Thus, the backbone acts as an data-access, backup and synchronization layer for the identities.

Due to the fact that devices of end-users are not always online, a "technical recipient" needs to be introduced which receives the (encrypted) messages by senders and stores them. The recipients are notified automatically by push channels.

The Backbone is based on a micro-service architecture and is highly virtualized with Docker containers. It is thus quite capable to scale vertically and horizontally.

The Backbone consists of the following sub-components:

- Microservices
  - Devices Service: Manages the device profiles for authenticating against the different services. Additionally keeps track of the identity behind devices and the registration of push notification tokens of the respective messaging providers (e.g. Apple Push Notification Service, Firebase Cloud Messaging)
  - Messages Service: Provides an interface for submitting and receiving messages
  - Relationships Service: Keeps track of relationships between identities, their status and possible change requests
  - Files Service: Files or other "static" binaries can be stored via the files service and used as attachments for messages.
  - Tokens Service: A repository for storing and consuming usually short-lived encrypted information, e.g. for QRCode contents.
  - Synchronization Service: Cross device synchronization of local identity data
- Infrastructure
  - Gateway: A combination of firewall, load balancer, and proxy for the different services
  - BLOB Storage: Storage for binary large objects (BLOBs)
  - Database: Storage for columnar data
  - Notification Hub

# Enmeshed Connector

The Enmeshed client for organizations is the Connector. It acts with a separate digital identity of the organization within the network of the organization. Thus, it is in the hands of the corresponding IT department and can be set up next to the organization's business systems using the majority of the features.

The Connector provides a REST API for all features of the transport layer and thus can be perfectly used for integration purposes. The Connector transparently encrypts or decrypts the respective payload, synchronizes with the Backbone and keeps track of the Enmeshed data.
