Two Connectors are given, one called the Templator Connector and the other called the Requestor Connector, which aim to establish a Relationship with each other. We assume that the Templator Connector, as described in the Prepare enmeshed onboarding package guide, has already created an onboarding package and made it available to the Requestor Connector. In this guide we will see how the Requestor Connector can use this onboarding package to send a Relationship Request to the Templator Connector and how the Templator Connector has to answer this Relationship Request to finally establish a Relationship between the two Connectors.

<!--- TODO: Link "Prepare enmeshed onboarding package" einfügen --->

---------------- TODOS: ----------------

- Comparison with: Old Integration Example
- Comparison with: Requests over Templates
- Insert links to UseCases
- Insert links to other pages
- Create and insert Diagrams

## Received enmeshed onboarding package

We first describe the initial situation that exists when following the Prepare enmeshed onboarding package guide. We assume that the Templator Connector has created a RelationshipTemplate and that the Requestor Connector then successfully loaded this onto itself by sending an appropriate `POST /api/v2/RelationshipTemplates/Peer` Request. In this case, the Requestor Connector received the following success response:

<!--- TODO: Link "Prepare enmeshed onboarding package" einfügen --->

```jsonc
{
  "result": {
    "id": "<ID of RelationshipTemplate>",
    "isOwn": false,
    "createdBy": "<ID of Templator Connector>",
    "createdByDevice": "<ID of Device>",
    "createdAt": "<creation date>",
    "expiresAt": "<expiration date>",
    "content": {
      //Content of the RelationshipTemplate
      ...
    },
    "truncatedReference": "<truncated reference of RelationshipTemplate>",
    "maxNumberOfAllocations": <maximum number of allocations>,
    "secretKey": "<secret key of RelationshipTemplate>"
  }
}
```

{% include copy-notice description="Save the `id` of the RelationshipTemplate so that you can refer to it in the next step." %}

Assuming that there is no Relationship between the two Connectors yet, the Requestor Connector has additionally received an internally created new incoming Request. The response of the Requestor Connector to this Request determines whether it sends a Relationship Request to the Templator Connector or not.

### Get Request

You can get the just mentioned incoming Request by sending the Request `GET /api/v2/Requests/Incoming` specifying the query parameters `source.reference=<ID of RelationshipTemplate>` on the Requestor Connector. If successful, you will receive the following response:

```jsonc
{
  "result": [
    {
      "id": "<ID of Request>",
      "isOwn": false,
      "peer": "<ID of Templator Connector>",
      "createdAt": "<creation date of Request>",
      "status": "ManualDecisionRequired",
      "content": {
      //Content of RelationshipTemplate
      //OR: Contained Request in RelationshipTemplateContent of RelationshipTemplate
      ...
      },
      "source": {
        "type": "RelationshipTemplate",
        "reference": "<ID of RelationshipTemplate>"
      }
    }
  ]
}
```

{% include copy-notice description="Save the `id` of the Request so that you can refer to it in the subsequent steps." %}

## Response to Request

Now it is time for the Requestor Connector to respond to the Request it has just get. It has two response options with different consequences:

- Rejection: No sending of Relationship Request to Templator Connector.
- Acceptance: Sending of Relationship Request to Templator Connector.

If the Requestor Connector want to establish a Relationship with the Templator Connector, it must send a Relationship Request and therefore accept the Request.

---------------- TODO: Diagramm ----------------

### Rejection

PUT /api/v2/Requests/Incoming/{id}/Reject

GET /api/v2/Requests/Incoming/{id}
{: .notice--info}

### Acceptance

PUT /api/v2/Requests/Incoming/{id}/Accept

GET /api/v2/Requests/Incoming/{id}
{: .notice--info}

GET /api/v2/Relationships

#### Sending of Relationship Request

## Response to Relationship Request

Templator Connector sollte die Relationship Request beantworten.

- Sync Templator Connector -> POST /api/v2/Account/Sync

Im Falle, dass die Request angenommen wurde, wird an den Connector eine Relationship Request gesendet. Je nachdem, ob diese angenommen oder abgelehnt wird, kommt jetzt eine Beziehung zustande oder nicht.

---------------- TODO: Diagramm ----------------

### Rejection

- PUT ...
- Sync Requestor Connector -> POST /api/v2/Account/Sync

### Acceptance

- PUT /api/v2/Relationships/{relationshipId}/Changes/{changeId}/Accept
- Sync Requestor Connector -> POST /api/v2/Account/Sync

#### Creation of Relationship

## What's next?

- Integration Example
