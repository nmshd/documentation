---
# Start automatic generation
permalink: integrate/form-fields-within-requests
published: true
title: "Form Fields Within Requests"
type: scenario
toc: true
properties:
  - id: SC122
  - category: Working With Requests
  - description: Using a FormFieldRequestItem, a form field can be defined within a Request
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: DONE
  - documentation status: DONE
  - published: true
  - link: form-fields-within-requests
require:
required_by:
# End automatic generation
---

Form fields within Requests provide a way to collect information without the need to create corresponding [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes).
Using Attributes makes sense when the data is intended to be [updated by succession]({% link _docs_integrate/update-attributes-by-succession.md %}) later on, [shared further]({% link _docs_integrate/share-attributes-with-peer.md %}), or when it aligns with a predefined, [standardized format]({% link _docs_integrate/attribute-values.md %}).
In contrast, form fields are well suited for obtaining context-specific data that is only needed for a particular interaction.
They are named as such because they serve the purpose typically associated with form fields in forms.
Using form fields is especially valuable in cases such as:

- A company asks a customer for feedback on a product or service to gain insights for improvement.
- A medical practice requests the medical history of a patient specific to a healthcare appointment or procedure.
- A faculty of a university collects information for an event from a participating PhD student, such as conference registration details, workshop preferences, or accommodation needs.

In this guide, we explain how a Connector, hereinafter referred to as the Sender, can send different form fields to another Connector, the so-called Recipient.
Since understanding this process requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and how to use them in general, the [Request and Response introduction]({% link _docs_integrate/request-and-response-introduction.md %}) should be consulted before continuing reading this guide.

Please note that the general procedure is the same if the Connector wants to send form fields to an App user instead of another Connector.
For reasons of clarity, this guide focuses on the process with two Connectors.
{: .notice--info}

## Request Containing Form Fields

The Sender wants to send form fields to the Recipient.
To do this, the Sender must first create a suitable Request, which it can then send to the Recipient.
In the following subsections, we describe the general appearance of a Request containing form fields.

### Role of FormFieldRequestItem

For creating a form field, the Sender needs to insert a single RequestItem of type [FormFieldRequestItem]({% link _docs_integrate/data-model-overview.md %}#formfieldrequestitem) into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request).
As the Recipient must understand what information is to be requested by the form field, each FormFieldRequestItem must be provided with a `title`.
Different kinds of form fields can be represented by a FormFieldRequestItem.
The kind of form field can be specified within the `settings` property of the FormFieldRequestItem.
The possible settings are [BooleanFormFieldSettings]({% link _docs_integrate/data-model-overview.md %}#booleanformfieldsettings), [DateFormFieldSettings]({% link _docs_integrate/data-model-overview.md %}#dateformfieldsettings), [DoubleFormFieldSettings]({% link _docs_integrate/data-model-overview.md %}#doubleformfieldsettings), [IntegerFormFieldSettings]({% link _docs_integrate/data-model-overview.md %}#integerformfieldsettings), [RatingFormFieldSettings]({% link _docs_integrate/data-model-overview.md %}#ratingformfieldsettings), [SelectionFormFieldSettings]({% link _docs_integrate/data-model-overview.md %}#selectionformfieldsettings) and [StringFormFieldSettings]({% link _docs_integrate/data-model-overview.md %}#stringformfieldsettings), and are each described in the data model overview.

### Send Multiple Form Fields

It is possible to send multiple form fields at the same time instead of just a single form field.
Several FormFieldRequestItems or suitable [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) can be inserted into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) containing form fields for this purpose.
If a RequestItemGroup is to be used in order to send multiple form fields to the Recipient at the same time, the corresponding FormFieldRequestItems must be inserted into the `items` property of it.

Please note that FormFieldRequestItems can be mixed with other [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitems).
A Request can therefore contain both form fields and Attribute related RequestItems, such as for [reading Attributes from a peer]({% link _docs_integrate/read-attributes-from-peer.md %}).
{: .notice--info}

## Send and Receive the Request

The Sender that wants to send form fields to the Recipient may or may not already have a Relationship with the Recipient.
Depending on which is the case, a different method can be used to send the [Request containing form fields]({% link _docs_integrate/form-fields-within-requests.md %}#request-containing-form-fields).
There are two ways to send the Request containing form fields created by the Sender to the Recipient.

### Request via RelationshipTemplate

If there is currently no Relationship between the Sender and the Recipient, this approach must be used.
But it is also possible for the Sender to use a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) to send a Request to the Recipient if there is already an active Relationship between them.
All details on how to send and receive a Request via a RelationshipTemplate in general can be found in the [Requests via RelationshipTemplates]({% link _docs_integrate/requests-via-relationshiptemplates.md %}) guide.

### Request via Message

The Sender only has the option of sending a Request to the Recipient via a [Message]({% link _docs_integrate/data-model-overview.md %}#message) if there is already an active Relationship between them.
All information on how to send and receive a Request via a Message can be found in the [Requests via Messages]({% link _docs_integrate/requests-via-messages.md %}) guide.

## Accept the Request

After the Recipient has received the [Request containing form fields]({% link _docs_integrate/form-fields-within-requests.md %}#request-containing-form-fields), it can fill out all or some of the form fields sent by the Sender to accept it.
To do this, proceed as described in the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case documentation and specify the `id` of the received [Request]({% link _docs_integrate/data-model-overview.md %}#request).
It must also be decided and specified for each FormFieldRequestItem contained in the Request containing form fields whether it should be accepted or rejected.

If the Recipient does not want to fill out any form field sent by the Sender and, therefore, does not want to accept the Request containing form fields of the Sender, it can reject it as a whole as well.
For this, follow the instructions of the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case.
{: .notice--info}

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/35209f55-89ed-4bff-96e5-61021fb74edf" id="AZa_znY.QyPU"></iframe></div>

### Accept a FormFieldRequestItem

If the Recipient agrees to fill out a form field sent by the Sender, it can accept the associated FormFieldRequestItem contained in the corresponding Request.
The [AcceptFormFieldRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptformfieldrequestitemparameters) must be used for that.
The form field represented by the FormFieldRequestItem must be filled out using the `response` parameter.
The `response` parameter must have a type that matches the `settings` of the [FormFieldRequestItem]({% link _docs_integrate/data-model-overview.md %}#formfieldrequestitem).
For example, when using [BooleanFormFieldSettings]({% link _docs_integrate/data-model-overview.md %}#booleanformfieldsettings), a `response` of type boolean must be used.
The expected type of `response` can be found in the descriptions of the different possible `settings`, which are [BooleanFormFieldSettings]({% link _docs_integrate/data-model-overview.md %}#booleanformfieldsettings), [DateFormFieldSettings]({% link _docs_integrate/data-model-overview.md %}#dateformfieldsettings), [DoubleFormFieldSettings]({% link _docs_integrate/data-model-overview.md %}#doubleformfieldsettings), [IntegerFormFieldSettings]({% link _docs_integrate/data-model-overview.md %}#integerformfieldsettings), [RatingFormFieldSettings]({% link _docs_integrate/data-model-overview.md %}#ratingformfieldsettings), [SelectionFormFieldSettings]({% link _docs_integrate/data-model-overview.md %}#selectionformfieldsettings) and [StringFormFieldSettings]({% link _docs_integrate/data-model-overview.md %}#stringformfieldsettings), in the data model overview.
Based on the `response`, an appropriate AcceptResponseItem of type [FormFieldAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#formfieldacceptresponseitem) is generated, which incorporates the provided `response` in its `response` property.
This will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request containing form fields that will be transferred to the Sender.

### Reject a FormFieldRequestItem

Even if the Recipient accepts the Request containing form fields as a whole, it may decide not to fill out every form field.
To be more precise, the Recipient has the option of rejecting [FormFieldRequestItems]({% link _docs_integrate/data-model-overview.md %}#formfieldrequestitem) that have the value `false` specified in their `mustBeAccepted` property.
To reject a FormFieldRequestItem, use the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters).
The rejection of a FormFieldRequestItem leads to the creation of a ResponseItem of type [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem).
This will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request containing form fields.

### Example of Accepting a RequestItemGroup

Let's look at an example where the Sender needs the Recipient to fill out an integer form field, fill out a string form field, and select one of the different options of a selection form field.
To ask the Recipient for this data, the Sender creates a [Request]({% link _docs_integrate/data-model-overview.md %}#request) for forms, which contains a FormFieldRequestItem using [IntegerFormFieldSettings]({% link _docs_integrate/data-model-overview.md %}#integerformfieldsettings) and a RequestItemGroup belonging to the remaining form fields in its `items` property.
The [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) itself contains two FormFieldRequestItems in its `items` property, namely one using [StringFormFieldSettings]({% link _docs_integrate/data-model-overview.md %}#stringformfieldsettings) and one using [SelectionFormFieldSettings]({% link _docs_integrate/data-model-overview.md %}#selectionformfieldsettings).

```jsonc
{
  "@type": "Request",
  "items": [
    {
      "@type": "FormFieldRequestItem",
      "mustBeAccepted": false,
      "title": "<title of integer form field>",
      "settings": {
        "@type": "IntegerFormFieldSettings"
      }
    },
    {
      "@type": "RequestItemGroup",
      "items": [
        {
          "@type": "FormFieldRequestItem",
          "mustBeAccepted": true,
          "title": "<title of string form field>",
          "settings": {
            "@type": "StringFormFieldSettings"
          }
        },
        {
          "@type": "FormFieldRequestItem",
          "mustBeAccepted": true,
          "title": "<title of selection form field>",
          "settings": {
            "@type": "SelectionFormFieldSettings",
            "options": ["<an option>", "<another option>"]
          }
        }
      ]
    }
  ]
}
```

Please note that the `<...>` notation is used as a placeholder for the actual data as usual.
In the example, the Sender only requires the Recipient to fill out the string form field and select one of the different options of the selection form field, which is why the individual [FormFieldRequestItems]({% link _docs_integrate/data-model-overview.md %}#formfieldrequestitem) within the Request have specified corresponding values in their `mustBeAccepted` property.
We assume that the Recipient wants to accept the Request and only wants to fill out the string form field and select one of the different options of the selection form field.

If the Recipient wants to accept the Request containing form fields, it must accept all FormFieldRequestItems for which the `mustBeAccepted` property is set to `true`.
It is therefore not permitted, for example, for the Recipient to refuse to fill out the string form field and instead fill out the integer form field.
{: .notice--info}

The Recipient refuses to fill out the integer form field.
Also, the Recipient accepts filling out the string form field and selecting one of the different options of the selection form field.
Thus, it responds to the Request containing form fields as follows:

```jsonc
{
  "items": [
    {
      // Reject integer form field
      "accept": false
    },
    {
      "items": [
        {
          // Accept string form field
          "accept": true,
          "response": "<a string>"
        },
        {
          // Accept selection form field
          "accept": true,
          "response": "<an option>"
        }
      ]
    }
  ]
}
```

Note that it is important to respond to RequestItems, some of which may be contained in a RequestItemGroup, in the same order in which they were received.

## Receive the Response to the Request

We now assume that the Recipient has accepted the [Request containing form fields]({% link _docs_integrate/form-fields-within-requests.md %}#request-containing-form-fields) of the Sender.
In order for the Sender to receive the Response of the Recipient, it needs to [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}).
Please note that this synchronization can also be automated by using the [Sync Module]({% link _docs_operate/modules.md %}#sync).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/e4a312b1-0b43-4904-a934-ec4e0bd07cac" id="RZa_5d9Hj-75"></iframe></div>

To view the Response to the Request, proceed as described in the [Query outgoing Requests]({% link _docs_use-cases/use-case-consumption-query-outgoing-requests.md %}) use case documentation and use the following query parameter:

- If the [Request was sent via a RelationshipTemplate]({% link _docs_integrate/form-fields-within-requests.md %}#request-via-relationshiptemplate): Specify `<ID of RelationshipTemplate>` as the value for the `source.reference` query parameter.
- If the [Request was sent via a Message]({% link _docs_integrate/form-fields-within-requests.md %}#request-via-message): Specify `<ID of Request>` as the value for the `id` query parameter.

The Integrator of the Sender can now get the Response of the Recipient from the `response.content` property of the result.
In the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) is a [FormFieldAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#formfieldacceptresponseitem) for each accepted and a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) for each rejected FormFieldRequestItem included.

In case of an error, [ErrorResponseItems]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) can also be included in the Response.
If the Request containing form fields contains a RequestItemGroup in its `items` property, the Response to this Request contains a corresponding [ResponseItemGroup]({% link _docs_integrate/data-model-overview.md %}#responseitemgroup) in its `items` property.
{: .notice--info}

## What's Next?

As demonstrated, forms enable the collection of unstructured, specific data through a variety of form fields, serving a one-time, purpose-driven function.
For requesting structured data stored as [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes), begin by taking a look at the [Attribute introduction]({% link _docs_integrate/attribute-introduction.md %}), followed by exploring relevant scenarios such as [reading Atributes from peer]({% link _docs_integrate/read-attributes-from-peer.md %}).
