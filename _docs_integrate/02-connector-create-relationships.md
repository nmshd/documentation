---
title: "Create Relationships"
permalink: /integrate/create-relationships
toc: true
---

For creating a relationship, we differentiate between "incoming" and "outgoing" flows:

-   Incoming means, that the Connector creates a template, shares it over a separate channel and receives a relationship creation change request, which it then can accept or reject. From an organization's perspective, this is the common flow.
-   Outgoing is the other way round: The Connector (or a business user of the organization) receives a relationship template created by another party, and sends out the relationship creation change request to the other party, which can then be accepted (or rejected).

# Incoming Flow

The Connector creates the relationship template, renders it for a user and eventually receives a relationship creation change request from the user. The relationship creation change request is then accepted or rejected by the Connector based on the given content.

## Create Relationship Template

In order to receive relationships, an own relationship template needs to be created first. This is done by calling the POST /RelationshipTemplates/Own route.

![Create Relationship Template Sequence Diagram](/assets/diagrams/integrate/Connector_CreateTemplate.png "Create Relationship Template")

{% include rapidoc api_route_regex="^post /api/v1/RelationshipTemplates/Own$" %}

We differentiate between two types of relationship templates:

-   Identity-specific templates which are short-living personalized templates for known identities/users, which also could incorporate personal data to fill the user's identity when scanned. This is usually the case if the template is created for an authenticated user session. It must be ensured that only the user whose personal data is stored within the template has access to the template.
-   Identity-agnostic templates for unknown identities/users or scenarios where personal information should not be available in the template. These templates are usually long-living templates for new user registrations or printouts.

## Create Token for Relationship Template

Once the relationship template is created, a token needs to be created for the template, as the token is the primary way to communicate with unknown identities. The POST /Token route for a specific relationship template is used for this.

{% include rapidoc api_route_regex="^post /api/v1/RelationshipTemplates/Own/{id}/Token$" %}

The "Accept" header defines which output format of the token should be returned: Either a png file with the QR code or a json-representation of the whole token (including the truncated reference which could be encoded as a link).

## Communicate Token Reference

There are multiple ways how the token reference can be communicated to the user: It could be for example a string (to copy&paste), a link (to open a browser or the App), a file (opened by the App) or a QR code (manually scan from a different device). The QR code can also be rendered on printouts like flyers, business cards or letters.

## Receive Relationship Request

Once the user has reviewed the relationship template and created the corresponding relationship creation change request, it is submitted over the backbone (as a cipher only the organization can decrypt) to the organization's Connector. The Connector decrypts the cipher and stores the relationship creation change request in the database.

The relationship creation change request can be accessed either manually via a REST API (pull) or it can be pushed to a configurable custom HTTP endpoint.

![Get Open Relationship Requests Sequence Diagram](/assets/diagrams/integrate/Connector_GetOpenRelationshipRequests.png "Get Open Relationship Requests")

{% include rapidoc api_route_regex="^post /api/v1/Account/Sync$" %}

## Check data

The organization's business system can then use the structured data coming with the Relationship Request. For example, a manual or automated check can be performed, the data could be verified over third parties, or such like. This step can take from milliseconds to days, depending on the business scenario.
But please keep in mind that the user might not like to wait that long. If there are business processes taking such a long time, it might make more sense to first accept a Relationship Request and then start the long-running process, in order to be able to communicate with the user in parallel.

## Respond to Relationship Change Request

Once the data has been processed on the business system, it is time to respond to the requested relationship change: Either the change is accepted, or rejected. Both responses can transfer additional data to the requestor, e.g. the created customer id, contract id or suchlike (accept) - or the rejection reason, like an invalid required attribute or an insufficient financial score.

If the change is accepted, the connection to the requestor is automatically generated and from this point in time, both parties may communicate over a secure, bi-directional tunnel.

![Accept Relationship Request Sequence Diagram](/assets/diagrams/integrate/Connector_AcceptRelationshipRequest.png "Accept Relationship Request")

{% include rapidoc api_route_regex="^put /api/v1/Relationships/{id}/Changes/{changeId}/Accept|put /api/v1/Relationships/{id}/Changes/{changeId}/Reject$" %}

# Outgoing Flow

The Connector receives a Relationship Template (or Token) from an external party and sends out the Relationship Request.

## Get an External Relationship Template

In order to send out own relationship request to other parties, a template must be fetched from the external party. The template is created by the external party and then usually shared by a truncated reference over a link or QR code. This reference can be used to retrieve the actual template, for example with requested attribute.

![Get Relationship Template Sequence Diagram](/assets/diagrams/integrate/Connector_GetTemplate.png "Get Relationship Template")

{% include rapidoc api_route_regex="^post /api/v1/RelationshipTemplates/Peer$" %}

## Create a Relationship

Once the external relationship template has been successfully read in, and the terms/requested content be found acceptable, one can answer the template with a relationship creation change request. This is done by calling the POST /Relationships route.
This request contains - equivalent to incoming relationship creation changes - any information the other party requested, for example legal and contact information. Thus, one should parse the given relationship template correctly and send the required attributes within this request. Otherwise the other party might reject the relationship creation change, as requested attributes are not existing.

![Create Relationship Request Sequence Diagram](/assets/diagrams/integrate/Connector_CreateRelationshipRequest.png "Create Relationship Request")

{% include rapidoc api_route_regex="^post /api/v1/Relationships$" %}

## Check outgoing Relationship Changes

In order to create relationships out of accepted relationship creation change requests, the Connector needs to track the status of these requests. This can be done manually with the POST /Account/Sync route. The return values then contain possible changed relationships.

{% include rapidoc api_route_regex="^post /api/v1/Account/Sync$" %}

## Revoke outgoing change

An existing outgoing change request can be revoked, as long as the change was not accepted or rejected yet.

{% include rapidoc api_route_regex="^put /api/v1/Relationships/{id}/Changes/{changeId}/Revoke$" %}
