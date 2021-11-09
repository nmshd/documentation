---
title: "Privacy Considerations"
permalink: /explore/privacy
---

Privacy is one of the main pillars of digitalization approaches. It might be the most important one.

There are many laws, regulations, user and organizational notions to take into consideration.

We came up with an approach which is highly scalable and maintainable, without having personal or sensitive data in access. Additionally, the actual processes between persons and organizations were considered and the personal data shared between them is reduced to a minimum.

# Backbone Privacy

The most prominent component in terms of privacy is the Backbone. As a centrally hosted component by a third-party, it is understandable that privacy-related questions usually focus this component.

The answer to those questions is simple: No personal data is stored within the Backbone. Thus privacy is of less concern in the backbone. In the whole user registration and onboarding processes, third parties hosting the Backbone won't receive any personal data, thus can additionally not store any personal data outside the backbone.

Without the actual keys from the respective identities (which the hosting party does not receive) the actual data cannot be decrypted or analyzed.

However, the metadata of identities stored on the Backbone could be analyzed. For example, how many identities have a relationship with another identity – this could for example be used to extract the number of customers an organization has.

## Zero-knowledge

The term zero-knowledge applies to parties which do not have access to personal data.

Enmeshed is based on such a zero-knowledge principle:

-   The Enmeshed App stores the data on a local database on the device it is running on. Data can only be sent to or received from the Backbone, no other Internet access is possible.
-   The Enmeshed Connector stores the data on a local database within the organization network. Data can only be sent to or received from the Backbone, no other Internet access is possible.
-   Data received from or sent to the Backbone is either pseudonymous (e.g. addresses), non-personalized (e.g. ids, dates, states) or encrypted in a way, that the Backbone cannot process this data.
-   Keys to encrypted material on the Backbone are never transmitted in a way, that the Backbone could make use of it. For example, keys are shared on a side-channel (e.g. scan qr-code from website) or a end-to-end encrypted communication channel.
-   The Enmeshed App can synchronize data of the same identity to other Enmeshed Apps of this identity. This is done over an device-to-device encrypted communication channel (via the Backbone). The keys for this communication channel are transferred via a side-channel when onboarding a device for an identity.

Thus, the centrally hosted Backbone has no access to any personal data. In our diagrams, we've sometimes added a "zero-knowledge border" between the components to emphasize the lack of personal data.

## Analyzing metadata

The threat of metadata analytics should not be underestimated and can also not be eradicated by us unfortunately. Thus, a Backbone operator might still be able to analyze metadata stored within the Backbone although it is "zero knowledge".

# Comparison to decentral technologies

When comparing the Enmeshed privacy with decentral approaches discussed in the world wide web, we do not see any disadvantages with a central architecture. The data stored or shared is effectively the same, resulting in the same possible metadata analysis.

There are some advantages to decentral technologies however:

-   With a central architecture, the analysis of metadata can only be done by the central player. On a decentral system, anybody could analyse the metadata.
-   With a central architecture, it is generally possible to effectively delete data (or let it expire). Although there are also some decentral technologies allowing the deletion of data, there is no guarantee, that data which was available in the decentral network prior to deletion, is really deleted from any node or node backup of the network.
