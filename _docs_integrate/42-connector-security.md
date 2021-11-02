---
title: "Connector Security Considerations"
permalink: /integrate/connector-security
---

The most important thing you have to keep in mind that the Connector is usually running on your landscape and in your authority. This is why you are also responsible for the security of the connector and its data.

And as the Connector is handling very sensitive data (please see chapter Privacy), it should be treated as any other business system - with the same requirements in terms of privacy, security, access or network setup.

# Updates

As with every software, it is important that you update the Connector regularly from the official Docker repositories. We do our best to keep the whole Enmeshed project (of course including the Connector) as up-to-date as possible, having multiple checks with regards to security and the open-source-software lifecycle.

Additionally, any software component the Connector or its data touches should be updated regularly.

Examples are:

-   the Docker host system (operating system, virtual machine, ...)
-   the Docker Runtime
-   the database (e.g. MongoDB)
-   the firewall
-   the virus scanner
-   the firmwares of any (network) component
-   possible integration platforms and modules

# Trust

Although Enmeshed introduces a secure way of knowing who is sending messages to the Connector, and the corresponding Backbone is blocking messages from unknown parties, you shouldn't trust others to not send you invalid, incorrect, illegal, or outright harmful data over the secure connection.

Especially the encrypted data coming from the Backbone - which hasn't been decrypted yet - might be harmful. We cannot check if the data is correctly encrypted. Only the Connector in your landscape does this automatically (in terms of decrypting the data and verifying its digital signature).

This brings us to the next point: Virus Scans.

# Virus Scans

You should do Virus Scans regularly whenever sending or receiving data. However, the Connector has no integration capability for Virus Scanners (yet). This means, we cannot call for a virus scan while we are encrypting or decrypting Enmeshed payload.

Thus please consider scanning the host systems and the database for viruses regularly. Additionally, even encrypted data sent to and received from the Backbone should be scanned for viruses.

# Networking

It is best practice to block unnecessary access from and to software components between networks. In this chapter it is described which access the Connector actually required and which requests could be blocked.

## Outbound External Connection: Internet

The connector uses an TLS-secured Internet connection to the Enmeshed Backbone which runs on the domain `https://prod.enmeshed.eu`. Your firewall must not block access to this domain, otherwise the Connector won't work.

To access the latest updates, other routes might need to be opened within the firewall settings.

## No Inbound External Connections

The Connector synchronizes itself with the Backbone by a long-polling mechanism (it accesses the Internet). There is no data transfer triggered by the Backbone (or other users) and thus, there is no need for opening up special ports or reverse proxies for inbound connections from the Internet.

## Oubound Communication to Internal Networks

The Connector does need to access its database. Access to other networks or systems from the Connector can be blocked unless there is a synchronization route (webhook) set up in the Connector configuration. Otherwise, the Connector needs to access the provided internal domains for submitting new data.

## Inbound Communication from Internal Networks

Depending on the integration setup, access to the Connector from the internal network could be blocked for the majority of requests. Usually, only requests from the integration systems, the developers or administrators need to be allowed.

## Authentication and User Management

So far, the Connector supports API-Key authentication to securely authenticate technical users. These API-Keys are random character strings with a high entropy and should be kept confidential at all times. Each internal system communicating with the Connector should receive its own API-Key.

There is no authorization set up, thus every API-Key can call any API of the Connector API.

End user authentication, e.g. business users accessing the system, should be done on the respective business system. Usually, there is no need for end users to access the Connector and thus they should not have access to the Connector (from a network and authentication perspective).
