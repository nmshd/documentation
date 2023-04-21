var store = [{
        "title": "Introduction",
        "excerpt":"What is Enmeshed? Enmeshed is an open source project combining various assets into an overarching digitalization approach for users and organizations. Its overall goal is to introduce a secure but easy-to-use way to share and request data and digital signatures between contacts. A focus is the digitalization of the end...","categories": [],
        "tags": [],
        "url": "/explore",
        "teaser": null
      },{
        "title": "Use Cases",
        "excerpt":"Title Layer ⌄ Actor ⌄ Category ⌄ Component ⌄ Status ⌄ Get app version information User Interface User App, App DONE Start app without parameters User Interface User App, App DONE Start app with parameters by using link User Interface User App, App DONE Show (screen) Screen User Interface User...","categories": [],
        "tags": [],
        "url": "/explore/use-cases",
        "teaser": null
      },{
        "title": "Example Scenarios",
        "excerpt":"Enmeshed supports many possible business scenarios within various lines of businesses or industries. But not only enterprises, companies or organizations benefit of these approaches. Also leisure activities with clubs or communities can make use of Enmeshed. Though the digital life of persons is used as a prominent example throughout this...","categories": [],
        "tags": [],
        "url": "/explore/example-scenarios",
        "teaser": null
      },{
        "title": "Features",
        "excerpt":"Features included with Enmeshed: Self-sovereign identity Datawallet capabilitites, i.e. repository of structured data like attributes and files Datalog, i.e. know what data was shared when and to whom Cross-identity transparent encryption and digital signatures Cross-identity bi-directional data communication Cross-identity structured data synchronization (manual or automated) Cross-device transparent encryption Cross-device bi-directional...","categories": [],
        "tags": [],
        "url": "/explore/features",
        "teaser": null
      },{
        "title": "Frequently Asked Questions",
        "excerpt":"Can you read my data? Short answer: No, we can’t. Long answer: Depends who “you” is and what you mean by “data”. We’ve designed Enmeshed to use as less data as possible, while using as much data as required by business processes. That being said, all data which is send...","categories": [],
        "tags": [],
        "url": "/explore/faq",
        "teaser": null
      },{
        "title": "Integration Considerations",
        "excerpt":"Enmeshed does not only enable users taking part of the digitalization process. Organizations also benefit of Enmeshed as well, as they usually need to invest heavily to stay up to date in today’s technological race. Enmeshed is a flexible communication platform, with a rich default feature set and possibilities to...","categories": [],
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
        "excerpt":"App Building Blocks Platform-dependant App Binaries For each of the various platforms, each version of the app is packaged into a platform-dependant binary. This binary is then executable / installable for the users. The binaries of the Enmeshed App are created, maintained and published by j&amp;s-soft GmbH and are available...","categories": [],
        "tags": [],
        "url": "/explore/app",
        "teaser": null
      },{
        "title": "Enmeshed Backbone",
        "excerpt":"Backbone Building Blocks The Enmeshed Backbone embraces all central services required by the Enmeshed platform to work. It consists of the underlying infrastructure, its hosted services, and the libraries used within the services. There could be many Enmeshed Backbones hosted along the same number of Enmeshed Apps. But careful, so...","categories": [],
        "tags": [],
        "url": "/explore/backbone",
        "teaser": null
      },{
        "title": "Enmeshed Connector",
        "excerpt":"You can find many Connector-specific information in the integrate part of these docs. Connector Building Blocks Connector Docker Image The Connector is usually deployed with a Docker image. The Docker images can be fetched from the GitHub container registry using your Docker client. Note: You have to be logged in...","categories": [],
        "tags": [],
        "url": "/explore/connector",
        "teaser": null
      },{
        "title": "Enmeshed Addresses",
        "excerpt":"The Address is the primary identifier for an Enmeshed Identity. It is public and created out of the Identity’s Signature Public Key. Thus, the Identity’s root signature key and its corresponding Address are interlinked with each other and cannot be changed. Nobody is able to change the public key for...","categories": [],
        "tags": [],
        "url": "/explore/addresses",
        "teaser": null
      },{
        "title": "Enmeshed Runtime",
        "excerpt":"Enmeshed Runtime GitHub Repository The Runtime wraps all features of Enmeshed into a single programming interface. It is combining the various libraries to a powerful software stack, primarily based on TypeScript, which can be used on nearly every device on the world - and even in the browser. Versions, local...","categories": [],
        "tags": [],
        "url": "/explore/runtime",
        "teaser": null
      },{
        "title": "Cryptography",
        "excerpt":"Backbone Layer Encryption The communication with the Backbone is encrypted on the http transport layer. This is done by using the transport-layer-security (TLS) standard which is common throughout the Internet. This prevents third parties to access any data communication to and from the Backbone. Data at rest is encrypted on...","categories": [],
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
        "title": "Get app version information",
        "excerpt":"                       id             A01                  layer             User Interface                                                                                          tech category             App                  status             DONE                                    actor             User                  component             App                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-a01",
        "teaser": null
      },{
        "title": "Start app without parameters",
        "excerpt":"                       id             A02                  layer             User Interface                                                                                          tech category             App                  status             DONE                                    actor             User                  component             App                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-a02",
        "teaser": null
      },{
        "title": "Start app with parameters by using link",
        "excerpt":"                       id             A03                  layer             User Interface                                                                                          tech category             App                  status             DONE                                    actor             User                  component             App                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-a03",
        "teaser": null
      },{
        "title": "Show (screen) Screen",
        "excerpt":"                       id             A04                  layer             User Interface                                                      description             The app navigates to the desired screen by itself.                                    tech category             App                  status             DONE                                    actor             User                  component             App                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-a04",
        "teaser": null
      },{
        "title": "Refresh (screen) Screen",
        "excerpt":"                       id             A10                  layer             User Interface                                                      description             The app refreshes the current screen.                                    tech category             App                  status             DONE                                    actor             User                  component             App                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-a10",
        "teaser": null
      },{
        "title": "Navigate to (screen) Screen",
        "excerpt":"id A11 layer Human facade Screen description The user navigates manually to the desired screen. If the screen has preconditions, these preconditions are considered to be fulfilled (e.g. a Profile has been selected and authenticated first). tech category User Action status DONE actor User component App priority n/a complexity n/a...","categories": [],
        "tags": [],
        "url": "/explore/use-case-a11",
        "teaser": null
      },{
        "title": "Select Item (on screen)",
        "excerpt":"id A12 layer Human facade Screen description The user selects an item or action from the current screen. There should be a show/navigation use case before using this use case (to define the screen). tech category User Action status DONE actor User component App priority n/a complexity n/a size n/a...","categories": [],
        "tags": [],
        "url": "/explore/use-case-a12",
        "teaser": null
      },{
        "title": "Enter Data (on screen)",
        "excerpt":"                       id             A13                  layer             Human                  facade             Screen                                    description             The user enters data into the current screen. There should be a show/navigation use case before using this use case (to define the screen).                                    tech category             User Action                  status             DONE                                    actor             User                  component             App                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-a13",
        "teaser": null
      },{
        "title": "Scan QR-Code (on different device)",
        "excerpt":"                       id             A14                  layer             Human                  facade             Screen                                    description             The user scans a QR-Code from a different device by the app.                                    tech category             User Action                  status             DONE                                    actor             User                  component             App                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-a14",
        "teaser": null
      },{
        "title": "Device External UseCase",
        "excerpt":"                       id             A15                  layer             Human                  facade             Screen                                    description             The user processes an external use case on the device, e.g. share something by another app or select a file to upload.                                    tech category             User Action                  status             DONE                                    actor             User                  component             App                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-a15",
        "teaser": null
      },{
        "title": "Positive Action",
        "excerpt":"id A16 layer Human facade Screen description The user triggers a positive action on the current screen, i.e. a submit or approval . There should be a show/navigation use case before using this use case (to define the screen). tech category User Action status DONE actor User component App priority...","categories": [],
        "tags": [],
        "url": "/explore/use-case-a16",
        "teaser": null
      },{
        "title": "Negative Action",
        "excerpt":"id A17 layer Human facade Screen description The user triggers a negative action on the current screen, i.e. a reject. There should be a show/navigation use case before using this use case (to define the screen). tech category User Action status DONE actor User component App priority n/a complexity n/a...","categories": [],
        "tags": [],
        "url": "/explore/use-case-a17",
        "teaser": null
      },{
        "title": "Cancel Action",
        "excerpt":"id A18 layer Human facade Screen description The user triggers a cancel action on the current screen, e.g. to postpone a decision. There should be a show/navigation use case before using this use case (to define the screen). tech category User Action status DONE actor User component App priority n/a...","categories": [],
        "tags": [],
        "url": "/explore/use-case-a18",
        "teaser": null
      },{
        "title": "Get AppRuntime health status",
        "excerpt":"                       id             AR1                  layer             Device                  facade             AppRuntime                  function             getHealth                                                      tech category             AppRuntime                  status             CHANGES REQUIRED                  comments             Only returning true - could be offline/online indication?                  actor             App                  component             AppRuntime                                                                        priority             LOW                                                                                                            published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ar1",
        "teaser": null
      },{
        "title": "Get AppRuntime version information",
        "excerpt":"                       id             AR2                  layer             Device                  facade             AppRuntime                                                                        tech category             AppRuntime                  status             DONE                                    actor             App                  component             AppRuntime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ar2",
        "teaser": null
      },{
        "title": "Create Profile with new Identity",
        "excerpt":"id ARP1 layer Device facade AccountServices function createAccount description A Profile needs to be created in order to use the App. Without a Profile, a very limited set of features is available. In order to create a Profile, the App's privacy policy and possibly end-user license agreements needs to be...","categories": [],
        "tags": [],
        "url": "/explore/use-case-arp1",
        "teaser": null
      },{
        "title": "Get Profiles",
        "excerpt":"                       id             ARP2                  layer             Device                  facade             AccountServices                  function             getAccounts                  description             The User needs to get all Profiles on the Device and their metadata.                  feature category             Multi-profile                  tech category             Profiles                  status             DONE                  comments             No Queries?                  actor             App                  component             AppRuntime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-arp2",
        "teaser": null
      },{
        "title": "Get Profile",
        "excerpt":"                       id             ARP3                  layer             Device                  facade             AccountServices                  function             getProfile                                    feature category             Multi-profile                  tech category             Profiles                  status             DONE                                    actor             App                  component             AppRuntime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-arp3",
        "teaser": null
      },{
        "title": "Get Profile by Enmeshed Address",
        "excerpt":"                       id             ARP4                  layer             Device                  facade             AccountServices                  function             getProfileByAddress                                    feature category             Multi-profile                  tech category             Profiles                  status             DONE                                    actor             App                  component             AppRuntime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-arp4",
        "teaser": null
      },{
        "title": "Clear all profiles",
        "excerpt":"                       id             ARP5                  layer             Device                  facade             AccountServices                  function             clearAccounts                                    feature category             Multi-profile                  tech category             Profiles                  status             CHANGES REQUIRED                                    actor             User                  component             AppRuntime                                                                        priority             LOW                                                                                                            published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-arp5",
        "teaser": null
      },{
        "title": "Onboard Device by Device Onboarding Token",
        "excerpt":"                       id             ARP6                  layer             Device                  facade             AccountServices                  function             onboardAccount                                    feature category             Multi-device                  tech category             Profiles                  status             QUESTIONS                  comments             Naming                  actor             User                  component             AppRuntime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-arp6",
        "teaser": null
      },{
        "title": "Restore Identity by revovery data",
        "excerpt":"                       id             ARP7                  layer             Device                                                                        feature category             Identity Hardening                  tech category             Profiles                  status             OPEN                                    actor             User                  component             AppRuntime                                    precondition             A backup has been created for this Profile                  result             The Profile has been restored by the backup                  priority             LOW                  complexity             LOW                  size             M                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-arp7",
        "teaser": null
      },{
        "title": "Select Profile / Profile Login / Create Profile Session",
        "excerpt":"id ARS1 layer Device facade AppRuntime function selectAccount feature category Multi-profile tech category Profiles status CHANGES REQUIRED comments Why is this not within AccountServices? Password needs to be taken into consideration actor User component AppRuntime precondition A pin / password has been set up for this Profile result The Device...","categories": [],
        "tags": [],
        "url": "/explore/use-case-ars1",
        "teaser": null
      },{
        "title": "Notify Backbone of unauthorized Profile access",
        "excerpt":"id ARS2 layer Transport description Possible other Devices of the Identity should be notified, if the pin or password has been wrongly entered multiple times. This notification could happen by the use of the Backbone, in addition to a possible central tracking of failed login attempts on Devices. feature category...","categories": [],
        "tags": [],
        "url": "/explore/use-case-ars2",
        "teaser": null
      },{
        "title": "Set-up or change password of Profile",
        "excerpt":"id ARS3 layer Device description A password for a Profile can be set up or changed by the User. Additionally, a password hint can be entered to help the User remembering the password. feature category Identity Hardening tech category Profile status IDEA actor User component AppRuntime precondition Profile has been...","categories": [],
        "tags": [],
        "url": "/explore/use-case-ars3",
        "teaser": null
      },{
        "title": "Remove Profile from Device",
        "excerpt":"id ARS4 layer Transport description An Identity can be removed from the current Device (but will be kept for other Devices, e.g. to offboard one Device). Additionally, a Profile can be removed from another onboarded Device (e.g. for wiping another Device). If no other Device has been set up for...","categories": [],
        "tags": [],
        "url": "/explore/use-case-ars4",
        "teaser": null
      },{
        "title": "Delete Identity from Backbone",
        "excerpt":"id ARS5 layer Transport description An Identity can be deleted from the Backbone completely. tech category Profile status OPEN actor User component AppRuntime precondition Profile has been selected (and has been logged into) result The Identity has been removed from the Identity priority HIGH complexity HIGH size L published default...","categories": [],
        "tags": [],
        "url": "/explore/use-case-ars5",
        "teaser": null
      },{
        "title": "Create Identity recovery data",
        "excerpt":"id ARS6 layer Transport description The User can (and should) create a local and offline backup of the selected Profile. The backup contains enough information to restore the complete Identity on a future Device and thus needs to be exported to the current Device in order to be shared, printed...","categories": [],
        "tags": [],
        "url": "/explore/use-case-ars6",
        "teaser": null
      },{
        "title": "Set-up or change auto logout of Profile",
        "excerpt":"                       id             ARS7                  layer             Device                                                      description             If a password for a Profile has been set up, an auto logout can be enabled.                  feature category             Identity Hardening                  tech category             Profile                  status             IDEA                                    actor             User                  component             AppRuntime                                                                        priority             LOW                  complexity             MEDIUM                  size             S                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ars7",
        "teaser": null
      },{
        "title": "Get the Connector version information",
        "excerpt":"                       id             C01                  layer             Device                  facade             Connector                                                                        tech category             Monitoring                  status             DONE                                    actor             Integrator                  component             Connector                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-c01",
        "teaser": null
      },{
        "title": "Get the number of requests and the status codes that were returned by the Connector.",
        "excerpt":"                       id             C02                  layer             Device                  facade             Connector                                                                        tech category             Monitoring                  status             DONE                                    actor             Integrator                  component             Connector                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-c02",
        "teaser": null
      },{
        "title": "Configure Config Property",
        "excerpt":"                       id             C03                  layer             Device                  facade             Connector                                                                        tech category             Configuration                  status             DONE                                    actor             Integrator                  component             Connector                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-c03",
        "teaser": null
      },{
        "title": "POST REST Endpoint",
        "excerpt":"                       id             C04                  layer             Device                  facade             Connector                                                                        tech category             Integration                  status             DONE                                    actor             Integrator                  component             Connector                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-c04",
        "teaser": null
      },{
        "title": "GET REST Endpoint",
        "excerpt":"                       id             C05                  layer             Device                  facade             Connector                                                                        tech category             Integration                  status             DONE                                    actor             Integrator                  component             Connector                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-c05",
        "teaser": null
      },{
        "title": "PUT REST Endpoint",
        "excerpt":"                       id             C06                  layer             Device                  facade             Connector                                                                        tech category             Integration                  status             DONE                                    actor             Integrator                  component             Connector                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-c06",
        "teaser": null
      },{
        "title": "DELETE REST Endpoint",
        "excerpt":"                       id             C07                  layer             Device                  facade             Connector                                                                        tech category             Integration                  status             DONE                                    actor             Integrator                  component             Connector                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-c07",
        "teaser": null
      },{
        "title": "Create Profile with new Identity",
        "excerpt":"                       id             CR1                  layer             Device                  facade             ConnectorRuntime                  function             create                  description             An account needs to be created in order to use the Connector.                                    tech category             Bootstrap                  status             DONE                                    actor             Device                  component             ConnectorRuntime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-cr1",
        "teaser": null
      },{
        "title": "Get the Connector health status",
        "excerpt":"                       id             CR2                  layer             Device                  facade             ConnectorRuntime                  function             getHealth                                                      tech category             Bootstrap                  status             DONE                                    actor             Integrator                  component             ConnectorRuntime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-cr2",
        "teaser": null
      },{
        "title": "Get support Information",
        "excerpt":"                       id             CR3                  layer             Device                  facade             ConnectorRuntime                  function             getSupportInformation                                                      tech category             Monitoring                  status             DONE                                    actor             Integrator                  component             ConnectorRuntime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-cr3",
        "teaser": null
      },{
        "title": "Set up global exception handling",
        "excerpt":"                       id             CR4                  layer             Device                  facade             ConnectorRuntime                  function             setupGlobalExceptionHandling                                                      tech category             Bootstrap                  status             QUESTIONS                                    actor             Device                  component             ConnectorRuntime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-cr4",
        "teaser": null
      },{
        "title": "Create Automation Rule",
        "excerpt":"                       id             IAR1                  layer             Consumption                  facade             AutomationRuleFacade                                                                        tech category             Automation Rules                  status             IDEA                                    actor             Identity                  component             Runtime                                                                        priority             LOW                  complexity             HIGH                  size             L                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-iar1",
        "teaser": null
      },{
        "title": "Query Automation Rules",
        "excerpt":"                       id             IAR2                  layer             Consumption                  facade             AutomationRuleFacade                                                                        tech category             Automation Rules                  status             IDEA                                    actor             Identity                  component             Runtime                                                                        priority             LOW                  complexity             LOW                  size             S                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-iar2",
        "teaser": null
      },{
        "title": "Get Automation Rule",
        "excerpt":"                       id             IAR3                  layer             Consumption                  facade             AutomationRuleFacade                                                                        tech category             Automation Rules                  status             IDEA                                    actor             Identity                  component             Runtime                                                                        priority             LOW                  complexity             LOW                  size             S                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-iar3",
        "teaser": null
      },{
        "title": "Update Automation Rule",
        "excerpt":"                       id             IAR4                  layer             Consumption                  facade             AutomationRuleFacade                                                                        tech category             Automation Rules                  status             IDEA                                    actor             Identity                  component             Runtime                                                                        priority             LOW                  complexity             LOW                  size             S                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-iar4",
        "teaser": null
      },{
        "title": "Delete Automation Rule",
        "excerpt":"                       id             IAR5                  layer             Consumption                  facade             AutomationRuleFacade                                                                        tech category             Automation Rules                  status             IDEA                                    actor             Identity                  component             Runtime                                                                        priority             LOW                  complexity             LOW                  size             S                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-iar5",
        "teaser": null
      },{
        "title": "Create an Attribute",
        "excerpt":"                       id             RA1                  layer             Consumption                  facade             AttributesFacade                  function             createAttribute                                    feature category             Normalized attributes                  tech category             Attributes                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ra1",
        "teaser": null
      },{
        "title": "Execute a ThirdPartyAttributeQuery",
        "excerpt":"                       id             RA10                  layer             Consumption                  facade             AttributesFacade                  function             executeThirdpartyAttributeQuery                                    feature category             Cross-identity attribute sharing                  tech category             Attributes                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ra10",
        "teaser": null
      },{
        "title": "Succeed Attribute",
        "excerpt":"                       id             RA11                  layer             Consumption                  facade             AttributesFacade                  function             succeedAttribute                                    feature category             Cross-identity attribute sharing                  tech category             Attributes                  status             QUESTIONS                                    actor             Identity                  component             Runtime                                                                        priority             HIGH                  complexity             MEDIUM                  size             M                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ra11",
        "teaser": null
      },{
        "title": "Update Attribute",
        "excerpt":"                       id             RA12                  layer             Consumption                  facade             AttributesFacade                  function             updateAttribute                                    feature category             Normalized attributes                  tech category             Attributes                  status             QUESTIONS                                    actor             Identity                  component             Runtime                                                                        priority             HIGH                  complexity             MEDIUM                  size             M                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ra12",
        "teaser": null
      },{
        "title": "Share Attribute",
        "excerpt":"                       id             RA13                  layer             Consumption                  facade             AttributesFacade                  function             shareAttribute                                    feature category             Cross-identity attribute sharing                  tech category             Attributes                  status             QUESTIONS                  comments             Shouldn't we create requestItems here?                  actor             Identity                  component             Runtime                                                                                                                                                                                    published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ra13",
        "teaser": null
      },{
        "title": "Delete shared Attribute",
        "excerpt":"                       id             RA14                  layer             Consumption                  facade             AttributesFacade                                                                        tech category             Attributes                  status             OPEN                                    actor             Identity                  component             Runtime                                                                        priority             HIGH                  complexity             MEDIUM                  size             M                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ra14",
        "teaser": null
      },{
        "title": "Create requestItem to delete shared Attribute",
        "excerpt":"                       id             RA15                  layer             Consumption                                                                                          tech category             Attributes                  status             IDEA                                    actor             Identity                  component             Runtime                                                                        priority             LOW                  complexity             LOW                  size             S                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ra15",
        "teaser": null
      },{
        "title": "Query Attributes",
        "excerpt":"                       id             RA2                  layer             Consumption                  facade             AttributesFacade                  function             getAttributes                                    feature category             Normalized attributes                  tech category             Attributes                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ra2",
        "teaser": null
      },{
        "title": "Get Attributes of peer",
        "excerpt":"                       id             RA3                  layer             Consumption                  facade             AttributesFacade                  function             getPeerAttributes                                    feature category             Normalized attributes                  tech category             Attributes                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ra3",
        "teaser": null
      },{
        "title": "Get Attributes shared to peer",
        "excerpt":"                       id             RA4                  layer             Consumption                  facade             AttributesFacade                  function             getSharedToPeerAttributes                                    feature category             Cross-identity attribute sharing                  tech category             Attributes                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ra4",
        "teaser": null
      },{
        "title": "Get Attribute",
        "excerpt":"                       id             RA5                  layer             Consumption                  facade             AttributesFacade                  function             getAttribute                  description             Fetches the attribute with the given 'id'.                  feature category             Normalized attributes                  tech category             Attributes                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ra5",
        "teaser": null
      },{
        "title": "Create a shared Attribute copy",
        "excerpt":"                       id             RA6                  layer             Consumption                  facade             AttributesFacade                  function             createSharedAttributeCopy                                    feature category             Cross-identity attribute sharing                  tech category             Attributes                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ra6",
        "teaser": null
      },{
        "title": "Delete Attribute",
        "excerpt":"                       id             RA7                  layer             Consumption                  facade             AttributesFacade                  function             deleteAttribute                                    feature category             Normalized attributes                  tech category             Attributes                  status             QUESTIONS                  comments             What exactly is implemented here?                  actor             Identity                  component             Runtime                                                                        priority             HIGH                  complexity             MEDIUM                  size             M                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ra7",
        "teaser": null
      },{
        "title": "Execute an IdentityAttributeQuery",
        "excerpt":"                       id             RA8                  layer             Consumption                  facade             AttributesFacade                  function             executeIdentityAttributeQuery                                    feature category             Cross-identity attribute sharing                  tech category             Attributes                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ra8",
        "teaser": null
      },{
        "title": "Execute a RelationshipAttributeQuery",
        "excerpt":"                       id             RA9                  layer             Consumption                  facade             AttributesFacade                  function             executeRelationshipAttributeQuery                                    feature category             Cross-identity attribute sharing                  tech category             Attributes                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ra9",
        "teaser": null
      },{
        "title": "Query AttributeListeners",
        "excerpt":"                       id             RAL1                  layer             Consumption                  facade             AttributeListenersFacade                  function             getAttributeListeners                                    feature category             Attribute automation                  tech category             AttributeListeners                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ral1",
        "teaser": null
      },{
        "title": "Get AttributeListener",
        "excerpt":"                       id             RAL2                  layer             Consumption                  facade             AttributeListenersFacade                  function             getAttributeListener                                    feature category             Attribute automation                  tech category             AttributeListeners                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ral2",
        "teaser": null
      },{
        "title": "Delete AttributeListener",
        "excerpt":"                       id             RAL3                  layer             Consumption                                                                        feature category             Attribute automation                  tech category             AttributeListeners                  status             OPEN                                    actor             Identity                  component             Runtime                                                                        priority             LOW                  complexity             LOW                  size             S                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ral3",
        "teaser": null
      },{
        "title": "Create a Blueprint of a Relationship Template",
        "excerpt":"                       id             RB1                  layer             Consumption                                                      description             Create a parametrizable Blueprint to create Relationship Templates with. This is used for creating specific business cards for Users.                                    tech category             Blueprint                  status             IDEA                                    actor             Identity                  component             Runtime                                                                        priority             LOW                  complexity             HIGH                  size             HIGH                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rb1",
        "teaser": null
      },{
        "title": "Query Blueprints",
        "excerpt":"                       id             RB2                  layer             Consumption                                                                                          tech category             Blueprint                  status             IDEA                                    actor             Identity                  component             Runtime                                                                        priority             LOW                  complexity             LOW                  size             S                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rb2",
        "teaser": null
      },{
        "title": "Get Blueprint",
        "excerpt":"                       id             RB3                  layer             Consumption                                                                                          tech category             Blueprint                  status             IDEA                                    actor             Identity                  component             Runtime                                                                        priority             LOW                  complexity             LOW                  size             S                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rb3",
        "teaser": null
      },{
        "title": "Update Blueprint",
        "excerpt":"                       id             RB4                  layer             Consumption                                                                                          tech category             Blueprint                  status             IDEA                                    actor             Identity                  component             Runtime                                                                        priority             LOW                  complexity             LOW                  size             S                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rb4",
        "teaser": null
      },{
        "title": "Delete Blueprint",
        "excerpt":"                       id             RB5                  layer             Consumption                                                                                          tech category             Blueprint                  status             IDEA                                    actor             Identity                  component             Runtime                                                                        priority             LOW                  complexity             LOW                  size             S                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rb5",
        "teaser": null
      },{
        "title": "Create Relationship Template out of Blueprint",
        "excerpt":"                       id             RB6                  layer             Consumption                                                                                          tech category             Blueprint                  status             IDEA                                    actor             Identity                  component             Runtime                                                                        priority             LOW                  complexity             MEDIUM                  size             S                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rb6",
        "teaser": null
      },{
        "title": "Create Challenge",
        "excerpt":"                       id             RC1                  layer             Transport                  facade             ChallengesFacade                  function             createChallenge                  description             Create a signed challenge.                                    tech category             Challenges                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rc1",
        "teaser": null
      },{
        "title": "Validate Challenge",
        "excerpt":"                       id             RC2                  layer             Transport                  facade             ChallengesFacade                  function             validateChallenge                  description             Validate a challenge.                                    tech category             Challenges                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rc2",
        "teaser": null
      },{
        "title": "Create Device",
        "excerpt":"                       id             RD1                  layer             Transport                  facade             DevicesFacade                  function             createDevice                                    feature category             Multi-device                  tech category             Devices                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rd1",
        "teaser": null
      },{
        "title": "Query Devices",
        "excerpt":"                       id             RD2                  layer             Transport                  facade             DevicesFacade                  function             getDevices                                    feature category             Multi-device                  tech category             Devices                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rd2",
        "teaser": null
      },{
        "title": "Get Device",
        "excerpt":"                       id             RD3                  layer             Transport                  facade             DevicesFacade                  function             getDevice                                    feature category             Multi-device                  tech category             Devices                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rd3",
        "teaser": null
      },{
        "title": "Get Device Onboarding Info",
        "excerpt":"                       id             RD4                  layer             Transport                  facade             DevicesFacade                  function             getDeviceOnboardingInfo                                    feature category             Multi-device                  tech category             Devices                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rd4",
        "teaser": null
      },{
        "title": "Get Device Onboarding Token",
        "excerpt":"                       id             RD5                  layer             Transport                  facade             DevicesFacade                  function             getdeviceOnboardingToken                                    feature category             Multi-device                  tech category             Devices                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rd5",
        "teaser": null
      },{
        "title": "Update Device",
        "excerpt":"                       id             RD6                  layer             Transport                  facade             DevicesFacade                  function             updateDevice                                    feature category             Multi-device                  tech category             Devices                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rd6",
        "teaser": null
      },{
        "title": "Delete Device which is not onboarded yet",
        "excerpt":"                       id             RD7                  layer             Transport                  facade             DevicesFacade                  function             deleteDevice                                    feature category             Multi-device                  tech category             Devices                  status             QUESTIONS                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rd7",
        "teaser": null
      },{
        "title": "Trigger Device deletion of onboarded Device",
        "excerpt":"                       id             RD8                  layer             Transport                  facade             DevicesFacade                                                      feature category             Multi-device                  tech category             Devices                  status             QUESTIONS                                    actor             Identity                  component             Runtime                                                                        priority             LOW                  complexity             MEDIUM                  size             L                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rd8",
        "teaser": null
      },{
        "title": "Create Draft",
        "excerpt":"                       id             RDR1                  layer             Consumption                  facade             DraftFacade                  function             createDraft                                    feature category             Cross-device draft handling                  tech category             Drafts                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rdr1",
        "teaser": null
      },{
        "title": "Query Drafts",
        "excerpt":"                       id             RDR2                  layer             Consumption                  facade             DraftFacade                  function             getDrafts                                    feature category             Cross-device draft handling                  tech category             Drafts                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rdr2",
        "teaser": null
      },{
        "title": "Get Draft",
        "excerpt":"                       id             RDR3                  layer             Consumption                  facade             DraftFacade                  function             getDraft                                    feature category             Cross-device draft handling                  tech category             Drafts                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rdr3",
        "teaser": null
      },{
        "title": "Update Draft",
        "excerpt":"                       id             RDR4                  layer             Consumption                  facade             DraftFacade                  function             updateDraft                                    feature category             Cross-device draft handling                  tech category             Drafts                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rdr4",
        "teaser": null
      },{
        "title": "Delete Draft",
        "excerpt":"                       id             RDR5                  layer             Consumption                  facade             DraftFacade                  function             deleteDraft                                    feature category             Cross-device draft handling                  tech category             Drafts                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rdr5",
        "teaser": null
      },{
        "title": "Upload own File",
        "excerpt":"                       id             RF1                  layer             Transport                  facade             FilesFacade                  function             uploadOwnFile                  description             Uploads a new own file with metadata.                  feature category             Arbitrary large data support                  tech category             Files                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rf1",
        "teaser": null
      },{
        "title": "Query Files",
        "excerpt":"                       id             RF2                  layer             Transport                  facade             FilesFacade                  function             getFiles                  description             Queries metadata of files owned by this Connector.                                    tech category             Files                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rf2",
        "teaser": null
      },{
        "title": "Get own File",
        "excerpt":"                       id             RF3                  layer             Transport                  facade             FilesFacade                  function             getFile                                    feature category             Arbitrary large data support                  tech category             Files                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rf3",
        "teaser": null
      },{
        "title": "Get or load File",
        "excerpt":"id RF4 layer Transport facade FilesFacade function getOrLoadFile description Loads a file of another identity. After it is loaded once, you can retrieve it without the need for the secret key by calling one of the GET-routes. feature category Arbitrary large data support tech category Files status DONE actor Identity...","categories": [],
        "tags": [],
        "url": "/explore/use-case-rf4",
        "teaser": null
      },{
        "title": "Download File",
        "excerpt":"                       id             RF5                  layer             Transport                  facade             FilesFacade                  function             downloadFile                  description             Downloads the file with the given 'id'.                  feature category             Arbitrary large data support                  tech category             Files                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rf5",
        "teaser": null
      },{
        "title": "Create Token for File",
        "excerpt":"                       id             RF6                  layer             Transport                  facade             FilesFacade                  function             createTokenForFile                  description             Creates a 'Token' for the 'File' with the given 'id'.                  feature category             Arbitrary large data support                  tech category             Files                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rf6",
        "teaser": null
      },{
        "title": "Create QRCode for File",
        "excerpt":"                       id             RF7                  layer             Transport                  facade             FilesFacade                  function             createQrCodeForFile                                    feature category             Arbitrary large data support                  tech category             Files                  status             QUESTIONS                  comments             QR vs Qr, QR vs Tr                  actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rf7",
        "teaser": null
      },{
        "title": "Create Token QRCode for File",
        "excerpt":"                       id             RF8                  layer             Transport                  facade             FilesFacade                  function             createTokenQrCodeForFile                                    feature category             Arbitrary large data support                  tech category             Files                  status             QUESTIONS                  comments             QR vs Qr, QR vs Tr                  actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rf8",
        "teaser": null
      },{
        "title": "Check Identity by Address",
        "excerpt":"                       id             RI1                  layer             Transport                  facade             IdentityFacade                  function             checkIdentity                                                      tech category             Identities                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ri1",
        "teaser": null
      },{
        "title": "Query incoming Requests",
        "excerpt":"                       id             RIR1                  layer             Consumption                  facade             IncomingRequestsFacade                  function             getRequests                  description             Queries incoming 'Requests'.                  feature category             Normalized requests/responses to and from users                  tech category             Requests                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rir1",
        "teaser": null
      },{
        "title": "Reject incoming Request",
        "excerpt":"                       id             RIR10                  layer             Consumption                  facade             IncomingRequestsFacade                  function             reject                  description             Rejects the incoming 'Request' with the given 'id'.                  feature category             Normalized requests/responses to and from users                  tech category             Requests                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rir10",
        "teaser": null
      },{
        "title": "Get incoming Request",
        "excerpt":"                       id             RIR2                  layer             Consumption                  facade             IncomingRequestsFacade                  function             getRequest                  description             Fetches the incoming 'Request' with the given 'id'.                  feature category             Normalized requests/responses to and from users                  tech category             Requests                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rir2",
        "teaser": null
      },{
        "title": "Set status of incoming Request to received",
        "excerpt":"                       id             RIR3                  layer             Consumption                  facade             IncomingRequestsFacade                  function             received                                    feature category             Request automation                  tech category             Requests                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rir3",
        "teaser": null
      },{
        "title": "Set status of incoming Request to check prerequisites",
        "excerpt":"                       id             RIR4                  layer             Consumption                  facade             IncomingRequestsFacade                  function             checkPrerequisites                                    feature category             Request automation                  tech category             Requests                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rir4",
        "teaser": null
      },{
        "title": "Set status of incoming Request to require manual decision",
        "excerpt":"                       id             RIR5                  layer             Consumption                  facade             IncomingRequestsFacade                  function             requireManualDecision                                    feature category             Request automation                  tech category             Requests                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rir5",
        "teaser": null
      },{
        "title": "Set status of incoming Request to complete",
        "excerpt":"                       id             RIR6                  layer             Consumption                  facade             IncomingRequestsFacade                  function             complete                                    feature category             Request automation                  tech category             Requests                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rir6",
        "teaser": null
      },{
        "title": "Check if incoming Request can be accepted",
        "excerpt":"                       id             RIR7                  layer             Consumption                  facade             IncomingRequestsFacade                  function             canAccept                  description             Checks if the 'Request' with the given 'id' can be accepted.                  feature category             Normalized requests/responses to and from users                  tech category             Requests                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rir7",
        "teaser": null
      },{
        "title": "Accept incoming Request",
        "excerpt":"                       id             RIR8                  layer             Consumption                  facade             IncomingRequestsFacade                  function             accept                  description             Accepts the incoming 'Request' with the given 'id'.                  feature category             Normalized requests/responses to and from users                  tech category             Requests                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rir8",
        "teaser": null
      },{
        "title": "Check if incoming Request can be rejected",
        "excerpt":"                       id             RIR9                  layer             Consumption                  facade             IncomingRequestsFacade                  function             canReject                  description             Checks if the 'Request' with the given 'id' can be rejected.                  feature category             Normalized requests/responses to and from users                  tech category             Requests                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rir9",
        "teaser": null
      },{
        "title": "Create own Token",
        "excerpt":"                       id             RK1                  layer             Transport                  facade             TokensFacade                  function             createOwnToken                                    feature category             Normalized requests/responses to and from users                  tech category             Tokens                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rk1",
        "teaser": null
      },{
        "title": "Load Token created by others",
        "excerpt":"                       id             RK2                  layer             Transport                  facade             TokensFacade                  function             loadPeerToken                                    feature category             Share structured information over side-channel                  tech category             Tokens                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rk2",
        "teaser": null
      },{
        "title": "Get Token by TokenID",
        "excerpt":"                       id             RK3                  layer             Transport                  facade             TokensFacade                  function             getToken                                    feature category             Share structured information over side-channel                  tech category             Tokens                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rk3",
        "teaser": null
      },{
        "title": "Query Tokens by parameters",
        "excerpt":"                       id             RK4                  layer             Transport                  facade             TokensFacade                  function             getTokens                                    feature category             Share structured information over side-channel                  tech category             Tokens                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rk4",
        "teaser": null
      },{
        "title": "Get QRCode for single Token",
        "excerpt":"                       id             RK5                  layer             Transport                  facade             TokensFacade                  function             getQRCodeForToken                                    feature category             Share structured information over side-channel                  tech category             Tokens                  status             QUESTIONS                  comments             QR vs Qr, QR vs Tr                  actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rk5",
        "teaser": null
      },{
        "title": "Send message to recipient(s)",
        "excerpt":"                       id             RM1                  layer             Transport                  facade             MessagesFacade                  function             sendMessage                                    feature category             Bidirectional (un-)structured communication                  tech category             Messages                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rm1",
        "teaser": null
      },{
        "title": "Query Messages",
        "excerpt":"                       id             RM2                  layer             Transport                  facade             MessagesFacade                  function             getMessages                                    feature category             Bidirectional (un-)structured communication                  tech category             Messages                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rm2",
        "teaser": null
      },{
        "title": "Get Message by MessageId",
        "excerpt":"                       id             RM3                  layer             Transport                  facade             MessagesFacade                  function             getMessage                                    feature category             Bidirectional (un-)structured communication                  tech category             Messages                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rm3",
        "teaser": null
      },{
        "title": "Get File Metadata of Attachment",
        "excerpt":"                       id             RM4                  layer             Transport                  facade             MessagesFacade                  function             getAttachmentMetadata                  description             Returns the attachment's metadata of the given 'attachmentId' of message with 'messageId'.                  feature category             Bidirectional (un-)structured communication                  tech category             Messages                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rm4",
        "teaser": null
      },{
        "title": "Download File of Attachment",
        "excerpt":"                       id             RM5                  layer             Transport                  facade             MessagesFacade                  function             downloadAttachment                  description             Downloads the file of the given 'attachmentId' of message with 'messageId'.                  feature category             Bidirectional (un-)structured communication                  tech category             Messages                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rm5",
        "teaser": null
      },{
        "title": "Check if outgoing Request can be created",
        "excerpt":"                       id             ROR1                  layer             Consumption                  facade             OutgoingRequestsFacade                  function             canCreate                  description             Validates the given 'OutgoingRequest' before creating it                  feature category             Normalized requests/responses to and from users                  tech category             Requests                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ror1",
        "teaser": null
      },{
        "title": "Create outgoing Request",
        "excerpt":"                       id             ROR2                  layer             Consumption                  facade             OutgoingRequestsFacade                  function             create                  description             Creates a new outgoing 'Request'.                  feature category             Normalized requests/responses to and from users                  tech category             Requests                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ror2",
        "teaser": null
      },{
        "title": "Query outgoing Requests",
        "excerpt":"                       id             ROR3                  layer             Consumption                  facade             OutgoingRequestsFacade                  function             getRequests                  description             Queries outgoing 'Requests'.                  feature category             Normalized requests/responses to and from users                  tech category             Requests                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ror3",
        "teaser": null
      },{
        "title": "Get outgoing Request",
        "excerpt":"                       id             ROR4                  layer             Consumption                  facade             OutgoingRequestsFacade                  function             getRequest                                    feature category             Normalized requests/responses to and from users                  tech category             Requests                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ror4",
        "teaser": null
      },{
        "title": "Create and complete outgoing Request from Relationship Template Response",
        "excerpt":"                       id             ROR5                  layer             Consumption                  facade             OutgoingRequestsFacade                  function             createAndCompleteFromRelationshipTemplateResponse                                    feature category             Normalized requests/responses to and from users                  tech category             Requests                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ror5",
        "teaser": null
      },{
        "title": "Set status of outgoing Request to sent",
        "excerpt":"                       id             ROR6                  layer             Consumption                  facade             OutgoingRequestsFacade                  function             sent                                    feature category             Request automation                  tech category             Requests                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ror6",
        "teaser": null
      },{
        "title": "Set status of outgoing Request to complete",
        "excerpt":"                       id             ROR7                  layer             Consumption                  facade             OutgoingRequestsFacade                  function             complete                                    feature category             Request automation                  tech category             Requests                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ror7",
        "teaser": null
      },{
        "title": "Discards outgoing Request",
        "excerpt":"                       id             ROR8                  layer             Consumption                  facade             OutgoingRequestsFacade                  function             discard                                    feature category             Normalized requests/responses to and from users                  tech category             Requests                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ror8",
        "teaser": null
      },{
        "title": "Create Relationship with RelationshipTemplate",
        "excerpt":"id RR1 layer Transport facade RelationshipsFacade function createRelationship description Creates a 'Relationship' to the creator of a given relationshipTemplateId. The 'RelationshipTemplate' of the given 'relationshipTemplateId' must come from another identity and must be loaded by 'POST /RelationshipTemplates/Peer' first. feature category Mutual peer-to-peer relationships tech category Relationships status DONE actor Identity...","categories": [],
        "tags": [],
        "url": "/explore/use-case-rr1",
        "teaser": null
      },{
        "title": "Pin/mark as favorite relationship",
        "excerpt":"                       id             RR10                  layer             Consumption                                                                                          tech category             Relationships                  status             IDEA                                    actor             User                  component             AppRuntime                                                                        priority             LOW                  complexity             MEDIUM                  size             M                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rr10",
        "teaser": null
      },{
        "title": "Query Relationships",
        "excerpt":"                       id             RR2                  layer             Transport                  facade             RelationshipsFacade                  function             getRelationships                                    feature category             Mutual peer-to-peer relationships                  tech category             Relationships                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rr2",
        "teaser": null
      },{
        "title": "Get Relationship by RelationshipId",
        "excerpt":"                       id             RR3                  layer             Transport                  facade             RelationshipsFacade                  function             getRelationship                                    feature category             Mutual peer-to-peer relationships                  tech category             Relationships                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rr3",
        "teaser": null
      },{
        "title": "Get Relationship by Address",
        "excerpt":"                       id             RR4                  layer             Transport                  facade             RelationshipsFacade                  function             getRelationshipByAddress                                    feature category             Mutual peer-to-peer relationships                  tech category             Relationships                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rr4",
        "teaser": null
      },{
        "title": "Get Attributes for Relationship",
        "excerpt":"                       id             RR5                  layer             Transport                  facade             RelationshipsFacade                  function             getAttributesForRelationship                  description             Queries attributes that are related to the given relationship.                  feature category             Mutual peer-to-peer relationships                  tech category             Relationships                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rr5",
        "teaser": null
      },{
        "title": "Accept Relationship Change",
        "excerpt":"id RR6 layer Transport facade RelationshipsFacade function acceptRelationshipChange description Accepts the change with the given 'changeId'. If the change exists but belongs to another relationship, this call will fail and return status 404. feature category Mutual peer-to-peer relationships tech category Relationships status DONE actor Identity component Runtime priority n/a complexity...","categories": [],
        "tags": [],
        "url": "/explore/use-case-rr6",
        "teaser": null
      },{
        "title": "Reject Relationship Change",
        "excerpt":"id RR7 layer Transport facade RelationshipsFacade function rejectRelationshipChange description Rejects the change with the given 'changeId'. If the change exists but belongs to another relationship, this call will fail and return status 404. feature category Mutual peer-to-peer relationships tech category Relationships status DONE actor Identity component Runtime priority n/a complexity...","categories": [],
        "tags": [],
        "url": "/explore/use-case-rr7",
        "teaser": null
      },{
        "title": "Revoke Relationship Change",
        "excerpt":"                       id             RR8                  layer             Transport                  facade             RelationshipsFacade                  function             revokeRelationshipChange                                    feature category             Mutual peer-to-peer relationships                  tech category             Relationships                  status             QUESTIONS                                    actor             Identity                  component             Runtime                                                                                                                                                                                    published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rr8",
        "teaser": null
      },{
        "title": "Set categorization of relationship",
        "excerpt":"                       id             RR9                  layer             Consumption                                                                                          tech category             Relationships                  status             IDEA                                    actor             User                  component             AppRuntime                                                                        priority             LOW                  complexity             MEDIUM                  size             M                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rr9",
        "teaser": null
      },{
        "title": "Create requestItem to delete Relationship",
        "excerpt":"                       id             RRI1                  layer             Consumption                  facade             RequestItemFacade                                                                        tech category             RequestItems                  status             IDEA                                    actor             Identity                  component             Runtime                                                                        priority             LOW                  complexity             LOW                  size             S                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rri1",
        "teaser": null
      },{
        "title": "Create requestItem to inform about forced Relationship deletion",
        "excerpt":"                       id             RRI2                  layer             Consumption                  facade             RequestItemFacade                                                                        tech category             RequestItems                  status             IDEA                                    actor             Identity                  component             Runtime                                                                        priority             LOW                  complexity             LOW                  size             S                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rri2",
        "teaser": null
      },{
        "title": "Create requestItem to inform about forced Attribute deletion",
        "excerpt":"                       id             RRI3                  layer             Consumption                  facade             RequestItemFacade                                                                        tech category             RequestItems                  status             IDEA                                    actor             Identity                  component             Runtime                                                                        priority             LOW                  complexity             LOW                  size             S                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rri3",
        "teaser": null
      },{
        "title": "Create Setting",
        "excerpt":"                       id             RS1                  layer             Consumption                  facade             SettingFacade                  function             createSetting                                    feature category             Cross-device configuration                  tech category             Settings                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rs1",
        "teaser": null
      },{
        "title": "Query Settings",
        "excerpt":"                       id             RS2                  layer             Consumption                  facade             SettingFacade                  function             getSettings                                    feature category             Cross-device configuration                  tech category             Settings                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rs2",
        "teaser": null
      },{
        "title": "Get Setting",
        "excerpt":"                       id             RS3                  layer             Consumption                  facade             SettingFacade                  function             getSetting                                    feature category             Cross-device configuration                  tech category             Settings                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rs3",
        "teaser": null
      },{
        "title": "Delete Setting",
        "excerpt":"                       id             RS4                  layer             Consumption                  facade             SettingFacade                  function             deleteSetting                                    feature category             Cross-device configuration                  tech category             Settings                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rs4",
        "teaser": null
      },{
        "title": "Update Setting",
        "excerpt":"                       id             RS5                  layer             Consumption                  facade             SettingFacade                  function             updateSetting                                    feature category             Cross-device configuration                  tech category             Settings                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rs5",
        "teaser": null
      },{
        "title": "Create own RelationshipTemplate",
        "excerpt":"                       id             RT1                  layer             Transport                  facade             RelationshipTemplatesFacade                  function             createOwnRelationshipTemplate                                    feature category             Consent required before any data is shared                  tech category             RelationshipTemplates                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rt1",
        "teaser": null
      },{
        "title": "Load Relationship Template created by others",
        "excerpt":"id RT2 layer Transport facade RelationshipTemplatesFacade function loadPeerRelationshipTemplate description Loads a 'RelationshipTemplate' created by others. This is a prerequisite for using the template while creating a new 'Relationship'. feature category Consent required before any data is shared tech category RelationshipTemplates status DONE actor Identity component Runtime priority n/a complexity n/a...","categories": [],
        "tags": [],
        "url": "/explore/use-case-rt2",
        "teaser": null
      },{
        "title": "Query Relationship Templates",
        "excerpt":"                       id             RT3                  layer             Transport                  facade             RelationshipTemplatesFacade                  function             getRelationshipTemplates                                    feature category             Consent required before any data is shared                  tech category             RelationshipTemplates                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rt3",
        "teaser": null
      },{
        "title": "Get Relationship Template",
        "excerpt":"                       id             RT4                  layer             Transport                  facade             RelationshipTemplatesFacade                  function             getRelationshipTemplate                                    feature category             Consent required before any data is shared                  tech category             RelationshipTemplates                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rt4",
        "teaser": null
      },{
        "title": "Create QRCode for own Relationship Template",
        "excerpt":"                       id             RT5                  layer             Transport                  facade             RelationshipTemplatesFacade                  function             createQrCodeForOwnTemplate                                    feature category             Consent required before any data is shared                  tech category             RelationshipTemplates                  status             QUESTIONS                  comments             QR vs Qr, QR vs Tr                  actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rt5",
        "teaser": null
      },{
        "title": "Create Token QRCode for own Relationship Template",
        "excerpt":"                       id             RT6                  layer             Transport                  facade             RelationshipTemplatesFacade                  function             createTokenQrCodeForOwnTemplate                                    feature category             Consent required before any data is shared                  tech category             RelationshipTemplates                  status             QUESTIONS                  comments             QR vs Qr, QR vs Tr                  actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rt6",
        "teaser": null
      },{
        "title": "Create Token for own Relationship Template",
        "excerpt":"                       id             RT7                  layer             Transport                  facade             RelationshipTemplatesFacade                  function             createTokenForOwnTemplate                  description             Creates a 'Token' for the own 'RelationshipTemplate' with the given 'id'                  feature category             Consent required before any data is shared                  tech category             RelationshipTemplates                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-rt7",
        "teaser": null
      },{
        "title": "Get currently used Identity",
        "excerpt":"                       id             RU1                  layer             Transport                  facade             AccountFacade                  function             getIdentityInfo                                    feature category             Multi-profile                  tech category             Account                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ru1",
        "teaser": null
      },{
        "title": "Get currently used Device",
        "excerpt":"                       id             RU2                  layer             Transport                  facade             AccountFacade                  function             getDeviceInfo                                    feature category             Multi-device                  tech category             Account                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ru2",
        "teaser": null
      },{
        "title": "Register PushNotificationToken at Backbone",
        "excerpt":"                       id             RU3                  layer             Transport                  facade             AccountFacade                  function             registerPushNotificationToken                                    feature category             Multi-device                  tech category             Account                  status             QUESTIONS                  comments             rather AppRuntime?                  actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ru3",
        "teaser": null
      },{
        "title": "Synchronize updates of Backbone",
        "excerpt":"id RU4 layer Transport facade AccountFacade function syncEverything description Syncs the Identity's Messages and Relationships with the Backbone. Checks for new Relationships as well as incoming changes of existing ones. Checks for new or updated Messages. Returns all affected Relationships and Messages. feature category Synchronization tech category Account status DONE...","categories": [],
        "tags": [],
        "url": "/explore/use-case-ru4",
        "teaser": null
      },{
        "title": "Synchronize Datawallet updates to Backbone",
        "excerpt":"                       id             RU5                  layer             Transport                  facade             AccountFacade                  function             syncDatawallet                                    feature category             Multi-device synchronization                  tech category             Account                  status             QUESTIONS                  comments             rather AppRuntime?                  actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ru5",
        "teaser": null
      },{
        "title": "Get synchronization status with Backbone",
        "excerpt":"                       id             RU6                  layer             Transport                  facade             AccountFacade                  function             getSyncInfo                                    feature category             Multi-device synchronization                  tech category             Account                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ru6",
        "teaser": null
      },{
        "title": "Enable automated Datawallet synchronization with Backbone",
        "excerpt":"                       id             RU7                  layer             Transport                  facade             AccountFacade                  function             enableAutoSync                                    feature category             Multi-device synchronization                  tech category             Account                  status             QUESTIONS                  comments             rather AppRuntime?                  actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ru7",
        "teaser": null
      },{
        "title": "Disable automated Datawallet synchronization with Backbone",
        "excerpt":"                       id             RU8                  layer             Transport                  facade             AccountFacade                  function             disableAutoSync                                    feature category             Multi-device synchronization                  tech category             Account                  status             QUESTIONS                  comments             rather AppRuntime?                  actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ru8",
        "teaser": null
      },{
        "title": "Load item from truncated reference",
        "excerpt":"                       id             RU9                  layer             Transport                  facade             AccountFacade                  function             loadItemFromTruncatedReference                                    feature category             Share information over side-channel                  tech category             Account                  status             QUESTIONS                  comments             rather somewhere else?                  actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ru9",
        "teaser": null
      },{
        "title": "Load Token by truncated reference (without having an account)",
        "excerpt":"                       id             RY1                  layer             Anonymous                  facade             AnonymousFacade                  function             loadPeerTokenByTruncatedReference                                    feature category             Share information over side-channel                  tech category             AnonymousTokens                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ry1",
        "teaser": null
      },{
        "title": "Load Token by id and key (without having an account)",
        "excerpt":"                       id             RY2                  layer             Anonymous                  facade             AnonymousFacade                  function             loadPeerTokenByIdAndKey                                    feature category             Share information over side-channel                  tech category             AnonymousTokens                  status             DONE                                    actor             Identity                  component             Runtime                                                                        priority             n/a                  complexity             n/a                  size             n/a                                                                        published             default                                                     ","categories": [],
        "tags": [],
        "url": "/explore/use-case-ry2",
        "teaser": null
      },{
        "title": "Basics",
        "excerpt":"You want to seamlessly use Enmeshed with your processes, solutions and software components? No worries, you are good to go! We’ve built the Enmeshed Connector exactly for this scenario: to integrate existing systems with the Enmeshed approach with as less effort as possible. What is the Connector? It is a...","categories": [],
        "tags": [],
        "url": "/integrate/basics",
        "teaser": null
      },{
        "title": "Connector Tutorial",
        "excerpt":"In this tutorial we go through the basic steps necessary to establish a Relationship to another Identity and send Messages between two Identities with an existing Relationship. This will create a better understanding of these processes, which will help you automating them for your organization. The following steps include small...","categories": [],
        "tags": [],
        "url": "/integrate/connector-tutorial",
        "teaser": null
      },{
        "title": "Connector Modules",
        "excerpt":"Since the Connector is based on the Runtime, all Modules of the Runtime are also available in the Connector. Additionally, the Connector defines its own Modules that only make sense in the context of a Connector and are therefore not defined in the Runtime. Read more about the Module configuration...","categories": [],
        "tags": [],
        "url": "/integrate/connector-modules",
        "teaser": null
      },{
        "title": "Connector Installation",
        "excerpt":"Prerequisites MongoDB The Connector requires a MongoDB database as its data storage. MongoDB is a document-oriented database. For compatibility and security reasons, the most up-to-date version of MongoDB should be used. For more information, please see https://www.mongodb.com. Container Runtime The Connector requires a Container Runtime like Docker or Kubernetes: Docker...","categories": [],
        "tags": [],
        "url": "/integrate/connector-installation",
        "teaser": null
      },{
        "title": "Connector Configuration",
        "excerpt":"Mounting a config file Create a config file in JSON format in a folder of your choice. Fill the config file with your desired configuration (it’s sufficient to add values you want to change; the Connector will merge your config file with the default configuration) Example: { \"infrastructure\": { \"httpServer\":...","categories": [],
        "tags": [],
        "url": "/integrate/connector-configuration",
        "teaser": null
      },{
        "title": "Troubleshooting",
        "excerpt":"Troubleshooting Guide For any issues with the Connector make sure you checked the logs and the /Monitoring/* routes. The /Monitoring/Support route provides a lot of information about the current state of the Connector and you can for example detect misconfigurations. Common Errors Config file mounting (EISDIR | invalid mode: RO)...","categories": [],
        "tags": [],
        "url": "/integrate/connector-setup-troubleshooting",
        "teaser": null
      },{
        "title": "ErrorCodes",
        "excerpt":"Please find a list of Enmeshed error codes below. Most often the errors occur on invalid input or actions. If you happen to find unexpected errors while using Enmeshed or cannot deduce the reason for your error, please report it in the Enmeshed Issue Tracker. ErrorCode Description error.connector.http.methodNotAllowed This method...","categories": [],
        "tags": [],
        "url": "/integrate/error-codes",
        "teaser": null
      },{
        "title": "Helm Chart",
        "excerpt":"Versions The available Helm chart versions can be found here. We provide a new Helm chart version for each new Connector release and each Helm chart will deploy the Connector in the chart’s version. (Helm chart version 3.2.1 deploys Connector version 3.2.1) You can override the Connector version by setting...","categories": [],
        "tags": [],
        "url": "/integrate/helm-chart",
        "teaser": null
      },{
        "title": "Connector API",
        "excerpt":"The primary integration capability of the Connector is the REST API. In order to use it, you should have received an API-Key for the respective Connector. An API-Key so far has all authorizations for accessing the API. Interactive Documentation You can find the REST API documentation hosted on your Connector...","categories": [],
        "tags": [],
        "url": "/integrate/connector-api",
        "teaser": null
      },{
        "title": "Sending Messages",
        "excerpt":"Send Messages (with Attachments) In order to send messages to recipients, a REST request can be sent with the given recipients and message content. Different message content structures are possible and defined in the chapter Data Structures. Additionally, an array of file ids can be added for property attachments in...","categories": [],
        "tags": [],
        "url": "/integrate/connector-flows-messages",
        "teaser": null
      },{
        "title": "Requests over Templates",
        "excerpt":"This guide will explain the end to end flow of sharing and answering a Request over a Template. This flow usually happens between the App and a Connector, but for simplicity and more transparency we will use two Connectors. Therefore you have to start two Connectors that don’t have a...","categories": [],
        "tags": [],
        "url": "/integrate/requests-over-templates",
        "teaser": null
      },{
        "title": "Requests over Messages",
        "excerpt":"This guide assumes that you already have an active Relationship between two Connectors. If you don’t, you should follow the Requests over Templates guide first. If you created a Relationship during the Connector Tutorial this will also work. In this guide, the first Connector will be called Sender and the...","categories": [],
        "tags": [],
        "url": "/integrate/requests-over-messages",
        "teaser": null
      },{
        "title": "Connector Software Development Kits",
        "excerpt":"TypeScript SDK There is an SDK written in TypeScript you can use to communicate with your Connector from your TypeScript/JavaScript application. It is avaliable on npmjs. Installation npm i @nmshd/connector-sdk Usage Initialize the ConnectorClient const connectorClient = ConnectorClient.create({ baseUrl: \"https://&lt;INSERT_YOUR_CONNECTOR_DOMAIN_HERE&gt;\", apiKey: \"&lt;INSERT_YOUR_API_KEY_HERE&gt;\" }); Start using the client const FILE_PATH =...","categories": [],
        "tags": [],
        "url": "/integrate/connector-sdks",
        "teaser": null
      },{
        "title": "Custom Connector Modules",
        "excerpt":"   At the moment custom Connector Modules are not supported.   ","categories": [],
        "tags": [],
        "url": "/integrate/custom-connector-modules",
        "teaser": null
      },{
        "title": "Connector Events",
        "excerpt":"Event Data Description (This event is triggered when …) consumption.attributeCreated LocalAttribute … an Attribute was created manually or through a Request. consumption.attributeDeleted LocalAttribute … an Attribute was deleted manually or through a Request. consumption.attributeSucceded LocalAttribute … an Attribute was succeeded manually or through a Request. consumption.attributeUpdated LocalAttribute … an Attribute...","categories": [],
        "tags": [],
        "url": "/integrate/connector-events",
        "teaser": null
      },{
        "title": "Connector Operations",
        "excerpt":"Basic Tasks Stopping the Connector Starting the Connector after a Downtime Be advised that before starting the Connector after a downtime, you should ensure that the data within the database is on the most up-to-date time. Once the Connector starts its internal synchronization mechanism, it will update the database with...","categories": [],
        "tags": [],
        "url": "/integrate/connector-operations",
        "teaser": null
      },{
        "title": "Connector Security Considerations",
        "excerpt":"The most important thing you have to keep in mind that the Connector is usually running on your landscape and in your authority. This is why you are also responsible for the security of the Connector and its data. And as the Connector is handling very sensitive data (please see...","categories": [],
        "tags": [],
        "url": "/integrate/connector-security",
        "teaser": null
      },{
        "title": "Connector Privacy Considerations",
        "excerpt":"Please be aware that personal or sensitive plaintext data is processed and stored in the Connector and the corresponding MongoDB database. The same applies to secret and private keys which should be treated as strictly confidential. Thus the access to the Connector and its database should be kept to a...","categories": [],
        "tags": [],
        "url": "/integrate/connector-privacy",
        "teaser": null
      },{
        "title": "Connector Performance Considerations",
        "excerpt":"Scaling Horizontally   Using multiple connectors with the same identity to scale horizontally and balance the workload across all available connectors is not supported at the moment.  ","categories": [],
        "tags": [],
        "url": "/integrate/connector-performance",
        "teaser": null
      },{
        "title": "Migrate to v2",
        "excerpt":"When migrating from v1 to v2, there are a few breaking changes, as well as a bunch of new features. This guide lists both of them and will help you migrate your integration coding. Backwards incompatible data structure First and foremost, as we already announced in our blog, the underlying...","categories": [],
        "tags": [],
        "url": "/integrate/connector-migration-v2",
        "teaser": null
      },{
        "title": "Enmeshed Data Model",
        "excerpt":"The Enmeshed data model can be divided into three parts: Transport types Local types Content types The following diagram gives you an overview of all the existing types and how they are connected to each other. The subsequent chapters describe these types in more detail. (note that you can click...","categories": [],
        "tags": [],
        "url": "/integrate/data-model-overview",
        "teaser": null
      },{
        "title": "Request Items",
        "excerpt":"All the RequestItems listed below inherit from the RequestItem and are therefore sharing its properties. AuthenticationRequestItem With this item the sender can request the peer for an authentication in a business context for a certain purpose. The peer can then decide to authenticate or not. This authentication is mostly short-lived...","categories": [],
        "tags": [],
        "url": "/integrate/data-model-request-items",
        "teaser": null
      },{
        "title": "Attribute Values",
        "excerpt":"Each Attribute contains an instance of an Attribute Value within its value property. There are different types of Attribute Values. The types define the value’s structural definition, rendering information and validators. For example, an email address with the value “address@company.corp” is stored with the Attribute Value type EMailAddress, which defines...","categories": [],
        "tags": [],
        "url": "/integrate/data-model-attribute-values",
        "teaser": null
      },{
        "title": "Basics",
        "excerpt":"You can get the Enmeshed App over your favorite app stores. Please find the links below:      Enmeshed App on Apple AppStore   Enmeshed App on Google PlayStore   Please drop us some feedback if you would like to see the Enmeshed App on different stores as well.  ","categories": [],
        "tags": [],
        "url": "/use/basics",
        "teaser": null
      },{
        "title": "Security Recommendations for Apps and End-Users",
        "excerpt":"We’ve summarized some tips for end-user device usage on this site. A great resource for more in-depth information about those tips is the website of the Federal Office for Information Security (BSI, Bundesamt für Sicherheit in der Informationstechnik). We do not know every security guideline and tip out there, so...","categories": [],
        "tags": [],
        "url": "/use/security-recommendations",
        "teaser": null
      },{
        "title": "Introducing Enmeshed",
        "excerpt":"Hello everyone! We are delighted to introduce a new open source project named Enmeshed. It is the home of software libraries, components, ideas, discussions, and many more in the area of digitalization. We think the world is ready for a whole new adventure of digital communication, easy and secure data...","categories": ["blog"],
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
        "title": "Announcing Enmeshed V2",
        "excerpt":"We are currently working on Enmeshed version 2. We got a lot of feedback from the community and so we are improving Enmeshed in different areas to tackle it. Attributes Attributes in Enmeshed have been a huge pain point during the integration using the Enmeshed Connector but also while using...","categories": ["blog"],
        "tags": ["announcement","v2"],
        "url": "/blog/announcing-enmeshed-v2",
        "teaser": null
      },{
        "title": "Announcing Enmeshed V2 Attributes",
        "excerpt":"This is one of the blog posts regarding Enmeshed V2. For an overview of all V2 blog posts, please refer to the V2 announcement blog post. In this blog post we want to talk about pain points of the V1 Attributes and how we reworked the Attributes to tackle them....","categories": ["blog"],
        "tags": ["announcement","v2","attributes"],
        "url": "/blog/announcing-enmeshed-v2-attributes",
        "teaser": null
      },{
        "title": "Announcing Enmeshed v2 Requests",
        "excerpt":"This is one of the blog posts regarding Enmeshed v2. For an overview of all Enmeshed v2 blog posts, please refer to the Enmeshed v2 announcement blog post. This blog post requires a superficial understanding of the new Attribute handling. Please refer to the corresponding blog post to learn more...","categories": ["blog"],
        "tags": ["announcement","v2","requests"],
        "url": "/blog/announcing-enmeshed-v2-requests",
        "teaser": null
      },{
        "title": "The (bumpy) road to Enmeshed V2",
        "excerpt":"Hey there, as we’ve already communicated in the previous blogs, we would like to release Enmeshed version 2 soon. As it is incompatible with version 1, the switch to version 2 is unfortunately not as straightforward as we’d hoped. We’ve had many discussions about the pros and cons of different...","categories": ["blog"],
        "tags": ["announcement","v2"],
        "url": "/blog/road-to-enmeshed-v2",
        "teaser": null
      },{
        "title": "FerretDB compatibility for the Enmeshed Connector",
        "excerpt":"At Enmeshed, we believe in the importance of open-source software and the freedom it gives developers. MongoDB is licensed under the Server Side Public License (SSPL) and from the start of our project we knew that we needed to find an alternative database solution for the Enmeshed Connector. After researching...","categories": ["blog"],
        "tags": ["announcement","connector"],
        "url": "/blog/announcing-ferretdb-compatibility",
        "teaser": null
      }]
