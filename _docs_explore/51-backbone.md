---
title: "Enmeshed Backbone"
permalink: /explore/backbone
toc: true
---

# Backbone Components

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

- Gateway: A combination of firewall, load balancer, and proxy for the different services
- BLOB Storage: Storage for binary large objects (BLOBs)
- Database: Storage for columnar data
- Notification Hub

## Backbone Services (Runtime)

(Micro-)Services of the Backbone are deployed on a Kubernetes cluster within the Backbone Infrastructure. These services implement the Enmeshed business logic on top of the infrastructure services provided by the Backbone Infrastructure.

The following services are available on the runtime:

- Devices Service: Manages the device profiles for authenticating against the different services. Additionally keeps track of the identity behind devices and the registration of push notification tokens of the respective messaging providers (e.g. Apple Push Notification Service, Firebase Cloud Messaging)
- Messages Service: Provides an interface for submitting and receiving messages
- Relationships Service: Keeps track of relationships between identities, their status and possible change requests
- Files Service: Files or other "static" binaries can be stored via the files service and used as attachments for messages.
- Tokens Service: A repository for storing and consuming usually short-lived encrypted information, e.g. for QRCode contents.
- Synchronization Service: Cross device synchronization of local identity data

## Backbone Services and Libraries (Designtime)

The implementation of the Enmeshed logic is done via the respective services, libraries are used for common source code. The open sourcing of the Backbone is still in progress.
