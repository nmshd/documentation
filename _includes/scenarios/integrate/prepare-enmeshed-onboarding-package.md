Communication and sharing of information between a Connector and another Identity requires the existence of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between them. This guide describes how to create an onboarding package on a Connector that can then be used by other Identities to send a Relationship Request to the Connector.

## Create a RelationshipTemplate

The creation of a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) is the first required step in this process.
A RelationshipTemplate is a formal description of the aspects of a Relationship that can be established between two Identities. In particular, it can specify [Requests]({% link _docs_integrate/data-model-overview.md %}#request) sent from the one Identity to the other Identity, which must be accepted as a prerequisite for the establishment of the Relationship. <!--- For example, you can decide what data should be exchanged between the two Identities at the time the Relationship is established.-->

### Input for creating a RelationshipTemplate

To create a RelationshipTemplate on a Connector, the so-called Templator Connector, you need to follow the instructions described in the [Create own RelationshipTemplate]({% link _docs_use-cases/use-case-transport-create-own-relationshiptemplate.md %}) use case documentation using the following table values as input:

<!--- `POST /api/v2/RelationshipTemplates/Own` with the following JSON payload: --->

<!---```jsonc
{
  "maxNumberOfAllocations": <maximum number of allocations>,
  "expiresAt": "<expiration date>",
  "content": {
    //Content of the RelationshipTemplate
    ...
  }
}
``` --->

| Property                 | Value                                         |
| ------------------------ | --------------------------------------------- |
| `maxNumberOfAllocations` | `<maximum number of allocations>`             |
| `expiresAt`              | `"<expiration date of RelationshipTemplate>"` |
| `content`                | `<Content of RelationshipTemplate>`           |

You need to replace the placeholders marked with `<...>` appropriately. The `maxNumberOfAllocations` property is optional, so you can omit it. If you need help filling the `content` property or the `maxNumberOfAllocations` property with appropriate values, see the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) description in the [Data Model Overview]({% link _docs_integrate/data-model-overview.md %}). It is important to note that if you intend to use the RelationshipTemplate to establish a Relationship between the Templator Connector and an App user, you must use a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) as the value for the `content` property. In this case, the input must be as follows:

<!--- ```jsonc
{
  "maxNumberOfAllocations": <maximum number of allocations>,
  "expiresAt": "<expiration date>",
  "content": {
    //RelationshipTemplateContent
    "@type": "RelationshipTemplateContent",
    "title": "<title of RelationshipTemplate>",
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
``` --->

| Property                         | Value                                |
| -------------------------------- | ------------------------------------ |
| `maxNumberOfAllocations`         | `<maximum number of allocations>`    |
| `expiresAt`                      | `"<expiration date>"`                |
| `content.@type`                  | `"RelationshipTemplate"`             |
| `content.title`                  | `"<title of RelationshipTemplate>"`  |
| `content.metadata`               | `<custom metadata>`                  |
| `content.onNewRelationship`      | `<Specification of a Request>`       |
| `content.onExistingRelationship` | `<Specification of another Request>` |

The properties `content.title`, `content.metadata` and `content.onExistingRelationship` are optional, so you can omit them.

In case the `content` property of the RelationshipTemplate contains a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) and therefore in particular at least one [Request]({% link _docs_integrate/data-model-overview.md %}#request), you should [test the Requests' Validity]({% link _docs_integrate/requests-over-templates.md %}#check-your-requests-validity) before you create the RelationshipTemplate. How to send a Request via a RelationshipTemplate is explained in detail in the [Requests over Templates]({% link _docs_integrate/requests-over-templates.md %}) guide.
{: .notice--info}

<!---{% include rapidoc api_route_regex="^post /api/v2/RelationshipTemplates/Own$" %}--->

### Success response

If you have successfully created the RelationshipTemplate on the Templator Connector on a certain Device, you will receive a success response from which you can read the result:

<!--- ```jsonc
{
  "result": {
    "id": "<ID of RelationshipTemplate>",
    "isOwn": true,
    "createdBy": "<Address of your Connector>",
    "createdByDevice": "<ID of Device>",
    "createdAt": "<creation date>",
    "expiresAt": "<expiration date>",
    "content": {
      //Content of the RelationshipTemplate
      ...
    },
    "truncatedReference": "<truncated reference of RelationshipTemplate>",
    "maxNumberOfAllocations": <maximum number of allocations>,
    "secretKey": "<secret key of RelationshipTemplate"
  }
}
``` --->

| Property                 | Value                                             |
| ------------------------ | ------------------------------------------------- |
| `id`                     | `"<ID of RelationshipTemplate>"`                  |
| `isOwn`                  | `true`                                            |
| `createdBy`              | `"<Address of your Connector>"`                   |
| `createdByDevice`        | `"<ID of Device>"`                                |
| `createdAt`              | `"<creation date of RelationshipTemplate>"`       |
| `expiresAt`              | `"<expiration date of RelationshipTemplate>"`     |
| `content`                | `<Content of RelationshipTemplate>`               |
| `truncatedReference`     | `"<truncated reference of RelationshipTemplate>"` |
| `maxNumberOfAllocations` | `<maximum number of allocations>`                 |
| `secretKey`              | `"<secret key of RelationshipTemplate"`           |

{% include copy-notice description="The ID of the RelationshipTemplate can be read from the `id` property. Save it so that you can refer to your RelationshipTemplate later. For the same reason, save the values of the `truncatedReference` and `secretKey` properties." %}

## Onboarding

Before an Identity can establish a Relationship with the Templator Connector, it must send a Relationship Request specifying the ID of a valid RelationshipTemplate owned by the Templator Connector. Depending on whether the Identity is an App user or another Connector, the so-called Requestor Connector, a different approach must be used to make the RelationshipTemplate available to it:

- Onboarding of an App user: Scan the QR Code of the RelationshipTemplate.
- Onboarding of another Connector: Load the RelationshipTemplate onto it.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/d03afadd-af30-4b08-abd6-c8f3d05d42db" id="rW5NlwcVLvBH"></iframe></div>

<!--- [![High level architecture diagram of enmeshed components and layers]({{ '/assets/images/integrate/Prepare onboarding package.svg' | relative_url }}){: .align-center}]({{ '/assets/images/integrate/Prepare onboarding package.svg' | relative_url }}) --->

<!--- Not magnifiable version: ![High level architecture diagram of enmeshed components and layers]({{ '/assets/images/integrate/Prepare enmeshed onboarding package.svg' | relative_url }}){: .align-center} --->

### Onboarding of an App user

If an App user wants to send a Relationship Request to your Connector, the App user must first scan a QR Code that contains the reference to a RelationshipTemplate owned by your Connector. To create this QR Code on your Connector, proceed as described in the [Get RelationshipTemplate]({% link _docs_use-cases/use-case-transport-get-relationship-template.md %}) use case documentation and specify the value `image/png` in the `Accept` header field. After scanning the QR Code, the App user receives the conditions for establishing a Relationship with your Connector as specified in the RelationshipTemplate. If these are accepted, the App user can now send a Relationship Request to your Connector.

<!--- `GET /api/v2/RelationshipTemplates/<ID of RelationshipTemplate>`, specifying the value `image/png` in the `Accept` header field. --->

<!--- You must replace the placeholder `<ID of RelationshipTemplate>` in the URL with the ID of the RelationshipTemplate obtained from the [success response]({% link _docs_integrate/prepare-enmeshed-onboarding-package.md %}#success-response) above. --->

<!--- For more details on how to send an HTTP request to create a QR Code containing the reference to a RelationshipTemplate, see the description of the [Get RelationshipTemplate]({% link _docs_use-cases/use-case-transport-get-relationship-template.md %}) use case.
{: .notice--info} --->

<!---{% include rapidoc api_route_regex="^get /api/v2/RelationshipTemplates/{id}$" %}--->

### Onboarding of another Connector

If another Connector, the so-called Requestor Connector, wants to send a Relationship Request to the Templator Connector, it must first load a RelationshipTemplate owned by the Templator Connector onto itself. This can be done by following the [Load RelationshipTemplate created by others]({% link _docs_use-cases/use-case-transport-load-relationship-template-created-by-others.md %}) use case description and providing the input:

<!--- HTTP request `POST /api/v2/RelationshipTemplates/Peer` --->

| Property    | Value                                             |
| ----------- | ------------------------------------------------- |
| `reference` | `"<truncated reference of RelationshipTemplate>"` |

<!--- ```jsonc
{
  "reference": "<truncated reference of RelationshipTemplate>"
}
``` --->

<!--- reference: UkxU... --->

In doing so, it is necessary to insert the value of the `truncatedReference` property read from the [success response]({% link _docs_integrate/prepare-enmeshed-onboarding-package.md %}#success-response) above into the `reference` property. Alternatively, it is possible to use the following input, where the ID and the secret key of the RelationshipTemplate obtained from the same [success response]({% link _docs_integrate/prepare-enmeshed-onboarding-package.md %}#success-response) must be specified:

| Property    | Value                                    |
| ----------- | ---------------------------------------- |
| `id`        | `"<ID of RelationshipTemplate>"`         |
| `secretKey` | `"<secret key of RelationshipTemplate>"` |

<!--- ```jsonc
{
  "id": "<ID of RelationshipTemplate>",
  "secretKey": "<secret key of RelationshipTemplate>"
}
``` --->

<!--- For more details on how to send a HTTP request to load a RelationshipTemplate created by a Connector onto another Connector, see the description of the [Load RelationshipTemplate created by others]({% link _docs_use-cases/use-case-transport-load-relationship-template-created-by-others.md %}) use case.
{: .notice--info} --->

When the RelationshipTemplate of the Templator Connector is successfully loaded onto the Requestor Connector, a success response is sent. This looks like the above [success response]({% link _docs_integrate/prepare-enmeshed-onboarding-package.md %}#success-response) except that the value of the property `isOwn` is now `false` instead of `true`. Assuming that there is no [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between the two Connectors yet and that the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) contains a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) in its `content` property, the Requestor Connector will additionally receive a new incoming Request. The Integrator of the Requestor Connector can accept it if they want to send a Relationship Request to the Templator Connector.

## What's next?

You have learned in this guide how to create an onboarding package on a Connector and make it available to other Identities. How another Connector can use it to send a Relationship Request and finally establish a Relationship to the Connector is explained in the Process received enmeshed onboarding package and create relationship guide.

<!--- TODO: insert: [Process received enmeshed onboarding package and create relationship]({_docs_integrate/process-received-enmeshed-onboarding-package-and-create-relationship.md}) --->

<!--- There is a similar article for an App user that has received an onboarding package --->
