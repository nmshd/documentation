Communication and sharing of information between a Connector and another Identity requires the existence of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between them. This guide describes how to create an onboarding package on a Connector that can then be used by other Identities to send a Relationship Request to the Connector. The creation of a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) is the first required step in this process.<!--- Fundamental to this is an understanding of how to create a [Relationship Template]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).---> <!--- Or receive Relationship Requests? --->

## Create a RelationshipTemplate

A RelationshipTemplate is a formal description of the aspects of a Relationship that can be established between two Identities. In particular, it can specify [Requests]({% link _docs_integrate/data-model-overview.md %}#request) sent from the one Identity to the other Identity, which must be accepted as a prerequisite for the establishment of the Relationship. <!--- For example, you can decide what data should be exchanged between the two Identities at the time the Relationship is established.-->

### Send Request

To create a RelationshipTemplate on your Connector, you need to send a Request by calling `POST /api/v2/RelationshipTemplates/Own` with the following JSON payload:

```jsonc
{
  "maxNumberOfAllocations": <maximum number of allocations>,
  "expiresAt": "<expiration date>",
  "content": {
    //Content of the RelationshipTemplate
    ...
  }
}
```

You need to replace the placeholders marked with <...> appropriately. The `maxNumberOfAllocations` property is optional, so you can omit it. If you need help filling the `content` property with appropriate values, see the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) description in the [Data Model Overview]({% link _docs_integrate/data-model-overview.md %}). It is important to note that if you intend to use the RelationshipTemplate to establish a Relationship between your Connector and an App user, you must use a data object of type [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) in this place. In this case, the JSON payload has the form:

```jsonc
{
  "maxNumberOfAllocations": <maximum number of allocations>,
  "expiresAt": "<expiration date>",
  "content": {
    //RelationshipTemplateContent
    "@type": "RelationshipTemplateContent",
    "title": "<your Relationship Template's title>",
    "metadata": <custom metadata>,
    "onNewRelationship": {
      //Specification of a Request
      ...
    },
    "onExistingRelationship": {
      //Specification of a Request
      ...
    }
  }
}
```

The properties `title`, `metadata` and `onExistingRelationship` are optional, so you can omit them.

In case the `content` property of the RelationshipTemplate contains Requests, you should [test the Requests' Validity]({% link _docs_integrate/requests-over-templates.md %}#check-your-requests-validity) before you create the RelationshipTemplate. How to send a Request via a RelationshipTemplate is explained in detail in the [Requests over Templates]({% link _docs_integrate/requests-over-templates.md %}) guide.
{: .notice--info}

For more details on how to send a Request to create a RelationshipTemplate, see the description of the [Create own RelationshipTemplate]({% link _docs_use-cases/use-case-transport-create-own-relationshiptemplate.md %}) usecase.

<!---{% include rapidoc api_route_regex="^post /api/v2/RelationshipTemplates/Own$" %}--->

<!---In case the `"content"` property of the Relationship Template is supplied and contains a data object of type [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent), you should [test the Requests' Validity][TODO: Link] of the Requests specified in the `"onNewRelationship"` and `"onExistingRelationship"` properties before you create the Relationship Template. The way of how to share a Request over a Relationship Template is explained in detail in the [Requests over Templates]({% link _docs_integrate/requests-over-templates.md %}) guide.
{: .notice--info} --->

### Success Response

If you have successfully created the RelationshipTemplate on your Connector on a certain Device, you will receive a success response in the following form:

```jsonc
{
  "result": {
    "id": "<your RelationshipTemplate's ID>",
    "isOwn": true,
    "createdBy": "<your Connector's ID>",
    "createdByDevice": "<your Device's ID>",
    "createdAt": "<creation date>",
    "expiresAt": "<expiration date>",
    "content": {
      //Content of the RelationshipTemplate
      ...
    },
    "truncatedReference": "<truncated reference>",
    "maxNumberOfAllocations": "<maximum number of allocations>",
    "secretKey": "<secret key>"
  }
}
```

{% include copy-notice description="The ID of the RelationshipTemplate can be read from the `id` property. Save it so that you can refer to your RelationshipTemplate later. For the same reason, save the value of the `truncatedReference` property." %}

## Onboarding

Before an Identity can establish a Relationship with your Connector, it must send a Relationship Request specifying the ID of a valid RelationshipTemplate owned by your Connector. Depending on whether the Identity is an App user or another Connector, a different approach must be used to make the RelationshipTemplate available to it:

- Onboarding of an App user: Scan the QR Code of the RelationshipTemplate.
- Onboarding of another Connector: Load the RelationshipTemplate onto it.

![High level architecture diagram of enmeshed components and layers]({{ '/assets/images/integrate/Prepare enmeshed onboarding package.svg' | relative_url }}){: .align-center}

### Onboarding of an App user

If we want to use the enmeshed App to send a Relationship Request to our Connector, we now have to create a QR Code one can scan with the App to retrieve the RelationshipTemplate... <!---This then can be used to send a Relationship Request to the Connector.--->

For this, execute the `GET /api/v2/RelationshipTemplates/{id}` route (Accept Header: image/png) to create a QR Code. Use the ID of the RelationshipTemplate from the [previous step]({% link _docs_integrate/prepare-enmeshed-onboarding-package.md %}#success-response) as the value for `{id}`.

For more details on how to send a Request to create a QR Code containing the reference to the RelationshipTemplate, see the description of the [Get RelationshipTemplate]({% link _docs_use-cases/use-case-transport-get-relationship-template.md %}) usecase.

<!---{% include rapidoc api_route_regex="^get /api/v2/RelationshipTemplates/{id}$" %}--->

### Onboarding of another Connector

If we want to establish a Relationship between another Connector and our Connector, we have to load the RelationshipTemplate on this Connector. You can do so by calling the `POST /api/v2/RelationshipTemplates/Peer` route with the following content. Use the value of the `truncatedReference` property you saved [before]({% link _docs_integrate/prepare-enmeshed-onboarding-package.md %}#success-response):

```jsonc
{
  "reference": "<UkxU...>"
}
```

Alternatively you can use:

```jsonc
{
  "id": "<string>",
  "secretKey": "<string>"
}
```

For more details on how to send a Request to load a RelationshipTemplate created by a Connector onto another Connector, see the description of the [Load RelationshipTemplate created by others]({% link _docs_use-cases/use-case-transport-load-relationship-template-created-by-others.md %}) usecase.

<!--- Other Connector: Can Accept the incoming Request (after loading the RelationshipTemplate) in order to send Relationship Request. --->

## What's next?

You have learned in this guide how to create an onboarding package on your Connector and make it available to other Identities. How a Connector can use it to send a Relationship Request and how to finally establish a Relationship is explained in the [Process received enmeshed onboarding package and create relationship]({% link _docs_integrate/process-received-enmeshed-onboarding-package-and-create-relationship.md %}) guide.
