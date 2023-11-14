Two Connectors are given, one called the Templator Connector and the other called the Requestor Connector, which aim to establish a Relationship with each other. We assume that the Templator Connector, as described in the Prepare enmeshed onboarding package guide, has already created an onboarding package and made it available to the Requestor Connector. In this guide we will see how the Requestor Connector can use this onboarding package to send a Relationship Request to the Templator Connector and how the Templator Connector has to answer this Relationship Request to finally establish a Relationship between the two Connectors.

<!--- TODO: Link "Prepare enmeshed onboarding package" einfügen --->

## Received enmeshed onboarding package

We first describe the initial situation that exists when following the Prepare enmeshed onboarding package guide. We assume that the Templator Connector has created a RelationshipTemplate and that the Requestor Connector then successfully [loaded this onto itself]({% link _docs_use-cases/use-case-transport-load-relationship-template-created-by-others.md %}) by sending an appropriate `POST /api/v2/RelationshipTemplates/Peer` Request. In this case, the Requestor Connector received the following success response:

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
      //Content of RelationshipTemplate
      ...
    },
    "truncatedReference": "<truncated reference of RelationshipTemplate>",
    "maxNumberOfAllocations": <maximum number of allocations>,
    "secretKey": "<secret key of RelationshipTemplate>"
  }
}
```

As usual, the notation `<...>` is used as a placeholder for the actual data.
{: .notice--info}

{% include copy-notice description="Save the `id` of the RelationshipTemplate so that you can refer to it in the next step." %}

## Create Relationship

The two Connectors would like to establish a Relationship with each other. To do this, the Requestor Connector must first send a Relationship Request to the Templator Connector using the [onboarding package]({% link _docs_integrate/process-received-enmeshed-onboarding-package-and-create-relationship.md %}#received-enmeshed-onboarding-package) received, which must then be accepted by the Templator Connector.

---------------- TODO: Diagramm ----------------

### Send Relationship Request

The underlying [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) of the onboarding package may or may not contain a data object of type [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) in its `content` property. We now describe separately in both cases how the Requestor Connector can use the onboarding package to send a Relationship Request to the Templator Connector.

#### Case 1: RelationshipTemplate with RelationshipTemplateContent

We assume that there is no Relationship between the two Connectors yet and that a data object of type RelationshipTemplateContent is used within the RelationshipTemplate. In this case, the Requestor Connector receives an internally created new incoming Request after loading the associated [onboarding package]({% link _docs_integrate/process-received-enmeshed-onboarding-package-and-create-relationship.md %}#received-enmeshed-onboarding-package). This incoming Request can be fetched by executing `GET /api/v2/Requests/Incoming` with the query parameter `source.reference=<ID of RelationshipTemplate>` on the Requestor Connector:

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
      //Specified Request in "onNewRelationship" property of RelationshipTemplateContent
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

For more information on how to query the incoming Requests to a Connector, see the documentation of the [Query incoming Requests]({% link _docs_use-cases/use-case-consumption-query-incoming-requests.md %}) use case.
{: .notice--info}

{% include copy-notice description="Save the `id` of the incoming Request so that you can accept it." %}

The Request occuring in the `content` property defines the conditions for establishing a Relationship between the two Connectors. If the Requestor Connector agrees to them, it can send a Relationship Request to the Templator Connector by accepting the incoming Request. This is done by sending `PUT /api/v2/Requests/Incoming/<ID of Request>/Accept` with a suitable Request body as described in more detail in the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case. In case of success, you obtain the following response:

```jsonc
{
  "result": {
    "id": "REQE8Y7sXycI6pCL67KU",
    "isOwn": false,
    "peer": "id1QEYrY8M5p8PsZo85FX6Hsda42YJB3Sf3E",
    "createdAt": "2023-11-14T14:56:52.970Z",
    "content": {
      "@type": "Request",
      "items": [
        {
          "@type": "RequestItemGroup",
          "items": [
            {
              "@type": "ReadAttributeRequestItem",
              "mustBeAccepted": true,
              "query": {
                "@type": "IdentityAttributeQuery",
                "valueType": "GivenName"
              }
            }
          ],
          "mustBeAccepted": true,
          "title": "Requested Attributes"
        }
      ]
    },
    "source": {
      "type": "RelationshipTemplate",
      "reference": "RLTkshSwL6FI6wl5SiTJ"
    },
    "response": {
      "createdAt": "2023-11-14T15:02:12.947Z",
      "content": {
        "@type": "Response",
        "items": [
          {
            "@type": "ResponseItemGroup",
            "items": [
              {
                "@type": "ReadAttributeAcceptResponseItem",
                "attribute": {
                  "@type": "IdentityAttribute",
                  "owner": "id1HBoX3YdmcC3WFH1HKLmZiTKQtc5pAW1MJ",
                  "value": {
                    "@type": "GivenName",
                    "value": "Test given name"
                  }
                },
                "attributeId": "ATTEz9Z5X39lMUTsoVB0",
                "result": "Accepted"
              }
            ]
          }
        ],
        "requestId": "REQE8Y7sXycI6pCL67KU",
        "result": "Accepted"
      }
    },
    "status": "Decided"
  }
}
```

{% include copy-notice description="Save the `id` of the Relationship and the `id` of the RelationshipChange for the next step." %}

<!--- As you can see the status of the incoming Request has changed from `ManualDecisionRequired` to `Decided`. After a short time, the status of it changes from `Decided` to `Completed`. You can observe this by querying the incoming Request again following the [Get incoming Request]({% link _docs_use-cases/use-case-consumption-get-incoming-request.md %}) use case instructions.
{: .notice--info} --->

<!--- `GET /api/v2/Requests/Incoming/<ID of Request>` --->

By accepting the incoming Request, a data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with an associated [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipchange) is created, which can be observed in the `...` property of the response and which you can query afterwards with the help of the [Query Relationships]({% link _docs_use-cases/use-case-transport-query-relationships.md %}) use case description too.

<!--- `GET /api/v2/Relationships` with query parameter `template.id=<ID of RelationshipTemplate>` --->

Note that it is of course also possible to reject the incoming Request, if the Requestor Connector does not wish to establish a Relationship with the Templator Connector under the given conditions. In order to do this, make use of the documentation of the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case. More detailed information about how to [reject]({% link _docs_integrate/requests-over-templates.md %}#reject) as well as how to [accept]({% link _docs_integrate/requests-over-templates.md %}#accept) an incoming Request can also be found in the [Request over Templates]({% link _docs_integrate/requests-over-templates.md %}) guide.
{: .notice--info}

<!--- `PUT /api/v2/Requests/Incoming/<ID of Request>/Reject` --->

#### Case 2: RelationshipTemplate without RelationshipTemplateContent

Let us now assume that the underlying RelationshipTemplate of the onboarding package loaded onto the Requestor Connector does not contain a data object of type RelationshipTemplateContent in its `content` property. In this case, the Requestor Connector can send a Relationship Request to the Templator Connector by sending a `POST /api/v2/Relationships` Request with the following JSON payload:

```jsonc
{
  "templateId": "<ID of RelationshipTemplate>",
  "content": { "<property 1>": <value 1>, ..., "<property n>": <value n> }
}
```

Note that the `content` property is optional and can therefore be omitted. In case of success, you will receive a response (similar to that obtained in the case of a [RelationshipTemplate with RelationshipTemplateContent]({% link _docs_integrate/process-received-enmeshed-onboarding-package-and-create-relationship.md %}#case-1-relationshiptemplate-with-relationshiptemplatecontent) above) in the following form:

```jsonc
{
  "result": [
    {
      "id": "REL_________________",
      "template": {
        "id": "RLT_________________",
        "maxNumberOfAllocations": 0,
        "isOwn": true,
        "createdBy": "id_________________________________",
        "createdByDevice": "DVC_________________",
        "createdAt": "2023-11-14T14:39:29.596Z",
        "expiresAt": "2023-11-14T14:39:29.596Z",
        "content": {},
        "secretKey": "string",
        "truncatedReference": "string"
      },
      "status": "Pending",
      "peer": "id_________________________________",
      "changes": [
        {
          "id": "RCH_________________",
          "type": "Creation",
          "status": "Pending",
          "request": {
            "createdBy": "id_________________________________",
            "createdByDevice": "DVC_________________",
            "createdAt": "2023-11-14T14:39:29.596Z",
            "content": {}
          },
          "response": {
            "createdBy": "id_________________________________",
            "createdByDevice": "DVC_________________",
            "createdAt": "2023-11-14T14:39:29.596Z",
            "content": {}
          }
        }
      ]
    }
  ]
}
```

For more Details on how to create a Relationship with a RelationshipTemplate, see the description of the [Create Relationship with RelationshipTemplate]({% link _docs_use-cases/use-case-transport-create-relationship-with-relationshiptemplate.md %}) use case.
{: .notice--info}

{% include copy-notice description="Save the `id` of the Relationship and the `id` of the RelationshipChange for the next step." %}

In particular, this will create a data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with an associated [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipchange), and send a Relationship Request to the Templator Connector. You can query the created Relationship as described in the [Query Relationships]({% link _docs_use-cases/use-case-transport-query-relationships.md %}) use case.

<!--- `GET /api/v2/Relationships` with query parameter `template.id=<ID of RelationshipTemplate>` --->

### Accept Relationship Request

After the Requestor Connector has sent the Relationship Request, the Templator Connector must first [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}) by executing `POST /api/v2/Account/Sync` in order to receive it. If the Templator Connector then accepts the Relationship Request, a Relationship between the two Connectors will be established. To do this, perform `PUT /api/v2/Relationships/<ID of Relationship>/Changes/<ID of RelationshipChange>/Accept` with a suitable Request body as described in the use case [Accept Relationship Change]({% link _docs_use-cases/use-case-transport-accept-relationship-change.md %}). In case of success you will get a response in the following form:

```jsonc
...
```

For rejecting the Relationship Request and therefore not establishing a Relationship between the two Connectors, take a look at use case [Reject Relationship Change]({% link _docs_use-cases/use-case-transport-reject-relationship-change.md %}).
{: .notice--info}

<!--- `PUT /api/v2/Relationships/:id/Changes/:changeId/Reject` --->

### Synchronization

As a final step, the Requestor Connector must [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}) via `POST /api/v2/Account/Sync`.

## What's next?

After a Relationship between the two Connectors is established, they are able to share more information with each other. For example, they can exchange Messages. How a Connector can send a Message to another Identity that it has a Relationship established with, is described in the [Integration Example]({% link _docs_integrate/integration-example.md %}).

<!--- Refer to other guides here. --->

<!--- Attention: Compare with Integration Example, but this guide is not used in Integration Example because in the Integration Example one Identity is a Connector and one Identity is an App user. --->

<!--- Question: What does the [Create and complete outgoing Request from RelationshipTemplate Response]({% link _docs_use-cases/use-case-consumption-create-and-complete-outgoing-request-from-relationship-template-response.md %}) use case do? --->
