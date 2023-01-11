---
title: "The (bumpy) road to Enmeshed V2"
date: 2022-10-06T16:00:00+02:00
categories:
  - blog
tags:
  - announcement
  - v2
---

Hey there,

as we've already communicated in the previous blogs, we would like to release Enmeshed version 2 soon. As it is incompatible with version 1, the switch to version 2 is unfortunately not as straightforward as we'd hoped.

We've had many discussions about the pros and cons of different cut-over approaches and in the end decided to go with a very radical one: In short, the Enmeshed App (V1) and Backbone (V1) will stay active until November 26th 2022. Until then, you should have had enough time to familiarize yourself with Enmeshed V2.

From November 27th we will update the Enmeshed App in the AppStores and the Backbone - and will be live with Version 2 on December 1st. While updating V1 to V2, we will delete all the stored data within the V1 App, the Backbone and hosted Connectors on 27th November 2022.

Until November 27th you'll see a notification about the approaching data loss when starting the Enmeshed App and the Enmeshed Connector with V1.

The users and organizations we know of so far had no objections against this approach, and thus we keep the cut-over as easy as possible. We apologize for any inconveniences this might cause.

### So how can you get up to speed with Version2?

- Have a look at the updated [Connector Tutorial]({% link _docs_integrate/01-connector-tutorial.md %}) and the [migration guide]({% link _docs_integrate/50-connector-migration-v2.md %}).
- There will be a public beta of the Enmeshed App (V2) in the Apple and Google app stores soon. Be aware that the public beta will not support existing V1 profiles and thus the Enmeshed App's data should be wiped when using V2.
- There is a beta tag of the Enmeshed Connector Docker image which you can set up by yourself.
- The current Backbone already supports V2, but keep in mind that you cannot communicate with V1 Identities and also loose the data on 27th November 2022.

Your Enmeshed Team
