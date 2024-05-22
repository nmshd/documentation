---
title: "Frequently Asked Questions"
permalink: /explore/faq
toc: true
---

# Can you read my data?

Short answer: No, we can't.

Long answer: Depends who "you" is and what you mean by "data".

We've designed enmeshed to use as less data as possible, while using as much data as required by business processes. That being said, all data which is send to the Backbone is Identity-to-Identity or device-to-device encrypted. Therefore, the Backbone cannot access any plaintext or personal data.

The enmeshed App and Connector however, of course have access to your personal and plaintext data, as they are the parts which handle and encrypt everything. We do not and will never transmit this data unencrypted over the wire.

What we need to access is metadata about your Identity, e.g. which device of your Identity is on which datawallet revision, or if a device fetched a Message you received. This is required for the technical and business processes.

# Why do you need the Backbone?

Devices are not always online, you cannot reliably run a messaging server on a private device (at least on non-techie devices). Therefore, the Backbone acts as a central relay server which routes Messages to the respective devices of an Identity.

It is also used as a central encrypted data store (archive) just like any other cloud provider. However, our cloud systems cannot access the actual data, as it is encrypted.
