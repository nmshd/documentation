---
title: "Why we do not use a blockchain"
permalink: /explore/blockchain
---

# The new world of Identities

## Self-Sovereignty and Self-Sovereign Identities

Having full control over data, authorizations, or the hard- and software one can use for using the data is called self-sovereignty. A self-sovereign Identity is a digital Identity which anybody can set up, without the power of somebody else to deny access, spy on or change the data.

**Example:**
The common scenario in the Internet is, to create a user profile on a website, enter all the required information including username, password, email address, and many more personal information. This data is stored on one central solution provider which has the complete authority over your account. This authority can be used for tracing or blocking users. A user would not be able to login or use all the features anymore - a common topic with social login providers.

A self-sovereign Identity wouldn't work it that way: The user will always have the full control over this Identity – only the usage for a specific service (e.g. a specific social network) could be blocked by the network. But the Identity itself could still be used for any other tasks.

## Decentralization

Self-sovereignty is heavily linked with the technical term Decentralization, which is primarily describing the move to decentralized data-stores and computational power, away from the common centralized approaches commonly found on the Internet.

**Example:**
One can use cloud-storage on a central solution provider like Amazon Drive, Dropbox, GoogleDrive, Microsoft OneDrive, and tons of other central solution providers. You pay (monthly) for the service to this provider, but – depending on the provider and the plan booked – the provider could have a look into the data for analytics, law enforcement could try to check the data, or somebody blocks the access to the data because of diplomatic conflicts.

On the other hand, a decentralized approach would be to store the data on a decentral solution like the Interplanetary File System (IPFS). Many different computers over the world achieve the data storage by a peer-to-peer protocol.

## Blockchain

Speaking about decentralization, one term may not be left out: Blockchain. A blockchain is an immutable sequence of data blocks on a decentralized network. There is only one single truth within the whole network, nobody can change the truth, and everybody agrees to the truth. In a central environment this is not worth mentioning, however in a decentral environment, blockchains solve many underestimated problems and enable a new era of data-storage.

# ... and why we think differently

Yes, within enmeshed we think differently about decentralization. And we do not want to throw decades of computer science research away just because some technologies or solutions are hyped. On the other hand, there are many good aspects within all these solutions – and enough obstacles in the old world. In the end, what we do is bring both worlds together.

# The enmeshed Approach

## Be central!

Yes, we decided against blockchain and a decentral approach. There are many reasons for it.

First an foremost, a central architecture, hosted by a single third party is quite simple. There is only one party responsible for hosting the service. There is only one party which has to set something up. There is only one party with which contracts or agreements might be set up. There is only one party which will receive the blame if something does not work. But also there is only one party which does the operation and supports the solution.

A centrally hosted service can be scaled up and down in a very fast and effective way. Thus saving costs, energy and manpower. In addition, the overall throughput is very high.

Speaking of energy: We love our planet. We envisioned a technology / architecture where it is not needed to spend a hell of a lot of energy to solve stupid puzzles only to decide who next is allowed to forge a new block on a blockchain. Those technologies might make sense for certain kinds of scenarios and usecases. But they cannot act as a main pillar for digitalizing whole economies and countries.

We acknowledge, that there are decentralized technologies out there, which do not run on proof-of-work principles, primarily those which are based on a round-robin or proof-of-stake principles. Those are however usually linked with another central asset, a management/government layer which needs to be set up on top of the consortium.

There are some overarching decentralization "problems" which also apply to them which are handled in the next chapter.

## Is there really a decentral platform?

Thinking about major "decentral" platforms, there is still a mismatch about the complete decentralization of the platform and the way these platforms are organized.

If there needs to be a central organizational component which governs, administers or manages the parties within the platform - or worse there are different roles within the network with more or less rights - why does one need a decentral technology in the end?

Once there is a single player in the game, and even if this single player is a "management board" which is voted by the various parties within the network, why can't this management board just host a central solution? Who stops this management board from blocking attempts of competitors to take part in the decentral network?

{% comment %}

Looking at the history of decentral platforms, there also have been quite complex solutions to simple problems, like:

- Network outages effectively tear the decentralized network in parts. A so-called "network split" happens, in which two separate networks forge separate blocks with the given transactions. After the outage is fixed, both chains must be merged into one. The former forged transactions within separated blocks need to be completely rewritten to new blocks (receiving new timestamps).
- Parties do not agree on common terms, or network protocols, or default configurations with regards to the platform. The platform is split up, resulting in two completely separate running instances of one platform.
- A bad party does not play nice. The platform either does something against the bad party (e.g. reverting bad transactions) or not depending on an unspecified rule-set - or who was affected in the end.

{% endcomment %}
