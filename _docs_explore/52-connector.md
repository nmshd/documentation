---
title: "Enmeshed Connector"
permalink: /explore/connector
toc: true
---

# Connector Building Blocks

## Connector Docker Image

The Connector is usually deployed with a Docker image. The Docker images can be fetched from [the GitHub container registry](https://github.com/nmshd/cns-connector/pkgs/container/connector) using your Docker client.

**Note:** You have to be logged in using a GitHub account to list available tags.
{: .notice--warning}

The Docker images are created, maintained and published by j&s-soft GmbH.

## Connector Runtime

Just like the [App Runtime]({% link _docs_explore/50-app.md %}) extends the [Enmeshed Runtime]({% link _docs_explore/61-runtime.md %}) for user interfaces, the Connector Runtime is extending the [Enmeshed Runtime]({% link _docs_explore/61-runtime.md %}) for the use within services and programs. For example, it maps REST-API-calls to Enmeshed business-logic.

## Connector Modules

The Connector is built modular and provides some built-in Modules. A list of the available Modules and how to configure them can be found in [the Connector Modules guide]({% link _docs_operate/modules.md %}).

## Connector Database

The Connector uses a MongoDB database to store its data. You can read more about its configuration in the [database section of the Connector configuration guide]({% link _docs_operate/configuration.md %}#database).

## Connector SDK

Read more about the [Connector SDKs]({% link _docs_integrate/access-the-connector.md %}).

## What is the Connector?

It is a software component which runs in the network of any organization, hosting a set of APIs to easily consume Enmeshed features. It is usually run with the provided Docker image. The Connector requires a document database to store its data.

Going a bit more technical, the Connector uses NodeJS with Express to host an HTTP server. It spans up REST APIs used as the primary integration mechanism. However, it is also possible to write custom TypeScript/JavaScript Modules which are run on the Connector itself. The Connector makes use of the Enmeshed Runtime to provide all features of the Enmeshed Transport Layer as a consumable API.

## Why does my organization need a Connector?

Enmeshed consists of different layers, each of which provide a different set of functionality and abstractions. The very low levels introduce a common set of communication and encryption contracts, which are required for all the upper levels. Just like you do not want to implement your own network stack, you usually do not want to implement the contracts by yourself.

The Connector stores required Enmeshed metadata on a central point within the organization network, making it possible for existing system to access all the features of the Connector. With this approach, it is not necessary to implement the whole stack of Enmeshed in each and every system, like user key management and encryption capabilities.

Additionally, the Connector should be run within the organizations network, as it acts as the digital identity of the organization itself, as well as a secure gateway to Enmeshed. Although it could be hosted by a third-party as a software-as-a-service, we discourage this approach for production environments. The hosting provider would be able to impersonate the actual organization within the Enmeshed ecosystem and would be able to access the plaintext data of users, messages, files, an so on.

If you ask yourself now "Why does Enmeshed itself host Connectors then?" - good catch! We do host Connectors but only for development, test or demo reasons.

## So how does my organization get started?

Unfortunately, there is no button with which you can switch on the digitalization. Processes need to be set up, old processes need to be digitalized, data might need to be mapped, and so on. However, one needs to start somehow and we can help you on your journey.

We propose to set up a first test Connector by your IT department or let us do the hosting. Then you can decide how far Enmeshed and its supported features and processes work for you.

If you like to try on your own: There is a Connector Tutorial in the next chapter which is a good starting point to set up the Connector on a try out basis. More details are available in the "Setting up the Connector" and integration sections. If you like to dig deeper, there are operation tutorials which might answer some questions with regards to overall security and privacy.
