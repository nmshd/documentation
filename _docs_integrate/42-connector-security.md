---
title: "Connector Security Considerations"
permalink: /integrate/connector-security
toc: true
---

The most important thing you have to keep in mind that the Connector is usually running on your landscape and in your authority. This is why you are also responsible for the security of the Connector and its data.

And as the Connector is handling very sensitive data (please see chapter Privacy), it should be treated as any other business system - with the same requirements in terms of privacy, security, access or network setup.

## Updates

As with every software, it is important that you update the Connector regularly from the official Docker repositories. We do our best to keep the whole Enmeshed project (of course including the Connector) as up-to-date as possible, having multiple checks with regards to security and the open-source-software lifecycle.

Additionally, any software component the Connector or its data touches should be updated regularly.

Examples are:

- the Docker host system (operating system, virtual machine, ...)
- the Docker Runtime
- the database (e.g. MongoDB or FerretDB)
- the firewall
- the virus scanner
- the firmwares of any (network) component
- possible integration platforms and modules

## Trust

Although Enmeshed introduces a secure way of knowing who is sending messages to the Connector, and the corresponding Backbone is blocking messages from unknown parties, you shouldn't trust others to not send you invalid, incorrect, illegal, or outright harmful data over the secure connection.

Especially the encrypted data coming from the Backbone - which hasn't been decrypted yet - might be harmful. We cannot check if the data is correctly encrypted. Only the Connector in your landscape does this automatically (in terms of decrypting the data and verifying its digital signature).

This brings us to the next point: Virus Scans.

## Virus Scans

You should do Virus Scans regularly whenever sending or receiving data. However, the Connector has no integration capability for Virus Scanners (yet). This means, we cannot call for a virus scan while we are encrypting or decrypting Enmeshed payload.

Thus please consider scanning the host systems and the database for viruses regularly. Additionally, even encrypted data sent to and received from the Backbone should be scanned for viruses.

## Networking

It is best practice to block unnecessary access from and to software components between networks. In this chapter it is described which access the Connector actually required and which requests could be blocked.

### Outbound External Connection: Internet

The Connector uses an TLS-secured Internet connection to the Enmeshed Backbone which runs on the domain `https://prod.enmeshed.eu`. Your firewall must not block access to this domain, otherwise the Connector won't work.

To access the latest updates, other routes might need to be opened within the firewall settings.

### No Inbound External Connections

The Connector synchronizes itself with the Backbone by a long-polling mechanism (it accesses the Internet). There is no data transfer triggered by the Backbone (or other users) and thus, there is no need for opening up special ports or reverse proxies for inbound connections from the Internet.

### Oubound Communication to Internal Networks

The Connector does need to access its database. Access to other networks or systems from the Connector can be blocked unless there is a synchronization route (webhook) set up in the Connector configuration. Otherwise, the Connector needs to access the provided internal domains for submitting new data.

### Inbound Communication from Internal Networks

Depending on the integration setup, access to the Connector from the internal network could be blocked for the majority of requests. Usually, only requests from the integration systems, the developers or administrators need to be allowed.

## Authentication and User Management

So far, the Connector supports API-Key authentication to securely authenticate technical users. These API-Keys are random character strings with a high entropy and should be kept confidential at all times. Each internal system communicating with the Connector should receive its own API-Key.

There is no authorization set up, thus every API-Key can call any API of the Connector API.

End user authentication, e.g. business users accessing the system, should be done on the respective business system. Usually, there is no need for end users to access the Connector and thus they should not have access to the Connector (from a network and authentication perspective).

## Kernel Dumps

Kernel dumps can be a useful tool for diagnosing and troubleshooting system issues. However, they can also be a security risk if they contain sensitive information such as encryption keys. If an attacker gains access to a kernel dump file, they may be able to extract this information and use it to compromise the security of your system.

As the Connector does not have access to the host system, it cannot directly control whether or not kernel dumps are enabled. Therefore, the administrator of the host system make a decision on whether or not to disable kernel dumps based on their own security policies and risk tolerance.

The recommended course of action is to disable kernel dumps on the host system, outside a development environment, where the Connector is running. This is in line with the [recommendation of libsodium](https://libsodium.gitbook.io/doc/memory_management#locking-memory), the used encryption library.

This can typically be done by modifying the kernel parameters or configuration settings.

## API key rotation

It is important to ensure that API keys are secure and cannot be easily compromised. One of the key aspects of API key security is regular rotation and expiration. If an API key is not rotated or expired, it can potentially be used by an attacker who has obtained the key through unauthorized means.

## Docker Compose File Security Considerations

Docker Compose is a tool to easily set up and host and complete landscape by running multiple Docker containers, configure them and link them together with a network. For development, testing and demonstration purposes, the enmeshed team provides Docker Compose files throughout this site or on GitHub. Please be aware, that those Docker Compose files should not be used in a public or productive environment, as they could contain insecure or otherwise unstable configurations, e.g. default passwords or the missing encryption at rest for MongoDB configuration. If you choose to use Docker Compose files in a public or production environment, it is important to educate yourself on how to create production-grade Docker Compose files to ensure the security of your system.

## Setup Firewall

A firewall is a security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. By implementing a firewall, you can block unauthorized access to your network and prevent malicious traffic from entering your system.

Allowing for potentially insecure protocols such as HTTP may expose sensitive information in transit to malicious parties, putting the system and its users at risk of data theft or other cyber attacks. Furthermore, the use of unsupported protocols may result in unintended side effects that could compromise system functionality or stability.

To mitigate this risk, it is recommended that the connector restricts the supported protocols to HTTPS, which is a secure protocol that encrypts information in transit. This will help prevent sensitive information from being exposed to malicious parties. Additionally, any feature that allows developers to override the protocol check should be explicitly enabled and documented to ensure that it is used judiciously and with caution.

Furthermore, an allowlist can be used to limit access to the system to only trusted sources, reducing the risk of unauthorized access and potential security vulnerabilities.

When configuring the allowlist for the connector, it is important to include all necessary URLs while keeping the list as minimal as possible.

One important consideration when configuring the allowlist is the baseUrl of the used Backbone. The baseUrl should be the minimum required for the allowlist to ensure that the connector is fully functional. Including unnecessary URLs in the allowlist can increase the attack surface and create potential security vulnerabilities.

However, it is also important to consider other URLs that may need to be included in the allowlist, such as update URLs for Docker Hub, images, GitHub, Linux update environments, and other sources. These URLs may be necessary for the proper functioning of the system and should be carefully evaluated and included in the allowlist if deemed necessary.

To ensure the security and integrity of the system, it is recommended to regularly review and update the allowlist as necessary. This includes removing any URLs that are no longer needed and adding new URLs that may be required.

## Database Security

It is crucial to secure databases, and in the case of MongoDB, it is essential to implement proper security measures to mitigate the risks associated with its default insecure configuration.

On this page we have summarized some tips for the use of [MongoDB](https://www.mongodb.com/docs/manual/administration/security-checklist/) and [FerretDB](https://docs.ferretdb.io/security/). A good source for further information on these tips is the website of the respective database.

With this page, we address what we consider to be the most important security tips. Even if you follow these tips, a security incident may occur.

1. **Data encryption:** Data stored in the database should be encrypted to ensure that even if an attacker gains access to the storage device, they cannot read the data. MongoDB provides built-in [encryption at rest](https://www.mongodb.com/docs/manual/core/security-encryption-at-rest/) features, which can be enabled to secure data. For all databases it is possible to perform data encryption with storage encryption at the file system level or the block level. On Linux, file system encryption options include eCryptfs or EncFS and Block level options include dm-crypt + LUKS.

2. **Network access restrictions:** MongoDB should only be accessible through the connector and should not be directly accessible over the public network. This can be achieved through proper network configuration, such as setting up firewalls to restrict access.

3. **Strong passwords and connection strings:** All user credentials and connection strings should be strong and complex, to prevent unauthorized access to the database.

4. **Regular updates and maintenance:** Regular updates should be performed to keep the database up-to-date and to fix any known security vulnerabilities.

When you are using FerretDB as you database read more about security in the [FerretDB documentation](https://docs.ferretdb.io/category/security/).
