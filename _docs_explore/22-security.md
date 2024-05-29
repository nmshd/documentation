---
title: "Security Considerations"
permalink: /explore/security
---

Security is one of the main pillars of digitalization approaches. It might be the most important one.

News are full of hacking, spamming, skimming, phishing, or you-name-it attempts. Even lives are at stake if hospitals are out-of-order because of malware. Users are usually unaware of the security impacts of old devices or outdated software. The same applies for organizations just on a much higher scale. In addition, the modern cloud world enables misconfiguration and misunderstanding to be one of the topmost reason of data breaches.

enmeshed itself handles very private and sensitive information. We are aware that security must be one of our topmost priorities. And by using enmeshed, we think that the world would be a lot more secure.

# Backbone Security

Though having a central architecture, enmeshed cannot access the keys or payload of data within the backbone. Even if there would be a data breach, nobody could really do something with this metadata and encrypted payload.

For us, security is not only about securing access to data, but making the data itself secure. This applies to the whole communication, be it that the data is completely end-to-end encrypted and digitally signed (so that no one could change the data in between) or that the encrypted data is additionally persisted on the backbone for a specific set of time. This means, that the encrypted data on the backbone can be accessed by authorized parties (e.g. sender and recipients of Messages) as long as it is persisted. The Backbone thus acts as a kind of personal archive.

# Backbone Trust

When talking about the Backbone, one has to have trust in it in order to fulfill the requirements:

- Only allow Messages between sender and recipient(s) if they have a Relationship with each other
- Transmit any Message to any recipient (if they have a Relationship)
- Do not delay any Message
- Use up-to-date timestamps
- Generate unique ids for every new item
- Do not delete content if it isn't expired yet
- Check beforehand, if a file exists for any submitted Message attachment

# Web Stack

We run on a complete web stack, meaning that all Runtime coding so far is developed for a sandboxed web environment. While this sounds scary at first - there are still people that believe browsers and website to be highly insecure - it introduces a very interesting security measure: It is sandboxed.

Even if malware would be executed within the enmeshed Runtime, it would need to break out of the sandbox to perform malicious activities with the actual device. This applies primarily to the enmeshed App.

However a malware could still access the data within the enmeshed Runtime, meaning enmeshed keys and communication payloads which is highly sensitive data.

# Connector Security

The Connector should be part of the organizations network, otherwise there would be privacy issues with unencrypted payload or third-parties being able to impersonate the organization. It acts a central integration point within the organization and thus can be easily kept up-to-date.
In our opinion, this is a far better approach than to upgrade any business system with encryption and communication capabilities.

# App Security

The App is only communicating with its corresponding Backbone.

For more information on the security of the device, please read the [Security Recommendations for Apps and End-Users]({% link _docs_use/secure-device-setup.md %}).

# Communication Security

enmeshed uses the highest standards of encrypted communication. It is end-to-end encrypted by using public key cryptography between Identities. Different keypairs for the Identity, for each device and each contact are used to distinguish the different communication areas (technical, multi-factor or contractual). Where possible, random keys are used and shared securely. If a random key is not possible, derived keys from high-entropy master keys (not passwords) are used. The very first keys are exchanged over Key Exchange Protocols, so that as little key material as possible is shared. Please refer to the [Cryptography Section]({% link _docs_explore/62-cryptography.md %}) to get more information about the used algorithms, libraries and methodologies.

For technical communication with contacts, the contact-specific signature keypair is used. Thus, every Message of enmeshed contains multiple digital signatures of the same Message, one signature per recipient (as the sender communicates with a different private key per contact). The digital signature enforces that only the sender can sign the payload and that nobody in between could tamper with the Message itself, e.g. change the Message payload.

A timestamp from the sender's device is included within the signed content. This reduces the risk of replay attacks (an encrypted Message is sent again to the recipient without knowing the content) on the client side and might be used for legal purposes (sender's signing date).

It is explicitly enforced, that the addresses of all recipients of the mail are included in the signed content as well. This eliminates the risk of forward attacks, i.e. an attacker forwarding an encrypted mail to another person.

The Message payload is symmetrically encrypted with a randomly generated high entropy key. The generated high entropy key itself is encrypted with the next transmission key derivate of a contact-specific encryption master key.

Thus, a Message consists of multiple ciphers, one for the Message content and one cipher for every recipient. In other words: Every recipient receives the same symmetric key (to decipher the Message content) with a contact-specific key cipher which only the respective recipient can decrypt with a specific derived key. The same Message with the same cipher of the Message content can thus be decrypted by different recipients.

Once the signing and encryption processes are done, the sender submits the encrypted Message to the Backbone. The Backbone creates a unique id for this Message, with which replay attacks can be identified. It is also creating a timestamp for the creation date of the Message. Such a timestamp from a trusted third party (in this case the Backbone) could act as the transmission timestamp on which the communication parties would usually agree on.

The Backbone then notifies all recipients that a new Message is available.

Once a device of a recipient receives the notification, it fetches the Message from the Backbone. The Backbone set the received timestamp for this recipient and the device. With it, the Message counts as delivered.

# Trusted Timestamps

So far, the Backbone is not using digitally signed timestamps by officially certified trusted timestamp authorities. It is using the timestamps of the cloud services, which are synchronized with public time servers.

# Law Enforcement Compliance

It is possible to temporarily or permanently block access or delete Identities, if illegal activities are brought to the attention of the Backbone's operator. For this the Backbone operator requires the help of at least one of the parties which received illegal content from a sender.

In addition, enmeshed supports law enforcement up to a certain degree. As like any other central provider, it is possible to block access or delete content if the Backbone operator gets the official task to comply. For this, the Backbone operator would need detailed information about the Identity or the payload from the law enforcement agencies.

Additionally, it is possible to point law enforcement entities to other enmeshed Identities which have communicated with an target Identity in the past. If the actual real-world entity behind such an Identity is known (e.g. a company) they might know who the target Identity is and could further help law enforcement.
