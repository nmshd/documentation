---
title: "Frequently Asked Questions"
permalink: /explore/faq
toc: true
---

# Can you read my data?

Short answer: No, we don't.

Long answer: Depends who "you" is and what you mean by "data".

We've designed Enmeshed to use as less data as possible, while using as much data as required by business processes. That being said, all data which is send to the Backbone is identity-to-identity or device-to-device encrypted. Therefore, the Backbone cannot access any plaintext or personal data.

The Enmeshed App and Connector however, of course have access to your personal and plaintext data, as they are the parts which handle and encrypt everything. We do not and will never transmit this data unencrypted over the wire.

What we need to access is metadata about your identity, e.g. which device of your identity is on which datawallet revision, or if a device fetched a message you received. This is required for the technical and business processes.

# Why do you need the Backbone?

Devices are not always online, you cannot reliably run a messaging server on a private device (at least on non-techie devices). Therefore, the Backbone acts as a central relay server which routes messages to the respective devices of an identity.

It is also used as a central encrypted data store (archive) just like any other cloud provider. However, our cloud systems cannot access the actual data, as it is encrypted.
