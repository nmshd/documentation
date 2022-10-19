var store = [{
        "title": "Introduction",
        "excerpt":"What is Enmeshed? Enmeshed is an open source project combining various assets into an overarching digitalization approach for users and organizations. Its overall goal is to introduce a secure but easy-to-use way to share and request data and digital signatures between contacts. A focus is the digitalization of the end...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore",
        "teaser": null
      },{
        "title": "Example Scenarios",
        "excerpt":"Enmeshed supports many possible business scenarios within various lines of businesses or industries. But not only enterprises, companies or organizations benefit of these approaches. Also leisure activities with clubs or communities can make use of Enmeshed. Though the digital life of persons is used as a prominent example throughout this...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore/example-scenarios",
        "teaser": null
      },{
        "title": "Features",
        "excerpt":"Features included with Enmeshed: Self-sovereign identity Datawallet capabilitites, i.e. repository of structured data like attributes and files Datalog, i.e. know what data was shared when and to whom Cross-identity transparent encryption and digital signatures Cross-identity bi-directional data communication Cross-identity structured data synchronization (manual or automated) Cross-device transparent encryption Cross-device bi-directional...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore/features",
        "teaser": null
      },{
        "title": "Use Cases",
        "excerpt":"The list below is a non-complete list of use cases within Enmeshed: Runtime Anonymous Load peer token anonymous by id and key Load peer token anonymous by truncated reference Get version information Login to identity Transport Account Disable auto sync Enable auto sync Get device info Get identity info Get...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore/use-cases",
        "teaser": null
      },{
        "title": "Frequently Asked Questions",
        "excerpt":"Can you read my data? Short answer: No, we can’t. Long answer: Depends who “you” is and what you mean by “data”. We’ve designed Enmeshed to use as less data as possible, while using as much data as required by business processes. That being said, all data which is send...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore/faq",
        "teaser": null
      },{
        "title": "Integration Considerations",
        "excerpt":"Enmeshed does not only enable users taking part of the digitalization process. Organizations also benefit of Enmeshed as well, as they usually need to invest heavily to stay up to date in today’s technological race. Enmeshed is a flexible communication platform, with a rich default feature set and possibilities to...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore/integration",
        "teaser": null
      },{
        "title": "Security Considerations",
        "excerpt":"Security is one of the main pillars of digitalization approaches. It might be the most important one. News are full of hacking, spamming, skimming, phishing, or you-name-it attempts. Even lives are at stake if hospitals are out-of-order because of malware. Users are usually unaware of the security impacts of old...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore/security",
        "teaser": null
      },{
        "title": "Privacy Considerations",
        "excerpt":"Privacy is one of the main pillars of digitalization approaches. It might be the most important one. There are many laws, regulations, user and organizational notions to take into consideration. We came up with an approach which is highly scalable and maintainable, without having personal or sensitive data in access....","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore/privacy",
        "teaser": null
      },{
        "title": "Backbone Layer",
        "excerpt":"From a user perspective, the deepest layer is the backbone layer. It handles the “untrusted” communication with the Backbone and the processing of data within the Backbone. Payload sent to and received from the Backbone is encrypted. The Backbone itself requires metadata to work, thus there is also unencrypted data...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore/layers/backbone",
        "teaser": null
      },{
        "title": "Transport Layer",
        "excerpt":"The transport layer is located between the backbone layer and the consumption layer. Thus it acts as the interface between the trusted environment (own device/network) and the untrusted environment (Backbone). It is usually hosted as a REST API by the Connector or programmatically accessed by the App. The Runtime is...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore/layers/transport",
        "teaser": null
      },{
        "title": "Consumption Layer",
        "excerpt":"The consumption layer contains processes, logic and data structures either for personal or organizational identities. It sits on top of the transport layer and exposes its functionality to either the user experience or the integration layer. Components App Connector Tasks Attribute Handling The consumption layer handles the central attribute store...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore/layers/consumption",
        "teaser": null
      },{
        "title": "Integration Layer",
        "excerpt":"The integration layer is only available within the Connector and sits on top of the transport and consumption layers. It is responsible for providing integration capabilities to other systems. It acts for a single identity only, which is usually an organization. Components Connector Tasks Webserver with Authentication The integration layer...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore/layers/integration",
        "teaser": null
      },{
        "title": "User-Experience Layer",
        "excerpt":"The user experience layer is only available within the App and sits on top of the transport and consumption layers. It exposes the functionality of underlying layers for the user, meaning it is rendering out user interfaces and handling interactions. It acts for a single identity only, which is usually...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore/layers/user-experience",
        "teaser": null
      },{
        "title": "Enmeshed App",
        "excerpt":"App Building Blocks Platform-dependant App Binaries For each of the various platforms, each version of the app is packaged into a platform-dependant binary. This binary is then executable / installable for the users. The binaries of the Enmeshed App are created, maintained and published by j&amp;s-soft GmbH and are available...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore/app",
        "teaser": null
      },{
        "title": "Enmeshed Backbone",
        "excerpt":"Backbone Building Blocks The Enmeshed Backbone embraces all central services required by the Enmeshed platform to work. It consists of the underlying infrastructure, its hosted services, and the libraries used within the services. There could be many Enmeshed Backbones hosted along the same number of Enmeshed Apps. But careful, so...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore/backbone",
        "teaser": null
      },{
        "title": "Enmeshed Connector",
        "excerpt":"You can find many Connector-specific information in the integrate part of these docs. Connector Building Blocks Connector Docker Image The Connector is usually deployed with a Docker image. The Docker images can be fetched from the GitHub container registry using your Docker client. Note: You have to be logged in...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore/connector",
        "teaser": null
      },{
        "title": "Enmeshed Runtime",
        "excerpt":"Enmeshed Runtime GitHub Repository The Runtime wraps all features of Enmeshed into a single programming interface. It is combining the various libraries to a powerful software stack, primarily based on TypeScript, which can be used on nearly every device on the world - and even in the browser. Versions, local...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore/runtime",
        "teaser": null
      },{
        "title": "Enmeshed Data Model",
        "excerpt":"The Enmeshed data model can be devided into three parts: Transport types Local types Content types The following diagram gives you an overview of all the existing types and how they are connected to each other. The subsequent chapters describe these types in more detail. (note that you can click...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore/data-model",
        "teaser": null
      },{
        "title": "Cryptography",
        "excerpt":"Backbone Layer Encryption The communication with the Backbone is encrypted on the http transport layer. This is done by using the transport-layer-security (TLS) standard which is common throughout the Internet. This prevents third parties to access any data communication to and from the Backbone. Data at rest is encrypted on...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore/cryptography",
        "teaser": null
      },{
        "title": "Why we do not use a blockchain",
        "excerpt":"The new world of identities Self-Sovereignty and Self-Sovereign Identities Having full control over data, authorizations, or the hard- and software one can use for using the data is called self-sovereignty. A self-sovereign Identity is a digital identity which anybody can set up, without the power of somebody else to deny...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore/blockchain",
        "teaser": null
      },{
        "title": "Request Items",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore/request-items",
        "teaser": null
      },{
        "title": "Attribute Values",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/explore/attribute-values",
        "teaser": null
      },{
        "title": "Basics",
        "excerpt":"You want to seamlessly use Enmeshed with your processes, solutions and software components? No worries, you are good to go! We’ve built the Enmeshed Connector exactly for this scenario: to integrate existing systems with the Enmeshed approach with as less effort as possible. What is the Connector? It is a...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/integrate/basics",
        "teaser": null
      },{
        "title": "Connector Tutorial",
        "excerpt":"In this tutorial we go through the basic steps necessary to establish a Relationship to another Identity and send Messages between two Identities with an existing Relationship. This will create a better understanding of these processes, which will help you automating them for your organization. The following steps include small...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/integrate/connector-tutorial",
        "teaser": null
      },{
        "title": "Connector Modules",
        "excerpt":"Since the Connector is based on the Runtime, all Modules of the Runtime are also available in the Connector. Additionally, the Connector defines its own Modules that only make sense in the context of a Connector and are therefore not defined in the Runtime. Read more about the Module configuration...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/integrate/connector-modules",
        "teaser": null
      },{
        "title": "Connector Installation",
        "excerpt":"Prerequisites MongoDB The Connector requires a MongoDB database as its data storage. MongoDB is a document-oriented database. For compatibility and security reasons, the most up-to-date version of MongoDB should be used. For more information, please see https://www.mongodb.com. Docker Runtime The Connector requires a Docker Runtime: Docker is a virtualization technology...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/integrate/connector-installation",
        "teaser": null
      },{
        "title": "Connector Configuration",
        "excerpt":"Mounting a config file Create a config file in JSON format in a folder of your choice. Fill the config file with your desired configuration (it’s sufficient to add values you want to change; the Connector will merge your config file with the default configuration) Example: { \"infrastructure\": { \"httpServer\":...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/integrate/connector-configuration",
        "teaser": null
      },{
        "title": "Troubleshooting",
        "excerpt":"Common Errors Config file mounting (EISDIR | invalid mode: RO) Symptoms One of the following errors are logged during the startup of the connector: Error parsing your configuration file: [/config.json]: EISDIR: illegal operation on a directory, read ERROR: for connector Cannot create container for service connector: invalid mode: RO How...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/integrate/connector-setup-troubleshooting",
        "teaser": null
      },{
        "title": "ErrorCodes",
        "excerpt":"Please find a list of Enmeshed error codes below. Most often the errors occur on invalid input or actions. If you happen to find unexpected errors while using Enmeshed or cannot deduce the reason for your error, please report it in the Enmeshed Issue Tracker. ErrorCode Description error.connector.http.methodNotAllowed This method...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/integrate/error-codes",
        "teaser": null
      },{
        "title": "Connector API",
        "excerpt":"The primary integration capability of the Connector is the REST API. In order to use it, you should have received an API-Key for the respective Connector. An API-Key so far has all authorizations for accessing the API. Interactive Documentation You can find the REST API documentation hosted on your Connector...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/integrate/connector-api",
        "teaser": null
      },{
        "title": "Sending Messages",
        "excerpt":"Send Messages (with Attachments) In order to send messages to recipients, a REST request can be sent with the given recipients and message content. Different message content structures are possible and defined in the chapter Data Structures. Additionally, an array of file ids can be added for property attachments in...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/integrate/connector-flows-messages",
        "teaser": null
      },{
        "title": "Requesting Data",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/integrate/connector-flows-requests",
        "teaser": null
      },{
        "title": "Integrating Authentication",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/integrate/connector-flows-authentication",
        "teaser": null
      },{
        "title": "Connector Software Development Kits",
        "excerpt":"TypeScript SDK There is an SDK written in TypeScript you can use to communicate with your Connector from your TypeScript/JavaScript application. It is avaliable on npmjs. Installation npm i @nmshd/connector-sdk Usage Initialize the ConnectorClient const connectorClient = ConnectorClient.create({ baseUrl: \"https://&lt;INSERT_YOUR_CONNECTOR_DOMAIN_HERE&gt;\", apiKey: \"&lt;INSERT_YOUR_API_KEY_HERE&gt;\" }); Start using the client const FILE_PATH =...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/integrate/connector-sdks",
        "teaser": null
      },{
        "title": "Custom Connector Modules",
        "excerpt":"   At the moment custom Connector Modules are not supported.   ","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/integrate/custom-connector-modules",
        "teaser": null
      },{
        "title": "Connector Events",
        "excerpt":"Event Data Description (This event is triggered when …) consumption.attributeCreated LocalAttribute … an Attribute was created manually or through a Request. consumption.attributeDeleted LocalAttribute … an Attribute was deleted manually or through a Request. consumption.attributeSucceded LocalAttribute … an Attribute was succeeded manually or through a Request. consumption.attributeUpdated LocalAttribute … an Attribute...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/integrate/connector-events",
        "teaser": null
      },{
        "title": "Connector Operations",
        "excerpt":"Basic Tasks Stopping the Connector Starting the Connector after a Downtime Be advised that before starting the Connector after a downtime, you should ensure that the data within the database is on the most up-to-date time. Once the Connector starts its internal synchronization mechanism, it will update the database with...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/integrate/connector-operations",
        "teaser": null
      },{
        "title": "Connector Troubleshooting",
        "excerpt":"Debugging   Access Error Log   Access Database   Common Errors   No Internet   No Database  ","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/integrate/connector-troubleshooting",
        "teaser": null
      },{
        "title": "Connector Security Considerations",
        "excerpt":"The most important thing you have to keep in mind that the Connector is usually running on your landscape and in your authority. This is why you are also responsible for the security of the Connector and its data. And as the Connector is handling very sensitive data (please see...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/integrate/connector-security",
        "teaser": null
      },{
        "title": "Connector Privacy Considerations",
        "excerpt":"Please be aware that personal or sensitive plaintext data is processed and stored in the Connector and the corresponding MongoDB database. The same applies to secret and private keys which should be treated as strictly confidential. Thus the access to the Connector and its database should be kept to a...","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/integrate/connector-privacy",
        "teaser": null
      },{
        "title": "Connector Performance Considerations",
        "excerpt":"Scaling Horizontally   Using multiple connectors with the same identity to scale horizontally and balance the workload across all available connectors is not supported at the moment.  ","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/integrate/connector-performance",
        "teaser": null
      },{
        "title": "Connector Data Considerations",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/versions/2.0.0/integrate/connector-data",
        "teaser": null
      },{
        "title": "Introducing Enmeshed",
        "excerpt":"Hello everyone! We are delighted to introduce a new open source project named Enmeshed. It is the home of software libraries, components, ideas, discussions, and many more in the area of digitalization. We think the world is ready for a whole new adventure of digital communication, easy and secure data...","categories": ["blog"],
        "tags": ["page","update"],
        "url": "/versions/2.0.0/blog/introducing-enmeshed",
        "teaser": null
      },{
        "title": "The new webhooks Connector Module",
        "excerpt":"Introduction Hello everyone! Today we want to announce a new version of the webhooks Connector Module. The old version of the Module had many limitations that we could only address with a complete rewrite. To be backwards compatible the old version of the Module is still available under the name...","categories": ["blog"],
        "tags": ["connector","update"],
        "url": "/versions/2.0.0/blog/webhooks-v2-connector-module",
        "teaser": null
      },{
        "title": "Announcing Enmeshed V2",
        "excerpt":"We are currently working on Enmeshed version 2. We got a lot of feedback from the community and so we are improving Enmeshed in different areas to tackle it. Attributes Attributes in Enmeshed have been a huge pain point during the integration using the Enmeshed Connector but also while using...","categories": ["blog"],
        "tags": ["announcement","V2"],
        "url": "/versions/2.0.0/blog/announcing-enmeshed-v2",
        "teaser": null
      },{
        "title": "Announcing Enmeshed V2 Attributes",
        "excerpt":"This is one of the blog posts regarding Enmeshed V2. For an overview of all V2 blog posts, please refer to the V2 announcement blog post. In this blog post we want to talk about pain points of the V1 Attributes and how we reworked the Attributes to tackle them....","categories": ["blog"],
        "tags": ["announcement","V2","Attributes"],
        "url": "/versions/2.0.0/blog/announcing-enmeshed-v2-attributes",
        "teaser": null
      },{
        "title": "Announcing Enmeshed v2 Requests",
        "excerpt":"This is one of the blog posts regarding Enmeshed v2. For an overview of all Enmeshed v2 blog posts, please refer to the Enmeshed v2 announcement blog post. This blog post requires a superficial understanding of the new Attribute handling. Please refer to the corresponding blog post to learn more...","categories": ["blog"],
        "tags": ["announcement","v2","Requests"],
        "url": "/versions/2.0.0/blog/announcing-enmeshed-v2-requests",
        "teaser": null
      },{
        "title": "The (bumpy) road to Enmeshed V2",
        "excerpt":"Hey there, as we’ve already communicated in the previous blogs, we would like to release Enmeshed version 2 soon. As it is incompatible with version 1, the switch to version 2 is unfortunately not as straightforward as we’d hoped. We’ve had many discussions about the pros and cons of different...","categories": ["blog"],
        "tags": ["announcement","v2"],
        "url": "/versions/2.0.0/blog/road-to-enmeshed-v2",
        "teaser": null
      }]
