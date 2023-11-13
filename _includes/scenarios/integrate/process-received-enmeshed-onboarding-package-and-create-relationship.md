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

---------------- TODO: Rework after clarification: ----------------

Assuming that there is no Relationship between the two Connectors yet, the Requestor Connector has additionally received an internally created new incoming Request. The response of the Requestor Connector to this Request determines whether it sends a Relationship Request to the Templator Connector or not.

There are some cases, especially when the Templator Connector didn't use a data object of type RelationshipTemplateContent to fill the property `content` of the RelationshipTemplate, when this incoming Request isn't sent. In this case, you can use the loaded RelationshipTemplate to send a Relationship Request to the Templator Connector manually via `POST /api/v2/Relationships`. For more Details see the description of the [Create Relationship with RelationshipTemplate]({% link _docs_use-cases/use-case-transport-create-relationship-with-relationshiptemplate.md %}) usecase.
{: .notice--info}

## Create Relationship

### Send Relationship Request

#### RelationshipTemplate with RelationshipTemplateContent

Get incoming Request

You can get the just mentioned incoming Request by sending the Request `GET /api/v2/Requests/Incoming` specifying the query parameter `source.reference=<ID of RelationshipTemplate>` on the Requestor Connector. If successful, you will receive the following response:

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
      //Case distinction: What is provided in "content" property of RelationshipTemplate?
      //Case 1: RelationshipTemplateContent
      //-> Contained Request in RelationshipTemplateContent
      ...
      //Case 2: Custom content with manual decision RequestItems
      //-> Corresponding RequestItems
      ...
      //Case 3: Custom content with no manual decision RequestItems
      //-> No incoming Request at all?
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

For more information on how to query the incoming Requests to a Connector, see the documentation of the [Query incoming Requests]({% link _docs_use-cases/use-case-consumption-query-incoming-requests.md %}) use case.
{: .notice--info}

Accept incoming Request

Now it is time for the Requestor Connector to respond to the Request it has just get. It has two response options with different consequences:

- Rejection: No sending of Relationship Request to Templator Connector.
- Acceptance: Sending of Relationship Request to Templator Connector.

If the Requestor Connector want to establish a Relationship with the Templator Connector, it must send a Relationship Request and therefore accept the Request. We briefly explain both scenarios, acceptance and rejection, but more detailed information about these scenarios can be found in the [Request over Templates]({% link _docs_integrate/requests-over-templates.md %}) guide.

---------------- TODO: Diagramm ----------------

Reject

If the Requestor Connector does not wish to establish a Relationship with the Templator Connector under the conditions summarized in the Request, it can reject this Request by sending `PUT /api/v2/Requests/Incoming/<ID of Request>/Reject` with a suitable Request body as documented in the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case.

The status of the Request then changes from `Decided` to `Completed`. You can check this by sending the Request `GET /api/v2/Requests/Incoming/<ID of Request>` described in more detail in the use case [Get incoming Request]({% link _docs_use-cases/use-case-consumption-get-incoming-request.md %}).
{: .notice--info}

Accept

If the Requestor Connector agrees to the conditions summarized in the Request for establishing a Relationship with the Templator Connector, it can accept this Request by executing `PUT /api/v2/Requests/Incoming/<ID of Request>/Accept` with a suitable Request body as described in the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case. In the response of the `PUT` Request you can see that the status of the Request has changed from `Pending/ManualDecisionRequired?` to `Decided`:

```jsonc

```

The status of the Request then changes from `Decided` to `Completed`. You can check this by sending the Request `GET /api/v2/Requests/Incoming/<ID of Request>` described in more detail in the use case [Get incoming Request]({% link _docs_use-cases/use-case-consumption-get-incoming-request.md %}).
{: .notice--info}

#### RelationshipTemplate without RelationshipTemplateContent

This will create internally a data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship).

You can query this with `GET /api/v2/Relationships`, query parameter `template.id=<id-of-the-template>`.

### Accept Relationship Request

If the Requestor Connector has accepted the Request and has therefore sent a Relationship Request to the Templator Connector, it is now the Templator Connector's turn to reject or accept this Relationship Request. Depending on this, a Relationship between the two Connectors may or may not be established. In order for the Templator Connector to receive the Relationship Request at all, it must first [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}) via `POST /api/v2/Account/Sync`.

---------------- TODO: Diagramm ----------------

Reject

- Perform `PUT /api/v2/Relationships/:id/Changes/:changeId/Reject` from use case [Reject Relationship Change]({% link _docs_use-cases/use-case-transport-reject-relationship-change.md %}).

Accept

- Perform `PUT /api/v2/Relationships/{relationshipId}/Changes/{changeId}/Accept` from use case [Accept Relationship Change]({% link _docs_use-cases/use-case-transport-accept-relationship-change.md %}).

### Synchronization

- Synchronize the Requestor Connector via `POST /api/v2/Account/Sync`.

## What's next?

- Question: What does the [Create and complete outgoing Request from RelationshipTemplate Response]({% link _docs_use-cases/use-case-consumption-create-and-complete-outgoing-request-from-relationship-template-response.md %}) use case do?
- Used in: Integration Example.
