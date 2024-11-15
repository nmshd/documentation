var store = [{
        "title": "How does enmeshed work?",
        "excerpt":"enmeshed introduces an overarching solution, securely connecting users and organizations without the use of decentralized technologies like blockchains. However, it makes use of the decentralized mindset, like decentralized Identities. Mature technologies and architectures are used as a base for enmeshed. In combination with state-of-the-art encryption technologies, a complete web stack...","categories": [],
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
        "excerpt":"enmeshed supports many possible business scenarios within various lines of businesses or industries. But not only enterprises, companies or organizations benefit of these approaches. Also leisure activities with clubs or communities can make use of enmeshed. Though the digital life of persons is used as a prominent example throughout this...","categories": [],
        "tags": [],
        "url": "/explore/example-scenarios",
        "teaser": null
      },{
        "title": "Features",
        "excerpt":"Features included with enmeshed: Self-sovereign Identity Datawallet capabilitites, i.e. repository of structured data like Attributes and files Datalog, i.e. know what data was shared when and to whom Cross-identity transparent encryption and digital signatures Cross-identity bi-directional data communication Cross-identity structured data synchronization (manual or automated) Cross-device transparent encryption Cross-device bi-directional...","categories": [],
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
        "excerpt":"enmeshed does not only enable users taking part of the digitalization process. Organizations also benefit of enmeshed as well, as they usually need to invest heavily to stay up to date in today’s technological race. enmeshed is a flexible communication platform, with a rich default feature set and possibilities to...","categories": [],
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
        "excerpt":"Privacy stands as one of the main pillars of the digital strategies adopted by institutions. It holds a significant and paramount position. This section introduces privacy and data protection of personal data in general, before introducing enmeshed privacy concepts. Please be advised, that enmeshed is an open-source solution which brings...","categories": [],
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
        "excerpt":"The consumption layer contains processes, logic and data structures either for personal or organizational Identities. It sits on top of the transport layer and exposes its functionality to either the user experience or the integration layer. Components App Connector Tasks Attribute Handling The consumption layer handles the central Attribute store...","categories": [],
        "tags": [],
        "url": "/explore/layers/consumption",
        "teaser": null
      },{
        "title": "Integration Layer",
        "excerpt":"The integration layer is only available within the Connector and sits on top of the transport and consumption layers. It is responsible for providing integration capabilities to other systems. It acts for a single Identity only, which is usually an organization. Components Connector Tasks Webserver with Authentication The integration layer...","categories": [],
        "tags": [],
        "url": "/explore/layers/integration",
        "teaser": null
      },{
        "title": "User-Experience Layer",
        "excerpt":"The user experience layer is only available within the App and sits on top of the transport and consumption layers. It exposes the functionality of underlying layers for the user, meaning it is rendering out user interfaces and handling interactions. It acts for a single Identity only, which is usually...","categories": [],
        "tags": [],
        "url": "/explore/layers/user-experience",
        "teaser": null
      },{
        "title": "enmeshed App",
        "excerpt":"App Building Blocks Platform-dependant App Binaries For each of the various platforms, each version of the app is packaged into a platform-dependant binary. This binary is then executable / installable for the users. The binaries of the enmeshed App are created, maintained and published by j&amp;s-soft AG and are available...","categories": [],
        "tags": [],
        "url": "/explore/app",
        "teaser": null
      },{
        "title": "enmeshed Backbone",
        "excerpt":"Backbone Building Blocks The enmeshed Backbone embraces all central services required by the enmeshed platform to work. It consists of the underlying infrastructure, its hosted services, and the libraries used within the services. There could be many enmeshed Backbones hosted along the same number of enmeshed Apps. But keep in...","categories": [],
        "tags": [],
        "url": "/explore/backbone",
        "teaser": null
      },{
        "title": "enmeshed Connector",
        "excerpt":"Connector Building Blocks Connector Docker Image The Connector is usually deployed with a Docker image. The Docker images can be fetched from the GitHub container registry using your Docker client. Note: You have to be logged in using a GitHub account to list available tags. The Docker images are created,...","categories": [],
        "tags": [],
        "url": "/explore/connector",
        "teaser": null
      },{
        "title": "enmeshed Addresses",
        "excerpt":"The Address is the primary identifier for an enmeshed Identity. It is public and created out of the Identity’s Signature Public Key. Thus, the Identity’s root signature key and its corresponding Address are interlinked with each other and cannot be changed. Nobody is able to change the public key for...","categories": [],
        "tags": [],
        "url": "/explore/addresses",
        "teaser": null
      },{
        "title": "enmeshed Runtime",
        "excerpt":"enmeshed Runtime GitHub Repository The Runtime wraps all features of enmeshed into a single programming interface. It is combining the various libraries to a powerful software stack, primarily based on TypeScript, which can be used on nearly every device on the world - and even in the browser. Versions, local...","categories": [],
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
        "excerpt":"The new world of Identities Self-Sovereignty and Self-Sovereign Identities Having full control over data, authorizations, or the hard- and software one can use for using the data is called self-sovereignty. A self-sovereign Identity is a digital Identity which anybody can set up, without the power of somebody else to deny...","categories": [],
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
        "excerpt":"The primary integration capability of the Connector is the REST API. In order to use it, you should have received an API-Key for the respective Connector. An API-Key so far has all authorizations for accessing the API. Hosted API tooling by the (development) Connector In order to use the hosted...","categories": [],
        "tags": [],
        "url": "/integrate/access-the-connector",
        "teaser": null
      },{
        "title": "Attribute introduction",
        "excerpt":"This guide provides an introduction to Attributes in the enmeshed context. Attributes are used to store information about Identities or data that is relevant in a Relationship between Identities. There are therefore two types of Attributes, the IdentityAttributes and the RelationshipAttributes, which are designed for these different purposes. Both have...","categories": [],
        "tags": [],
        "url": "/integrate/attribute-introduction",
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
        "title": "Create Attributes for peer",
        "excerpt":"There are many situations in which an Identity wants to create an IdentityAttribute or a RelationshipAttribute for another Identity, for example: A university wants to send a graduate their degree certificate. A company wants to provide an employee with their business email address at the start of their employment. We...","categories": [],
        "tags": [],
        "url": "/integrate/create-attributes-for-peer",
        "teaser": null
      },{
        "title": "Create Attributes for yourself",
        "excerpt":"This guide explains the end-to-end flow of creating an Attribute for your own Connector as its Integrator. As there are two types of Attributes, IdentityAttributes and RelationshipAttributes, a distinction must be made between them when creating an Attribute for yourself. Create an IdentityAttribute for yourself This section is about how...","categories": [],
        "tags": [],
        "url": "/integrate/create-attributes-for-yourself",
        "teaser": null
      },{
        "title": "Data Model Overview",
        "excerpt":"The enmeshed data model can be divided into three parts: Transport types Local types Content types The following diagram gives you an overview of all the existing types and how they are connected to each other. The subsequent chapters describe these types in more detail. (note that you can click...","categories": [],
        "tags": [],
        "url": "/integrate/data-model-overview",
        "teaser": null
      },{
        "title": "Delete Attributes",
        "excerpt":"The exact process of deleting an Attribute depends on the kind of Attribute at hand. Creating an Attribute, we must distinguish between IdentityAttributes and RelationshipAttributes. In the former case, a so-called RepositoryAttribute is created, which is a LocalAttribute without shareInfo, that you are the owner of. Afterwards, you may share...","categories": [],
        "tags": [],
        "url": "/integrate/delete-attributes",
        "teaser": null
      },{
        "title": "Error Codes",
        "excerpt":"Please find a list of enmeshed error codes below. Most often the errors occur on invalid input or actions. If you happen to find unexpected errors while using enmeshed or cannot deduce the reason for your error, please report it in the enmeshed Issue Tracker. ErrorCode Description error.connector.errorInErrorHandler The error...","categories": [],
        "tags": [],
        "url": "/integrate/error-codes",
        "teaser": null
      },{
        "title": "Establish Relationships",
        "excerpt":"Communication and sharing of information between two Identities requires the existence of a Relationship between them. This guide describes how a Connector can establish an active Relationship to another Identity. Firstly, we explain how to create a RelationshipTemplate on a Connector, the so-called templator, and how to make the RelationshipTemplate...","categories": [],
        "tags": [],
        "url": "/integrate/establish-relationships",
        "teaser": null
      },{
        "title": "Event introduction",
        "excerpt":"Connecting an external system with the enmeshed Connector, the main communication is performed by addressing the Connector’s REST API. This way, processes can be initiated by the organization’s backend service or data can be requested from the Connector. In addition, events offer the possibility for the Connector to actively give...","categories": [],
        "tags": [],
        "url": "/integrate/event-introduction",
        "teaser": null
      },{
        "title": "Exchange Messages",
        "excerpt":"The Connector can send and receive Messages with attachments using REST requests and file IDs, which are first uploaded and encrypted on the Platform. Messages can be queried and downloaded, and the Connector pulls for new Messages periodically. In order to send Messages to recipients, a REST request can be...","categories": [],
        "tags": [],
        "url": "/integrate/exchange-messages",
        "teaser": null
      },{
        "title": "FAQ",
        "excerpt":"Welcome to our FAQ page! Here, you’ll find answers to the most common questions about enmeshed. If you’re looking for quick and straightforward information, you’ve come to the right place. Common questions What is enmeshed? A description of enmeshed can be found on the main page. Technical questions When I...","categories": [],
        "tags": [],
        "url": "/integrate/faq",
        "teaser": null
      },{
        "title": "Integration example",
        "excerpt":"In this tutorial we go through the basic steps necessary to establish a Relationship to another Identity and send Messages between two Identities with an existing Relationship. This will create a better understanding of these processes, which will help you automating them for your organization. It is not mandatory to...","categories": [],
        "tags": [],
        "url": "/integrate/integration-example",
        "teaser": null
      },{
        "title": "IQL Syntax",
        "excerpt":"The enmeshed Identity Query Language (IQL) is a domain-specific language to query IdentityAttributes using a concise and simple syntax. The IQL is tailored towards usage by non-technical users and integrators. The IQL is complete, i.e. it’s expressive enough to query arbitrary subsets of IdentityAttributes and can thus serve as a...","categories": [],
        "tags": [],
        "url": "/integrate/iql-syntax",
        "teaser": null
      },{
        "title": "Migration From v4 to v5",
        "excerpt":"The Runtime of enmeshed has recently been updated from version 4 to version 5. Accordingly, a new version of the Connector has also been released to make the updated Runtime available to Integrators of Connectors. The version update has resulted in some breaking changes. To support the migration of existing...","categories": [],
        "tags": [],
        "url": "/integrate/migration-from-v4-to-v5",
        "teaser": null
      },{
        "title": "Migration From v5 to v6",
        "excerpt":"The Runtime of enmeshed has recently been updated from version 5 to version 6. Accordingly, a new version of the Connector has also been released to make the updated Runtime available to Integrators of Connectors. The version update has resulted in some breaking changes. To support the migration of existing...","categories": [],
        "tags": [],
        "url": "/integrate/migration-from-v5-to-v6",
        "teaser": null
      },{
        "title": "Propose Attributes to peer",
        "excerpt":"An Identity may have received information about a peer in the past that it needs to process a transaction at a later time. To ensure the accuracy of the available information, the Identity can propose Attributes to the peer for creation. Depending on whether the peer confirms the fittingness of...","categories": [],
        "tags": [],
        "url": "/integrate/propose-attributes-to-peer",
        "teaser": null
      },{
        "title": "Read Attributes from peer",
        "excerpt":"There are many situations in which an Identity is interested in an IdentityAttribute or a RelationshipAttribute of another Identity, for example: A company must know the age of a customer in order to carry out an age check if they want to purchase alcohol or other age-restricted goods. A company...","categories": [],
        "tags": [],
        "url": "/integrate/read-attributes-from-peer",
        "teaser": null
      },{
        "title": "Request and Response introduction",
        "excerpt":"Requests are the main instrument in enmeshed to interact with other Identities. They enable various business processes, e.g. creating, sharing or receiving Attributes, asking a peer for authentication or consent, and much more. Also, parts of a vaster business process can be implemented with them, like querying all personal information...","categories": [],
        "tags": [],
        "url": "/integrate/request-and-response-introduction",
        "teaser": null
      },{
        "title": "Request one-time consent of peer",
        "excerpt":"This guide explains how an Identity can obtain the one-time consent of one of its peers on a particular issue using the ConsentRequestItem. With the ConsentRequestItem it is possible to request the consent of a peer to an arbitrary text and thus reach agreement on a certain non-machine-processable context. The...","categories": [],
        "tags": [],
        "url": "/integrate/request-one-time-consent-of-peer",
        "teaser": null
      },{
        "title": "Request persistent consent of peer",
        "excerpt":"This guide explains how an Identity can obtain the persistent consent of one of its peers on a particular issue. Technically, this form of consent is stored by a RelationshipAttribute with Consent as value.@type, that exists in the context of their Relationship and that is usually owned by the peer....","categories": [],
        "tags": [],
        "url": "/integrate/request-persistent-consent-of-peer",
        "teaser": null
      },{
        "title": "Requests via Messages",
        "excerpt":"This guide explains how to send and receive a Request over enmeshed Messages using two Connectors. The first of them, which we will refer to as the Sender, will send the Request. The second, which we will refer to as the Recipient, can decide, whether they want to accept or...","categories": [],
        "tags": [],
        "url": "/integrate/requests-via-messages",
        "teaser": null
      },{
        "title": "Requests via RelationshipTemplates",
        "excerpt":"This guide explains the end-to-end flow of sending a Request via a RelationshipTemplate and responding to it. Usually, this flow happens between a Connector and the App, but for simplicity and more transparency, two Connectors are used here. To try out the examples in this guide on your own, you...","categories": [],
        "tags": [],
        "url": "/integrate/requests-via-relationshiptemplates",
        "teaser": null
      },{
        "title": "Share Attributes with peer",
        "excerpt":"There are many situations in which an Identity wants to share an IdentityAttribute or a RelationshipAttribute with another Identity, for example: A university wants to give a student the street address of its student administration so that they can send it documents by post. An organization wants to share its...","categories": [],
        "tags": [],
        "url": "/integrate/share-attributes-with-peer",
        "teaser": null
      },{
        "title": "Support",
        "excerpt":"For assisted support with the Connector or the Backbone provided by the j&amp;s-soft AG contact us via support[at]enmeshed.eu. Community support is a great way to get help and even contribute to the projects. Open bug reports and feature requests in the enmeshed issue tracker or share your feedback with the...","categories": [],
        "tags": [],
        "url": "/integrate/support",
        "teaser": null
      },{
        "title": "Terminate Relationships",
        "excerpt":"In order for two Identities to communicate with each other and exchange data, they must establish a Relationship between them. If an active Relationship to another Identity is no longer wanted, it can be terminated. Terminating an active Relationship initially blocks regular communication for both Identities, but does not yet...","categories": [],
        "tags": [],
        "url": "/integrate/terminate-relationships",
        "teaser": null
      },{
        "title": "Update Attributes by succession",
        "excerpt":"The way enmeshed handles updates to your personal data is by succeeding old Attributes with new ones. Instead of simply replacing old data, a completely new Attribute is created which succeeds its predecessor. Thus, you and your peers are provided with a coherent history of all past versions. How the...","categories": [],
        "tags": [],
        "url": "/integrate/update-attributes-by-succession",
        "teaser": null
      },{
        "title": "Use Cases",
        "excerpt":"Title Layer ⌄ Actor ⌄ Category ⌄ Component ⌄ Load Token by truncated reference (without having an account) Anonymous Identity AnonymousTokens Runtime Accept incoming Request Consumption Identity Requests Runtime Change default RepositoryAttribute Consumption Identity Attributes Runtime Check if incoming Request can be accepted Consumption Identity Requests Runtime Check if incoming...","categories": [],
        "tags": [],
        "url": "/integrate/use-cases",
        "teaser": null
      },{
        "title": "Operate enmeshed",
        "excerpt":"Looking to set up and maintain a Connector in your own infrastructure? No worries, we’ve got you covered!   We’ll guide you on how to configure and maintain your systems optimally, ensuring smooth operations.     ","categories": [],
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
        "excerpt":"Scaling Horizontally   Using multiple Connectors with the same Identity to scale horizontally and balance the workload across all available Connectors is not supported at the moment.  ","categories": [],
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
        "excerpt":"Support For assisted support with the Connector or the Backbone provided by the j&amp;s-soft AG contact us via support[at]enmeshed.eu. Community support is a great way to get help and even contribute to the projects. Open bug reports and feature requests in the enmeshed issue tracker or share your feedback with...","categories": [],
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
        "excerpt":"Caution: As enmeshed is open-source and the App is a white-label component, there are several flavors of the enmeshed App in the corresponding app stores. enmeshed App You can get the enmeshed App over your favorite app stores. Please find the links below: enmeshed App on Apple AppStore enmeshed App...","categories": [],
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
        "title": "Load Token by truncated reference (without having an account)",
        "excerpt":"This use case attempts to retrieve a Token by its truncatedReference without having an account on the Backbone, thus without an authentication. This can be used to fetch Tokens for Device Onboarding or Recovery. Parameters The reference that contains all information to load a Token. On Success Returns the corresponding...","categories": [],
        "tags": [],
        "url": "/use-case-anonymous-load-token-by-truncated-reference-without-having-an-account",
        "teaser": null
      },{
        "title": "Accept incoming Request",
        "excerpt":"This use case attempts to accept an incoming LocalRequest with the corresponding parameters. It is advised to check if incoming Request can be accepted in advance. Parameters The id of the incoming Request. The decision for each individual RequestItem expressed as the appropriate Parameters defined in the Data Model. On...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-accept-incoming-request",
        "teaser": null
      },{
        "title": "Change default RepositoryAttribute",
        "excerpt":"This use case is only accessible if setting default RepositoryAttributes is enabled in the Runtime configuration. By default, this is only the case for the App and not for the Connector. If setting default RepositoryAttributes is enabled, for every IdentityAttribute value type exactly one RepositoryAttribute will have the property isDefault...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-change-default-repositoryattribute",
        "teaser": null
      },{
        "title": "Check if incoming Request can be accepted",
        "excerpt":"This use case tests if an incoming LocalRequest can be accepted with the given parameters without actually accepting it. This is great for checking if all required information of a Request was filled out in order to accept it, e.g. to update a user interface with the respective errors (and...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-check-if-incoming-request-can-be-accepted",
        "teaser": null
      },{
        "title": "Check if incoming Request can be rejected",
        "excerpt":"This use case tests if an incoming Request can be rejected with the given parameters without actually rejecting it. It is advised to call canReject before actually rejecting a Request, however canReject will usually be successful, as there are only rare cases which block a rejection. Parameters The id of...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-check-if-incoming-request-can-be-rejected",
        "teaser": null
      },{
        "title": "Check if outgoing Request can be created",
        "excerpt":"This use case is intended to check if a LocalRequest can be created based on a given Request for a given peer. This use case should be executed before actually attempting to create the outgoing Request, because a more precise error description is provided in the case of a faulty...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-check-if-outgoing-request-can-be-created",
        "teaser": null
      },{
        "title": "Create a RepositoryAttribute",
        "excerpt":"This use case is intended to create a RepositoryAttribute, i.e. an unshared LocalAttribute based on a given IdentityAttribute. Parameters The content for the LocalAttribute that ought to be created as IdentityAttribute without the owner property, since it is automatically set to your Address On Success A LocalAttribute is created according...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-create-a-repositoryattribute",
        "teaser": null
      },{
        "title": "Create a shared Attribute copy",
        "excerpt":"Be advised that this is a Runtime-internal use case which is automatically used by the module system. You should not call this use case without having good reason. This use case is intended to create a copy of a LocalAttribute with the intent to share it. The copy references the...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-create-a-shared-attribute-copy",
        "teaser": null
      },{
        "title": "Create and complete outgoing Request from RelationshipTemplate Response",
        "excerpt":"Be advised that this is a Runtime-internal use case which is automatically used by the module system. You should not call this use case without having good reason. This use case is intended to create and instantly complete an outgoing Request which was shared by a RelationshipTemplate and the Response...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-create-and-complete-outgoing-request-from-relationshiptemplate-response",
        "teaser": null
      },{
        "title": "Create and share a RelationshipAttribute",
        "excerpt":"RelationshipAttributes are always associated with a Relationship between two Identities. Consequently, in contrast to IdentityAttributes, there cannot be unshared RelationshipAttributes. Instead, you and your peer will always each have a LocalAttribute with the same RelationshipAttribute as content and which only differs in the shareInfo.peer property. Thus, wanting to create a...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-create-and-share-a-relationshipattribute",
        "teaser": null
      },{
        "title": "Create outgoing Request",
        "excerpt":"This use case is intended to create an actionable LocalRequest based on a given Request for a given peer. The created LocalRequest needs to be manually submitted to the peer, for example by sending it via a Message. One can and should check if the outgoing Request can be created...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-create-outgoing-request",
        "teaser": null
      },{
        "title": "Delete a peer shared Attribute and notify peer",
        "excerpt":"This use case allows you to delete a peer shared Attribute, i.e. a LocalAttribute that a peer owns and has shared with you. Parameters The attributeId of the peer shared Attribute you want to delete. On Success The peer shared Attribute will be deleted. All predecessors of the peer shared...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-delete-a-peer-shared-attribute-and-notify-peer",
        "teaser": null
      },{
        "title": "Delete a RepositoryAttribute",
        "excerpt":"This use case allows you to delete a RepositoryAttribute, i.e. a LocalAttribute that is owned by yourself and whose shareInfo property is undefined. Parameters The attributeId of the RepositoryAttribute you want to delete. On Success The RepositoryAttribute will be deleted. All predecessors of the RepositoryAttribute will be deleted. If the...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-delete-a-repositoryattribute",
        "teaser": null
      },{
        "title": "Delete a third party owned RelationshipAttribute and notify peer",
        "excerpt":"This use case is deprecated and will be removed in the next major version. Please use the use case Delete a ThirdPartyRelationshipAttribute and notify peer instead. This use case allows you to delete a ThirdPartyRelationshipAttribute, i.e. a LocalAttribute that has the property shareInfo.thirdPartyAddress set. Parameters The attributeId of the ThirdPartyRelationshipAttribute...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-delete-a-third-party-owned-relationshipattribute-and-notify-peer",
        "teaser": null
      },{
        "title": "Delete a ThirdPartyRelationshipAttribute and notify peer",
        "excerpt":"This use case allows you to delete a ThirdPartyRelationshipAttribute, i.e. a LocalAttribute that has the property shareInfo.thirdPartyAddress set. Parameters The attributeId of the ThirdPartyRelationshipAttribute you want to delete. On Success The ThirdPartyRelationshipAttribute will be deleted. All predecessors of the ThirdPartyRelationshipAttribute will be deleted. If the ThirdPartyRelationshipAttribute was succeeded, the succeeds...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-delete-a-thirdpartyrelationshipattribute-and-notify-peer",
        "teaser": null
      },{
        "title": "Delete an own shared Attribute and notify peer",
        "excerpt":"This use case allows you to delete an own shared Attribute, i.e. a LocalAttribute with a shareInfo, that is owned by you. It is created as a result of sharing the content of a RepositoryAttribute with a peer. Parameters The attributeId of the own shared Attribute you want to delete....","categories": [],
        "tags": [],
        "url": "/use-case-consumption-delete-an-own-shared-attribute-and-notify-peer",
        "teaser": null
      },{
        "title": "Discards outgoing Request",
        "excerpt":"This use case is intended to discard an outgoing LocalRequest that has not been sent to the peer yet and is thus still in status Draft. Parameters id references the outgoing LocalRequest that is to be discarded. On Success The LocalRequest is deleted and returned. On Failure The LocalRequest could...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-discards-outgoing-request",
        "teaser": null
      },{
        "title": "Execute a RelationshipAttributeQuery",
        "excerpt":"{properties.description} This use case is intended to execute an incoming RelationshipAttributeQuery (e.g. received by a ReadAttributeRequestItem) which returns a list of matching Relationship Attributes. Parameters The query for the RelationshipAttributes as described in the RelationshipAttributeQuery. On Success Returns the RelationshipAttributes as LocalAttributes that match the given query. On Failure The...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-execute-a-relationshipattributequery",
        "teaser": null
      },{
        "title": "Execute a ThirdPartyRelationshipAttributeQuery",
        "excerpt":"This use case is intended to execute an incoming ThirdPartyRelationshipAttributeQuery, e.g. received by a ReadAttributeRequestItem. It returns a list of matching RelationshipAttributes that exist in the context of a Relationship with another peer. Parameters The query for the RelationshipAttributes as described in the ThirdPartyRelationshipAttributeQuery. On Success Returns the RelationshipAttributes as...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-execute-a-thirdpartyrelationshipattributequery",
        "teaser": null
      },{
        "title": "Execute an IdentityAttributeQuery",
        "excerpt":"This use case is intended to execute an incoming IdentityAttributeQuery (e.g. of a ReadAttributeRequestItem) which returns a list of matching Identity Attributes. Parameters The query for the IdentityAttributes as described in the IdentityAttributeQuery. On Success Returns the IdentityAttributes as LocalAttributes that match the given query. On Failure The query was...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-execute-an-identityattributequery",
        "teaser": null
      },{
        "title": "Execute an IQLQuery",
        "excerpt":"   This use case executes an IQLQuery which returns a list of matching IdentityAttributes.   Parameters      The query field of the IQLQuery as described in IQLQuery.   On Success      Returns the IdentityAttributes as LocalAttributes that match the given query.   On Failure      The query was malformed.  ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-execute-an-iqlquery",
        "teaser": null
      },{
        "title": "Get Attribute",
        "excerpt":"   This use case is intended to retrieve a LocalAttribute by its id.   Parameters      The id of the LocalAttribute.   On Success      Returns the LocalAttribute corresponding to the id.   On Failure      The LocalAttribute does not exist.  ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-get-attribute",
        "teaser": null
      },{
        "title": "Get AttributeListener",
        "excerpt":"   This use case is intended to retrieve an Attribute Listener by its id.   Parameter      The unique id identifying the Attribute Listener.   On Success      Returns the LocalAttributeListener that corresponds to the id.   On Failure      There is no such Attribute Listener.  ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-get-attributelistener",
        "teaser": null
      },{
        "title": "Get Attributes",
        "excerpt":"This use case is intended to query LocalAttributes. The LocalAttributes can be specified using a complex query. Parameters query allows to specify the conditions for the returned LocalAttributes. In detail, the following keys may be used: createdAt describes the time when the LocalAttribute was created. parentId can be used to...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-get-attributes",
        "teaser": null
      },{
        "title": "Get incoming Request",
        "excerpt":"   This use case is intended to retrieve an incoming LocalRequest by its id. The differences of outgoing and incoming Requests are defined here.   Parameters      The id of the incoming Request.   On Success      Returns the incoming LocalRequest corresponding to the id.   On Failure      There is no such incoming Request.  ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-get-incoming-request",
        "teaser": null
      },{
        "title": "Get outgoing Request",
        "excerpt":"   This use case is intended to retrieve an outgoing LocalRequest by its id. The differences of outgoing and an incoming Requests are defined here.   Parameters      The id of the outgoing Request.   On Success      Returns the outgoing LocalRequest corresponding to the id.   On Failure      There is no such outgoing Request.  ","categories": [],
        "tags": [],
        "url": "/use-case-consumption-get-outgoing-request",
        "teaser": null
      },{
        "title": "Get own shared Attributes",
        "excerpt":"This use case is intended to retrieve Attributes that the current Identity shared to a peer as LocalAttributes. The LocalAttributes can be specified using a complex query. Parameters peer is the Address of the Identity that the LocalAttributes are shared with. query allows to specify the conditions for the returned...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-get-own-shared-attributes",
        "teaser": null
      },{
        "title": "Get peer shared Attributes",
        "excerpt":"This use case is intended to retrieve Attributes that a peer has shared with the current Identity as LocalAttributes. The LocalAttributes can be specified using a complex query. Parameters peer is the Address of the Identity that shared the LocalAttributes. query allows to specify the conditions for the returned LocalAttributes....","categories": [],
        "tags": [],
        "url": "/use-case-consumption-get-peer-shared-attributes",
        "teaser": null
      },{
        "title": "Get RepositoryAttributes",
        "excerpt":"This use case is intended to return all RepositoryAttributes. RepositoryAttributes are own LocalAttributes with an IdentityAttribute as content that are classified by an undefined shareInfo. In case of Attribute succession, by default only the latest version will be returned. The LocalAttributes can be specified using a complex query. Parameters query...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-get-repositoryattributes",
        "teaser": null
      },{
        "title": "Get shared versions of an Attribute",
        "excerpt":"This use case allows you to retrieve a list of shared LocalAttributes for a given source Attribute. In case of IdentityAttributes a list comprising of own shared IdentityAttributes for the specified RepositoryAttribute is returned. In case of RelationshipAttributes the list contains ThirdPartyRelationshipAttributes you re-shared based on the specified RelationshipAttribute. Parameters...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-get-shared-versions-of-an-attribute",
        "teaser": null
      },{
        "title": "Get versions of an Attribute",
        "excerpt":"Succeeding an Attribute allows you to update its content, while keeping all versions for a coherent history. This use case allows you to retrieve a list of all those versions of the succession chain for a specified LocalAttribute. Parameters The attributeId belonging to a LocalAttribute you would like to know...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-get-versions-of-an-attribute",
        "teaser": null
      },{
        "title": "Notify peer about RepositoryAttribute succession",
        "excerpt":"If you succeeded a RepositoryAttribute, whose previous version you shared with a peer, you can decide to inform the peer about the succession. If you do so, the peer will receive a Notification via Message, which handles the succession of their peer shared IdentityAttribute. Also, the associated own shared IdentityAttribute...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-notify-peer-about-repositoryattribute-succession",
        "teaser": null
      },{
        "title": "Query AttributeListeners",
        "excerpt":"This use case is intended to query all Attribute Listeners based on a query. Parameter The query optionally describes the searched Attribute Listeners. If no query is given all Attribute Listeners are returned. On Success Returns a list of LocalAttributeListeners that match the query. On Failure The parameters are malformed....","categories": [],
        "tags": [],
        "url": "/use-case-consumption-query-attributelisteners",
        "teaser": null
      },{
        "title": "Query incoming Requests",
        "excerpt":"This use case is intended to query incoming LocalRequests. Parameters The id of the LocalRequest. The peer is the Address of the Identity that sent the LocalRequest. createdAt indicates the date of LocalRequest creation. The status of the LocalRequest. The content describes the Request wrapped by the LocalRequest. The source...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-query-incoming-requests",
        "teaser": null
      },{
        "title": "Query outgoing Requests",
        "excerpt":"This use case is intended to query outgoing LocalRequests. Parameters The id of the LocalRequest. The peer is the Address of the Identity that the LocalRequest was sent to. createdAt indicates the date of LocalRequest creation. The status of the LocalRequest. The content describes the Request wrapped by the LocalRequest....","categories": [],
        "tags": [],
        "url": "/use-case-consumption-query-outgoing-requests",
        "teaser": null
      },{
        "title": "Reject incoming Request",
        "excerpt":"This use case attempts to reject an incoming LocalRequest. It is advised to check if the incoming Request can be rejected in advance. Parameters The id of the incoming LocalRequest. The decision for each individual RequestItem expressed as the appropriate Parameters defined in the Data Model. On Success All RequestItems...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-reject-incoming-request",
        "teaser": null
      },{
        "title": "Share a RepositoryAttribute",
        "excerpt":"If you wish to share one of your private IdentityAttributes, called RepositoryAttributes, with a peer, this use case allows you to do so. Internally, a Request with a ShareAttributeRequestItem will be created and will be sent via Message to the peer. Assuming your peer accepts the Request, at their side...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-share-a-repositoryattribute",
        "teaser": null
      },{
        "title": "Succeed a RelationshipAttribute and notify peer",
        "excerpt":"This use case allows the owner to update a RelationshipAttribute, while automatically handling the coherent versioning at both your and your peer&#8217;s side. Succeeding an own RelationshipAttribute, a new LocalAttribute with the updated content will be created at your side. In its succeeds property it links to the predecessing version,...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-succeed-a-relationshipattribute-and-notify-peer",
        "teaser": null
      },{
        "title": "Succeed a RepositoryAttribute",
        "excerpt":"If the value of a RepositoryAttribute changes, this can be replicated in enmeshed with this use case. It allows you to update the content and keeps a coherent history of all versions by establishing a doubly linked list, using the LocalAttribute&#8217;s parameters succeeds and succeededBy. Hence, every LocalAttribute may have...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-succeed-a-repositoryattribute",
        "teaser": null
      },{
        "title": "Validate an IQLQuery",
        "excerpt":"This use case validates an IQLQuery&#8217;s query string by checking for syntactic errors. Parameters The query field of the IQLQuery as described in IQLQuery. On Success Returns { \"isValid\": true } if the query string is syntactically valid IQL. Otherwise { \"isValid\": false, \"error\": { \"message\": \"...\" }} is returned...","categories": [],
        "tags": [],
        "url": "/use-case-consumption-validate-an-iqlquery",
        "teaser": null
      },{
        "title": "Create Profile with new Identity",
        "excerpt":"   This use case triggers the creation of a new Identity by the App or Connector.  ","categories": [],
        "tags": [],
        "url": "/use-case-device-create-profile-with-new-identity",
        "teaser": null
      },{
        "title": "DELETE REST Endpoint",
        "excerpt":"Be advised that this is a Connector-specific use case which is triggered by an http-request. Although it is a very generic use case which one would normally not describe, we introduced it because we require it in our overarching scenarios. This use case broadly describes the REST endpoints using the...","categories": [],
        "tags": [],
        "url": "/use-case-device-delete_-rest-endpoint",
        "teaser": null
      },{
        "title": "Get Profile by enmeshed Address",
        "excerpt":"   This use case retrieves the LocalAccount with the corresponding enmeshed Address.   Parameters      The address of the corresponding Identity of the LocalAccount.   On Success      Returns the LocalAccount of the Identity.   On Failure      There is no such LocalAccount.  ","categories": [],
        "tags": [],
        "url": "/use-case-device-get-profile-by-enmeshed-address",
        "teaser": null
      },{
        "title": "Get Profile",
        "excerpt":"   This use case retrieves one LocalAccount by its id.   Parameters      The id of the LocalAccount.   On Success      The LocalAccount corresponding to the id.   On Failure      There is no such account.  ","categories": [],
        "tags": [],
        "url": "/use-case-device-get-profile",
        "teaser": null
      },{
        "title": "Get Profiles",
        "excerpt":"   This use case retrieves all LocalAccounts available on this Device.   Parameters     On Success      A list of LocalAccounts.  ","categories": [],
        "tags": [],
        "url": "/use-case-device-get-profiles",
        "teaser": null
      },{
        "title": "Get support Information",
        "excerpt":"This use case retrieves support information of the Connector, which can be used to receive support by the community / developers. It contains the Connector&#8217;s version information, its health, its configuration parameters and its Identity information (address and public key). Although, secrets out of the configuration are blanked out, you...","categories": [],
        "tags": [],
        "url": "/use-case-device-get-support-information",
        "teaser": null
      },{
        "title": "Get the Connector health status",
        "excerpt":"   This use case retrieves the service health information of the Connector.  ","categories": [],
        "tags": [],
        "url": "/use-case-device-get-the-connector-health-status",
        "teaser": null
      },{
        "title": "Get the Connector version information",
        "excerpt":"   This use case retrieves the version information of the Connector, including the build number, underlying git commit, the Connector&#8217;s semantic version and its release date.  ","categories": [],
        "tags": [],
        "url": "/use-case-device-get-the-connector-version-information",
        "teaser": null
      },{
        "title": "Get the number of requests and the status codes that were returned by the Connector",
        "excerpt":"   This use case retrieves the overall count of http-requests as requestCount sent by the Connector to the Backbone. The returned requestCountByStatus is a more detailed view on how many requests succeeded or failed.  ","categories": [],
        "tags": [],
        "url": "/use-case-device-get-the-number-of-requests-and-the-status-codes-that-were-returned-by-the-connector",
        "teaser": null
      },{
        "title": "GET REST Endpoint",
        "excerpt":"Be advised that this is a Connector-specific use case which is triggered by an http-request. Although it is a very generic use case which one would normally not describe, we introduced it because we require it in our overarching scenarios. This use case broadly describes REST endpoints using the GET...","categories": [],
        "tags": [],
        "url": "/use-case-device-get_-rest-endpoint",
        "teaser": null
      },{
        "title": "POST REST Endpoint",
        "excerpt":"Be advised that this is a Connector-specific use case which is triggered by an http-request. Although it is a very generic use case which one would normally not describe, we introduced it because we require it in our overarching scenarios. This use case broadly describes REST endpoints using the POST...","categories": [],
        "tags": [],
        "url": "/use-case-device-post_-rest-endpoint",
        "teaser": null
      },{
        "title": "PUT REST Endpoint",
        "excerpt":"Be advised that this is a Connector-specific use case which is triggered by an http-request. Although it is a very generic use case which one would normally not describe, we introduced it because we require it in our overarching scenarios. This use case broadly describes REST endpoints using the PUT...","categories": [],
        "tags": [],
        "url": "/use-case-device-put_-rest-endpoint",
        "teaser": null
      },{
        "title": "Rename Profile",
        "excerpt":"This use case intends to rename a LocalAccount (Profile) of the App that matches the given id. Parameters The localAccountId is the id of the LocalAccount in question. The newAccountName the LocalAccount name should use. On Success The LocalAccount with the localAccountId is now named newAccountName. On Failure There is...","categories": [],
        "tags": [],
        "url": "/use-case-device-rename-profile",
        "teaser": null
      },{
        "title": "Cancel Action",
        "excerpt":"Be advised that this is an App-specific use case which is triggered by a manual user interaction. Although it is a very generic use case which one would normally not describe, we introduced it because we require it in our overarching scenarios. The cancel action use case generally describes the...","categories": [],
        "tags": [],
        "url": "/use-case-human-cancel_-action",
        "teaser": null
      },{
        "title": "Device External UseCase",
        "excerpt":"Be advised that this is an App-specific use case which is triggered by a manual user interaction. Although it is a very generic use case which one would normally not describe, we introduced it because we require it in our overarching scenarios. This use case describes any required manual user...","categories": [],
        "tags": [],
        "url": "/use-case-human-device_-external-usecase",
        "teaser": null
      },{
        "title": "Enter Data (on screen)",
        "excerpt":"Be advised that this is an App-specific use case which is triggered by a manual user interaction. Although it is a very generic use case which one would normally not describe, we introduced it because we require it in our overarching scenarios. This use case describes entering data on the...","categories": [],
        "tags": [],
        "url": "/use-case-human-enter_-data-on-screen",
        "teaser": null
      },{
        "title": "Navigate to (screen) Screen",
        "excerpt":"Be advised that this is an App-specific use case which is triggered by a manual user interaction. Although it is a very generic use case which one would normally not describe, we introduced it because we require it in our overarching scenarios. This use case describes the manual navigation of...","categories": [],
        "tags": [],
        "url": "/use-case-human-navigate-to-screen_-screen",
        "teaser": null
      },{
        "title": "Negative Action",
        "excerpt":"Be advised that this is an App-specific use case which is triggered by a manual user interaction. Although it is a very generic use case which one would normally not describe, we introduced it because we require it in our overarching scenarios. This App use case broadly describes a dissent...","categories": [],
        "tags": [],
        "url": "/use-case-human-negative_-action",
        "teaser": null
      },{
        "title": "Positive Action",
        "excerpt":"Be advised that this is an App-specific use case which is triggered by a manual user interaction. Although it is a very generic use case which one would normally not describe, we introduced it because we require it in our overarching scenarios. This use case broadly describes the manual action...","categories": [],
        "tags": [],
        "url": "/use-case-human-positive_-action",
        "teaser": null
      },{
        "title": "Scan QR code (on different device)",
        "excerpt":"Be advised that this is an App-specific use case which is triggered by a manual user interaction. Although it is a very generic use case which one would normally not describe, we introduced it because we require it in our overarching scenarios. This use case describes the process of using...","categories": [],
        "tags": [],
        "url": "/use-case-human-scan_-qr-code-on-different-device",
        "teaser": null
      },{
        "title": "Select Item (on screen)",
        "excerpt":"Be advised that this is an App-specific use case which is triggered by a manual user interaction. Although it is a very generic use case which one would normally not describe, we introduced it because we require it in our overarching scenarios. This use case broadly describes the manual action...","categories": [],
        "tags": [],
        "url": "/use-case-human-select_-item-on-screen",
        "teaser": null
      },{
        "title": "Accept Relationship reactivation",
        "excerpt":"Accepts the reactivation of the terminated Relationship with the given Relationship&#8217;s id. Parameters relationshipId, the id of the Relationship On Success Accepts the reactivation of the Relationship requested by the peer Returns the reactivated Relationship On Failure The relationshipId does not resolve to a terminated Relationship The peer has not...","categories": [],
        "tags": [],
        "url": "/use-case-transport-accept-relationship-reactivation",
        "teaser": null
      },{
        "title": "Accept Relationship",
        "excerpt":"Initiating a Relationship leads to the creation of a Relationship with \"Pending\" as status. With this use case, the other involved Identity can accept the pending Relationship with the given Relationship&#8217;s id. As a result, the status of the Relationship changes from \"Pending\" to \"Active\". Parameters relationshipId, the id of...","categories": [],
        "tags": [],
        "url": "/use-case-transport-accept-relationship",
        "teaser": null
      },{
        "title": "Approve IdentityDeletionProcess",
        "excerpt":"This use case allows you to approve an IdentityDeletionProcess that was started via the Backbone Admin UI for your Identity. The respective IdentityDeletionProcess has the status \"WaitingForApproval\" and can either be approved or rejected. On Success Changes the status of the IdentityDeletionProcess from \"WaitingForApproval\" to \"Approved\" Returns the approved IdentityDeletionProcess...","categories": [],
        "tags": [],
        "url": "/use-case-transport-approve-identitydeletionprocess",
        "teaser": null
      },{
        "title": "Cancel IdentityDeletionProcess",
        "excerpt":"   This use case allows you to cancel an approved IdentityDeletionProcess for your own Identity.   On Success      Changes the status of the IdentityDeletionProcess from \"Approved\" to \"Cancelled\"   Returns the cancelled IdentityDeletionProcess   On Failure      No IdentityDeletionProcess can be cancelled if none was in status \"Approved\" for this Identity.  ","categories": [],
        "tags": [],
        "url": "/use-case-transport-cancel-identitydeletionprocess",
        "teaser": null
      },{
        "title": "Check if Relationship can be created",
        "excerpt":"This use case checks whether a Relationship can be created based on a received RelationshipTemplate to the RelationshipTemplate&#8217;s creator without actually creating it. It makes sense to promptly execute this use case in order to prevent the data required to initiate a Relationship from being provided when this is currently...","categories": [],
        "tags": [],
        "url": "/use-case-transport-check-if-relationship-can-be-created",
        "teaser": null
      },{
        "title": "Create own RelationshipTemplate",
        "excerpt":"Creates a RelationshipTemplate with the given parameters and submits it to the Backbone for other Identities to use. A RelationshipTemplate can be used by any party to either initiate a Relationship with the current Identity or retrieve a Request from an existing Relationship by a side-channel. Parameters expiresAt is the...","categories": [],
        "tags": [],
        "url": "/use-case-transport-create-own-relationshiptemplate",
        "teaser": null
      },{
        "title": "Create own Token",
        "excerpt":"Creates a Token that represents arbitrary encrypted data saved on the Backbone. Parameters content an arbitrary JSON structure of the data to share via the Token. expiresAt is the ISODateTime the Token expires at. ephemeral indicates if the Token should be ephemeral and thus not be stored and cached on...","categories": [],
        "tags": [],
        "url": "/use-case-transport-create-own-token",
        "teaser": null
      },{
        "title": "Create QR code for File",
        "excerpt":"Creates a QR code for a File that corresponds to the given fileId. Parameters fileId is the id of the File the QR code should be created for. On Success Returns the created QR code encoded as Base64. On Failure fileId does not resolve to a File. expiresAt lies in...","categories": [],
        "tags": [],
        "url": "/use-case-transport-create-qr-code-for-file",
        "teaser": null
      },{
        "title": "Create Relationship with RelationshipTemplate",
        "excerpt":"This use case intends to create a Relationship based on a RelationshipTemplate, which was previously received. The Relationship will be established with the RelationshipTemplate&#8217;s creator. This use case must always be applied if the content of the RelationshipTemplate is an ArbitraryRelationshipTemplateContent. However, if it is a RelationshipTemplateContent, it usually does...","categories": [],
        "tags": [],
        "url": "/use-case-transport-create-relationship-with-relationshiptemplate",
        "teaser": null
      },{
        "title": "Create Token for File",
        "excerpt":"Creates a Token for a given File that corresponds to the given fileId. Parameters fileId is the id of the File the Token should be created for. Optionally, expiresAt can be specified, which describes the ISODateTime the Token expires at. Optionally, ephemeral can be specified, which indicates if the Token...","categories": [],
        "tags": [],
        "url": "/use-case-transport-create-token-for-file",
        "teaser": null
      },{
        "title": "Create Token for own RelationshipTemplate",
        "excerpt":"Creates a Token for a given RelationshipTemplate. Parameters templateId is the id of the RelationshipTemplate the Token should be created for. expiresAt is the ISODateTime the Token expires at. ephemeral indicates if the Token should be ephemeral and thus not be stored and cached on the local database. This is...","categories": [],
        "tags": [],
        "url": "/use-case-transport-create-token-for-own-relationshiptemplate",
        "teaser": null
      },{
        "title": "Create Token QR code for File",
        "excerpt":"Creates a QR code for a Token of a File that corresponds to the given fileId. Parameters fileId is the id of the File the Token and its QR code should be created for. Optionally, expiresAt can be specified, which describes the ISODateTime the Token expires at. Optionally, forIdentity can...","categories": [],
        "tags": [],
        "url": "/use-case-transport-create-token-qr-code-for-file",
        "teaser": null
      },{
        "title": "Create Token QR code for own RelationshipTemplate",
        "excerpt":"Creates a QR code for a Token of a given RelationshipTemplate. Parameters templateId is the id of the RelationshipTemplate the Token and its QR code should be created for. expiresAt is the ISODateTime the Token expires at. forIdentity can be set to an enmeshed address. If set, only the Identity...","categories": [],
        "tags": [],
        "url": "/use-case-transport-create-token-qr-code-for-own-relationshiptemplate",
        "teaser": null
      },{
        "title": "Decompose Relationship",
        "excerpt":"   Decomposes the terminated Relationship with the given Relationship&#8217;s id.   Parameters      relationshipId, the id of the Relationship   On Success      Deletes the Relationship and data transmitted during it from the Connector   On Failure      The relationshipId does not resolve to a Relationship with \"Terminated\" or \"DeletionProposed\" as status  ","categories": [],
        "tags": [],
        "url": "/use-case-transport-decompose-relationship",
        "teaser": null
      },{
        "title": "Download File of Attachment",
        "excerpt":"   This use case downloads a file that was sent by a Message as an attachment.   Internally uses the Download File Use-Case  ","categories": [],
        "tags": [],
        "url": "/use-case-transport-download-file-of-attachment",
        "teaser": null
      },{
        "title": "Download File",
        "excerpt":"Download the File&#8217;s binary content that corresponds to the fileId. As the File is not stored/cached within the Connector, the encrypted File is downloaded from the Backbone, decrypted and returned every time this use case is called. Parameters id of the File. On Success Downloads the binary content of the...","categories": [],
        "tags": [],
        "url": "/use-case-transport-download-file",
        "teaser": null
      },{
        "title": "Get active IdentityDeletionProcess",
        "excerpt":"This use case will return the active IdentityDeletionProcess for your own Identity if one exists. An IdentityDeletionProcess is active if it is in status \"WaitingForApproval\" or \"Approved\". At all times, there can only be at most one active IdentityDeletionProcess per Identity. On Success Returns the active IdentityDeletionProcess On Failure No...","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-active-identitydeletionprocess",
        "teaser": null
      },{
        "title": "Get Attributes for Relationship",
        "excerpt":"   Retrieve all LocalAttributes that are related to the given Relationship id.   Parameters      id of the Relationship.   hideTechnical indicates if RelationshipAttributes marked as isTechnical should be filtered out.   On Success      All LocalAttributes that are related to the Relationship.   On Failure      The id did not resolve to a Relationship.  ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-attributes-for-relationship",
        "teaser": null
      },{
        "title": "Get currently used Device",
        "excerpt":"   This use case retrieves information about the currently used Device.  ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-currently-used-device",
        "teaser": null
      },{
        "title": "Get currently used Identity",
        "excerpt":"   This use case retrieves information about the currently used Identity.  ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-currently-used-identity",
        "teaser": null
      },{
        "title": "Get Device Onboarding Info",
        "excerpt":"   This use case retrieves the onboarding information a so far not-onboarded Device that corresponds to the given Device id in order to onboard the Device to the Identity.   Parameters      id of the Device.   On Success      Returns the onboarding information of the Device.   On Failure      The Device was already onboarded.  ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-device-onboarding-info",
        "teaser": null
      },{
        "title": "Get Device Onboarding Token",
        "excerpt":"This use case retrieves the Token of a so far not-onboarded Device that corresponds to the given Device id in order to onboard the Device to the Identity. Parameters id of the Device. expiresAt is the ISODateTime the Token expires at. On Success Returns the Token of the Device to...","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-device-onboarding-token",
        "teaser": null
      },{
        "title": "Get Device",
        "excerpt":"   This use case retrieves the Device with the given id.   Parameters      id of the Device.   On Success      The Device that corresponds to the id.   On Failure      No Device corresponds to the id.  ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-device",
        "teaser": null
      },{
        "title": "Get File Metadata of Attachment",
        "excerpt":"   This use case retrieves the metadata of a File that was sent by a Message as an attachment.   Internally uses the get or load file use case.  ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-file-metadata-of-attachment",
        "teaser": null
      },{
        "title": "Get IdentityDeletionProcess",
        "excerpt":"   This use case allows you to query an IdentityDeletionProcess for your own Identity by its id.   Parameters      id of the IdentityDeletionProcess   On Success      Returns the IdentityDeletionProcess corresponding to the provided id   On Failure      No IdentityDeletionProcess can be returned if none exists with the given id for this Identity.  ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-identitydeletionprocess",
        "teaser": null
      },{
        "title": "Get IdentityDeletionProcesses",
        "excerpt":"   This use case will return all IdentityDeletionProcesses for your own Identity.   On Success      Returns a list with all IdentityDeletionProcesses of your Identity  ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-identitydeletionprocesses",
        "teaser": null
      },{
        "title": "Get Message by MessageId",
        "excerpt":"   This use case retrieves a Message by its id.   Parameters      id of the Message.   On Success      Returns the Message that corresponds to the id.   On Failure      id does not resolve to a Message.  ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-message-by-messageid",
        "teaser": null
      },{
        "title": "Get or load File",
        "excerpt":"This use case retrieves a File by an id or the reference. This is usually the case, when a reference to a File was received by a peer (over a Message or by any side channel). Paramers id or reference that identify the File. On Success The File that corresponds...","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-or-load-file",
        "teaser": null
      },{
        "title": "Get own File",
        "excerpt":"   This use case retrieves an own File.   Parameters      id of the File which should be retrieved.   On Success      The metadata of the File that match the id.   On Failure      No File corresponds to the id.  ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-own-file",
        "teaser": null
      },{
        "title": "Get Relationship by Address",
        "excerpt":"   This use case retrieves a Relationship by the Address of a peer.   Parameters      address of the peer.   On Success      The Relationship that was inititated with the address.   On Failure      There is no Relationship linked to the given address.  ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-relationship-by-address",
        "teaser": null
      },{
        "title": "Get Relationship by RelationshipId",
        "excerpt":"   This use case retrieves a Relationship by its id.   Parameters      id of the Relationship.   On Success      The Relationship that corresponds to the id.   On Failure      The id does not resolve to a Relationship.  ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-relationship-by-relationshipid",
        "teaser": null
      },{
        "title": "Get RelationshipTemplate",
        "excerpt":"   This use case retrieves a RelationshipTemplate by its id.   Parameters      idof the RelationshipTemplate.   On Success      The RelationshipTemplate that corresponds to the id.   On Failure      The id doesn&#8217;t resolve to a RelationshipTemplate.  ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-relationshiptemplate",
        "teaser": null
      },{
        "title": "Get synchronization status with Backbone",
        "excerpt":"This use case returns metadata about the synchronization status of the current Identity or Device with the Backbone. So far, it returns the timestamp of the last successful synchronization run which is triggered by the Synchronize updates of Backbone use case. On Success Returns the metadata of the last sync...","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-synchronization-status-with-backbone",
        "teaser": null
      },{
        "title": "Get Token by TokenID",
        "excerpt":"   This use case retieves a Token by its id.   Parameters      id of the Token.   On Success      The Token that corresponds to the id.   On Failure      The id doesn&#8217;t resolve to a Token.  ","categories": [],
        "tags": [],
        "url": "/use-case-transport-get-token-by-tokenid",
        "teaser": null
      },{
        "title": "Initiate IdentityDeletionProcess",
        "excerpt":"   This use case is intended to initiate an IdentityDeletionProcess for your Identity.   On Success      Creates an IdentityDeletionProcess with status \"Approved\"   Returns the initiated IdentityDeletionProcess   On Failure      No IdentityDeletionProcess can be initiated if there is already an active IdentityDeletionProcess, i.e. an IdentityDeletionProcess in status \"Approved\" or \"WaitingForApproval\", for this Identity.  ","categories": [],
        "tags": [],
        "url": "/use-case-transport-initiate-identitydeletionprocess",
        "teaser": null
      },{
        "title": "Load item from truncated reference",
        "excerpt":"This use case intends to load an entity by its reference received by peer. It is internally using the specific use cases of each entity: If the reference references a Token, fetches the Token just like Load Token created by others. If the reference references a RelationshipTemplate, fetches the RelationshipTemplate...","categories": [],
        "tags": [],
        "url": "/use-case-transport-load-item-from-truncated-reference",
        "teaser": null
      },{
        "title": "Load RelationshipTemplate created by others",
        "excerpt":"This use case loads a peer&#8217;s RelationshipTemplate from the Backbone by a given reference to the RelationshipTemplate. Parameters There are two different options to use this use case, depending on the actual information received by the peer: by knowing a truncatedReference of the peer&#8217;s RelationshipTemplate (RelationshipTemplateReferenceTruncated) reference as string by...","categories": [],
        "tags": [],
        "url": "/use-case-transport-load-relationshiptemplate-created-by-others",
        "teaser": null
      },{
        "title": "Load Token created by others",
        "excerpt":"This use case intends to load a peer&#8217;s Token from the Backbone by a given reference to the Token. Parameters You can execute this use case if you know the truncatedReference of the peer&#8217;s Token reference that identifies the Token. ephemeral to indicate that the Token should be stored locally....","categories": [],
        "tags": [],
        "url": "/use-case-transport-load-token-created-by-others",
        "teaser": null
      },{
        "title": "Query Devices",
        "excerpt":"   This use case queries all Devices of the Identity.   On Success      Returns all Devices.  ","categories": [],
        "tags": [],
        "url": "/use-case-transport-query-devices",
        "teaser": null
      },{
        "title": "Query Files",
        "excerpt":"This use case queries Files of the Identity. Parameters All parameters are optional. If no parameter is given, all Files are returned. createdAt is the ISODateTime the File was created at. createdBy is the enmeshed Address of the Identity that created the File. createdByDevice is the id of the Device...","categories": [],
        "tags": [],
        "url": "/use-case-transport-query-files",
        "teaser": null
      },{
        "title": "Query Messages",
        "excerpt":"This use case queries Messages of the Identity. Parameters All parameters are optional. If no parameter is given, all Messages are returned. createdBy is the enmeshed Address of the Identity that created the Messsage. createdByDevice is the id of the Device that created the File. createdAt is the ISODateTime the...","categories": [],
        "tags": [],
        "url": "/use-case-transport-query-messages",
        "teaser": null
      },{
        "title": "Query Relationships",
        "excerpt":"This use case queries Relationships of the Identity. Parameters peer is the enmeshed Address of the peer. status is the status of the Relationship. template.id is the id of the RelationshipTemplate that was used to initiate the Relationship. On Success Returns all Relationships that match the query. On Failure The...","categories": [],
        "tags": [],
        "url": "/use-case-transport-query-relationships",
        "teaser": null
      },{
        "title": "Query RelationshipTemplates",
        "excerpt":"This use case queries RelationshipTemplates of the Identity. Parameters All parameters are optional. If no parameter is given, all RelationshipTemplates are returned. isOwn indicates if the RelationshipTemplate was created by the current Identity. createdAt is the ISODateTime the RelationshipTemplate was created at. expiresAt is the ISODateTime the RelationshipTemplate expires. createdBy...","categories": [],
        "tags": [],
        "url": "/use-case-transport-query-relationshiptemplates",
        "teaser": null
      },{
        "title": "Query Tokens by parameters",
        "excerpt":"This use case queries Tokens of the Identity. Parameters createdAt is the ISODateTime the Token was created at. createdBy is the enmeshed Address of the Identity that created the Token. createdByDevice is the id of the Device that created the Token. expiresAt is the ISODateTime the Token expires. On Success...","categories": [],
        "tags": [],
        "url": "/use-case-transport-query-tokens-by-parameters",
        "teaser": null
      },{
        "title": "Reject IdentityDeletionProcess",
        "excerpt":"This use case allows you to reject an IdentityDeletionProcess that was started via the Backbone Admin UI for your own Identity. The respective IdentityDeletionProcess has the status \"WaitingForApproval\" and can either be approved or rejected. On Success Changes the status of the IdentityDeletionProcess from \"WaitingForApproval\" to \"Rejected\" Returns the rejected...","categories": [],
        "tags": [],
        "url": "/use-case-transport-reject-identitydeletionprocess",
        "teaser": null
      },{
        "title": "Reject Relationship reactivation",
        "excerpt":"Rejects the reactivation of the terminated Relationship with the given Relationship&#8217;s id. Parameters relationshipId, the id of the Relationship On Success Rejects the reactivation of the Relationship requested by the peer Returns the Relationship for which the reactivation was rejected On Failure The relationshipId does not resolve to a terminated...","categories": [],
        "tags": [],
        "url": "/use-case-transport-reject-relationship-reactivation",
        "teaser": null
      },{
        "title": "Reject Relationship",
        "excerpt":"Initiating a Relationship leads to the creation of a Relationship with \"Pending\" as status. With this use case, the other involved Identity can reject the pending Relationship with the given Relationship&#8217;s id. As a result, the status of the Relationship changes from \"Pending\" to \"Rejected\". Parameters relationshipId, the id of...","categories": [],
        "tags": [],
        "url": "/use-case-transport-reject-relationship",
        "teaser": null
      },{
        "title": "Request Relationship reactivation",
        "excerpt":"Requests the reactivation of the terminated Relationship with the given Relationship&#8217;s id. Parameters relationshipId, the id of the Relationship On Success Requests the reactivation of the Relationship from the peer Returns the Relationship for which the reactivation was requested On Failure The relationshipId does not resolve to a terminated Relationship...","categories": [],
        "tags": [],
        "url": "/use-case-transport-request-relationship-reactivation",
        "teaser": null
      },{
        "title": "Revoke Relationship reactivation",
        "excerpt":"Revokes the reactivation of the terminated Relationship with the given Relationship&#8217;s id. Parameters relationshipId, the id of the Relationship On Success Revokes the reactivation of the Relationship you have requested Returns the Relationship for which the reactivation was revoked On Failure The relationshipId does not resolve to a terminated Relationship...","categories": [],
        "tags": [],
        "url": "/use-case-transport-revoke-relationship-reactivation",
        "teaser": null
      },{
        "title": "Revoke Relationship",
        "excerpt":"Initiating a Relationship leads to the creation of a Relationship with \"Pending\" as status. With this use case, the initiator of the Relationship can revoke the pending Relationship with the given Relationship&#8217;s id. As a result, the status of the Relationship changes from \"Pending\" to \"Revoked\". Parameters relationshipId, the id...","categories": [],
        "tags": [],
        "url": "/use-case-transport-revoke-relationship",
        "teaser": null
      },{
        "title": "Send Message to Recipient(s)",
        "excerpt":"This use case sends a Message to the given recipient(s). Parameters recipients is a list of the enmeshed Addresses which should receive the Message. content the structured content of the Message. Usually a Mail when communicating with a user. attachments is a list of File ids which should be attached...","categories": [],
        "tags": [],
        "url": "/use-case-transport-send-message-to-recipients",
        "teaser": null
      },{
        "title": "Synchronize updates of Backbone",
        "excerpt":"Be advised that calling this use case to sync the Identity/Device on a regular basis is discouraged. Please configure the Server-Sent Events Module or Sync Module to automate the synchronization. This use case retrieves all relevant data changes between the current Identity (and Device) and the Backbone since the last...","categories": [],
        "tags": [],
        "url": "/use-case-transport-synchronize-updates-of-backbone",
        "teaser": null
      },{
        "title": "Terminate Relationship",
        "excerpt":"   Terminates the active Relationship with the given Relationship&#8217;s id.   Parameters      relationshipId, the id of the Relationship   On Success      Terminates the active Relationship   Returns the terminated Relationship   On Failure      The relationshipId does not resolve to an active Relationship  ","categories": [],
        "tags": [],
        "url": "/use-case-transport-terminate-relationship",
        "teaser": null
      },{
        "title": "Update Device",
        "excerpt":"This use case updates the name or description of a Device using its id. Parameters The id of the Device. The new name of the Device The new description of the Device On Success The corresponding Device is updated to the given name and description. On Failure There is no...","categories": [],
        "tags": [],
        "url": "/use-case-transport-update-device",
        "teaser": null
      },{
        "title": "Upload own File",
        "excerpt":"This use case uses a given file outside of enmeshed, encrypts and uploads it to the Backbone and creates a File with the respective metadata information for the Identity to access it. The File can from now on be shared by references to other Identities. Parameters content is the to-be-uploaded...","categories": [],
        "tags": [],
        "url": "/use-case-transport-upload-own-file",
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
