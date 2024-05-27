---
title: "Privacy Considerations"
permalink: /explore/privacy
---

Privacy stands as one of the main pillars of the digital strategies adopted by institutions. It holds a significant and paramount position.

This section introduces privacy and data protection of personal data in general, before introducing enmeshed privacy concepts.

Please be advised, that enmeshed is an open-source solution which brings no warranties or liabilities with it. Consequently, the information provided herein should be carefully reviewed and validated by the relevant data privacy experts, attorneys, or data protection officers, as the applicability of these concepts varies based on individual contexts, such as using personal data for specific purposes within specific organizations within specific regions of specific countries.
{: notice-warn}

# Privacy Introduction

There are multiple laws, regulations, user and organizational viewpoints to consider. Enmeshed aligns with the European General Data Protection Regulation (GDPR), which in Germany is referred to as the “Datenschutz-Grundverordnung (DSGVO)”.

## What is Personal Data / Personally Identifiable Information?

> "Personal data is any information that relates to an identified or identifiable living individual. Different pieces of information, which collected together can lead to the identification of a particular person, also constitute personal data.
> Personal data that has been de-identified, encrypted or pseudonymized but can be used to re-identify a person remains personal data and falls within the scope of the GDPR."

Source: <https://commission.europa.eu/law/law-topic/data-protection/reform/what-personal-data_en>

This quote succinctly summarizes the intent of the GDPR. However, it does not encapsulate the extensive implications that this regulation carries. Without delving into the details (yet), numerous datasets are considered personal data and thus fall within the GDPR's scope.

There is also the term Personally Identifiable Information (PII) which legally means the same thing as "personal data" if you read it like the quote above. However, many persons do not consider technical ids, public keys or IP addresses as "personal data", as they associate names, birth dates or credit card numbers with it.

Potential examples of personal data / PII:

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

Apart from the multiplicity of definitions for personal data, there are two distinct viewpoints that demand consideration:

- The **absolute data privacy**, a defensive and theoretical approach, defines PII as any data that could potentially identify an individual and thus also needs to be deleted after the data processing. This classification applies across all historical, present, and future possibilities. This has huge implications, as even ciphertexts (which one does not have the key to) and one-way hashes of PII need to be considered PII, as theoretically it is possible to get the PII out of this information. Public entities and governments often require this absolute approach, which also takes into account future uncertainties.
- The **relative data privacy** is a more aggressive and practical mindset. Data that is practically impossible for the data processor - or for which the data processor would need external information in access - to reference an individual is considered non-personal data. The notions of external information and practical impossibility are quite fluffy, thus data owners could think differently and argue about the processing of their data. Ultimately, it rests on the technical-organizational measures (TOM) the data processor can proof that the implemented measures were sufficient for secure personal data handling.

# Overarching privacy of enmeshed

We devised a highly scalable and maintainable approach that does not centralize actual user data, limiting it to pseudonyms or technical data only.

Additionally, the real-world processes between persons and organizations were considered and the personal data shared between them is always triggered and maintained by the user (i.e. the data owner) for almost all scenarios.

Consequently, users gain a comprehensive overview of their personal data.

## What is PII for enmeshed?

Due to the broad scope of scenarios encompassed within the public sector, an absolute data privacy **absolute data privacy**. However, a solution like enmeshed depends on the jurisdiction of the operating person(s) or organization(s) especially for the enmeshed Backbone and thus it needs to be decided case by case and for each backbone operating entity, which data within the Backbone is considered PII.

The developers at enmeshed interpret the data privacy regulations narrowly, which has earned the appreciation of lawyers and data privacy experts for the design of the solution. Notably, the ability to delete all of the following data categories within our solution is pivotal for **absolute data privacy**:

1. (Non-technical) personal data which could directly identify a person (like names, e-mail addresses, birth dates, public/social ids, or phone numbers) is only processed in an end-to-end encrypted way between users and organizations. The central service does not have access to this data.
2. Pseudonyms or technical identifiers which are shared between multiple Identities (like enmeshed Addresses, enmeshed Public Keys, Device Ids, or Identity versions) are considered PII, as an entity could use this information to map this data to real world persons.
3. Pseudonyms, technical identifiers or secrets which are shared between two Identities (like Backbone credentials, device versions, or Relationship public keys) are considered PII, as an entity could use this information to map this data to real world persons.
4. One-way functions (hashes/digests) of PII are considered PII, as an entity theoretically has the possibility of mapping these hashes to real world persons or could potentially map the hashes to real world persons.
5. Encrypted data (without having the keys to it) is considered PII, as an entity has the theoretical possibility of decrypting the ciphertexts (e.g. if it gets the keys) or could potentially decrypt the ciphertexts without having the keys (be it weak or old encryption algorithms, or the best computers in the world to crack the most up-to-date encryption).
6. Metadata like are considered PII on a case-by-case decision, depending if an entity would have the possibility of mapping this metadata to real-world persons (e.g. if the entity could deduct the person by knowing that a real world person triggered a Backbone action at the same time or by analyzing the Relationships of an Identity)

When considering a **relative data privacy** , one might contend that only data categories 1 and 2 are Personally Identifiable Information (PII) since the possibility of misuse of categories 3-6 in the near future is unrealistic. One could even argue that categories 3-6 could be considered as anonymous data.

## Least Knowledge

'Least Knowledge' is the fundamental principle upon which enmeshed is built. As a result, the solution aims to minimize Personally Identifiable Information (PII) usage, thereby providing an optimal user experience and comprehensive features. In fact, the "usual personal data", like e-mail addresses, telephone numbers or names never reach the Backbone (and its operator) in cleartext.

- The enmeshed App stores the data in a local database on the device it is operating on. Data usually can only be sent to or received from the Backbone, generic Internet access from the App is blocked.
- The enmeshed Connector stores the data in a local database within an organization's network. Data can only be sent to or received from the Backbone, no other Internet access should be made possible.
- Data received from or sent to the Backbone is either pseudonymous (e.g. addresses), non-personalized (e.g. ids, dates, states) or encrypted in a way, that the Backbone cannot process this data.
- Keys to encrypted material on the Backbone are never transmitted in a way, that the Backbone could make use of it. For example, keys are shared on a side-channel (e.g. scan qr-code from website) or an end-to-end encrypted communication channel.
- The enmeshed App allows users to customize access for individuals and systems so that only necessary resources are shared.
- Data synchronization of the same Identity across enmeshed Apps is possible. This is done over a device-to-device encrypted communication channel (via the Backbone). The keys for this communication channel are transferred via a side-channel when onboarding a device for an Identity.
- Data exchange between users takes place after explicit consent is provided. No data is shared until this consent is final, at which point technical and personal data is shared between the user and another enmeshed Identity.

## Data is shared by the user

Enmeshed thinks privacy from a user perspective: Only the data owner can share the data between one or more data processors, always knowing who has received which personal data.

Additionally, data can be requested in a normalized manner between known enmeshed participants, thus enabling a much richer process integration for end users.

Enmeshed additionally follows the once-only principle for such data, thus enabling the user to quickly share structured and unstructured data via such data requests without having to enter the data every time.

# Backbone Privacy

The Backbone is the most significant component in terms of privacy. As a centrally hosted component by a third party, it is understandable that privacy-related questions usually focus this component."

The Backbone only stores technical information of Identities or devices. It never has access to cleartext data such as content of Messages, names, e-mail addresses, and so on, as all this information is end-to-end encrypted. Furthermore, even encrypted data of the Backbone is not publicly available - only the Identities which have reason to access the data get access.

Without the actual keys from the respective Identities (which the Backbone hosting entity does not receive) the actual data cannot practically be decrypted or analyzed. The **relative data privacy** mindset should thus be reasonably fulfilled by using the enmeshed mechanisms.

However, as stated in the chapter above, because of the **absolute data privacy** mindset, even this technical information is considered to be PII, because of the theoretical possibility, that somebody could crack the used ciphertexts or hashes. To fulfill the absolute data privacy mindset, all the data of the Backbone can be deleted.

Keep in mind: The threat of metadata analytics should not be underestimated and also cannot be eradicated by us unfortunately. Consequently, a Backbone operator might still be able to analyze the technical metadata stored within the Backbone although it is "least knowledge". For instance, the number of customers an organization has could be inferred based on the number of Identities with a Relationship.

However, this is far less information than any other current central Identity provider knows of the users.

# Comparison to decentralized technologies

When comparing privacy between enmeshed and decentralized approaches discussed in the world wide web, we do see many advantages with a central architecture. The technical data stored or shared in a blockchain vs. our Backbone is quite similar, resulting in the same attack vectors on the stored data. Due to end-to-end encryption, the major part of the personal data cannot be used by both solutions.

However, there are some advantages to a central architecture:

- With a central architecture, it is generally possible to restrict the access to data on a network level. Only the sender and recipients of a Message have access to the encrypted payload of this Message, for example. Even if the data is encrypted or pseudonymized, on a decentralized architecture everybody would still have access to the encrypted payload.
- With a central architecture, the analysis of metadata can only be done by the central player. On a decentralized system, anybody could analyze the metadata.
- With a central architecture, it is generally possible to effectively delete data (or let it expire). Although there are also some decentralized technologies allowing the deletion of data, there is no guarantee, that data which was available in the decentralized network prior to deletion, is really deleted from any node or node backup of the network.
- The adoption of a fully functional deletion process for data is crucial in the adherence to an **absolute data privacy** mindset can be followed, particularly for public organizations.. To our knowledge, this cannot be done by any current public blockchain technology, as the underlying peer-to-peer network is open, and the data can be read by everyone.
- Within a protected blockchain environment, the potential remains for Personally Identifiable Information (PII) to not be completely deleted from every node of all participants, thereby jeopardizing **absolute data privacy**. Furthermore, it must be remembered that every participant hosting a blockchain node, is a data processor in its own right. The consortium itself needs to manage and track all deletion processes between all organizations, which usually is an organizational nightmare.

With that being said, we believe that enmeshed represents a lighthouse project in terms of digitalization, data privacy and security.
