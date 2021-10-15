---
title: "Using Templates"
permalink: /integrate/connector-flows-templates
---

We differentiate between "incoming" and "outgoing" flows:

- Incoming means, that the Connector creates the Template, shares it over a separate channel and receives a Relationship Request, which it then can accept or reject. From an organization's perspective, this is the common flow.
- Outgoing is the other way round: The Connector (or a Business User of the organization) receives a Relationship Template created by another party, and sends out the Relationship Request to the other party, which can then be accepted (or rejected).

# Incoming Flow

The Connector creates the Relationship Template, renders it for a user and eventually receives a RelationshipRequest back from the user. The Relationship Request is either Accepted or Rejected by the Connector based on the given content.

## Create Relationship Template

A "Relationship Template" is a structured representation of data which is required for a relationship to be established. In addition to technical information like public keys, certificates or signatures, it usually contains:

- Information which the templator would like to share about itself
  - Templator attributes (e.g. company name, address, phone numbers,
  - Contact details
- Information which the templator would like to share about the requestor
  - Requestor attributes
  - Websession Information
- Requested additional information about the requestor
  - Required/optional attributes
  - Certificates
  - Signatures
  - Questionnaire
- Meta information
  - Data privacy guidelines
  - EULAs

The Relationship Template is then shared with the user via a Token.

![Create Relationship Template Sequence Diagram](images/Connector_CreateTemplate.png "Create Relationship Template")

## Create Token for Relationship Template

Commonly used data-sharing possibilities like Links (URIs) or QR-Codes are limited in size. Thus, even compressed representations of - e.g. Relationship Templates - are too big to be stored in a QR-Code. In addition, the data which is shared usually should becomes invalid after a certain period in time. For example, a personalized Relationship Template containing personal data can be deleted after 5 minutes.

To overcome these technical limitations, a "Token" is introduced which acts as a small data-reference object: The actual to-be-shared data is encrypted with a random key and the corresponding cipher is stored on the central Platform with additional information like an expiry date.
The resulting Token Id and the generated secret key are then the only two properties which need to be submitted to another user: The Base64 encoded format is called Token Reference. This TokenReference is usually transfered to another user in the shape of a link or a QR-Code.

The "Accept" header defines which output format of the Token should be returned: Either a png file with the QR-Code or a json-representation of the whole token (including the truncated reference which could be encoded as a link).

## Communicate Token Reference

There are multiple ways how the TokenReference can be communicated to the user: It could be for example a string (to copy&paste), a Link (to open a browser or the App), a file (open the App) or a QR-Code (manually scan from a different device). The QR-Code can also be rendered on printouts like flyers, business cards or letters.

## Receive Relationship Request

Once the user has reviewed the Relationship Template and created the corresponding Relationship Request, it is submitted over the Platform (as a cipher only the organization can decrypt) to the organization's Connector. The Connector decrypts the cipher and stores the Relationship Request temporarily in the database.

The Relationship Request - next to the required technical information - usually contains:

- Requested information from the Requestor
  - Required/optional attributes
  - Certificates
  - Signatures
  - Answers to questionnaire
- Websession information
- OK to privacy statement
- OK to EULA

The Relationship Request can be accessed either manually via a REST API (pull) or it can be pushed to a configurable custom HTTP endpoint.

![Get Open Relationship Requests Sequence Diagram](images/Connector_GetOpenRelationshipRequests.png "Get Open Relationship Requests")

## Check data

The organization's business system can then use the structured data coming with the Relationship Request. For example, a manual or automated check can be performed, the data could be verified over third parties, or such like. This step can take from milliseconds to days, depending on the business scenario.
But please keep in mind that the user might not like to wait that long. If there are business processes taking such a long time, it might make more sense to first accept a Relationship Request and then start the long-running process, in order to be able to communicate with the user in parallel.

## Respond to Relationship Request

Once the data has been processed on the business system, it is time to respond to the Relationship Request: Either the Relationship Request is accepted, or rejected. Both responses can transfer additional data to the requestor, e.g. the created customer id, contract id or suchlike (accept) - or the rejection reason, like a missing required attribute or an insufficient financial score.

If the Relationship Request is accepted, a Relationship is automatically generated and from this point in time, both parties may communicate over a secure, bi-directional tunnel.

![Accept Relationship Request Sequence Diagram](images/Connector_AcceptRelationshipRequest.png "Accept Relationship Request")

# Outgoing Flow

The Connector receives a Relationship Template (or Token) from an external party and sends out the Relationship Request.

## Get an External Relationship Template

In order to send out own relationship request to other parties, a template must be fetched from the external party. The template is created by the external party and then usually shared by a truncated reference over a link or QR-Code. This reference can be used to retrieve the actual template, for example with requested attribute.

![Get Relationship Template Sequence Diagram](images/Connector_GetTemplate.png "Get Relationship Template")

## Create a Relationship Request

Once the external relationship template has been successfully read in, and the terms/requested content be found acceptable, one can answer the template with a relationship request. This relationship request contains - equivalent to incoming relationship - any information the other party requested, for example legal and contact information.

![Create Relationship Request Sequence Diagram](images/Connector_CreateRelationshipRequest.png "Create Relationship Request")

## Check outgoing Relationship Requests

In order to create Relationships out of accepted Relationship Requests, the Connector needs to track the status of the outgoing Relationship Requests. This can be done manually with the /RelationshipRequests/CheckOpenOutgoing route. Its return values then contain the created relationships (if there were any accepted Relationship Requests).
