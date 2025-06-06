---
title: "Create Relationships"
permalink: /integrate/create-relationships
toc: true
published: false
---

For creating a Relationship, we differentiate between "incoming" and "outgoing" flows:

- Incoming means, that the Connector creates a RelationshipTemplate, shares it over a separate channel and receives a Relationship request, which it then can accept or reject. From an organization's perspective, this is the common flow.
- Outgoing is the other way round: The Connector (or a business user of the organization) receives a RelationshipTemplate created by another party, and sends out the Relationship request to the other party, which can then be accepted (or rejected).

## Incoming Flow

The Connector creates the RelationshipTemplate, renders it for a user and eventually receives a Relationship request from the user. The Relationship request is then accepted or rejected by the Connector based on the given content.

### Create RelationshipTemplate

In order to receive Relationship requests, a RelationshipTemplate needs to be created first. This is done by calling the `POST /RelationshipTemplates/Own` route.

{% include rapidoc api_route_regex="^post /api/v2/RelationshipTemplates/Own$" title="" %}

![Create RelationshipTemplate Sequence Diagram]({{ '/assets/diagrams/integrate/Connector_CreateTemplate.png' | relative_url }} "Create RelationshipTemplate")

We differentiate between two types of RelationshipTemplates:

- Identity-specific RelationshipTemplate which are short-living personalized RelationshipTemplates for known Identities/users, which also could incorporate personal data to fill the user's Identity when scanned. This is usually the case if the RelationshipTemplate is created for an authenticated user session. It must be ensured that only the user whose personal data is stored within the RelationshipTemplate has access to the RelationshipTemplate.
- Identity-agnostic RelationshipTemplate for unknown Identities/users or scenarios where personal information should not be available in the RelationshipTemplate. These RelationshipTemplates are usually long-living RelationshipTemplates for new user registrations or printouts.

Once the RelationshipTemplate is created, a token needs to be created for the RelationshipTemplate, as the token is the primary way to communicate with unknown Identities. The POST /Token route for a specific RelationshipTemplate is used for this.

{% include rapidoc api_route_regex="^post /api/v2/RelationshipTemplates/Own/{id}/Token$" %}

The "Accept" header defines which output format of the token should be returned: Either a png file with the QR code or a JSON-representation of the whole token (including the truncated reference which could be encoded as a link).

### Communicate Token Reference

There are multiple ways how the token reference can be communicated to the user: It could be for example a string (to copy&paste), a link (to open a browser or the App), a file (opened by the App) or a QR code (manually scan from a different device). The QR code can also be rendered on printouts like flyers, business cards or letters.

### Receive Relationship Request

Once the user has reviewed the RelationshipTemplate and created the corresponding Relationship request, it is submitted over the Backbone (as a cipher only the organization can decrypt) to the organization's Connector. The Connector decrypts the cipher and stores the Relationship request in the database.

The Relationship request can be accessed either manually via a REST API (pull) or it can be pushed to a [configurable custom HTTP endpoint]({% link _docs_integrate/11-connector-configuration.md %}).

![Get Open Relationship Requests Sequence Diagram]({{ '/assets/diagrams/integrate/Connector_GetOpenRelationshipRequests.png' | relative_url }} "Get Open Relationship Requests")

{% include rapidoc api_route_regex="^post /api/v2/Account/Sync$" %}

### Check data

The organization's business system can then use the structured data coming with the Relationship Request. For example, a manual or automated check can be performed, the data could be verified over third parties, or such like. This step can take from milliseconds to days, depending on the business scenario.
But please keep in mind that the user might not like to wait that long. If there are business processes taking such a long time, it might make more sense to first accept a Relationship Request and then start the long-running process, in order to be able to communicate with the user in parallel.

### Respond to Relationship Request

Once the data has been processed on the business system, it is time to respond to the Relationship request: you can either accept or reject it. Both responses can transfer additional data to the requestor, e.g. the created customer id, contract id or suchlike (accept) - or the rejection reason, like an invalid required Attribute or an insufficient financial score.

If the change is accepted, the connection to the requestor is automatically generated and from this point in time, both parties may communicate over a secure, bi-directional tunnel.

![Accept Relationship Request Sequence Diagram]({{ '/assets/diagrams/integrate/Connector_AcceptRelationshipRequest.png' | relative_url }} "Accept Relationship Request")

{% include rapidoc api_route_regex="^put /api/v2/Relationships/{id}/Changes/{changeId}/Accept|put /api/v2/Relationships/{id}/Changes/{changeId}/Reject$" %}

## Outgoing Flow

The Connector receives a RelationshipTemplate (or Token) from an external party and sends out the Relationship Request.

### Get an External RelationshipTemplate

In order to send out own Relationship request to other parties, a RelationshipTemplate must be fetched from the external party. The RelationshipTemplate is created by the external party and then usually shared by a truncated reference over a link or QR code. This reference can be used to retrieve the actual RelationshipTemplate, for example with requested Attribute.

![Get RelationshipTemplate Sequence Diagram]({{ '/assets/diagrams/integrate/Connector_GetTemplate.png' | relative_url }} "Get RelationshipTemplate")

{% include rapidoc api_route_regex="^post /api/v2/RelationshipTemplates/Peer$" %}

### Create a Relationship

Once the external RelationshipTemplate has been successfully read in, and the terms/requested content be found acceptable, one can answer the RelationshipTemplate with a Relationship request. This is done by calling the POST /Relationships route.
This request contains - equivalent to incoming Relationship creation changes - any information the other party requested, for example legal and contact information. Thus, one should parse the given RelationshipTemplate correctly and send the required Attributes within this request. Otherwise the other party might reject the Relationship creation change, as requested Attributes are not existing.

![Create Relationship Request Sequence Diagram]({{ '/assets/diagrams/integrate/Connector_CreateRelationshipRequest.png' | relative_url }} "Create Relationship Request")

{% include rapidoc api_route_regex="^post /api/v2/Relationships$" %}

### Check outgoing Relationship Changes

In order to create Relationships out of accepted Relationship requests, the Connector needs to track the status of these requests. This can be done manually with the POST /Account/Sync route. The return values then contain possible changed Relationships.

{% include rapidoc api_route_regex="^post /api/v2/Account/Sync$" %}

### Revoke outgoing change

An existing outgoing change request can be revoked, as long as the change was not accepted or rejected yet.

{% include rapidoc api_route_regex="^put /api/v2/Relationships/{id}/Changes/{changeId}/Revoke$" %}
