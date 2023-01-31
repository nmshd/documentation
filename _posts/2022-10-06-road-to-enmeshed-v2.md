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

We've had many discussions about the pros and cons of different cut-over approaches and in the end decided to go with a very radical one: In short, the Enmeshed App, Backbone and Connector (V1) will be updated to V2 and therefore be incompatible with old data.

The users and organizations we know of so far had no objections against this approach, and thus we keep the cut-over as easy as possible. We apologize for any inconveniences this might cause.

### So how can you get up to speed with Version2?

- Have a look at the updated [Connector Tutorial]({% link _docs_integrate/01-connector-tutorial.md %}) and the [migration guide]({% link _docs_integrate/50-connector-migration-v2.md %}).
- There will be a public beta of the Enmeshed App (V2) in the Apple and Google app stores soon. Be aware that the public beta will not support existing V1 profiles and thus the Enmeshed App's data should be wiped when using V2.
- There is a beta tag of the Enmeshed Connector Docker image which you can set up by yourself.

Your Enmeshed Team
