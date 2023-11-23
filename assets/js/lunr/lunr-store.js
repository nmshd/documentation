var store = [{
        "title": "How does enmeshed work?",
        "excerpt":"Enmeshed introduces an overarching solution, securely connecting users and organizations without the use of decentralized technologies like blockchains. However, it makes use of the decentralized mindset, like decentralized identities. Mature technologies and architectures are used as a base for enmeshed. In combination with state-of-the-art encryption technologies, a complete web stack...","categories": [],
        "tags": [],
        "url": "/explore/how_does_enmeshed_work",
        "teaser": null
      },{
        "title": "Explore enmeshed",
        "excerpt":"Welcome to the “Explore enmeshed” section of our website, your gateway to understanding the intricate world of enmeshed. Here, we embark on a journey through the various facets of enmeshed, from its fundamental workings to advanced technical insights. First things first In this section, we lay the foundation by addressing...","categories": [],
        "tags": [],
        "url": "/explore",
        "teaser": null
      },{
        "title": "Example Scenarios",
        "excerpt":"Enmeshed supports many possible business scenarios within various lines of businesses or industries. But not only enterprises, companies or organizations benefit of these approaches. Also leisure activities with clubs or communities can make use of enmeshed. Though the digital life of persons is used as a prominent example throughout this...","categories": [],
        "tags": [],
        "url": "/explore/example-scenarios",
        "teaser": null
      },{
        "title": "Features",
        "excerpt":"Features included with enmeshed: Self-sovereign identity Datawallet capabilitites, i.e. repository of structured data like attributes and files Datalog, i.e. know what data was shared when and to whom Cross-identity transparent encryption and digital signatures Cross-identity bi-directional data communication Cross-identity structured data synchronization (manual or automated) Cross-device transparent encryption Cross-device bi-directional...","categories": [],
        "tags": [],
        "url": "/explore/features",
        "teaser": null
      },{
        "title": "Frequently Asked Questions",
        "excerpt":"Can you read my data? Short answer: No, we can’t. Long answer: Depends who “you” is and what you mean by “data”. We’ve designed enmeshed to use as less data as possible, while using as much data as required by business processes. That being said, all data which is send...","categories": [],
        "tags": [],
        "url": "/explore/faq",
        "teaser": null
      },{
        "title": "Integration Considerations",
        "excerpt":"Enmeshed does not only enable users taking part of the digitalization process. Organizations also benefit of enmeshed as well, as they usually need to invest heavily to stay up to date in today’s technological race. Enmeshed is a flexible communication platform, with a rich default feature set and possibilities to...","categories": [],
        "tags": [],
        "url": "/explore/integration",
        "teaser": null
      },{
        "title": "Security Considerations",
        "excerpt":"Security is one of the main pillars of digitalization approaches. It might be the most important one. News are full of hacking, spamming, skimming, phishing, or you-name-it attempts. Even lives are at stake if hospitals are out-of-order because of malware. Users are usually unaware of the security impacts of old...","categories": [],
        "tags": [],
        "url": "/explore/security",
        "teaser": null
      },{
        "title": "Privacy Considerations",
        "excerpt":"Privacy is one of the main pillars of digitalization approaches. It might be the most important one. There are many laws, regulations, user and organizational notions to take into consideration. We came up with an approach which is highly scalable and maintainable, without having personal or sensitive data in access....","categories": [],
        "tags": [],
        "url": "/explore/privacy",
        "teaser": null
      },{
        "title": "Backbone Layer",
        "excerpt":"From a user perspective, the deepest layer is the backbone layer. It handles the “untrusted” communication with the Backbone and the processing of data within the Backbone. Payload sent to and received from the Backbone is encrypted. The Backbone itself requires metadata to work, thus there is also unencrypted data...","categories": [],
        "tags": [],
        "url": "/explore/layers/backbone",
        "teaser": null
      },{
        "title": "Transport Layer",
        "excerpt":"The transport layer is located between the backbone layer and the consumption layer. Thus it acts as the interface between the trusted environment (own device/network) and the untrusted environment (Backbone). It is usually hosted as a REST API by the Connector or programmatically accessed by the App. The Runtime is...","categories": [],
        "tags": [],
        "url": "/explore/layers/transport",
        "teaser": null
      },{
        "title": "Consumption Layer",
        "excerpt":"The consumption layer contains processes, logic and data structures either for personal or organizational identities. It sits on top of the transport layer and exposes its functionality to either the user experience or the integration layer. Components App Connector Tasks Attribute Handling The consumption layer handles the central attribute store...","categories": [],
        "tags": [],
        "url": "/explore/layers/consumption",
        "teaser": null
      },{
        "title": "Integration Layer",
        "excerpt":"The integration layer is only available within the Connector and sits on top of the transport and consumption layers. It is responsible for providing integration capabilities to other systems. It acts for a single identity only, which is usually an organization. Components Connector Tasks Webserver with Authentication The integration layer...","categories": [],
        "tags": [],
        "url": "/explore/layers/integration",
        "teaser": null
      },{
        "title": "User-Experience Layer",
        "excerpt":"The user experience layer is only available within the App and sits on top of the transport and consumption layers. It exposes the functionality of underlying layers for the user, meaning it is rendering out user interfaces and handling interactions. It acts for a single identity only, which is usually...","categories": [],
        "tags": [],
        "url": "/explore/layers/user-experience",
        "teaser": null
      },{
        "title": "Enmeshed App",
        "excerpt":"App Building Blocks Platform-dependant App Binaries For each of the various platforms, each version of the app is packaged into a platform-dependant binary. This binary is then executable / installable for the users. The binaries of the enmeshed App are created, maintained and published by j&amp;s-soft GmbH and are available...","categories": [],
        "tags": [],
        "url": "/explore/app",
        "teaser": null
      },{
        "title": "Enmeshed Backbone",
        "excerpt":"Backbone Building Blocks The enmeshed Backbone embraces all central services required by the enmeshed platform to work. It consists of the underlying infrastructure, its hosted services, and the libraries used within the services. There could be many enmeshed Backbones hosted along the same number of enmeshed Apps. But keep in...","categories": [],
        "tags": [],
        "url": "/explore/backbone",
        "teaser": null
      },{
        "title": "Enmeshed Connector",
        "excerpt":"Connector Building Blocks Connector Docker Image The Connector is usually deployed with a Docker image. The Docker images can be fetched from the GitHub container registry using your Docker client. Note: You have to be logged in using a GitHub account to list available tags. The Docker images are created,...","categories": [],
        "tags": [],
        "url": "/explore/connector",
        "teaser": null
      },{
        "title": "Enmeshed Addresses",
        "excerpt":"The Address is the primary identifier for an enmeshed Identity. It is public and created out of the Identity’s Signature Public Key. Thus, the Identity’s root signature key and its corresponding Address are interlinked with each other and cannot be changed. Nobody is able to change the public key for...","categories": [],
        "tags": [],
        "url": "/explore/addresses",
        "teaser": null
      },{
        "title": "Enmeshed Runtime",
        "excerpt":"Enmeshed Runtime GitHub Repository The Runtime wraps all features of enmeshed into a single programming interface. It is combining the various libraries to a powerful software stack, primarily based on TypeScript, which can be used on nearly every device on the world - and even in the browser. Versions, local...","categories": [],
        "tags": [],
        "url": "/explore/runtime",
        "teaser": null
      },{
        "title": "Cryptography",
        "excerpt":"Backbone Layer Encryption The communication with the Backbone is encrypted on the http transport layer. This is done by using the transport-layer-security (TLS) standard which is common throughout the Internet. This prevents third parties to access any data communication to and from the Backbone, like authentication tokens of devices, recipient...","categories": [],
        "tags": [],
        "url": "/explore/cryptography",
        "teaser": null
      },{
        "title": "Why we do not use a blockchain",
        "excerpt":"The new world of identities Self-Sovereignty and Self-Sovereign Identities Having full control over data, authorizations, or the hard- and software one can use for using the data is called self-sovereignty. A self-sovereign Identity is a digital identity which anybody can set up, without the power of somebody else to deny...","categories": [],
        "tags": [],
        "url": "/explore/blockchain",
        "teaser": null
      },{
        "title": "Integrate enmeshed",
        "excerpt":"You want to seamlessly use enmeshed with your processes, solutions and software components? No worries, you are good to go! We’ve built the enmeshed Connector exactly for this scenario: to integrate existing systems with the enmeshed approach with as little effort as possible. Here you’ll find everything you need to...","categories": [],
        "tags": [],
        "url": "/integrate",
        "teaser": null
      },{
        "title": "Access the Connector",
        "excerpt":"The primary integration capability of the Connector is the REST API. In order to use it, you should have received an API-Key for the respective Connector. An API-Key so far has all authorizations for accessing the API. Interactive Documentation You can find the REST API documentation hosted on your Connector...","categories": [],
        "tags": [],
        "url": "/integrate/access-the-connector",
        "teaser": null
      },{
        "title": "Attribute Values",
        "excerpt":"Each Attribute contains an instance of an Attribute Value within its value property. There are different types of Attribute Values. The types define the value’s structural definition, rendering information and validators. For example, an email address with the value address@company.corp is stored with the Attribute Value type EMailAddress, which defines...","categories": [],
        "tags": [],
        "url": "/integrate/attribute-values",
        "teaser": null
      },{
        "title": "Connector Events",
        "excerpt":"Event Data Description (This event is triggered when …) consumption.attributeCreated LocalAttribute … an Attribute was created manually or through a Request. consumption.attributeDeleted LocalAttribute … an Attribute was deleted manually or through a Request. consumption.attributeSucceeded LocalAttribute … an Attribute was succeeded manually or through a Request. consumption.attributeUpdated LocalAttribute … an Attribute...","categories": [],
        "tags": [],
        "url": "/integrate/connector-events",
        "teaser": null
      },{
        "title": "Data Model Overview",
        "excerpt":"The enmeshed data model can be divided into three parts: Transport types Local types Content types The following diagram gives you an overview of all the existing types and how they are connected to each other. The subsequent chapters describe these types in more detail. (note that you can click...","categories": [],
        "tags": [],
        "url": "/integrate/data-model-overview",
        "teaser": null
      },{
        "title": "Error Codes",
        "excerpt":"Please find a list of enmeshed error codes below. Most often the errors occur on invalid input or actions. If you happen to find unexpected errors while using enmeshed or cannot deduce the reason for your error, please report it in the enmeshed Issue Tracker. ErrorCode Description error.connector.http.methodNotAllowed This method...","categories": [],
        "tags": [],
        "url": "/integrate/error-codes",
        "teaser": null
      },{
        "title": "FAQ",
        "excerpt":"Welcome to our FAQ page! Here, you’ll find answers to the most common questions about enmeshed. If you’re looking for quick and straightforward information, you’ve come to the right place. Common questions What is enmeshed? A description of enmeshed can be found on the main page Technical Questions When I...","categories": [],
        "tags": [],
        "url": "/integrate/faq",
        "teaser": null
      },{
        "title": "Integration example",
        "excerpt":"In this tutorial we go through the basic steps necessary to establish a Relationship to another Identity and send Messages between two Identities with an existing Relationship. This will create a better understanding of these processes, which will help you on automating them for your organization. The following steps include...","categories": [],
        "tags": [],
        "url": "/integrate/integration-example",
        "teaser": null
      },{
        "title": "Request persistent consent of peer",
        "excerpt":"Here is an explanation of how to obtain a person’s persistent consent on a particular topic To request an accept/reject decision from a peer to a free text, the ConsentRequestItem is used. Represents the consent of a person to a specific topic. If you want to obtain a consent, you...","categories": [],
        "tags": [],
        "url": "/integrate/request-persistent-consent-of-peer",
        "teaser": null
      },{
        "title": "Requesting one-time consents",
        "excerpt":"With the ConsentRequest it is possible to request a consent of the peer to an arbitrary text and thus reach agreement on a certain non machine-processable context. To request an accept/reject decision from a peer to a free text, the ConsentRequestItem is used. Check your Requests validity At first you...","categories": [],
        "tags": [],
        "url": "/integrate/requesting-one-time-consents",
        "teaser": null
      },{
        "title": "Requests and RequestItems",
        "excerpt":"All the RequestItems listed below inherit from the RequestItem and are therefore sharing its properties. AuthenticationRequestItem With this item the sender can request the peer for an authentication in a business context for a certain purpose. The peer can then decide to authenticate or not. This authentication is mostly short-lived...","categories": [],
        "tags": [],
        "url": "/integrate/requests-and-requestitems",
        "teaser": null
      },{
        "title": "Requests over Messages",
        "excerpt":"This guide explains how to send and receive a Request over enmeshed Messages using two Connectors, the first of which sends a Request to the second, and the second accepts or rejects the Request. It provides step-by-step instructions for validating the Request, creating and sending the Request, and accepting or...","categories": [],
        "tags": [],
        "url": "/integrate/requests-over-messages",
        "teaser": null
      },{
        "title": "Requests over Templates",
        "excerpt":"This guide will explain the end to end flow of sharing and answering a Request over a Template. This flow usually happens between the App and a Connector, but for simplicity and more transparency we will use two Connectors. Therefore you have to start two Connectors that don’t have a...","categories": [],
        "tags": [],
        "url": "/integrate/requests-over-templates",
        "teaser": null
      },{
        "title": "Sending Messages",
        "excerpt":"The Connector can send and receive messages with attachments using REST requests and file IDs, which are first uploaded and encrypted on the Platform. Messages can be queried and downloaded, and the Connector pulls for new messages periodically. In order to send messages to recipients, a REST request can be...","categories": [],
        "tags": [],
        "url": "/integrate/sending-messages",
        "teaser": null
      },{
        "title": "Support",
        "excerpt":"For assisted support with the Connector or the Backbone provided by the j&amp;s-soft GmbH contact us via support[at]enmeshed.eu. Community support is a great way to get help and even contribute to the projects. Open bug reports and feature requests in the enmeshed issue tracker or share your feedback with the...","categories": [],
        "tags": [],
        "url": "/integrate/support",
        "teaser": null
      },{
        "title": "Use Cases",
        "excerpt":"Title Layer ⌄ Actor ⌄ Category ⌄ Component ⌄ Status ⌄ Load Token by id and key (without having an account) Anonymous Identity AnonymousTokens Runtime DONE Load Token by truncated reference (without having an account) Anonymous Identity AnonymousTokens Runtime DONE Accept incoming Request Consumption Identity Requests Runtime DONE Check if...","categories": [],
        "tags": [],
        "url": "/integrate/use-cases",
        "teaser": null
      },{
        "title": "Operate enmeshed",
        "excerpt":"Looking to set up and maintain a connector in your own infrastructure? No worries, we’ve got you covered!   We’ll guide you on how to configure and maintain your systems optimally, ensuring smooth operations.     ","categories": [],
        "tags": [],
        "url": "/operate",
        "teaser": null
      },{
        "title": "Configuration",
        "excerpt":"Mounting a config file Create a config file in JSON format in a folder of your choice. Fill the config file with your desired configuration (it’s sufficient to add values you want to change; the Connector will merge your config file with the default configuration) Example: { \"infrastructure\": { \"httpServer\":...","categories": [],
        "tags": [],
        "url": "/operate/configuration",
        "teaser": null
      },{
        "title": "Log Event IDs",
        "excerpt":"EventId.Id EventId.Name 645028 AzureStorageAccount.ErrorDeletingBlob 516591 AzureStorageAccount.ErrorListingAllBlobs 599235 Challenges.DeleteExpiredChallenges.CancellationRequested 916630 Challenges.DeleteExpiredChallenges.DeletionSuccessful 715507 DefaultRabbitMqPersistentConnection.ConnectionError 454129 DefaultRabbitMqPersistentConnection.ConnectionIsBlocked 119836 DefaultRabbitMqPersistentConnection.ConnectionIsShutdown 143946 DefaultRabbitMqPersistentConnection.ConnectionThrewAnException 277894 Devices.ChangePassword.ChangedPasswordForDevice 436321 Devices.CreateIdentity.CreatedIdentity 383136 Devices.CreateTier.CreatedTier 950845 Devices.DirectPushService.DeletingDeviceRegistration 624412 Devices.DirectPushService.ErrorWhileTryingToSendNotification 628738 Devices.DirectPushService.UnregisteredDevice 776010 Devices.MarkDeviceAsDeleted.MarkedDeviceAsDeleted 219823 Devices.RegisterDevice.RegisteredDevice 949322 EventBusAzureServiceBus.ErrorHandlingMessage 726744 EventBusAzureServiceBus.ErrorWhileExecutingEventHandlerCausingRetry 146670 EventBusAzureServiceBus.ErrorWhileProcessingIntegrationEvent 630568 EventBusAzureServiceBus.EventWasNotProcessed 341537 EventBusAzureServiceBus.NoSubscriptionForEvent 302940 EventBusAzureServiceBus.SendingIntegrationEvent 712382 EventBusGoogleCloudPubSub.ErrorHandlingMessage 304842 EventBusGoogleCloudPubSub.ErrorWhileExecutingEventHandlerType...","categories": [],
        "tags": [],
        "url": "/operate/log-event-ids",
        "teaser": null
      },{
        "title": "Modules",
        "excerpt":"Since the Connector is based on the Runtime, all Modules of the Runtime are also available in the Connector. Additionally, the Connector defines its own Modules that only make sense in the context of a Connector and are therefore not defined in the Runtime. Read more about the Module configuration...","categories": [],
        "tags": [],
        "url": "/operate/modules",
        "teaser": null
      },{
        "title": "Overview of Connector operations",
        "excerpt":"Basic Tasks Stopping the Connector Starting the Connector after a Downtime Be advised that before starting the Connector after a downtime, you should ensure that the data within the database is on the most up-to-date time. Once the Connector starts its internal synchronization mechanism, it will update the database with...","categories": [],
        "tags": [],
        "url": "/operate/overview-of-connector-operations",
        "teaser": null
      },{
        "title": "Performance Considerations",
        "excerpt":"Scaling Horizontally   Using multiple connectors with the same identity to scale horizontally and balance the workload across all available connectors is not supported at the moment.   ","categories": [],
        "tags": [],
        "url": "/operate/performance-considerations",
        "teaser": null
      },{
        "title": "Privacy Considerations",
        "excerpt":"Please be aware that personal or sensitive plaintext data is processed and stored in the Connector and the corresponding MongoDB database. The same applies to secret and private keys which should be treated as strictly confidential. Thus the access to the Connector and its database should be kept to a...","categories": [],
        "tags": [],
        "url": "/operate/privacy-considerations",
        "teaser": null
      },{
        "title": "Security Considerations",
        "excerpt":"The most important thing you have to keep in mind that the Connector is usually running on your landscape and in your authority. This is why you are also responsible for the security of the Connector and its data. And as the Connector is handling very sensitive data (please see...","categories": [],
        "tags": [],
        "url": "/operate/security-considerations",
        "teaser": null
      },{
        "title": "Setup with Docker Compose",
        "excerpt":"Prerequisites MongoDB The Connector requires a MongoDB compatible database as its data storage. MongoDB is a document-oriented database. For compatibility and security reasons, the most up-to-date version of MongoDB should be used. For more information, please see https://www.mongodb.com. If you want to use an open-source database you can use FerretDB...","categories": [],
        "tags": [],
        "url": "/operate/setup-with-docker-compose",
        "teaser": null
      },{
        "title": "Setup with Helm Charts",
        "excerpt":"Versions The available Helm chart versions can be found on ArtifactHUB or in the GitHub Container Registry. We provide a new Helm chart version for each new Connector release and each Helm chart will deploy the Connector in the chart’s version. (Helm chart version 3.2.1 deploys Connector version 3.2.1) You...","categories": [],
        "tags": [],
        "url": "/operate/setup-with-helm-charts",
        "teaser": null
      },{
        "title": "Support",
        "excerpt":"Support For assisted support with the Connector or the Backbone provided by the j&amp;s-soft GmbH contact us via support[at]enmeshed.eu. Community support is a great way to get help and even contribute to the projects. Open bug reports and feature requests in the enmeshed issue tracker or share your feedback with...","categories": [],
        "tags": [],
        "url": "/operate/support",
        "teaser": null
      },{
        "title": "Troubleshooting Guide",
        "excerpt":"Troubleshooting Guide For any issues with the Connector make sure you checked the logs and the /Monitoring/* routes. The /Monitoring/Support route provides a lot of information about the current state of the Connector and you can for example detect misconfigurations. Common Errors Config file mounting (EISDIR | invalid mode: RO)...","categories": [],
        "tags": [],
        "url": "/operate/troubleshooting-guide",
        "teaser": null
      },{
        "title": "Use enmeshed",
        "excerpt":"This page is intended for app users.   Getting Started   Install the app in a secure environment.       ","categories": [],
        "tags": [],
        "url": "/use",
        "teaser": null
      },{
        "title": "Install the App",
        "excerpt":"You can get the enmeshed App over your favorite app stores. Please find the links below:      Enmeshed App on Apple AppStore   Enmeshed App on Google PlayStore   Please drop us some feedback if you would like to see the enmeshed App on different stores as well.   ","categories": [],
        "tags": [],
        "url": "/use/install-the-app",
        "teaser": null
      },{
        "title": "Secure device setup",
        "excerpt":"We’ve summarized some tips for end-user device usage on this site. A great resource for more in-depth information about those tips is the website of the Federal Office for Information Security (BSI, Bundesamt für Sicherheit in der Informationstechnik). We do not know every security guideline and tip out there, so...","categories": [],
        "tags": [],
        "url": "/use/secure-device-setup",
        "teaser": null
      },{
        "title": "Load Token by id and key (without having an account)",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-anonymous-load-token-by-id-and-key-without-having-an-account",
        "teaser": null
      },{
        "title": "Load Token by truncated reference (without having an account)",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-anonymous-load-token-by-truncated-reference-without-having-an-account",
        "teaser": null
      },{
        "title": "Accept incoming Request",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-accept-incoming-request",
        "teaser": null
      },{
        "title": "Check if incoming Request can be accepted",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-check-if-incoming-request-can-be-accepted",
        "teaser": null
      },{
        "title": "Check if incoming Request can be rejected",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-check-if-incoming-request-can-be-rejected",
        "teaser": null
      },{
        "title": "Check if outgoing Request can be created",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-check-if-outgoing-request-can-be-created",
        "teaser": null
      },{
        "title": "Create a shared Attribute copy",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-create-a-shared-attribute-copy",
        "teaser": null
      },{
        "title": "Create an Attribute",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-create-an-attribute",
        "teaser": null
      },{
        "title": "Create and complete outgoing Request from Relationship Template Response",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-create-and-complete-outgoing-request-from-relationship-template-response",
        "teaser": null
      },{
        "title": "Create Draft",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-create-draft",
        "teaser": null
      },{
        "title": "Create outgoing Request",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-create-outgoing-request",
        "teaser": null
      },{
        "title": "Create Setting",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-create-setting",
        "teaser": null
      },{
        "title": "Delete Draft",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-delete-draft",
        "teaser": null
      },{
        "title": "Delete Setting",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-delete-setting",
        "teaser": null
      },{
        "title": "Discards outgoing Request",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-discards-outgoing-request",
        "teaser": null
      },{
        "title": "Execute a RelationshipAttributeQuery",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-execute-a-relationshipattributequery",
        "teaser": null
      },{
        "title": "Execute a ThirdPartyAttributeQuery",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-execute-a-thirdpartyattributequery",
        "teaser": null
      },{
        "title": "Execute an IdentityAttributeQuery",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-execute-an-identityattributequery",
        "teaser": null
      },{
        "title": "Get Attribute",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-get-attribute",
        "teaser": null
      },{
        "title": "Get AttributeListener",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-get-attributelistener",
        "teaser": null
      },{
        "title": "Get Attributes of peer",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-get-attributes-of-peer",
        "teaser": null
      },{
        "title": "Get Attributes shared to peer",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-get-attributes-shared-to-peer",
        "teaser": null
      },{
        "title": "Get Draft",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-get-draft",
        "teaser": null
      },{
        "title": "Get incoming Request",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-get-incoming-request",
        "teaser": null
      },{
        "title": "Get outgoing Request",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-get-outgoing-request",
        "teaser": null
      },{
        "title": "Get Setting",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-get-setting",
        "teaser": null
      },{
        "title": "Query AttributeListeners",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-query-attributelisteners",
        "teaser": null
      },{
        "title": "Query Attributes",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-query-attributes",
        "teaser": null
      },{
        "title": "Query Drafts",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-query-drafts",
        "teaser": null
      },{
        "title": "Query incoming Requests",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-query-incoming-requests",
        "teaser": null
      },{
        "title": "Query outgoing Requests",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-query-outgoing-requests",
        "teaser": null
      },{
        "title": "Query Settings",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-query-settings",
        "teaser": null
      },{
        "title": "Reject incoming Request",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-reject-incoming-request",
        "teaser": null
      },{
        "title": "Set status of incoming Request to check prerequisites",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-set-status-of-incoming-request-to-check-prerequisites",
        "teaser": null
      },{
        "title": "Set status of incoming Request to complete",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-set-status-of-incoming-request-to-complete",
        "teaser": null
      },{
        "title": "Set status of incoming Request to received",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-set-status-of-incoming-request-to-received",
        "teaser": null
      },{
        "title": "Set status of incoming Request to require manual decision",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-set-status-of-incoming-request-to-require-manual-decision",
        "teaser": null
      },{
        "title": "Set status of outgoing Request to complete",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-set-status-of-outgoing-request-to-complete",
        "teaser": null
      },{
        "title": "Set status of outgoing Request to sent",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-set-status-of-outgoing-request-to-sent",
        "teaser": null
      },{
        "title": "Update Draft",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-update-draft",
        "teaser": null
      },{
        "title": "Update Setting",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-update-setting",
        "teaser": null
      },{
        "title": "Configure Config Property",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-device-configure_-config-property",
        "teaser": null
      },{
        "title": "Create Profile with new Identity",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-device-create-profile-with-new-identity",
        "teaser": null
      },{
        "title": "DELETE REST Endpoint",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-device-delete_-rest-endpoint",
        "teaser": null
      },{
        "title": "Get AppRuntime version information",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-device-get-appruntime-version-information",
        "teaser": null
      },{
        "title": "Get Profile by Enmeshed Address",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-device-get-profile-by-enmeshed-address",
        "teaser": null
      },{
        "title": "Get Profile",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-device-get-profile",
        "teaser": null
      },{
        "title": "Get Profiles",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-device-get-profiles",
        "teaser": null
      },{
        "title": "Get support Information",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-device-get-support-information",
        "teaser": null
      },{
        "title": "Get the Connector health status",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-device-get-the-connector-health-status",
        "teaser": null
      },{
        "title": "Get the Connector version information",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-device-get-the-connector-version-information",
        "teaser": null
      },{
        "title": "Get the number of requests and the status codes that were returned by the Connector.",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-device-get-the-number-of-requests-and-the-status-codes-that-were-returned-by-the-connector",
        "teaser": null
      },{
        "title": "GET REST Endpoint",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-device-get_-rest-endpoint",
        "teaser": null
      },{
        "title": "POST REST Endpoint",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-device-post_-rest-endpoint",
        "teaser": null
      },{
        "title": "PUT REST Endpoint",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-device-put_-rest-endpoint",
        "teaser": null
      },{
        "title": "Rename Profile",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-device-rename-profile",
        "teaser": null
      },{
        "title": "Cancel Action",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-human-cancel_-action",
        "teaser": null
      },{
        "title": "Device External UseCase",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-human-device_-external-usecase",
        "teaser": null
      },{
        "title": "Enter Data (on screen)",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-human-enter_-data-on-screen",
        "teaser": null
      },{
        "title": "Navigate to (screen) Screen",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-human-navigate-to-screen_-screen",
        "teaser": null
      },{
        "title": "Negative Action",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-human-negative_-action",
        "teaser": null
      },{
        "title": "Positive Action",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-human-positive_-action",
        "teaser": null
      },{
        "title": "Scan QR-Code (on different device)",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-human-scan_-qr-code-on-different-device",
        "teaser": null
      },{
        "title": "Select Item (on screen)",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-human-select_-item-on-screen",
        "teaser": null
      },{
        "title": "Accept Relationship Change",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-accept-relationship-change",
        "teaser": null
      },{
        "title": "Check Identity by Address",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-check-identity-by-address",
        "teaser": null
      },{
        "title": "Create Challenge",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-create-challenge",
        "teaser": null
      },{
        "title": "Create Device",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-create-device",
        "teaser": null
      },{
        "title": "Create own RelationshipTemplate",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-create-own-relationshiptemplate",
        "teaser": null
      },{
        "title": "Create own Token",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-create-own-token",
        "teaser": null
      },{
        "title": "Create Relationship with RelationshipTemplate",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-create-relationship-with-relationshiptemplate",
        "teaser": null
      },{
        "title": "Create Token for File",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-create-token-for-file",
        "teaser": null
      },{
        "title": "Create Token for own Relationship Template",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-create-token-for-own-relationship-template",
        "teaser": null
      },{
        "title": "Download File of Attachment",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-download-file-of-attachment",
        "teaser": null
      },{
        "title": "Download File",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-download-file",
        "teaser": null
      },{
        "title": "Get Attributes for Relationship",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-attributes-for-relationship",
        "teaser": null
      },{
        "title": "Get currently used Device",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-currently-used-device",
        "teaser": null
      },{
        "title": "Get currently used Identity",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-currently-used-identity",
        "teaser": null
      },{
        "title": "Get Device Onboarding Info",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-device-onboarding-info",
        "teaser": null
      },{
        "title": "Get Device Onboarding Token",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-device-onboarding-token",
        "teaser": null
      },{
        "title": "Get Device",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-device",
        "teaser": null
      },{
        "title": "Get File Metadata of Attachment",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-file-metadata-of-attachment",
        "teaser": null
      },{
        "title": "Get Message by MessageId",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-message-by-messageid",
        "teaser": null
      },{
        "title": "Get or load File",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-or-load-file",
        "teaser": null
      },{
        "title": "Get own File",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-own-file",
        "teaser": null
      },{
        "title": "Get Relationship by Address",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-relationship-by-address",
        "teaser": null
      },{
        "title": "Get Relationship by RelationshipId",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-relationship-by-relationshipid",
        "teaser": null
      },{
        "title": "Get Relationship Template",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-relationship-template",
        "teaser": null
      },{
        "title": "Get synchronization status with Backbone",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-synchronization-status-with-backbone",
        "teaser": null
      },{
        "title": "Get Token by TokenID",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-token-by-tokenid",
        "teaser": null
      },{
        "title": "Load Relationship Template created by others",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-load-relationship-template-created-by-others",
        "teaser": null
      },{
        "title": "Load Token created by others",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-load-token-created-by-others",
        "teaser": null
      },{
        "title": "Query Devices",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-query-devices",
        "teaser": null
      },{
        "title": "Query Files",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-query-files",
        "teaser": null
      },{
        "title": "Query Messages",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-query-messages",
        "teaser": null
      },{
        "title": "Query Relationship Templates",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-query-relationship-templates",
        "teaser": null
      },{
        "title": "Query Relationships",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-query-relationships",
        "teaser": null
      },{
        "title": "Query Tokens by parameters",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-query-tokens-by-parameters",
        "teaser": null
      },{
        "title": "Reject Relationship Change",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-reject-relationship-change",
        "teaser": null
      },{
        "title": "Send message to recipient(s)",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-send-message-to-recipients",
        "teaser": null
      },{
        "title": "Synchronize updates of Backbone",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-synchronize-updates-of-backbone",
        "teaser": null
      },{
        "title": "Update Device",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-update-device",
        "teaser": null
      },{
        "title": "Upload own File",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-upload-own-file",
        "teaser": null
      },{
        "title": "Validate Challenge",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-transport-validate-challenge",
        "teaser": null
      },{
        "title": "Get app version information",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-user_interface-get-app-version-information",
        "teaser": null
      },{
        "title": "Refresh (screen) Screen",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-user_interface-refresh-screen-screen",
        "teaser": null
      },{
        "title": "Show (screen) Screen",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-user_interface-show-screen-screen",
        "teaser": null
      },{
        "title": "Start app with parameters by using link",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-user_interface-start-app-with-parameters-by-using-link",
        "teaser": null
      },{
        "title": "Start app without parameters",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/use-case-user_interface-start-app-without-parameters",
        "teaser": null
      },{
        "title": "Introducing enmeshed",
        "excerpt":"Hello everyone! We are delighted to introduce a new open source project named enmeshed. It is the home of software libraries, components, ideas, discussions, and many more in the area of digitalization. We think the world is ready for a whole new adventure of digital communication, easy and secure data...","categories": ["blog"],
        "tags": ["page","update"],
        "url": "/blog/introducing-enmeshed",
        "teaser": null
      },{
        "title": "The new webhooks Connector Module",
        "excerpt":"Introduction Hello everyone! Today we want to announce a new version of the webhooks Connector Module. The old version of the Module had many limitations that we could only address with a complete rewrite. To be backwards compatible the old version of the Module is still available under the name...","categories": ["blog"],
        "tags": ["connector","update"],
        "url": "/blog/webhooks-v2-connector-module",
        "teaser": null
      },{
        "title": "Announcing enmeshed V2",
        "excerpt":"We are currently working on enmeshed version 2. We got a lot of feedback from the community and so we are improving enmeshed in different areas to tackle it. Attributes Attributes in enmeshed have been a huge pain point during the integration using the enmeshed Connector but also while using...","categories": ["blog"],
        "tags": ["announcement","v2"],
        "url": "/blog/announcing-enmeshed-v2",
        "teaser": null
      },{
        "title": "Announcing enmeshed V2 Attributes",
        "excerpt":"This is one of the blog posts regarding enmeshed V2. For an overview of all V2 blog posts, please refer to the V2 announcement blog post. In this blog post we want to talk about pain points of the V1 Attributes and how we reworked the Attributes to tackle them....","categories": ["blog"],
        "tags": ["announcement","v2","attributes"],
        "url": "/blog/announcing-enmeshed-v2-attributes",
        "teaser": null
      },{
        "title": "Announcing enmeshed v2 Requests",
        "excerpt":"This is one of the blog posts regarding enmeshed v2. For an overview of all enmeshed v2 blog posts, please refer to the enmeshed v2 announcement blog post. This blog post requires a superficial understanding of the new Attribute handling. Please refer to the corresponding blog post to learn more...","categories": ["blog"],
        "tags": ["announcement","v2","requests"],
        "url": "/blog/announcing-enmeshed-v2-requests",
        "teaser": null
      },{
        "title": "The (bumpy) road to enmeshed V2",
        "excerpt":"Hey there, as we’ve already communicated in the previous blogs, we would like to release enmeshed version 2 soon. As it is incompatible with version 1, the switch to version 2 is unfortunately not as straightforward as we’d hoped. We’ve had many discussions about the pros and cons of different...","categories": ["blog"],
        "tags": ["announcement","v2"],
        "url": "/blog/road-to-enmeshed-v2",
        "teaser": null
      },{
        "title": "FerretDB compatibility for the enmeshed Connector",
        "excerpt":"At enmeshed, we believe in the importance of open-source software and the freedom it gives developers. MongoDB is licensed under the Server Side Public License (SSPL) and from the start of our project we knew that we needed to find an alternative database solution for the enmeshed Connector. After researching...","categories": ["blog"],
        "tags": ["announcement","connector"],
        "url": "/blog/announcing-ferretdb-compatibility",
        "teaser": null
      }]
