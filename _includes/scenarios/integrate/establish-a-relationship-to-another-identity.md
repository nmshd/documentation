Communication and sharing of information between two Identities requires the existence of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between them. This guide describes how a Connector can establish an active Relationship with another Identity. Firstly, we explain how to [create a RelationshipTemplate]({% link _docs_integrate/establish-a-relationship-to-another-identity.md %}#create-a-relationshiptemplate) on the Connector, the so-called Templator, and how to [make the RelationshipTemplate available]({% link _docs_integrate/establish-a-relationship-to-another-identity.md %}#make-the-relationshiptemplate-available) to the other Identity. The RelationshipTemplate can then be used by the other Identity, the so-called Requestor, to [send a Relationship Request]({% link _docs_integrate/establish-a-relationship-to-another-identity.md %}#send-a-relationship-request) to the Templator. This Relationship Request can finally be accepted by the Templator in order to [establish an active Relationship]({% link _docs_integrate/establish-a-relationship-to-another-identity.md %}#establish-an-active-relationship) between them.

## Create a RelationshipTemplate

The creation of a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) on the Templator is the first required step in the process of establishing a Relationship.
A RelationshipTemplate is a formal description of the aspects of a Relationship that can be established between two Identities. In particular, it can specify a [Request]({% link _docs_integrate/data-model-overview.md %}#request) sent from the Templator to the Requestor, which must be accepted by the Requestor as a prerequisite for the establishment of the Relationship.

### Input for creating a RelationshipTemplate

To create a RelationshipTemplate on the Templator, you need to follow the instructions described in the [Create own RelationshipTemplate]({% link _docs_use-cases/use-case-transport-create-own-relationshiptemplate.md %}) use case documentation using the following JSON payload as input:

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

You need to replace the placeholders marked with `<...>` appropriately as usual. The `maxNumberOfAllocations` property is optional, so you can omit it. If you need help filling the `content` property or the `maxNumberOfAllocations` property with appropriate values, see the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) description in the Data Model Overview. It is important to note that if you intend to use the RelationshipTemplate to establish a Relationship between the Templator and an App user, you must use a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) as the value for the `content` property. In this case, the input must be as follows:

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

### Created RelationshipTemplate

If you have successfully created the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) on the Templator, you will receive a success response from which you can read its `id`. Save it, so that you can refer to the RelationshipTemplate later. Also, save the values of the `truncatedReference` and `secretKey` properties so that you can make the created RelationshipTemplate available to other Identities. As the `createdBy` property contains the Address of the Templator, it can be seen that the Templator is the creator of the RelationshipTemplate. For this reason, the value of the `isOwn` property is set to `true` in this context.

<!---TODO: Introduce `secretKey` property of RelationshipTemplate in Data Model Overview --->

## Make the RelationshipTemplate available

Before an Identity can establish a Relationship with the Templator, it must send a Relationship Request using a valid [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) which is owned by the Templator. Depending on whether the Identity is an App user or a Connector, a different approach must be used to make the RelationshipTemplate available to the Identity:

- Make it available to an App user: Scan the QR Code of the RelationshipTemplate.
- Make it available to a Connector: Load the RelationshipTemplate onto it.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/d03afadd-af30-4b08-abd6-c8f3d05d42db" id="rW5NlwcVLvBH"></iframe></div>

### Make it available to an App user

If an App user wants to send a Relationship Request to the Templator, the App user must first scan a QR Code that contains the reference to a RelationshipTemplate owned by the Templator. To create this QR Code on the Templator, proceed as described in the [Get RelationshipTemplate]({% link _docs_use-cases/use-case-transport-get-relationship-template.md %}) use case documentation and specify the value `image/png` in the `Accept` header field. After scanning the QR Code, the App user receives the conditions for establishing a Relationship with the Templator as specified in the RelationshipTemplate. If these are accepted, the App user can now send a Relationship Request to the Templator.

### Make it available to a Connector

If a Connector wants to send a Relationship Request to the Templator, it must first load a RelationshipTemplate owned by the Templator onto itself. This can be done by following the [Load RelationshipTemplate created by others]({% link _docs_use-cases/use-case-transport-load-relationship-template-created-by-others.md %}) use case description and providing the input:

```jsonc
{
  "reference": "<truncated reference of RelationshipTemplate>"
}
```

In doing so, it is necessary to insert the value of the `truncatedReference` property read from the [RelationshipTemplate created above]({% link _docs_integrate/establish-a-relationship-to-another-identity.md %}#created-relationshiptemplate) into the `reference` property. Alternatively, it is possible to use the following input, where the `id` and the `secretKey` obtained from the same [RelationshipTemplate created above]({% link _docs_integrate/establish-a-relationship-to-another-identity.md %}#created-relationshiptemplate) must be specified:

```jsonc
{
  "id": "<ID of RelationshipTemplate>",
  "secretKey": "<secret key of RelationshipTemplate>"
}
```

When the RelationshipTemplate of the Templator is successfully loaded onto the Connector, a success response is sent. This looks like the [RelationshipTemplate created above]({% link _docs_integrate/establish-a-relationship-to-another-identity.md %}#created-relationshiptemplate) except that the value of the property `isOwn` is now `false` instead of `true`. Assuming that there is no Relationship between the two Connectors yet and that the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) contains a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) in its `content` property, the Connector will additionally receive a new incoming Request. The Integrator of the Connector can accept it if they want to send a Relationship Request to the Templator.

## Send a Relationship Request

You have learned so far how to create a RelationshipTemplate on a Templator and make it available to other Identities. How another Identity, the so-called Requestor, can use it to send a Relationship Request and finally establish a Relationship with the Templator is explained in the next steps.

### Send it as an App user

-> RelationshipTemplate with RelationshipTemplateContent

Please note that the general procedure is the same if the Connector wants to establish a Relationship to an App user instead of another Connector. For reasons of clarity, this guide focuses on the process of establishing a Relationship between two Connectors.
{: .notice--info}

<!--- TODO: Insert links to App scenarios and Connector scenarios --->

### Send it as a Connector

Our starting situation is that a Connector, in the following referred to as the Requestor, has successfully loaded the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) onto itself. The received RelationshipTemplate may or may not contain a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) in its `content` property. We now describe separately in both cases how the Requestor can use the RelationshipTemplate to send a Relationship Request to the Templator. An overview of this procedure is given in the following diagram.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/5be09492-9e2c-42b1-bbb1-acd854118e2c" id="Ez1OCKfT1U40"></iframe></div>

#### RelationshipTemplate with RelationshipTemplateContent

We assume that there is no [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between the two Connectors yet and that a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) is used within the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate). In this case, the Requestor receives a new incoming [Request]({% link _docs_integrate/data-model-overview.md %}#request) after loading the associated RelationshipTemplate. This incoming Request can be queried on the Requestor by proceeding as described in the [Query incoming Requests]({% link _docs_use-cases/use-case-consumption-query-incoming-requests.md %}) use case documentation and specifying `source.reference=<ID of RelationshipTemplate>` as a query parameter. The result contains the corresponding [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest):

```jsonc
{
  "result": [
    {
      "id": "<ID of Request>",
      "isOwn": false,
      "peer": "<Address of Templator>",
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

The [Request]({% link _docs_integrate/data-model-overview.md %}#request) occuring in the `content` property defines the conditions for establishing an active Relationship between the two Connectors. If the Requestor agrees to them, it can send a Relationship Request to the Templator by accepting the incoming Request. This is done by following the instructions of the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case and providing the `id` of the incoming Request as well as an appropriate input to build the [Response]({% link _docs_integrate/data-model-overview.md %}#response) of the Requestor to the incoming Request. In case of success, the `status` of the incoming Request will change from `"ManualDecisionRequired"` to `"Decided"` and you will receive a [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) as output, which especially contains the Response of the Requestor to the incoming Request in its `response.content` property. By accepting the incoming Request, a data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with an associated [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipchange) and `"Pending"` as `status` is created additionally. It is not necessary, but you can query this Relationship by proceeding as described in the Query Relationships use case documentation, using the query parameter `template.id=<ID of RelationshipTemplate>`. If you decide to do this, you will receive the following result as response:

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
      "peer": "<Address of Templator>",
      "peerIdentity": {
        "address": "<Address of Templator>",
        "publicKey": "<Templator's Signature Public Key>",
        "realm": "<Realm belonging to Templator's Address>"
      },
      "changes": [
        {
          // RelationshipChange
          "id": "<ID of RelationshipChange>",
          "type": "Creation",
          "status": "Pending",
          "request": {
            // RelationshipChangeRequest
            "createdBy": "<Address of Requestor>",
            "createdByDevice": "<ID of Device used for creating RelationshipChangeRequest>",
            "createdAt": "<creation date of RelationshipChangeRequest>",
            "content": {
              // RelationshipCreationChangeRequestContent
              "@type": "RelationshipCreationChangeRequestContent",
              "response": {
                // Response of Requestor to incoming Request
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

Note that it is of course also possible to reject the incoming Request, if the Requestor does not wish to establish an active Relationship with the Templator under the given conditions. In order to do this, make use of the documentation of the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case. More detailed information about how to [reject]({% link _docs_integrate/requests-over-templates.md %}#reject) as well as how to [accept]({% link _docs_integrate/requests-over-templates.md %}#accept) an incoming Request can also be found in the [Request over Templates]({% link _docs_integrate/requests-over-templates.md %}) guide.
{: .notice--info}

#### RelationshipTemplate without RelationshipTemplateContent

We now consider the situation in which the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) loaded onto the Requestor does not contain a RelationshipTemplateContent in its `content` property. In this case, the Requestor does not receive an incoming Request, but it can send a Relationship Request to the Templator by explicitly creating a data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"` as `status` based on the RelationshipTemplate. To do this, follow the instructions of the [Create Relationship with RelationshipTemplate]({% link _docs_use-cases/use-case-transport-create-relationship-with-relationshiptemplate.md %}) use case and provide as input:

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
      "peer": "<Address of Templator>",
      "peerIdentity": {
        "address": "<Address of Templator>",
        "publicKey": "<Templator's Signature Public Key>",
        "realm": "<Realm belonging to Templator's Address>"
      },
      "changes": [
        {
          // RelationshipChange
          "id": "<ID of RelationshipChange>",
          "type": "Creation",
          "status": "Pending",
          "request": {
            // RelationshipChangeRequest
            "createdBy": "<Address of Requestor>",
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

## Establish an active Relationship

After the Requestor has sent the Relationship Request, the Integrator of the Templator can accept it if they want to establish an active Relationship with the Requestor. We now explain all required steps for establishing an active Relationship, including the necessary synchronization of both Connectors at certain points in time. The diagram below provides a summary of the process. Please note that the synchronization can also be automated by using the [Sync Module]({% link _docs_operate/modules.md %}#sync).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/de35cc09-894e-431f-819a-33bc7363ea30" id="6y2O3PCGpyGD"></iframe></div>

### Synchronization of Templator

The Templator must first [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}) in order to receive the data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"` as `status` previously created by the Requestor and therefore the Relationship Request. The result of the response after synchronization contains the information about the created Relationship. In particular, the `id` of the Relationship and the `id` of the associated [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipchange) with `"Creation"` as `type` and `"Pending"` as `status` can be read from it.

{% include copy-notice description="Read the `id` of the Relationship from the `relationships.id` property and the `id` of the RelationshipChange from the `relationships.changes.id` property of the synchronization result for the next step." %}

### Accept Relationship Request

If the Templator accepts the Relationship Request, the `status` of the data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) will change from `"Pending"` to `"Active"` and therefore an active Relationship between the two Connectors will be established. To do this, consult the [Accept Relationship Change]({% link _docs_use-cases/use-case-transport-accept-relationship-change.md %}) use case description and specify the `id` of the Relationship and the `id` of the RelationshipChange.

For rejecting the Relationship Request and therefore not establishing an active Relationship between the two Connectors, take a look at the documentation of the [Reject Relationship Change]({% link _docs_use-cases/use-case-transport-reject-relationship-change.md %}) use case.
{: .notice--info}

### Synchronization of Requestor

After the Templator has accepted the Relationship Request, the Requestor must [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}). The result of the response after synchronization shows in particular that the `status` of the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) has been changed from `"Pending"` to `"Active"` and that the `status` of the associated [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipchange) with `"Creation"` as `type` has been changed from `"Pending"` to `"Accepted"`. Now the Requestor is informed that the Templator has accepted the Relationship Request and therefore an active Relationship has been established between the two Connectors.

## What's next?

After an active Relationship between the two Identities is established, they are able to share information with each other. For example, they can exchange Messages. How a Connector can send a Message to another Identity with which it has an active Relationship is described in the [Integration Example]({% link _docs_integrate/integration-example.md %}).
