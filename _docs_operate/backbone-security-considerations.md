---
# Start automatic generation
permalink: operate/backbone-security-considerations
published: true
title: "Backbone Security Considerations"
type: scenario
toc: true
properties:
  - id: SC120
  - category: Backbone Operations
  - description:
  - customer:
  - component: operate
  - level: Advanced
  - implementation status: DOCS ONLY
  - documentation status: DONE
  - published: true
  - link: backbone-security-considerations
require:
required_by:
# End automatic generation
---

The most important thing you have to keep in mind that the Backbone is usually running on your landscape and in your authority. This is why you are also responsible for the security of the Backbone and its data.

And as the Backbone is handling very sensitive data (please see chapter Privacy), it should be treated as any other business system - with the same requirements in terms of privacy, security, access or network setup.

## Updates

As with every software, it is important that you update the Backbone regularly from the official Docker repositories. We do our best to keep the whole enmeshed project (of course including the Backbone) as up-to-date as possible, having multiple checks with regards to security and the open-source-software lifecycle.

Additionally, any software component the Backbone or its data touches should be updated regularly.

Examples are:

- the Docker host system (Kubernetes cluster, operating system, virtual machine, ...)
- the Docker Runtime
- the database (SQL Server/PostgreSQL)
- the firewall
- the virus scanner
- the firmwares of any (network) component
- possible integration platforms and modules

## Firewall/Networking

A firewall is a security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. By implementing a firewall, you can block unauthorized access to your network and prevent malicious traffic from entering your system.

Allowing for potentially insecure protocols such as HTTP may expose sensitive information in transit to malicious parties, putting the system and its users at risk of data theft or other cyber attacks. Furthermore, the use of unsupported protocols may result in unintended side effects that could compromise system functionality or stability.

To mitigate this risk, it is recommended that the Backbone restricts the supported protocols to HTTPS, which is a secure protocol that encrypts information in transit. This will help prevent sensitive information from being exposed to malicious parties. Additionally, any feature that allows developers to override the protocol check should be explicitly enabled and documented to ensure that it is used judiciously and with caution.

When configuring the allowlist for the Backbone, it is important to include all necessary URLs while keeping the list as minimal as possible. See [Networking](#networking) for more information.

However, it is also important to consider other URLs that may need to be included in the allowlist, such as URLs for Docker Hub, GitHub Container Registry, Linux update environments, and other sources. These URLs may be necessary for the proper functioning of the system and should be carefully evaluated and included in the allowlist if deemed necessary.

To ensure the security and integrity of the system, it is recommended to regularly review and update the allowlist as necessary. This includes removing any URLs that are no longer needed and adding new URLs that may be required.

The following chapters provide a detailed overview of the networking requirements for the Backbone.

### Outbound External Connection: Internet

The Backbone uses a TLS-secured Internet connection to the push notification services Firebase Cloud Messaging (FCM) and Apple Push Notification service (APNs). Your firewall must not block access to them. See https://firebase.google.com/docs/cloud-messaging/concept-options#messaging-ports-and-your-firewall and https://support.apple.com/en-us/HT203609 for more information.

### Inbound External Connections

Since the Backbone contains services that are accessed by enmeshed Runtimes on various devices and networks, it needs to allow inbound HTTPS connections from the Internet.

### Outbound Communication to infrastructure services

The Backbone needs to access the following infrastructure services:

- database (SQL Server/PostgreSQL)
- blob storage (Azure Storage Account/Google Cloud Storage/S3 Bucket)
- event bus (Azure Service Bus/Google Cloud PubSub/RabbitMQ)

These services must be provided to the Backbone during deployment. They must be accessible from the Backbone. Keep in mind to restrict access to these services to the Backbone only, in order to avoid unauthorized access.

## Authentication and User Management

### Consumer API

The Consumer API has a built-in identity provider. Creating accounts/identities can be done via the Consumer API. After creating an account, the user can obtain a JWT by providing its credentials. This JWT can then be used to access any route of the Consumer API. No authorization is implemented.

### Admin API

So far, the Admin API only supports API-Key authentication to securely authenticate technical users. These API-Keys are random character strings with a high entropy and should be kept confidential at all times.

There is no authorization set up. So if you have the API-Key, you can access all endpoints of the Admin API.

## Rate limiting of the Consumer API

The Consumer API supports configuring quotas on different write-actions to limit how often a user can execute those. These quotas can be defined per identity. However, there are some endpoints that allow anonymous access and that therefore cannot be rate limited by quotas. These endpoints currently are:

- `POST /api/v1/Challenges`
- `POST /api/v1/Identities`

When operating the Backbone's Consumer API, you should make sure that the endpoints mentioned above are not abused by malicious users by implementing rate limiting on the network level.

## Kernel Dumps

Kernel dumps can be a useful tool for diagnosing and troubleshooting system issues. However, they can also be a security risk if they contain sensitive information such as encryption keys. If an attacker gains access to a kernel dump file, they may be able to extract this information and use it to compromise the security of your system.

As the Backbone does not have access to the host system, it cannot directly control whether or not kernel dumps are enabled. Therefore, the administrator of the host system makes a decision on whether or not to disable kernel dumps based on their own security policies and risk tolerance.

The recommended course of action is to disable kernel dumps on the host system, outside a development environment, where the Backbone is running.

This can typically be done by modifying the kernel parameters or configuration settings.

## API key rotation

It is important to ensure that API keys are secure and cannot be easily compromised. One of the key aspects of API key security is regular rotation and expiration. If an API key is not rotated or expired, it can potentially be used by an attacker who has obtained the key through unauthorized means.

## Infrastructure

### Database

- Implement **network access restrictions** to ensure that the database is only accessible through the Backbone and not directly over the public network.
- Use **strong credentials** to secure access.
- **Transport layer encryption** should be enabled if communication is routed via an **untrusted network**..
- **Regular updates and maintenance** should be performed to keep the database up-to-date and secure.
- Due to enmeshed's end-to-end encryption, any sensitive data is already encrypted by the clients, so **encryption of data on the database is not necessary**.
- For more information regarding security best practices for SQL Server, see https://learn.microsoft.com/en-us/sql/relational-databases/security/sql-server-security-best-practices. For PostgreSQL, see for example https://www.upguard.com/blog/10-ways-to-bolster-postgresql-security.

### Event Bus

- Implement **network access restrictions** to ensure that the event bus is only accessible through the Backbone and not directly over the public network.
- Use **strong credentials** to secure access.
- **Transport layer encryption** should be enabled if communication is routed via an **untrusted network**.
- **Regular updates and maintenance** should be performed to ensure the event bus remains secure.
- The user for the Backbone should only have the necessary permissions. What exactly these are depends on the event bus used:
  - In the case of RabbitMQ, the Backbone needs permission to perform the following operations:
    - exchange.declare (passive=true)
    - queue.declare (passive=true)
    - queue.bind
    - basic.publish
    - basic.consume
  - In the case of Azure Service Bus, the Backbone needs permission to do the following:
    - Manage
    - Send
    - Listen
  - In the case of Google Cloud Pub/Sub, the Backbone needs permission to do the following:
    - Publish
    - Subscribe

### Blob Storage

- Implement **network access restrictions** to ensure that the blob storage is only accessible through the Backbone and not directly over the public network.
- Use **strong credentials** to secure access.
- **Transport layer encryption** should be enabled if communication is routed via an **untrusted network**.
- **Regular updates and maintenance** should be performed to keep the storage secure.
- The user for the Backbone should **only have the necessary permissions** on the Blob storage, which include _Create_, _Read_, and _Delete_. _Update_ is currently not necessary.
