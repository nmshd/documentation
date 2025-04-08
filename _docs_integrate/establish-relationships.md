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
  - category: Identities and Relationships
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

Communication and sharing of information between two Identities requires the existence of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between them. This guide describes how a Connector can establish an active Relationship to another Identity. Firstly, we explain how to [create a RelationshipTemplate]({% link _docs_integrate/establish-relationships.md %}#create-a-relationshiptemplate) on a Connector, the so-called templator, and how to [make the RelationshipTemplate available]({% link _docs_integrate/establish-relationships.md %}#make-the-relationshiptemplate-available) to the other Identity. The RelationshipTemplate can then be used by the other Identity, the so-called initiator, to [initiate a Relationship]({% link _docs_integrate/establish-relationships.md %}#initiate-a-relationship) with the templator. This Relationship can finally be accepted by the templator in order to [establish an active Relationship]({% link _docs_integrate/establish-relationships.md %}#establish-an-active-relationship) between them.

## Create a RelationshipTemplate

The creation of a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) on the templator is the first required step in the process of establishing a Relationship.
A RelationshipTemplate is a formal description of the aspects of a Relationship that can be established between two Identities. In particular, it can specify a [Request]({% link _docs_integrate/data-model-overview.md %}#request) sent from the templator to the initiator, which must be accepted by the initiator as a prerequisite for the establishment of the Relationship.

### Input for Creating a RelationshipTemplate

To create a RelationshipTemplate on the templator, you need to follow the instructions described in the [Create own RelationshipTemplate]({% link _docs_use-cases/use-case-transport-create-own-relationshiptemplate.md %}) use case documentation using the following JSON payload as input:

```jsonc
{
  "maxNumberOfAllocations": <maximum number of allocations>,
  "expiresAt": "<expiration date of RelationshipTemplate>",
  "content": {
    // RelationshipTemplateContent or ArbitraryRelationshipTemplateContent
    ...
  }
}
```

You need to replace the placeholders marked with `<...>` appropriately as usual. The `maxNumberOfAllocations` property is optional, so you can omit it. If you need help filling the `content` property or the `maxNumberOfAllocations` property with appropriate values, see the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) description in the Data Model Overview. It is important to note that if you intend to use the RelationshipTemplate to establish a Relationship between the templator and an App user, you must use a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) as the value of the `content` property. The input must then be as follows:

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

The properties `content.title`, `content.metadata` and `content.onExistingRelationship` are optional, so you can omit them. In case the `content` property of the RelationshipTemplate contains a RelationshipTemplateContent and therefore in particular at least one [Request]({% link _docs_integrate/data-model-overview.md %}#request), you should [check the Requests' validity]({% link _docs_integrate/requests-via-relationshiptemplates.md %}#check-the-requests-validity) before you create the RelationshipTemplate. An Identity to which the RelationshipTemplate will be made available and which does not yet have a Relationship to the templator will receive the Request specified in the `onNewRelationship` property of the [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent). However, if a Relationship already exists between them and a Request has been specified in the `onExistingRelationship` property of the RelationshipTemplateContent, the Identity will receive this Request instead.

How to send a Request via a RelationshipTemplate is explained in detail in the [Requests via RelationshipTemplates]({% link _docs_integrate/requests-via-relationshiptemplates.md %}) guide.
{: .notice--info}

If the RelationshipTemplate is intended to establish a Relationship between the templator and another Connector, an [ArbitraryRelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshiptemplatecontent) can be used instead of a RelationshipTemplateContent as the value of the [RelationshipTemplate's]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) `content`. An ArbitraryRelationshipTemplateContent has a single `value` property with no type restriction and is appropriate if the standard way is insufficient.

#### Personalization of a RelationshipTemplate

The optional property `forIdentity` of a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) can be added to the [input for creating a RelationshipTemplate]({% link _docs_integrate/establish-relationships.md %}#input-for-creating-a-relationshiptemplate) in order to personalize it.
If the RelationshipTemplate is only for creating a Relationship with a single known [Identity]({% link _docs_integrate/data-model-overview.md %}#identity), you can set that Identity's `address` in the RelationshipTemplate:

```jsonc
{
  // ...
  "content": {
    // RelationshipTemplateContent or ArbitraryRelationshipTemplateContent
    ...
  },
  "forIdentity": "<address of Identity the RelationshipTemplate is intended for>"
}
```

Only that Identity will be able to continue with establishing a Relationship. This also protects sensitive data of that Identity contained in the RelationshipTemplate from outside access.

#### Password Protection of a RelationshipTemplate

The optional property `passwordProtection` of a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) can be added to the [input for creating a RelationshipTemplate]({% link _docs_integrate/establish-relationships.md %}#input-for-creating-a-relationshiptemplate) to provide password protection.
This allows the RelationshipTemplate to be protected from unauthorized access.
Only the Identities that know the password of the RelationshipTemplate will be able to continue with establishing a Relationship.
If the RelationshipTemplate is to be protected by a password, the corresponding password must be specified within its `passwordProtection.password` property.

```jsonc
{
  // ...
  "content": {
    // RelationshipTemplateContent or ArbitraryRelationshipTemplateContent
    ...
  },
  "passwordProtection": {
    "password": "<password of RelationshipTemplate>",
    "passwordIsPin": <can be set to true if the password is a pin>
  }
}
```

To configure the input field for password entry in the UI of the App, the value of the optional field `passwordProtection.passwordIsPin` can be set to `true` if the password consists of 4 to 16 digits.
In this case, the password is interpreted as a pin and a corresponding input field is displayed when the pin needs to be entered.
However, if the value is `undefined`, a regular input field for entering the password is displayed regardless of whether it could also be interpreted as a pin.

### Successfully Created RelationshipTemplate

If you have successfully created the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) on the templator, you will receive a success response from which you can read its `id`. As the templator is the creator of the RelationshipTemplate, the `createdBy` property contains the address of the templator. For this reason, the value of the `isOwn` property is set to `true` in this context.

{% include copy-notice description="Save the `id` of the RelationshipTemplate so that you can refer to it and make it available to other Identities later. For the same reason, save the value of the property `truncatedReference`." %}

## Make the RelationshipTemplate Available

For an Identity to initiate a Relationship with the templator, it must use a valid [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) which is owned by the templator. Depending on whether the Identity is a Connector or an App user, a different approach must be used to make the RelationshipTemplate available to the Identity:

- [Make it available to a Connector]({% link _docs_integrate/establish-relationships.md %}#make-it-available-to-a-connector): Load the RelationshipTemplate onto it.
- [Make it available to an App user]({% link _docs_integrate/establish-relationships.md %}#make-it-available-to-an-app-user): Scan the QR code of the RelationshipTemplate.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/d03afadd-af30-4b08-abd6-c8f3d05d42db" id="rW5NlwcVLvBH"></iframe></div>

### Make It Available to a Connector

If a Connector wants to initate a Relationship with the templator, it must first load a RelationshipTemplate, which is owned by the templator, onto itself. This can be done by following the [Load RelationshipTemplate created by others]({% link _docs_use-cases/use-case-transport-load-relationshiptemplate-created-by-others.md %}) use case description and providing the input:

```jsonc
{
  "reference": "<truncated reference of RelationshipTemplate>"
}
```

In doing so, it is necessary to insert the value of the `truncatedReference` property read from the [created RelationshipTemplate]({% link _docs_integrate/establish-relationships.md %}#successfully-created-relationshiptemplate) into the `reference` property.

When the RelationshipTemplate of the templator is successfully loaded onto the Connector, the `transport.peerRelationshipTemplateLoaded` [Connector event]({% link _docs_integrate/connector-events.md %}) is triggered and a success response is sent. This success response looks like the success response you receive when you have [successfully created a RelationshipTemplate]({% link _docs_integrate/establish-relationships.md %}#successfully-created-relationshiptemplate) on the templator, except that the value of the property `isOwn` is now `false` instead of `true`. Assuming that there is no Relationship between the Connector and the templator yet and that the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) contains a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) in its `content` property, the Connector will additionally receive a new incoming Request. The Integrator of the Connector can [accept]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) it if they want to [initiate a Relationship]({% link _docs_integrate/establish-relationships.md %}#initiate-it-as-a-connector) with the templator.

### Make It Available to an App User

If an App user wants to initiate a Relationship with the templator, the App user must first scan a QR code that contains the reference to a RelationshipTemplate which is owned by the templator. To create this QR code on the templator, proceed as described in the documentation of the [Get RelationshipTemplate]({% link _docs_use-cases/use-case-transport-get-relationshiptemplate.md %}) use case, use the `id` of the [created RelationshipTemplate]({% link _docs_integrate/establish-relationships.md %}#successfully-created-relationshiptemplate) and specify the value `image/png` in the `Accept` header field. After scanning the QR code, the App user receives the conditions for establishing a Relationship to the templator as specified in the RelationshipTemplate. If these are accepted, the App user can now [initiate a Relationship]({% link _docs_integrate/establish-relationships.md %}#initiate-it-as-an-app-user) with the templator.

## Initiate a Relationship

After the templator has created a RelationshipTemplate and made it available to another Identity, this Identity can use it to initiate a Relationship with the templator. For this reason, this other Identity is also referred to below as the initiator.

### Check the Feasibility of a Relationship Initiation

There may be several reasons why a RelationshipTemplate has been received but it is not possible to establish a Relationship based on it.
The RelationshipTemplate could have already expired, for example, or the templator has deleted its [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) in the meantime.
The [Check if Relationship can be created]({% link _docs_use-cases/use-case-transport-check-if-relationship-can-be-created.md %}) use case can be executed to check whether a Relationship currently can be initiated based on a given RelationshipTemplate.
Consult the use case documentation for more details on the various reasons why it may not be possible to [initiate a Relationship]({% link _docs_integrate/establish-relationships.md %}#initiate-a-relationship).

### Initiate It as a Connector

Assuming that the initiator in this section is a Connector, our starting situation is that the initiator has successfully loaded the [created RelationshipTemplate]({% link _docs_integrate/establish-relationships.md %}#successfully-created-relationshiptemplate) onto itself. The received [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) may or may not contain a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) in its `content` property. We now describe separately in both cases how the initiator can use the RelationshipTemplate to initiate a Relationship with the templator. An overview of this procedure is given in the following diagram.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/bf994ea3-bc3b-414b-8fd8-f55c2d71d9c6" id="Ez1OCKfT1U40"></iframe></div>

#### RelationshipTemplate With RelationshipTemplateContent

We assume that there is no [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between the initiator and the templator yet and that a RelationshipTemplateContent is used within the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate). In this case, the initiator receives a new incoming Request after loading the RelationshipTemplate and the `consumption.incomingRequestReceived` [Connector event]({% link _docs_integrate/connector-events.md %}) is triggered. By proceeding as described in the [Query incoming Requests]({% link _docs_use-cases/use-case-consumption-query-incoming-requests.md %}) use case documentation and specifying `source.reference=<ID of RelationshipTemplate>` as a query parameter, this Request can be queried on the initiator. The `result` contains the corresponding [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest), from which you can read the `id` of the Request.

{% include copy-notice description="Save the `id` of the incoming Request so that you can accept or reject it." %}

The `content` of the LocalRequest is the Request specified in the `onNewRelationship` property of the [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent). This Request defines the conditions for establishing an active Relationship between the initiator and the templator. If the initiator agrees to them, it can initiate a Relationship with the templator by accepting the Request.

The [Request Module]({% link _docs_explore/61-runtime.md %}#request-module) enabled by default ensures that the initiator receives a new incoming Request when the RelationshipTemplate is loaded and that a Relationship is initiated by accepting the incoming Request. If an Integrator of a Connector has disabled the Request Module, they must trigger these and other processes manually, which is not described in this guide. Please note, however, that App users cannot deactivate the Request Module, which is why their processes are more standardized.
{: .notice--warning}

Accepting the Request is done by following the instructions of the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case and providing the `id` of the Request as well as an appropriate input to build the [Response]({% link _docs_integrate/data-model-overview.md %}#response) of the initiator to the Request. In case of success, the `status` of the LocalRequest will change from `"ManualDecisionRequired"` to `"Decided"` and the `consumption.incomingRequestStatusChanged` [Connector event]({% link _docs_integrate/connector-events.md %}) will be triggered. The Response of the initiator to the Request will be contained within the `response.content` property of the LocalRequest. By accepting the Request, a data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"` as `status` is created and the `transport.relationshipChanged` [Connector event]({% link _docs_integrate/connector-events.md %}) is triggered. The Relationship's `creationContent.response` property contains the initiator's Response to the Request.

It is not necessary, but you can query this Relationship by proceeding as described in the [Query Relationships]({% link _docs_use-cases/use-case-transport-query-relationships.md %}) use case documentation, using the query parameter `templateId=<ID of RelationshipTemplate>`. If you decide to do this, you will receive a `result` as response from which you can read the `id` of the Relationship.
{: .notice--info}

Note that it is of course also possible to reject the incoming Request, if the initiator does not wish to establish an active Relationship to the templator under the given conditions. In order to do this, make use of the documentation of the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case. More detailed information about how to [reject]({% link _docs_integrate/requests-via-relationshiptemplates.md %}#reject) as well as how to [accept]({% link _docs_integrate/requests-via-relationshiptemplates.md %}#accept) an incoming Request can also be found in the [Requests via RelationshipTemplates]({% link _docs_integrate/requests-via-relationshiptemplates.md %}) guide.
{: .notice--info}

#### RelationshipTemplate With ArbitraryRelationshipTemplateContent

We now consider the situation in which the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) loaded onto the initiator contains an [ArbitraryRelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshiptemplatecontent) in its `content` property instead of a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent). In this case, the initiator does not receive an incoming Request. Nevertheless, it can initiate a Relationship with the templator by explicitly creating a data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"` as `status` based on the RelationshipTemplate. To do this, follow the instructions of the [Create Relationship with RelationshipTemplate]({% link _docs_use-cases/use-case-transport-create-relationship-with-relationshiptemplate.md %}) use case, use an [ArbitraryRelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshipcreationcontent) as `creationContent` and provide as input:

```jsonc
{
  "templateId": "<ID of RelationshipTemplate>",
  "creationContent": {
    // ArbitraryRelationshipCreationContent
    ...
  }
}
```

In case of success, the `transport.relationshipChanged` [Connector event]({% link _docs_integrate/connector-events.md %}) will be triggered and you will receive a `result` as response, which contains the created data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship). The specified ArbitraryRelationshipCreationContent is contained within the `creationContent` property of the Relationship.

Saving the `id` of the Relationship is useful if you want to return to the created Relationship later in order to retrace changes to the Relationship.
{: .notice--info}

### Initiate It as an App user

As already mentioned in the description of the [input for creating a RelationshipTemplate]({% link _docs_integrate/establish-relationships.md %}#input-for-creating-a-relationshiptemplate), a RelationshipTemplateContent must be used as the value of the `content` property of the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) if you intend to use the RelationshipTemplate to establish a Relationship between the templator and an App user. Assuming that there is no Relationship between them yet, the App user receives the Request specified in the `onNewRelationship` property of the [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) after scanning the QR code associated with the RelationshipTemplate. The App user has the option of accepting or rejecting the Request. If they accept the Request appropriately, a Relationship with the templator is initiated. This means the creation of a data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"` as `status`. The Response of the App user to the Request is contained within the `creationContent.response` property of the Relationship.

Please note that the general procedure is the same if an App user instead of a Connector wants to initiate a Relationship with the templator. The difference is that the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) does not need to contain a RelationshipTemplateContent in its `content` property if it is intended to be used by a Connector.
{: .notice--info}

### Undo the Initiation of a Relationship

The [initiation of a Relationship]({% link _docs_integrate/establish-relationships.md %}#initiate-a-relationship) by the initiator leads to the creation of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"` as `status`.
After that, the templator has the option of [establishing an active Relationship]({% link _docs_integrate/establish-relationships.md %}#establish-an-active-relationship) by [accepting the pending Relationship]({% link _docs_integrate/establish-relationships.md %}#accept-the-pending-relationship).
Before the templator has accepted the pending Relationship, the Integrator of the initiator may change their mind and no longer want to establish an active Relationship.
In this case, the initiator can revoke the pending Relationship by executing the [Revoke Relationship]({% link _docs_use-cases/use-case-transport-revoke-relationship.md %}) use case.
As a result, the `status` of the Relationship changes from `"Pending"` to `"Revoked"`.
This revoked Relationship can then no longer be accepted by the templator in order to establish an active Relationship.

If the initiator [initiates another Relationship]({% link _docs_integrate/establish-relationships.md %}#initiate-a-relationship) at a later point in time, a new [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) is created with `"Pending"` as `status`.
The `status` of the previous Relationship is not changed from `"Revoked"` to `"Pending"`.
This means that previous attempts to establish an active Relationship, which were then revoked by the initiator, can still be viewed by executing the [Query Relationships]({% link _docs_use-cases/use-case-transport-query-relationships.md %}) use case using the `status=Revoked` query parameter.
{: .notice--info}

## Establish an Active Relationship

After the initiator has initiated the Relationship, the Integrator of the templator can accept it if they want to establish an active Relationship to the initiator. We now explain all required steps for establishing an active Relationship, including the necessary synchronization of the templator and any other Connector that may be involved at certain points in time. Please note that the synchronization can also be automated by using the [Sync Module]({% link _docs_operate/modules.md %}#sync).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/ea70fd21-5157-46f2-8411-d5ca55fbba78" id="6y2O3PCGpyGD"></iframe></div>

### Receive the Pending Relationship

The templator must first [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}) in order to receive the data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"` as `status` previously created by the initiator. The synchronization causes the `transport.relationshipChanged` [Connector event]({% link _docs_integrate/connector-events.md %}) to be triggered. To view the created Relationship, proceed as described in the [Query Relationships]({% link _docs_use-cases/use-case-transport-query-relationships.md %}) use case documentation and specify `<ID of RelationshipTemplate>` as the value for the `templateId` query parameter. In particular, the `id` of the Relationship can be read from the `result`.

{% include copy-notice description="Read the `id` of the Relationship from the `result` for the next step." %}

### Accept the Pending Relationship

If the templator accepts the pending Relationship, the `status` of the data object of type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) will change from `"Pending"` to `"Active"` and therefore an active Relationship between the templator and the initiator will be established. In addition, the `transport.relationshipChanged` [Connector event]({% link _docs_integrate/connector-events.md %}) will be triggered. To accept the pending Relationship, consult the [Accept Relationship]({% link _docs_use-cases/use-case-transport-accept-relationship.md %}) use case description and specify the `id` of the Relationship.

For rejecting the pending Relationship and therefore not establishing an active Relationship between the templator and the initiator, take a look at the documentation of the [Reject Relationship]({% link _docs_use-cases/use-case-transport-reject-relationship.md %}) use case. By rejecting a pending [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship), its `status` changes from `"Pending"` to `"Rejected"`. This rejected Relationship can then no longer be accepted by the templator in order to establish an active Relationship. If the templator has rejected a pending Relationship and the initiator [initiates another Relationship]({% link _docs_integrate/establish-relationships.md %}#initiate-a-relationship) at a later point in time, a new Relationship is created with `"Pending"` as `status`.
The `status` of the previous Relationship is not changed from `"Rejected"` to `"Pending"`.
This means that previous attempts to establish an active Relationship, which were then rejected by the templator, can still be viewed by executing the [Query Relationships]({% link _docs_use-cases/use-case-transport-query-relationships.md %}) use case using the `status=Rejected` query parameter.
{: .notice--info}

### Get Informed About the Acceptance of the Relationship

Assuming the initiator is a Connector, it must [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}) after the templator has accepted the Relationship. The synchronization causes the `transport.relationshipChanged` [Connector event]({% link _docs_integrate/connector-events.md %}) to be triggered as the `status` of the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) has been changed from `"Pending"` to `"Active"`. Now the initiator is informed that the templator has accepted the Relationship and therefore an active Relationship has been established between them. If the initiator is an App user instead, they are informed about the acceptance of the Relationship analogously.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/601bd687-1c78-45be-8d3c-ae589ab8e54b" id="~uUgN3n5x3eT"></iframe></div>

## What's Next?

After an active Relationship between the two Identities is established, they are able to share information with each other. For example, they can exchange Messages. A possible scenario that demonstrates how a Connector can send a Message to another Identity with which it has an active Relationship is described in the [Requests via Messages]({% link _docs_integrate/requests-via-messages.md %}) scenario documentation. It is also possible for both Identities involved in the Relationship to [terminate the Relationship]({% link _docs_integrate/terminate-relationships.md %}) as soon as it is no longer wanted.
