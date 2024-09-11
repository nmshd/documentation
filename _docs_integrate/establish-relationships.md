---
# Start automatic generation
permalink: integrate/establish-relationships
redirect_from:
  - /integrate/establish-a-relationship-to-another-identity
published: true
title: "Establish Relationships"
type: scenario
toc: true
properties:
  - id: SC107
  - category: Relationships between Identities
  - description: Create RelationshipTemplate (with respective content) Communicate RelationshipTemplate to peer (over side channel) Scan RelationshipTemplate / Press Link Check and accept Request Send RelationshipRequest (including Response to RelationshipTemplate's Request) Receive RelationshipRequest Check RelationshipRequest Accept RelationshipRequest
  - customer:
  - component: integrate
  - level:
  - implementation status:
  - documentation status: DONE
  - published:
  - link: establish-relationships
require:
required_by:
# End automatic generation
---

Communication and sharing of information between two Identities requires the existence of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between them. This guide describes how a Connector can establish an active Relationship to another Identity. Firstly, we explain how to [create a RelationshipTemplate]({% link _docs_integrate/establish-relationships.md %}#create-a-relationshiptemplate) on a Connector, the so-called Templator, and how to [make the RelationshipTemplate available]({% link _docs_integrate/establish-relationships.md %}#make-the-relationshiptemplate-available) to the other Identity. The RelationshipTemplate can then be used by the other Identity, the so-called Requestor, to [send a RelationshipRequest]({% link _docs_integrate/establish-relationships.md %}#send-a-relationship-request) to the Templator. This RelationshipRequest can finally be accepted by the Templator in order to [establish an active Relationship]({% link _docs_integrate/establish-relationships.md %}#establish-an-active-relationship) between them.

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

You need to replace the placeholders marked with `<...>` appropriately as usual. The `maxNumberOfAllocations` property is optional, so you can omit it. If you need help filling the `content` property or the `maxNumberOfAllocations` property with appropriate values, see the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) description in the Data Model Overview. It is important to note that if you intend to use the RelationshipTemplate to establish a Relationship between the Templator and an App user, you must use a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) as the value of the `content` property. In this case, the input must be as follows:

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

The properties `content.title`, `content.metadata` and `content.onExistingRelationship` are optional, so you can omit them. In case the `content` property of the RelationshipTemplate contains a RelationshipTemplateContent and therefore in particular at least one [Request]({% link _docs_integrate/data-model-overview.md %}#request), you should [check the Requests' validity]({% link _docs_integrate/requests-via-relationshiptemplates.md %}#check-the-requests-validity) before you create the RelationshipTemplate. An Identity to which the RelationshipTemplate will be made available and which does not yet have a Relationship to the Templator will receive the Request specified in the `onNewRelationship` property of the [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent). However, if a Relationship already exists between them and a Request has been specified in the `onExistingRelationship` property of the RelationshipTemplateContent, the Identity will receive this Request instead.

How to send a Request via a RelationshipTemplate is explained in detail in the [Requests via RelationshipTemplates]({% link _docs_integrate/requests-via-relationshiptemplates.md %}) guide.
{: .notice--info}

### Successfully created RelationshipTemplate

If you have successfully created the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) on the Templator, you will receive a success response from which you can read its `id`. As the Templator is the creator of the RelationshipTemplate, the `createdBy` property contains the Address of the Templator. For this reason, the value of the `isOwn` property is set to `true` in this context.

{% include copy-notice description="Save the `id` of the RelationshipTemplate so that you can refer to it and make it available to other Identities later. For the same reason, save the values of the properties `truncatedReference` and `secretKey`." %}

## Make the RelationshipTemplate available

Before an Identity can establish a Relationship to the Templator, it must send a RelationshipRequest using a valid [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) which is owned by the Templator. Depending on whether the Identity is a Connector or an App user, a different approach must be used to make the RelationshipTemplate available to the Identity:

- [Make it available to a Connector]({% link _docs_integrate/establish-relationships.md %}#make-it-available-to-a-connector): Load the RelationshipTemplate onto it.
- [Make it available to an App user]({% link _docs_integrate/establish-relationships.md %}#make-it-available-to-an-app-user): Scan the QR code of the RelationshipTemplate.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/d03afadd-af30-4b08-abd6-c8f3d05d42db" id="rW5NlwcVLvBH"></iframe></div>

### Make it available to a Connector

If a Connector wants to send a RelationshipRequest to the Templator, it must first load a RelationshipTemplate, which is owned by the Templator, onto itself. This can be done by following the [Load RelationshipTemplate created by others]({% link _docs_use-cases/use-case-transport-load-relationshiptemplate-created-by-others.md %}) use case description and providing the input:

```jsonc
{
  "reference": "<truncated reference of RelationshipTemplate>"
}
```

In doing so, it is necessary to insert the value of the `truncatedReference` property read from the [created RelationshipTemplate]({% link _docs_integrate/establish-relationships.md %}#successfully-created-relationshiptemplate) into the `reference` property. Alternatively, it is possible to specify the `id` and the `secretKey` of the [created RelationshipTemplate]({% link _docs_integrate/establish-relationships.md %}#successfully-created-relationshiptemplate) and use the following input:

```jsonc
{
  "id": "<ID of RelationshipTemplate>",
  "secretKey": "<secret key of RelationshipTemplate>"
}
```

When the RelationshipTemplate of the Templator is successfully loaded onto the Connector, the `transport.peerRelationshipTemplateLoaded` [Connector event]({% link _docs_integrate/connector-events.md %}) is triggered and a success response is sent. This success response looks like the success response you receive when you have [successfully created a RelationshipTemplate]({% link _docs_integrate/establish-relationships.md %}#successfully-created-relationshiptemplate) on the Templator, except that the value of the property `isOwn` is now `false` instead of `true`. Assuming that there is no Relationship between the Connector and the Templator yet and that the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) contains a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) in its `content` property, the Connector will additionally receive a new incoming Request. The Integrator of the Connector can [accept]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) it if they want to [send a RelationshipRequest]({% link _docs_integrate/establish-relationships.md %}#send-it-as-a-connector) to the Templator.

### Make it available to an App user

If an App user wants to send a RelationshipRequest to the Templator, the App user must first scan a QR code that contains the reference to a RelationshipTemplate which is owned by the Templator. To create this QR code on the Templator, proceed as described in the documentation of the [Get RelationshipTemplate]({% link _docs_use-cases/use-case-transport-get-relationshiptemplate.md %}) use case, use the `id` of the [created RelationshipTemplate]({% link _docs_integrate/establish-relationships.md %}#successfully-created-relationshiptemplate) and specify the value `image/png` in the `Accept` header field. After scanning the QR code, the App user receives the conditions for establishing a Relationship to the Templator as specified in the RelationshipTemplate. If these are accepted, the App user can now [send a RelationshipRequest]({% link _docs_integrate/establish-relationships.md %}#send-it-as-an-app-user) to the Templator.

## Send a RelationshipRequest

After the Templator has created a RelationshipTemplate and made it available to another Identity, this Identity can use it to send a RelationshipRequest to the Templator. For this reason, this other Identity is also referred to below as the Requestor.

### Send it as a Connector

Assuming that the Requestor in this section is a Connector, our starting situation is that the Requestor has successfully loaded the [created RelationshipTemplate]({% link _docs_integrate/establish-relationships.md %}#successfully-created-relationshiptemplate) onto itself. The received [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) may or may not contain a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) in its `content` property. We now describe separately in both cases how the Requestor can use the RelationshipTemplate to send a RelationshipRequest to the Templator. An overview of this procedure is given in the following diagram.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/5be09492-9e2c-42b1-bbb1-acd854118e2c" id="Ez1OCKfT1U40"></iframe></div>

#### RelationshipTemplate with RelationshipTemplateContent

We assume that there is no [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between the Requestor and the Templator yet and that a RelationshipTemplateContent is used within the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate). In this case, the Requestor receives a new incoming Request after loading the RelationshipTemplate and the `consumption.incomingRequestReceived` [Connector event]({% link _docs_integrate/connector-events.md %}) is triggered. By proceeding as described in the [Query incoming Requests]({% link _docs_use-cases/use-case-consumption-query-incoming-requests.md %}) use case documentation and specifying `source.reference=<ID of RelationshipTemplate>` as a query parameter, this Request can be queried on the Requestor. The `result` contains the corresponding [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest), from which you can read the `id` of the Request.

{% include copy-notice description="Save the `id` of the incoming Request so that you can accept or reject it." %}

The `content` of the LocalRequest is the Request specified in the `onNewRelationship` property of the [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent). This Request defines the conditions for establishing an active Relationship between the Requestor and the Templator. If the Requestor agrees to them, it can send a RelationshipRequest to the Templator by accepting the Request. This is done by following the instructions of the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case and providing the `id` of the Request as well as an appropriate input to build the [Response]({% link _docs_integrate/data-model-overview.md %}#response) of the Requestor to the Request. In case of success, the `status` of the LocalRequest will change from `"ManualDecisionRequired"` to `"Decided"` and the `consumption.incomingRequestStatusChanged` [Connector event]({% link _docs_integrate/connector-events.md %}) will be triggered. The Response of the Requestor to the Request will be contained within the `response.content` property of the LocalRequest. By accepting the Request, a data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"` as `status` is created additionally and the `transport.relationshipChanged` [Connector event]({% link _docs_integrate/connector-events.md %}) is triggered. An associated [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipchange), which has `"Creation"` as `type` and `"Pending"` as `status`, can be found within the `changes` property of the Relationship. The `request.content.response` property of the RelationshipChange contains the Response of the Requestor to the Request.

It is not necessary, but you can query this Relationship by proceeding as described in the [Query Relationships]({% link _docs_use-cases/use-case-transport-query-relationships.md %}) use case documentation, using the query parameter `template.id=<ID of RelationshipTemplate>`. If you decide to do this, you will receive a `result` as response from which you can read the `id` of the Relationship and the `id` of the associated RelationshipChange.
{: .notice--info}

Note that it is of course also possible to reject the incoming Request, if the Requestor does not wish to establish an active Relationship to the Templator under the given conditions. In order to do this, make use of the documentation of the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case. More detailed information about how to [reject]({% link _docs_integrate/requests-via-relationshiptemplates.md %}#reject) as well as how to [accept]({% link _docs_integrate/requests-via-relationshiptemplates.md %}#accept) an incoming Request can also be found in the [Requests via RelationshipTemplates]({% link _docs_integrate/requests-via-relationshiptemplates.md %}) guide.
{: .notice--info}

#### RelationshipTemplate without RelationshipTemplateContent

We now consider the situation in which the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) loaded onto the Requestor does not contain a RelationshipTemplateContent in its `content` property. In this case, the Requestor does not receive an incoming Request. Nevertheless, it can send a RelationshipRequest to the Templator by explicitly creating a data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"` as `status` based on the RelationshipTemplate. To do this, follow the instructions of the [Create Relationship with RelationshipTemplate]({% link _docs_use-cases/use-case-transport-create-relationship-with-relationshiptemplate.md %}) use case and provide as input:

```jsonc
{
  "templateId": "<ID of RelationshipTemplate>",
  "content": {
    // Customized content
    ...
  }
}
```

Note that the `content` property is optional and can therefore be omitted. In case of success, the `transport.relationshipChanged` [Connector event]({% link _docs_integrate/connector-events.md %}) will be triggered and you will receive a `result` as response, which contains the created data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) and in particular an associated [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipchange). The RelationshipChange has `"Creation"` as `type` and `"Pending"` as `status`. If you have specified a customized content within the `content` property of the input, it is contained within the `request.content` property of the RelationshipChange.

Saving the `id` of the Relationship and the `id` of the associated RelationshipChange is useful if you want to return to the created Relationship later in order to retrace changes to the Relationship.
{: .notice--info}

### Send it as an App user

As already mentioned in the description of the [input for creating a RelationshipTemplate]({% link _docs_integrate/establish-relationships.md %}#input-for-creating-a-relationshiptemplate), a RelationshipTemplateContent must be used as the value of the `content` property of the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) if you intend to use the RelationshipTemplate to establish a Relationship between the Templator and an App user. Assuming that there is no Relationship between them yet, the App user receives the Request specified in the `onNewRelationship` property of the [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) after scanning the QR code associated with the RelationshipTemplate. The App user has the option of accepting or rejecting the Request. If they accept the Request appropriately, a RelationshipRequest is sent to the Templator. Internally, this corresponds to the creation of a data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"` as `status` and an associated RelationshipChange within its `changes` property. The [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipchange) has `"Creation"` as `type` and `"Pending"` as `status`. The Response of the App user to the Request is contained within the `request.content.response` property of the RelationshipChange.

Please note that the general procedure is the same if an App user instead of a Connector wants to send a RelationshipRequest to the Templator. The difference is that the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) does not need to contain a RelationshipTemplateContent in its `content` property if it is intended to be used by a Connector.
{: .notice--info}

## Establish an active Relationship

After the Requestor has sent the RelationshipRequest, the Integrator of the Templator can accept it if they want to establish an active Relationship to the Requestor. We now explain all required steps for establishing an active Relationship, including the necessary synchronization of the Templator and any other Connector that may be involved at certain points in time. Please note that the synchronization can also be automated by using the [Sync Module]({% link _docs_operate/modules.md %}#sync).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/de35cc09-894e-431f-819a-33bc7363ea30" id="6y2O3PCGpyGD"></iframe></div>

### Receive the RelationshipRequest

The Templator must first [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}) in order to receive the data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"` as `status` previously created by the Requestor and therefore the RelationshipRequest. The synchronization causes the `transport.relationshipChanged` [Connector event]({% link _docs_integrate/connector-events.md %}) to be triggered and the `result` of the response after synchronization contains the information about the created Relationship. In particular, the `id` of the Relationship and the `id` of the associated [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipchange) with `"Creation"` as `type` and `"Pending"` as `status` can be read from it.

{% include copy-notice description="Read the `id` of the Relationship from the `relationships.id` property and the `id` of the RelationshipChange from the `relationships.changes.id` property of the synchronization `result` for the next step." %}

### Accept the RelationshipRequest

If the Templator accepts the RelationshipRequest, the `status` of the data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) will change from `"Pending"` to `"Active"` and therefore an active Relationship between the Templator and the Requestor will be established. In addition, the `transport.relationshipChanged` [Connector event]({% link _docs_integrate/connector-events.md %}) will be triggered. To accept the RelationshipRequest, consult the [Accept RelationshipChange]({% link _docs_use-cases/use-case-transport-accept-relationshipchange.md %}) use case description and specify the `id` of the Relationship and the `id` of the associated RelationshipChange.

For rejecting the RelationshipRequest and therefore not establishing an active Relationship between the Templator and the Requestor, take a look at the documentation of the [Reject RelationshipChange]({% link _docs_use-cases/use-case-transport-reject-relationshipchange.md %}) use case.
{: .notice--info}

### Get informed about the acceptance of the RelationshipRequest

Assuming the Requestor is a Connector, it must [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}) after the Templator has accepted the RelationshipRequest. The synchronization causes the `transport.relationshipChanged` [Connector event]({% link _docs_integrate/connector-events.md %}) to be triggered and the `result` of the response after synchronization shows in particular that the `status` of the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) has been changed from `"Pending"` to `"Active"` and that the `status` of the associated [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipchange) with `"Creation"` as `type` has been changed from `"Pending"` to `"Accepted"`. Now the Requestor is informed that the Templator has accepted the RelationshipRequest and therefore an active Relationship has been established between them. If the Requestor is an App user instead, they are informed about the acceptance of the RelationshipRequest analogously.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/650bd1ea-e0fd-489e-ab26-e7fe201ef59e" id="~uUgN3n5x3eT"></iframe></div>

## What's next?

After an active Relationship between the two Identities is established, they are able to share information with each other. For example, they can exchange Messages. A possible scenario that demonstrates how a Connector can send a Message to another Identity with which it has an active Relationship is described in the [Requests via Messages]({% link _docs_integrate/requests-via-messages.md %}) scenario documentation.
