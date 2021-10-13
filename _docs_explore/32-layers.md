---
title: "Enmeshed Layers"
permalink: /explore/layers
---

# Integration Layer

Single-identity integration logic to existing business systems primarily for organizational identities.

Examples:

- Automatically send a received "AttributesChangeRequest" to an enterprise service bus
- Create tickets on the integrated HCM system if an answer to a sent salary statement was received

# Consumption Layer

Single-identity business logic implementation and data structures, either for persons or organizational identities.

Examples:

- Definition and implementation what should be (automatically) done when receiving a structured attribute request (e.g. send the attribute automatically to the identity if user allowed it, ask the user to fill the attribute first if it is not available)
- Store a current state of shared attributes with every relationship

# Content Layer

Cross-identity payload definitions, normalized structured data

Examples:

- Definition of "Mail"
- Definition of how someone can request a certain attribute of another identity?

# Transport Layer

Cross-identity secure communication tunnel, cross-device synchronization, definition of envelopes, encryption and digital signatures of payload

Examples:

- Encryption of a message with a content "AttributesShareRequest"
- Submission of the encrypted message to the Backbone

# Backbone Layer

Completely encrypted communication, central architecture, high performance, postal services, global backups and scaling

Examples:

- Keep track of incoming messages per identity
- Store messages and files in a secure and fast way
