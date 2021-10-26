---
title: "Security Considerations"
permalink: /explore/security
---

Security is one of the main pillars of digitalization approaches. It might be the most important one.

News are full of hacking, spamming, skimming, phishing, or you-name-it attempts. Even lives are at stake if hospitals are out-of-order because of malware. Users are usually unaware of the security impacts of old device or outdated software. The same applies for organizations just on a much higher scale. In addition, the modern cloud world enables misconfiguration and misunderstanding to be one of the topmost reason of data breaches.

Enmeshed itself handles very private and sensitive information. We are aware that security must be one of our topmost priorities. And by using Enmeshed, we think that the world would be a lot more secure.

# Backbone Security

Though having a central architecture, Enmeshed cannot access the keys or payload of data within the backbone. Even if there would be a data breach, nobody could really do something with this metadata and encrypted payload.

For us, security is not only to secure the access on the data, but to make the data secure. This applies to the whole communication, be it that the data is completely end-to-end encrypted and digitally signed (so that nobody could change the data in between) or that the encrypted data is additionally persisted on the backbone for a specific set of time. This means, that the encrypted data on the backbone can be accessed by authorized parties (e.g. sender and recipients of messages) as long as it is persisted. The Backbone thus acts as a kind of personal archive.

# Web Stack

We do run on a complete web stack, meaning that all runtime coding so far is developed for a sandboxed web environment. While this sounds scary at first - there are still voices that believe browsers and website to be highly insecure - it introduces a very interesting security measure: It is sandboxed.

Even if malware would be executed within the Enmeshed runtime, it would need to break out of the sandbox to do evil stuff with the actual device. This applies primarily to the Enmeshed App.

There is a downside: Malware could still access the data within the Enmeshed runtime, meaning Enmeshed keys and communication payloads.

# Connector Security

The Connector should be part of the organizations network, otherwise there would be privacy issues with unencrypted payload or third-parties being able to impersonate the organization. It acts a central integration point within the organization and thus can be easily kept up-to-date.
In our opinion, this is a far better approach than to upgrade any business system with encryption and communication capabilities.

# App Security
