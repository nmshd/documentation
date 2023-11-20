In this guide we will explain how two Connectors can establish a Relationship with each other if one of them, the so-called Templator Connector, has prepared an onboarding package and made it available to the other Connector already. The other Connector, the so-called Requestor Connector, must use the [onboarding package]({% link _docs_integrate/process-received-enmeshed-onboarding-package-and-create-relationship.md %}#received-enmeshed-onboarding-package) to [send a Relationship Request]({% link _docs_integrate/process-received-enmeshed-onboarding-package-and-create-relationship.md %}#send-relationship-request) to the Templator Connector. This Relationship Request can then be accepted by the Templator Connector in order to [establish a Relationship]({% link _docs_integrate/process-received-enmeshed-onboarding-package-and-create-relationship.md %}#establish-relationship) between the two Connectors.

<!--- TODO: Link "Prepare enmeshed onboarding package" einfügen --->

## Received enmeshed onboarding package

As described in detail in the Prepare enmeshed onboarding package guide, our starting situation is that the Templator Connector has created a RelationshipTemplate and the Requestor Connector has successfully loaded it onto itself by sending an appropriate HTTP request as documented in the [Load RelationshipTemplate created by others]({% link _docs_use-cases/use-case-transport-load-relationship-template-created-by-others.md %}) use case. In particular, the Requestor Connector has received the following response, whereby the notation `<...>` is used as usual as a placeholder for the actual data:

<!--- `POST /api/v2/RelationshipTemplates/Peer` --->
<!--- TODO: Link "Prepare enmeshed onboarding package" einfügen --->

```jsonc
{
  "result": {
    "id": "<ID of RelationshipTemplate>",
    "isOwn": false,
    "createdBy": "<ID of Templator Connector>",
    "createdByDevice": "<ID of Device used for creating RelationshipTemplate>",
    "createdAt": "<creation date of RelationshipTemplate>",
    "expiresAt": "<expiration date of RelationshipTemplate>",
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

## Send Relationship Request

The underlying [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) of the [onboarding package]({% link _docs_integrate/process-received-enmeshed-onboarding-package-and-create-relationship.md %}#received-enmeshed-onboarding-package) may or may not contain a data object of type [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) in its `content` property. We now describe separately in both cases how the Requestor Connector can use the onboarding package to send a Relationship Request to the Templator Connector. An overview of this procedure is given in the following diagram.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/5be09492-9e2c-42b1-bbb1-acd854118e2c" id="Ez1OCKfT1U40"></iframe></div>

<!--- Query parameters in diagramm too? --->
<!--- Rejection in diagramm too? --->
<!--- Option to query the Relationship too? --->

### Case 1: RelationshipTemplate with RelationshipTemplateContent

We assume that there is no [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between the two Connectors yet and that a data object of type [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) is used within the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate). In this case, the Requestor Connector receives an internally created new incoming [Request]({% link _docs_integrate/data-model-overview.md %}#request) after loading the associated [onboarding package]({% link _docs_integrate/process-received-enmeshed-onboarding-package-and-create-relationship.md %}#received-enmeshed-onboarding-package). This incoming Request can be fetched by executing `GET /api/v2/Requests/Incoming` with the query parameter `source.reference=<ID of RelationshipTemplate>` on the Requestor Connector as described in the [Query incoming Requests]({% link _docs_use-cases/use-case-consumption-query-incoming-requests.md %}) use case documentation. The response is of the following form:

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

{% include copy-notice description="Save the `id` of the incoming Request so that you can accept or reject it." %}

The Request occuring in the `content` property defines the conditions for establishing a Relationship between the two Connectors. If the Requestor Connector agrees to them, it can send a Relationship Request to the Templator Connector by accepting the incoming Request. This is done by sending `PUT /api/v2/Requests/Incoming/<ID of Request>/Accept` with a suitable Request body as described in more detail in the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case. In case of success, you will receive the following JSON payload as output, which contains the [Response]({% link _docs_integrate/data-model-overview.md %}#response) of the Requestor Connector to the incoming Request:

<!--- Response with "Accepted" as value in "result" property --->

```jsonc
{
  "result": {
    "id": "<ID of Request>",
    "isOwn": false,
    "peer": "<ID of Templator Connector>",
    "createdAt": "<creation date of Request>",
    "content": {
      //Specified Request in "onNewRelationship" property of RelationshipTemplateContent
      ...
    },
    "source": {
      "type": "RelationshipTemplate",
      "reference": "<ID of RelationshipTemplate>"
    },
    "response": {
      "createdAt": "<creation date of Response>",
      "content": {
        //Response to the Request
        ...
      }
    },
    "status": "Decided"
  }
}
```

<!--- As you can see the status of the incoming Request has changed from `ManualDecisionRequired` to `Decided`. After a short time, the status of it changes from `Decided` to `Completed`. You can observe this by querying the incoming Request again following the [Get incoming Request]({% link _docs_use-cases/use-case-consumption-get-incoming-request.md %}) use case instructions.
{: .notice--info} --->

<!--- `GET /api/v2/Requests/Incoming/<ID of Request>` --->

By accepting the incoming Request, a data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with an associated [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipchange) and `"Pending"` as `status` is created additionally. It is not necessary, but you can query this [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) by executing `GET /api/v2/Relationships` with query parameter `template.id=<ID of RelationshipTemplate>` as instructed in the [Query Relationships]({% link _docs_use-cases/use-case-transport-query-relationships.md %}) use case description. If you decide to do this, you will receive the following response:

```jsonc
{
  "result": [
    {
      //Relationship
      "id": "<ID of Relationship>",
      "template": {
        //Underlying RelationshipTemplate as described above
        ...
      },
      "status": "Pending",
      "peer": "<ID of Templator Connector>",
      "peerIdentity": {
        "address": "<ID of Templator Connector>",
        "publicKey": "<public key>",
        "realm": "<realm>"
      },
      "changes": [
        {
          //RelationshipChange
          "id": "<ID of RelationshipChange>",
          "type": "Creation",
          "status": "Pending",
          "request": {
            //RelationshipChangeRequest
            "createdBy": "<ID of Requestor Connector>",
            "createdByDevice": "<ID of Device used for creating Relationship>",
            "createdAt": "<creation date of Relationship>",
            "content": {
              //RelationshipCreationChangeRequestContent
              "@type": "RelationshipCreationChangeRequestContent",
              "response": {
                //Response to the Request
                ...
              }
            }
          }
        }
      ]
    }
  ]
}
```

{% include copy-notice description="Save the `id` of the Relationship and the `id` of the RelationshipChange." %}

Note that it is of course also possible to reject the incoming Request, if the Requestor Connector does not wish to establish a Relationship with the Templator Connector under the given conditions. In order to do this, make use of the documentation of the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case. More detailed information about how to [reject]({% link _docs_integrate/requests-over-templates.md %}#reject) as well as how to [accept]({% link _docs_integrate/requests-over-templates.md %}#accept) an incoming Request can also be found in the [Request over Templates]({% link _docs_integrate/requests-over-templates.md %}) guide.
{: .notice--info}

<!--- `PUT /api/v2/Requests/Incoming/<ID of Request>/Reject` --->

### Case 2: RelationshipTemplate without RelationshipTemplateContent

We now consider the situation in which the underlying RelationshipTemplate of the [onboarding package]({% link _docs_integrate/process-received-enmeshed-onboarding-package-and-create-relationship.md %}#received-enmeshed-onboarding-package) loaded onto the Requestor Connector does not contain a data object of type RelationshipTemplateContent in its `content` property. In this case, the Requestor Connector does not receive an incoming Request, but it can send a Relationship Request to the Templator Connector by explicitly creating a data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"` as `status` based on the RelationshipTemplate. To do this, a `POST /api/v2/Relationships` HTTP request as explained in the [Create Relationship with RelationshipTemplate]({% link _docs_use-cases/use-case-transport-create-relationship-with-relationshiptemplate.md %}) use case with the following JSON payload must be sent:

```jsonc
{
  "templateId": "<ID of RelationshipTemplate>",
  "content": { "<property 1>": <value 1>, ..., "<property n>": <value n> }
}
```

Note that the `content` property is optional and can therefore be omitted. In case of success, you will receive a response in the following form, which in particular contains the associated [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipchange) of the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship):

<!--- Response is similar to that obtained in the case of a [RelationshipTemplate with RelationshipTemplateContent]({% link _docs_integrate/process-received-enmeshed-onboarding-package-and-create-relationship.md %}#case-1-relationshiptemplate-with-relationshiptemplatecontent) above --->

<!---
```jsonc
{
  "result": [
    {
      "id": "<ID of Relationship>",
      "template": {
        // Underlying RelationshipTemplate as described above
        "id": "<ID of RelationshipTemplate>",
        "maxNumberOfAllocations": <maximum number of allocations>,
        "isOwn": false,
        "createdBy": "<ID of Templator Connector>",
        "createdByDevice": "<ID of Device used for creating RelationshipTemplate>",
        "createdAt": "<creation date of RelationshipTemplate>",
        "expiresAt": "<expiration date of RelationshipTemplate>",
        "content": {
        // Content of the RelationshipTemplate
        ...
        },
        "secretKey": "<secret key of RelationshipTemplate>",
        "truncatedReference": "<truncated reference of RelationshipTemplate>"
      },
      "status": "Pending",
      "peer": "<ID of Templator Connector>",
      "peerIdentity": {
            "address": "<ID of Templator Connector>",
            "publicKey": "<public key>",
            "realm": "<realm>"
      },
      "changes": [
        {
          "id": "<ID of RelationshipChange>",
          "type": "Creation",
          "status": "Pending",
          "request": {
            "createdBy": "<ID of Requestor Connector>",
            "createdByDevice": "<<ID of Device used for creating Relationship>",
            "createdAt": "<creation date of Relationship>",
            "content": { "<property 1>": <value 1>, ..., "<property n>": <value n> }
          }
        }
      ]
    }
  ]
}
```
--->

```jsonc
{
  "result": [
    {
      //Relationship
      "id": "<ID of Relationship>",
      "template": {
        //Underlying RelationshipTemplate as described above
        ...
      },
      "status": "Pending",
      "peer": "<ID of Templator Connector>",
      "peerIdentity": {
            "address": "<ID of Templator Connector>",
            "publicKey": "<public key>",
            "realm": "<realm>"
      },
      "changes": [
        {
          //RelationshipChange
          "id": "<ID of RelationshipChange>",
          "type": "Creation",
          "status": "Pending",
          "request": {
            //RelationshipChangeRequest
            "createdBy": "<ID of Requestor Connector>",
            "createdByDevice": "<ID of Device used for creating Relationship>",
            "createdAt": "<creation date of Relationship>",
            "content": { "<property 1>": <value 1>, ..., "<property n>": <value n> }
          }
        }
      ]
    }
  ]
}
```

{% include copy-notice description="Save the `id` of the Relationship and the `id` of the RelationshipChange." %}

## Establish Relationship

After the Requestor Connector has sent the Relationship Request, the Integrator of the Templator Connector can accept it if they want to establish a Relationship with the Requestor Connector. We now explain all required steps for establishing a Relationship, including the necessary synchronization of both Connectors at certain points in time. The diagram below provides a summary of the process.

<!--- Synchronization in the intermediate steps so that both Connectors are always informed about each other's decisions in the process of establishing a Relationship with each other. --->

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/de35cc09-894e-431f-819a-33bc7363ea30" id="6y2O3PCGpyGD"></iframe></div>

<!--- Query parameters in diagramm too? --->
<!--- Rejection in diagramm too? --->

### Synchronization of Templator Connector

The Templator Connector must first [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}) by executing `POST /api/v2/Account/Sync` in order to receive the Relationship Request. The response after synchronization contains the data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) previously created by the Requestor Connector. In particular, the ID of the Relationship and the ID of the associated [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipchange) can be read from it.

{% include copy-notice description="Save the `id` of the Relationship and the `id` of the RelationshipChange for the next step." %}

### Accept Relationship Request

If the Templator Connector accepts the Relationship Request, the `status` of the data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) will change from `"Pending"` to `"Active"` and therefore a Relationship between the two Connectors will be established. To do this, perform `PUT /api/v2/Relationships/<ID of Relationship>/Changes/<ID of RelationshipChange>/Accept` with a suitable Request body as documented in the [Accept Relationship Change]({% link _docs_use-cases/use-case-transport-accept-relationship-change.md %}) use case.

For rejecting the Relationship Request and therefore not establishing a Relationship between the two Connectors, take a look at the description of the [Reject Relationship Change]({% link _docs_use-cases/use-case-transport-reject-relationship-change.md %}) use case.
{: .notice--info}

<!--- `PUT /api/v2/Relationships/:id/Changes/:changeId/Reject` --->

### Synchronization of Requestor Connector

After the Templator Connector has accepted the Relationship Request, the Requestor Connector must [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}) via `POST /api/v2/Account/Sync`. Now the Requestor Connector is informed that the Templator Connector has accepted the Relationship Request and that a Relationship has been established between the two Connectors.

## What's next?

After a Relationship between the two Connectors is established, they are able to share information with each other. For example, they can exchange Messages. How a Connector can send a Message to another Identity that it has a Relationship established with, is described in the [Integration Example]({% link _docs_integrate/integration-example.md %}).

<!--- Refer to other guides here. --->

<!--- Attention: Compare with Integration Example, but this guide is not used in Integration Example because in the Integration Example one Identity is a Connector and one Identity is an App user. --->

<!--- Question: What does the [Create and complete outgoing Request from RelationshipTemplate Response]({% link _docs_use-cases/use-case-consumption-create-and-complete-outgoing-request-from-relationship-template-response.md %}) use case do? --->
