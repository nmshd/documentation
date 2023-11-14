Communication and sharing of information between a Connector and another Identity requires the existence of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between them. This guide describes how to create an onboarding package on a Connector that can then be used by other Identities to send a Relationship Request to the Connector. The creation of a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) is the first required step in this process.<!--- Fundamental to this is an understanding of how to create a [Relationship Template]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).--->

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
    "title": "<your RelationshipTemplate's title>",
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
    "truncatedReference": "<your RelationshipTemplate's truncated reference>",
    "maxNumberOfAllocations": <maximum number of allocations>,
    "secretKey": "<your RelationshipTemplate's secret key>"
  }
}
```

{% include copy-notice description="The ID of the RelationshipTemplate can be read from the `id` property. Save it so that you can refer to your RelationshipTemplate later. For the same reason, save the values of the `truncatedReference` and `secretKey` properties." %}

## Onboarding

Before an Identity can establish a Relationship with your Connector, it must send a Relationship Request specifying the ID of a valid RelationshipTemplate owned by your Connector. Depending on whether the Identity is an App user or another Connector, a different approach must be used to make the RelationshipTemplate available to it:

- Onboarding of an App user: Scan the QR Code of the RelationshipTemplate.
- Onboarding of another Connector: Load the RelationshipTemplate onto it.

[![High level architecture diagram of enmeshed components and layers]({{ '/assets/images/integrate/Prepare onboarding package.svg' | relative_url }}){: .align-center}]({{ '/assets/images/integrate/Prepare onboarding package.svg' | relative_url }})

<!--- Not magnifiable version: ![High level architecture diagram of enmeshed components and layers]({{ '/assets/images/integrate/Prepare enmeshed onboarding package.svg' | relative_url }}){: .align-center} --->

### Onboarding of an App user

If an App user wants to send a Relationship Request to your Connector, the App user must first scan a QR Code that contains the reference to a RelationshipTemplate owned by your Connector. By sending the Request `GET /api/v2/RelationshipTemplates/<id>`, specifying the value `image/png` in the `Accept` header field, you can create this QR Code on your Connector. You must replace the placeholder `<id>` in the URL with the ID of the RelationshipTemplate obtained from the [success response]({% link _docs_integrate/prepare-enmeshed-onboarding-package.md %}#success-response) above.

For more details on how to send a Request to create a QR Code containing the reference to a RelationshipTemplate, see the description of the [Get RelationshipTemplate]({% link _docs_use-cases/use-case-transport-get-relationship-template.md %}) usecase.
{: .notice--info}

<!---{% include rapidoc api_route_regex="^get /api/v2/RelationshipTemplates/{id}$" %}--->

After scanning the QR Code, the App user receives the conditions for establishing a Relationship with your Connector as specified in the RelationshipTemplate. If these are accepted, the App user can now send a Relationship Request to your Connector.

### Onboarding of another Connector

If another Connector wants to send a Relationship Request to your Connector, it must first load a RelationshipTemplate owned by your Connector onto itself. This can be done by sending the Request `POST /api/v2/RelationshipTemplates/Peer` on the other Connector with the following JSON payload: <!--- reference: UkxU... --->

```jsonc
{
  "reference": "<your RelationshipTemplate's truncatedReference>"
}
```

In doing so, it is necessary to insert the value of the `truncatedReference` property read from the [success response]({% link _docs_integrate/prepare-enmeshed-onboarding-package.md %}#success-response) above into the `reference` property. Alternatively, it is possible to use the following JSON payload specifying the ID and the secret key of the RelationshipTemplate obtained from the same [success response]({% link _docs_integrate/prepare-enmeshed-onboarding-package.md %}#success-response):

```jsonc
{
  "id": "<your RelationshipTemplate's ID>",
  "secretKey": "<your RelationshipTemplate's secret key>"
}
```

For more details on how to send a Request to load a RelationshipTemplate created by a Connector onto another Connector, see the description of the [Load RelationshipTemplate created by others]({% link _docs_use-cases/use-case-transport-load-relationship-template-created-by-others.md %}) usecase.
{: .notice--info}

When the RelationshipTemplate of your Connector is successfully loaded onto the other Connector, a success response is sent. This looks like the above [success response]({% link _docs_integrate/prepare-enmeshed-onboarding-package.md %}#success-response) except that the value of the property `isOwn` is now `false` instead of `true`. Assuming that there is no Relationship between the two Connectors yet and that the RelationshipTemplate contains a data object of type RelationshipTemplateContent in its `content` property, the other Connector will additionally receive a new incoming Request created internally. This can be accepted it if it is wanted to send a Relationship Request to your Connector.

## What's next?

You have learned in this guide how to create an onboarding package on your Connector and make it available to other Identities. How another Connector can use it to send a Relationship Request and finally establish a Relationship to your Connector is explained in the Process received enmeshed onboarding package and create relationship guide.

<!--- TODO: insert: [Process received enmeshed onboarding package and create relationship]({_docs_integrate/process-received-enmeshed-onboarding-package-and-create-relationship.md}) --->

<!--- There is a similar article for an App user that receives an onboarding package --->
