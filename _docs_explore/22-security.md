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

# Backbone Trust

When talking about the Backbone, one has to have trust in it in order to fulfill the requirements:

- Only allow messages between sender and recipient(s) if they have a relationship with each other
- Transmit any message to any recipient (if they have a relationship)
- Do not delay any message
- Use up-to-date timestamps
- Generate unique ids for every new item
- Do not use unique ids twice
- Do not delete content if it isn't expired yet
- Do check beforehand, if a file exists for any submitted message attachment

# Web Stack

We do run on a complete web stack, meaning that all Runtime coding so far is developed for a sandboxed web environment. While this sounds scary at first - there are still voices that believe browsers and website to be highly insecure - it introduces a very interesting security measure: It is sandboxed.

Even if malware would be executed within the Enmeshed Runtime, it would need to break out of the sandbox to do evil stuff with the actual device. This applies primarily to the Enmeshed App.

However a malware could still access the data within the Enmeshed Runtime, meaning Enmeshed keys and communication payloads which is highly sensitive data.

# Connector Security

The Connector should be part of the organizations network, otherwise there would be privacy issues with unencrypted payload or third-parties being able to impersonate the organization. It acts a central integration point within the organization and thus can be easily kept up-to-date.
In our opinion, this is a far better approach than to upgrade any business system with encryption and communication capabilities.

# Security Recommendations for Apps and End-Users

We've summarized some tips for end-user device usage on this site. A great resource for more in-depth information about those tips is the [website of the Federal Office for Information Security (BSI, Bundesamt für Sicherheit in der Informationstechnik).](https://www.bsi.bund.de/EN/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Basisschutz-fuer-Computer-Mobilgeraete/Schutz-fuer-Mobilgeraete/Sicherheit-bei-Apps/sicherheit-bei-apps_node.html)

We do not know every security guideline and tip out there, so please also check security tips of your operating systems like ([Android](https://www.android.com/intl/safety/), or [iOS](https://support.apple.com/guide/security/welcome/web)).

Please also understand, that we - as anybody else - cannot give you any security guaranty of your device or our system. With this page we are addressing the most common risks of end-user device usage. Even if you follow those guidances, it might happen that a security incident happens.

## Enable PIN/Password Authentication of Device

The first line of defense for your device is a strong password or PIN. It is essential to enable this feature on your device to prevent unauthorized access. A secure password should be at least between eight and twelve characters long and contain a mixture of upper and lower case letters, numbers and symbols. Additionally, you should avoid using easily guessable passwords, such as birthdays or names.

## Only One Person Should Use the Device

It is recommended that only one person uses the device, and they should not share their password with anyone. Sharing passwords can lead to unauthorized access and compromise the security of the device.

## Update the Operating System Regularly

Operating system updates are crucial to maintaining the security of your device. These updates often include security patches that address vulnerabilities and bugs that could compromise your device's security. Therefore, it is important to keep your device's operating system up-to-date with the latest patches and updates.

## Enable Hard-Disk Encryption

Hard-disk encryption is a security feature that encrypts the data stored on your device's hard disk. This feature adds an extra layer of security to your device, making it difficult for anyone to access your data if the device is lost or stolen.

## Enable a Virus Scanner

Viruses and malware pose a significant threat to your device's security. It is important to enable a virus scanner on your device to protect it from potential threats. The virus scanner will scan your device for viruses and malware and alert you if it detects any threats.

## Expert Corner

### Rooted Devices

Rooting a device involves gaining access to the device's root or administrative privileges. While rooting a device provides greater control over the device, it also exposes the device to potential security risks. Rooted devices are more vulnerable to malware and other security threats. Therefore, it is recommended to avoid rooting your device unless you have a good reason to do so.

### Developer-enabled Phones

Developer-enabled phones are designed for developers and come with additional features that allow them to customize the device's software. However, these features also make the device more vulnerable to potential security risks. Therefore, it is important to be cautious when using developer-enabled phones and avoid installing apps from untrusted sources.

# Communication Security

Enmeshed uses the highest standards of encrypted communication. It is end-to-end encrypted by using public key cryptography between identities. Different keypairs for the identity, for each device and each contact are used to distinguish the different communication areas (technical, multi-factor or contractual). Where possible, random keys are used and shared securely. If a random key is not possible, derived keys from high-entropy master keys (not passwords) are used. Very first keys are exchanged over Key Exchange Protocols, so that as little key material as possible is shared. Please refer to the [Cryptography Section]({% link _docs_explore/62-cryptography.md %}) to get more information about the used algorithms, libraries and methodologies.

For technical communication with contacts, the contact-specific signature keypair is used. Thus, every message of Enmeshed contains multiple digital signatures of the same message, one signature per recipient (as the sender communicates with a different private key per contact). The digital signature enforces that only the sender can sign the payload and that nobody in between could tamper with the message itself, e.g. change the message payload.

A timestamp from the sender's device is included within the signed content. This reduces the risk of replay attacks (an encrypted message is sent again to the recipient without knowing the content) on the client side and might be used for legal purposes (sender's signing date). In addition to that, a unique message id for every message is generated by the Backbone and thus replay attacks are not possible without the control of the Backbone.

It is explicitly enforced, that the addresses of all recipients of the mail are included in the signed content as well. This eliminates the risk of forward attacks, i.e. an attacker forwarding an encrypted mail to another person.

The message payload is symmetrically encrypted with a randomly generated high entropy key. The generated high entropy key itself is encrypted with the next transmission key derivate of a contact-specific encryption master key.

Thus, a message consists of multiple ciphers, one for the message content and one cipher for every recipient. In other words: Every recipient receives the same symmetric key (to decipher the message content) with a contact-specific key cipher which only the respective recipient can decrypt with a specific derived key. The same message with the same cipher of the message content can thus be decrypted by different recipients.

Once the signing and encryption processes are done, the sender submits the encrypted message to the Backbone. The Backbone creates a unique id for this message, in addition to a Backbone timestamp - which is in fact the timestamp on which every participant would agree on.

The Backbone then notifies all recipients that a new message is available.

Once a device of a recipient receives the notification, it fetches the message from the Backbone. The Backbone set the received timestamp for this recipient and the device. With it, the message counts as delivered.

# Law Enforcement Compliance

It is possible to temporarily or permanently block access or delete identities, if illegal activities are brought to the attention of the Backbone's operator. For this the Backbone operator requires the help of at least one of the parties which received illegal content from a sender.

In addition, Enmeshed supports law enforcement up to a certain degree. As like any other central provider, it is possible to block access or delete content if the Backbone operator gets the official task to comply (although the Backbone operator wouldn't know who the user is or which content it deletes).

Additionally, it is possible to point law enforcement organizations to other identities which have communicated with an unknown target identity in the past. If the actual real-world entity behind such an identity is known (e.g. a company) they might know who the target identity is and could further help law enforcement.
