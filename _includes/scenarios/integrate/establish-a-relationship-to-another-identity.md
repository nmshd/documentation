Communication and sharing of information between a Connector and another Identity requires the existence of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between them. This guide describes how to create an onboarding package on a Connector that can then be used by other Identities to send a Relationship Request to the Connector.

## Create a RelationshipTemplate

The creation of a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) is the first required step in this process.
A RelationshipTemplate is a formal description of the aspects of a Relationship that can be established between two Identities. In particular, it can specify [Requests]({% link _docs_integrate/data-model-overview.md %}#request) sent from the one Identity to the other Identity, which must be accepted as a prerequisite for the establishment of the Relationship.

### Input for creating a RelationshipTemplate

To create a RelationshipTemplate on a Connector, the so-called Templator Connector, you need to follow the instructions described in the [Create own RelationshipTemplate]({% link _docs_use-cases/use-case-transport-create-own-relationshiptemplate.md %}) use case documentation using the following JSON payload as input:

```jsonc
{
  "maxNumberOfAllocations": <maximum number of allocations>,
  "expiresAt": "<expiration date of RelationshipTemplate>",
  "content": {
    // Content of RelationshipTemplate
    ...
  }
}
```

You need to replace the placeholders marked with `<...>` appropriately. The `maxNumberOfAllocations` property is optional, so you can omit it. If you need help filling the `content` property or the `maxNumberOfAllocations` property with appropriate values, see the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) description in the Data Model Overview. It is important to note that if you intend to use the RelationshipTemplate to establish a Relationship between the Templator Connector and an App user, you must use a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) as the value for the `content` property. In this case, the input must be as follows:

```jsonc
{
  "maxNumberOfAllocations": <maximum number of allocations>,
  "expiresAt": "<expiration date of RelationshipTemplate>",
  "content": {
    // RelationshipTemplateContent
    "@type": "RelationshipTemplateContent",
    "title": "<title of RelationshipTemplate>",
    "metadata": <custom metadata>,
    "onNewRelationship": {
      // Specification of a Request
      ...
    },
    "onExistingRelationship": {
      // Specification of another Request
      ...
    }
  }
}
```

The properties `content.title`, `content.metadata` and `content.onExistingRelationship` are optional, so you can omit them.

In case the `content` property of the RelationshipTemplate contains a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) and therefore in particular at least one [Request]({% link _docs_integrate/data-model-overview.md %}#request), you should [test the Requests' Validity]({% link _docs_integrate/requests-over-templates.md %}#check-your-requests-validity) before you create the RelationshipTemplate. How to send a Request via a RelationshipTemplate is explained in detail in the [Requests over Templates]({% link _docs_integrate/requests-over-templates.md %}) guide.
{: .notice--info}

### Success response

If you have successfully created the RelationshipTemplate on the Templator Connector, you will receive a success response from which you can read the result:

```jsonc
{
  "result": {
    "id": "<ID of RelationshipTemplate>",
    "isOwn": true,
    "createdBy": "<Address of Templator Connector>",
    "createdByDevice": "<ID of Device used for creating RelationshipTemplate>",
    "createdAt": "<creation date of RelationshipTemplate>",
    "expiresAt": "<expiration date of RelationshipTemplate>",
    "content": {
      // Content of RelationshipTemplate
      ...
    },
    "truncatedReference": "<truncated reference of RelationshipTemplate>",
    "maxNumberOfAllocations": <maximum number of allocations>,
    "secretKey": "<secret key of RelationshipTemplate>"
  }
}
```

{% include copy-notice description="Save the `id` of the RelationshipTemplate so that you can refer to it later. For the same reason, save the values of the `truncatedReference` and `secretKey` properties." %}

## Onboarding

Before an Identity can establish a Relationship with the Templator Connector, it must send a Relationship Request specifying the `id` of a valid [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) owned by the Templator Connector. Depending on whether the Identity is an App user or another Connector, the so-called Requestor Connector, a different approach must be used to make the RelationshipTemplate available to it:

- Onboarding of an App user: Scan the QR Code of the RelationshipTemplate.
- Onboarding of another Connector: Load the RelationshipTemplate onto it.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/d03afadd-af30-4b08-abd6-c8f3d05d42db" id="rW5NlwcVLvBH"></iframe></div>

### Onboarding of an App user

If an App user wants to send a Relationship Request to the Templator Connector, the App user must first scan a QR Code that contains the reference to a RelationshipTemplate owned by the Templator Connector. To create this QR Code on the Templator Connector, proceed as described in the [Get RelationshipTemplate]({% link _docs_use-cases/use-case-transport-get-relationship-template.md %}) use case documentation and specify the value `image/png` in the `Accept` header field. After scanning the QR Code, the App user receives the conditions for establishing a Relationship with the Templator Connector as specified in the RelationshipTemplate. If these are accepted, the App user can now send a Relationship Request to the Templator Connector.

### Onboarding of another Connector

If another Connector, the so-called Requestor Connector, wants to send a Relationship Request to the Templator Connector, it must first load a RelationshipTemplate owned by the Templator Connector onto itself. This can be done by following the [Load RelationshipTemplate created by others]({% link _docs_use-cases/use-case-transport-load-relationship-template-created-by-others.md %}) use case description and providing the input:

```jsonc
{
  "reference": "<truncated reference of RelationshipTemplate>"
}
```

In doing so, it is necessary to insert the value of the `truncatedReference` property read from the [success response]({% link _docs_integrate/prepare-enmeshed-onboarding-package.md %}#success-response) above into the `reference` property. Alternatively, it is possible to use the following input, where the `id` and the `secretKey` of the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) obtained from the same success response must be specified:

```jsonc
{
  "id": "<ID of RelationshipTemplate>",
  "secretKey": "<secret key of RelationshipTemplate>"
}
```

When the RelationshipTemplate of the Templator Connector is successfully loaded onto the Requestor Connector, a success response is sent. This looks like the above [success response]({% link _docs_integrate/prepare-enmeshed-onboarding-package.md %}#success-response) except that the value of the property `isOwn` is now `false` instead of `true`. Assuming that there is no Relationship between the two Connectors yet and that the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) contains a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) in its `content` property, the Requestor Connector will additionally receive a new incoming Request. The Integrator of the Requestor Connector can accept it if they want to send a Relationship Request to the Templator Connector.

## What's next?

You have learned in this guide how to create an onboarding package on a Templator Connector and make it available to other Identities. How a Requestor Connector can use it to send a Relationship Request and finally establish a Relationship with the Templator Connector is explained in the Process received enmeshed onboarding package and create relationship guide.

<!--- TODO: insert link to "Process received enmeshed onboarding package and create relationship" --->

In this guide we will explain how two Connectors can establish an active Relationship with each other if one of them, the so-called Templator Connector, has prepared an onboarding package and made it available to the other Connector already. The other Connector, the so-called Requestor Connector, must use the [onboarding package]({% link _docs_integrate/process-received-enmeshed-onboarding-package-and-create-relationship.md %}#received-enmeshed-onboarding-package) to [send a Relationship Request]({% link _docs_integrate/process-received-enmeshed-onboarding-package-and-create-relationship.md %}#send-relationship-request) to the Templator Connector. This Relationship Request can then be accepted by the Templator Connector in order to [establish an active Relationship]({% link _docs_integrate/process-received-enmeshed-onboarding-package-and-create-relationship.md %}#establish-active-relationship) between them.

<!--- TODO: Add link "Prepare enmeshed onboarding package" --->

## Received enmeshed onboarding package

As described in detail in the Prepare enmeshed onboarding package guide, our starting situation is that the Templator Connector has created a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) and the Requestor Connector has successfully loaded it onto itself by proceeding as documented in the [Load RelationshipTemplate created by others]({% link _docs_use-cases/use-case-transport-load-relationship-template-created-by-others.md %}) use case. In particular, the Requestor Connector has get the following result, whereby the notation `<...>` is used as usual as a placeholder for the actual data:

<!--- TODO: Add link "Prepare enmeshed onboarding package" --->

```jsonc
{
  "result": {
    "id": "<ID of RelationshipTemplate>",
    "isOwn": false,
    "createdBy": "<Address of Templator Connector>",
    "createdByDevice": "<ID of Device used for creating RelationshipTemplate>",
    "createdAt": "<creation date of RelationshipTemplate>",
    "expiresAt": "<expiration date of RelationshipTemplate>",
    "content": {
      // Content of RelationshipTemplate
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

The underlying [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) of the [onboarding package]({% link _docs_integrate/process-received-enmeshed-onboarding-package-and-create-relationship.md %}#received-enmeshed-onboarding-package) may or may not contain a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) in its `content` property. We now describe separately in both cases how the Requestor Connector can use the onboarding package to send a Relationship Request to the Templator Connector. An overview of this procedure is given in the following diagram.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/5be09492-9e2c-42b1-bbb1-acd854118e2c" id="Ez1OCKfT1U40"></iframe></div>

### RelationshipTemplate with RelationshipTemplateContent

We assume that there is no [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between the two Connectors yet and that a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) is used within the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate). In this case, the Requestor Connector receives a new incoming [Request]({% link _docs_integrate/data-model-overview.md %}#request) after loading the associated [onboarding package]({% link _docs_integrate/process-received-enmeshed-onboarding-package-and-create-relationship.md %}#received-enmeshed-onboarding-package). This incoming Request can be queried on the Requestor Connector by proceeding as described in the [Query incoming Requests]({% link _docs_use-cases/use-case-consumption-query-incoming-requests.md %}) use case documentation and specifying `source.reference=<ID of RelationshipTemplate>` as a query parameter. The result contains the corresponding [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest):

```jsonc
{
  "result": [
    {
      "id": "<ID of Request>",
      "isOwn": false,
      "peer": "<Address of Templator Connector>",
      "createdAt": "<date of Request>",
      "status": "ManualDecisionRequired",
      "content": {
        // Specified Request in "onNewRelationship" property of RelationshipTemplateContent
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

The [Request]({% link _docs_integrate/data-model-overview.md %}#request) occuring in the `content` property defines the conditions for establishing an active Relationship between the two Connectors. If the Requestor Connector agrees to them, it can send a Relationship Request to the Templator Connector by accepting the incoming Request. This is done by following the instructions of the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case and providing the `id` of the incoming Request as well as an appropriate input to build the [Response]({% link _docs_integrate/data-model-overview.md %}#response) of the Requestor Connector to the incoming Request. In case of success, the `status` of the incoming Request will change from `"ManualDecisionRequired"` to `"Decided"` and you will receive a [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) as output, which especially contains the Response of the Requestor Connector to the incoming Request in its `response.content` property. By accepting the incoming Request, a data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with an associated [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipchange) and `"Pending"` as `status` is created additionally. It is not necessary, but you can query this Relationship by proceeding as described in the Query Relationships use case documentation, using the query parameter `template.id=<ID of RelationshipTemplate>`. If you decide to do this, you will receive the following result as response:

<!--- TODO: Add link "Query Relationships" use case --->

```jsonc
{
  "result": [
    {
      // Relationship
      "id": "<ID of Relationship>",
      "template": {
        // Underlying RelationshipTemplate as described above
        ...
      },
      "status": "Pending",
      "peer": "<Address of Templator Connector>",
      "peerIdentity": {
        "address": "<Address of Templator Connector>",
        "publicKey": "<Templator Connector's Signature Public Key>",
        "realm": "<Realm belonging to Templator Connector's Address>"
      },
      "changes": [
        {
          // RelationshipChange
          "id": "<ID of RelationshipChange>",
          "type": "Creation",
          "status": "Pending",
          "request": {
            // RelationshipChangeRequest
            "createdBy": "<Address of Requestor Connector>",
            "createdByDevice": "<ID of Device used for creating RelationshipChangeRequest>",
            "createdAt": "<creation date of RelationshipChangeRequest>",
            "content": {
              // RelationshipCreationChangeRequestContent
              "@type": "RelationshipCreationChangeRequestContent",
              "response": {
                // Response of Requestor Connector to incoming Request
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

{% include copy-notice description="Saving the `id` of the Relationship and the `changes.id` of the RelationshipChange is useful if you want to return to the created Relationship later in order to retrace changes to the Relationship." %}

Note that it is of course also possible to reject the incoming Request, if the Requestor Connector does not wish to establish an active Relationship with the Templator Connector under the given conditions. In order to do this, make use of the documentation of the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case. More detailed information about how to [reject]({% link _docs_integrate/requests-over-templates.md %}#reject) as well as how to [accept]({% link _docs_integrate/requests-over-templates.md %}#accept) an incoming Request can also be found in the [Request over Templates]({% link _docs_integrate/requests-over-templates.md %}) guide.
{: .notice--info}

### RelationshipTemplate without RelationshipTemplateContent

We now consider the situation in which the underlying [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) of the [onboarding package]({% link _docs_integrate/process-received-enmeshed-onboarding-package-and-create-relationship.md %}#received-enmeshed-onboarding-package) loaded onto the Requestor Connector does not contain a RelationshipTemplateContent in its `content` property. In this case, the Requestor Connector does not receive an incoming Request, but it can send a Relationship Request to the Templator Connector by explicitly creating a data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"` as `status` based on the RelationshipTemplate. To do this, follow the instructions of the [Create Relationship with RelationshipTemplate]({% link _docs_use-cases/use-case-transport-create-relationship-with-relationshiptemplate.md %}) use case and provide as input:

```jsonc
{
  "templateId": "<ID of RelationshipTemplate>",
  "content": {
    // Customized content
    ...
  }
}
```

Note that the `content` property is optional and can therefore be omitted. In case of success, you will receive a result as response in the following form, which in particular contains the associated [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipchange) of the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship):

```jsonc
{
  "result": [
    {
      // Relationship
      "id": "<ID of Relationship>",
      "template": {
        // Underlying RelationshipTemplate as described above
        ...
      },
      "status": "Pending",
      "peer": "<Address of Templator Connector>",
      "peerIdentity": {
        "address": "<Address of Templator Connector>",
        "publicKey": "<Templator Connector's Signature Public Key>",
        "realm": "<Realm belonging to Templator Connector's Address>"
      },
      "changes": [
        {
          // RelationshipChange
          "id": "<ID of RelationshipChange>",
          "type": "Creation",
          "status": "Pending",
          "request": {
            // RelationshipChangeRequest
            "createdBy": "<Address of Requestor Connector>",
            "createdByDevice": "<ID of Device used for creating RelationshipChangeRequest>",
            "createdAt": "<creation date of RelationshipChangeRequest>",
            "content": {
                // Customized content
                ...
            }
          }
        }
      ]
    }
  ]
}
```

{% include copy-notice description="Saving the `id` of the Relationship and the `changes.id` of the RelationshipChange is useful if you want to return to the created Relationship later in order to retrace changes to the Relationship." %}

## Establish active Relationship

After the Requestor Connector has sent the Relationship Request, the Integrator of the Templator Connector can accept it if they want to establish an active Relationship with the Requestor Connector. We now explain all required steps for establishing an active Relationship, including the necessary synchronization of both Connectors at certain points in time. The diagram below provides a summary of the process. Please note that the synchronization can also be automated by using the [Sync Module]({% link _docs_operate/modules.md %}#sync).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/de35cc09-894e-431f-819a-33bc7363ea30" id="6y2O3PCGpyGD"></iframe></div>

### Synchronization of Templator Connector

The Templator Connector must first [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}) in order to receive the data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"` as `status` previously created by the Requestor Connector and therefore the Relationship Request. The result of the response after synchronization contains the information about the created Relationship. In particular, the `id` of the Relationship and the `id` of the associated [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipchange) with `"Creation"` as `type` and `"Pending"` as `status` can be read from it.

{% include copy-notice description="Read the `id` of the Relationship from the `relationships.id` property and the `id` of the RelationshipChange from the `relationships.changes.id` property of the synchronization result for the next step." %}

### Accept Relationship Request

If the Templator Connector accepts the Relationship Request, the `status` of the data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) will change from `"Pending"` to `"Active"` and therefore an active Relationship between the two Connectors will be established. To do this, consult the [Accept Relationship Change]({% link _docs_use-cases/use-case-transport-accept-relationship-change.md %}) use case description and specify the `id` of the Relationship and the `id` of the RelationshipChange.

For rejecting the Relationship Request and therefore not establishing an active Relationship between the two Connectors, take a look at the documentation of the [Reject Relationship Change]({% link _docs_use-cases/use-case-transport-reject-relationship-change.md %}) use case.
{: .notice--info}

### Synchronization of Requestor Connector

After the Templator Connector has accepted the Relationship Request, the Requestor Connector must [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}). The result of the response after synchronization shows in particular that the `status` of the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) has been changed from `"Pending"` to `"Active"` and that the `status` of the associated [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipchange) with `"Creation"` as `type` has been changed from `"Pending"` to `"Accepted"`. Now the Requestor Connector is informed that the Templator Connector has accepted the Relationship Request and therefore an active Relationship has been established between the two Connectors.

## What's next?

After an active Relationship between the two Connectors is established, they are able to share information with each other. For example, they can exchange Messages. How a Connector can send a Message to another Identity with which it has an active Relationship is described in the [Integration Example]({% link _docs_integrate/integration-example.md %}).
