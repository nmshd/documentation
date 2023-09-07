---
title: "Basics"
permalink: /integrate/basics
---

You want to seamlessly use enmeshed with your processes, solutions and software components? No worries, you are good to go!

We've built the enmeshed Connector exactly for this scenario: to integrate existing systems with the enmeshed approach with as little effort as possible.

## What is the Connector?

It is a software component which runs in the network of any organization, hosting a set of APIs to easily consume enmeshed features. It is usually run with the provided Docker image. The Connector requires a document database to store its data.

Going a bit more technical, the Connector uses NodeJS with Express to host an HTTP server. It spans up REST APIs used as the primary integration mechanism. However, it is also possible to write custom TypeScript/JavaScript Modules which are run on the Connector itself. The Connector makes use of the enmeshed Runtime to provide all features of the enmeshed Transport Layer as a consumable API.

## Why does my organization need a Connector?

enmeshed consists of different layers, each of which provide a different set of functionality and abstractions. The very low levels introduce a common set of communication and encryption contracts, which are required for all the upper levels. Just like you do not want to implement your own network stack, you usually do not want to implement the contracts by yourself.

The Connector stores required enmeshed metadata on a central point within the organization network, making it possible for existing system to access all the features of the Connector. With this approach, it is not necessary to implement the whole stack of enmeshed in each and every system, like user key management and encryption capabilities.

Additionally, the Connector should be run within the organizations network, as it acts as the digital identity of the organization itself, as well as a secure gateway to enmeshed. Although it could be hosted by a third-party as a software-as-a-service, we discourage this approach for production environments. The hosting provider would be able to impersonate the actual organization within the enmeshed ecosystem and would be able to access the plaintext data of users, messages, files, an so on.

If you ask yourself now "Why does enmeshed itself host Connectors then?" - good catch! We do host Connectors but only for development, test or demo reasons.

## So how does my organization get started?

Unfortunately, there is no button with which you can switch on the digitalization. Processes need to be set up, old processes need to be digitalized, data might need to be mapped, and so on. However, one needs to start somehow and we can help you on your journey.

We propose to set up a first test Connector by your IT department or let us do the hosting. Then you can decide how far enmeshed and its supported features and processes work for you.

If you like to try on your own: There is a Connector Tutorial in the next chapter which is a good starting point to set up the Connector on a try out basis. More details are available in the "Setting up the Connector" and integration sections. If you like to dig deeper, there are operation tutorials which might answer some questions with regards to overall security and privacy.

## Support

For assisted support with the Connector or the Backbone provided by the j&s-soft GmbH contact us via `support[at]enmeshed.eu`.

Community support is a great way to get help and even contribute to the projects. Open bug reports and feature requests in the [enmeshed Issue Tracker](https://github.com/nmshd/feedback/issues) or share your feedback with the enmeshed team via the [enmeshed Discussions](https://github.com/nmshd/feedback/discussions).
