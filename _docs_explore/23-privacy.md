---
title: "Privacy Considerations"
permalink: /explore/privacy
---

Privacy is one of the main pillars of digitalization approaches. It might be the most important one.

Let us start this section by introducing privacy and data proctection of personal data in general, before we introduce enmeshed privacy concepts.

# Privacy Introduction

There are many laws, regulations, user and organizational notions to take into consideration. We follow the European General Data Protection Regulation (GDPR) which is the "Datenschutz-Grundverordnung (DSGVO)" in Germany.

## What is Personal Data / Personally Identifiable Information?

> Personal data is any information that relates to an identified or identifiable living individual. Different pieces of information, which collected together can lead to the identification of a particular person, also constitute personal data.
> Personal data that has been de-identified, encrypted or pseudonymised but can be used to re-identify a person remains personal data and falls within the scope of the GDPR."

Source: <https://commission.europa.eu/law/law-topic/data-protection/reform/what-personal-data_en>

This quote nicely summarizes the intention of the GDPR, but not the vastness of implications which arise with it. Without going into details (yet), many datasets are considered personal data and thus fall into the scope of the GDPR.

There is also the term Personally Identifiable Information (PII) which legally means the same thing as "personal data" if you read it like the quote above. However, many persons do not consider technical ids, public keys or IP addresses as "personal data", as they associate names, birth dates or credit card numbers with it.

Possible examples of personal data / PII:

- Names
- Addresses
- Phone numbers
- E-Mail addresses
- Birth dates
- Payment details
- IP addresses
- Encryption / signing keys
- Electronic signatures
- Pseudonyms
- Identification numbers
- Communication

## Absolute vs. relative data privacy

In addition to the vastness of definitions for personal data, there are two mindsets out in the open which need to be considered:

- The **absolute data privacy** is a defensive and a more theoretical mindset. All data which could in theory be used to identify a person is considered PII and thus also needs to be deleted after the data processing. This has huge implications, as even ciphertexts (which one does not have the key to) and one-way hashes of PII need to be considered PII, as theoretically it is possible to get the PII out of this information. The absolute mindset is usually required by public entities and governments and also takes the remote future in mind.
- The **relative data privacy** is a more aggressive and practical mindset. Data which is practically impossible for the data processor to calculate or for which the data processor would need external information in access, is considered non-personal data. The notions of external information and practical impossibility are quite fluffy, thus data owners could think differently and argue about the processing of their data. It then boils down to the technical-organizational measures (TOM): If the data processor can proof that the implemented measures were sufficient in order to securely work with personal data.

# Overaching privacy of enmeshed

We came up with an approach which is highly scalable and maintainable, without having the actual user data in access. Additionally, the real-world processes between persons and organizations were considered and the personal data shared between them is triggered and maintained by the user (i.e. the data owner) for allmost all scenarios.

## What is PII for enmeshed?

Due to many scenarios for enmeshed within the public sector, we would like to follow an **absolute data privacy**. However, a solution like enmeshed depends on the jurisdiction of the operating person(s) or organisation(s) especially for the enmeshed Backbone and thus it needs to be decided case by case and for each backbone operating entity, which data within the Backbone is considered PII.

The developers interpretation of the data privacy regulations is a very narrow one, which gets us good grades of lawyers and data privacy experts for the design of the solution. Especially the ability to delete all of the following data categories with our solution, is key for the **absolute data privacy**:

1. (Non-technical) personal data which could directly identify a person (like names, e-mail addresses, birth dates, public/social ids, or phone numbers) is only processed in an end-to-end encrypted way between users and organizations.
2. Pseudonyms or technical identifiers which are shared between multiple identities (like enmeshed Addresses, enmeshed Public Keys, Device Ids, or identity versions) are considered PII, as an entity could use this information to map this data to real world persons.
3. Pseudonyms, technical identitifers or secrets which are shared between two identities (like Backbone credentials, device versions, or relationship public keys) are considered PII, as an entity could use this information to map this data to real world persons.
4. One-way functions (hashes/digests) of PII are considered PII, as an entity theoretically has the possibility of mapping these hashes to real world persons or could potentially map the hashes to real world persons (hashes without salts, public rainbow tables, etc...).
5. Encrypted data is considered PII, as an entity system has the theoretical possibility of decrypting the ciphertexts (e.g. if it gets the keys) or could potentially decrypt the ciphertexts without having the keys (be it weak or old encryption, or the best computers in the world to crack the most up-to-date encryption).
6. Metadata like Timestamps or Relationships are considered PII, as an entity would have the possibility of mapping this metadata to real-world persons (e.g. if the entity could deduct the person by knowing that a real world person triggered a Backbone action at the same time or by analyzing the relationships of an Identity)

When having a **relative data privacy** in mind, one could argue that only the categories of data within point 1 and 2 are really PII, as no one has a realistic chance of misusing categories 3-6 in a near future. One can go as far and deduct, that categories 3-6 could be considered as anonymous data.

## Least Knowledge

Enmeshed is built on a least-knowledge principle, thus the solution tries to use as little PII as possible to achieve the best possible user experience and featureset. In fact, the "usual personal data", like e-mail addresses, telephone numbers or names never reach the Backbone (and its operator) in cleartext.

- The enmeshed App stores the data in a local database on the device it is running on. Data can only be sent to or received from the Backbone, no other Internet access is possible.
- The enmeshed Connector stores the data in a local database within an organization's network. Data can only be sent to or received from the Backbone, no other Internet should be made possible.
- Data received from or sent to the Backbone is either pseudonymous (e.g. addresses), non-personalized (e.g. ids, dates, states) or encrypted in a way, that the Backbone cannot process this data.
- Keys to encrypted material on the Backbone are never transmitted in a way, that the Backbone could make use of it. For example, keys are shared on a side-channel (e.g. scan qr-code from website) or an end-to-end encrypted communication channel.
- The enmeshed App allows you to customize access for people and systems so that only necessary resources are shared.
- The enmeshed App can synchronize data of the same identity to other enmeshed Apps of this identity. This is done over a device-to-device encrypted communication channel (via the Backbone). The keys for this communication channel are transferred via a side-channel when onboarding a device for an identity.
- When making contacts, no data is shared before users gives their final ok, that technical and personal data is shared between the user and another enmeshed identity.

## Data is shared by the user

Enmeshed thinks privacy from a user perspective.

# Backbone Privacy

The most prominent component in terms of privacy is the Backbone. As a centrally hosted component by a third-party, it is understandable that privacy-related questions usually focus this component.

The Backbone only stores technical information of identities or devices. It never has access to cleartext data like content of messages, names, e-mail adresses, and so on, as all this information is end-to-end encrypted. However, as stated in the chapter above, because of the **absolute data privacy** mindset, even this technical information is primarily considered as PII, because of the theoretical possibility, that somebody could crack the encryption.

But without the actual keys from the respective identities (which the Backbone hosting entity does not receive) the actual data cannot practically be decrypted or analyzed.

The threat of metadata analytics should not be underestimated and can also not be eradicated by us unfortunately. Thus, a Backbone operator might still be able to analyze metadata stored within the Backbone although it is "least knowledge". For example, how many identities have a relationship with another identity – this could for example be used to extract the number of customers an organization has.

# Comparison to decentral technologies

When comparing privacy between enmeshed and decentral approaches discussed in the world wide web, we do see many advantages with a central architecture. The technical data stored or shared in a blockchain vs. our Backbone is quite similar, resulting in the same attack vectors on the stored data. Due to end-to-end encryption, the major part of the personal data cannot be used by both solutions.

However, there are some advantages to a central architecture:

- With a central architecture, it is generally possible to restrict the access to data on a network level. Only the sender and recipients of a message have access to the encrypted payload of this message, for example. Even if the data is encrypted or pseunodymized, on a decentral architecture everybody would still have access to the encrypted payload.
- With a central architecture, the analysis of metadata can only be done by the central player. On a decentral system, anybody could analyse the metadata.
- With a central architecture, it is generally possible to effectively delete data (or let it expire). Although there are also some decentral technologies allowing the deletion of data, there is no guarantee, that data which was available in the decentral network prior to deletion, is really deleted from any node or node backup of the network.
- Only with a working deletion process for any data, an **absolute data privacy** mindset can be followed, which is especially important for public organisations. This cannot be done by public blockchains, as the underlying peer-to-peer network is open, and the data can be read by everyone.
