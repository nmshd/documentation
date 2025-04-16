---
# Start automatic generation
permalink: integrate/send-forms-via-requests
published: true
title: "Send Forms via Requests"
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
  - link: send-forms-via-requests
require:
required_by:
# End automatic generation
---

<!-- TODO: Add motivation and examples -->

In this guide, we explain how a Connector, hereinafter referred to as the Sender, can send a form to another Connector, the so-called Recipient.
Since understanding this process requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and how to use them in general, you should take a look at our [Request and Response introduction]({% link _docs_integrate/request-and-response-introduction.md %}) before continuing reading this guide.

Please note that the general procedure is the same if the Connector wants to send a form to an App user instead of another Connector.
For reasons of clarity, this guide focuses on the process with two Connectors.
{: .notice--info}

## Request for Forms

The Sender wants to send a form to the Recipient.
To do this, the Sender must first create a suitable Request, which it can then send to the Recipient.
In the following subsections, we describe the general appearance of a Request for forms.

### Role of FormFieldRequestItem

For creating a single form field, the Sender needs to insert a single RequestItem of type [FormFieldRequestItem]({% link _docs_integrate/data-model-overview.md %}#formfieldrequestitem) into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request).

<!-- TODO: Describe properties: Required title and settings -->

#### StringFormFieldSettings

| Name            | Type                        | Required | Description                                                                                           |
| --------------- | --------------------------- | :------: | ----------------------------------------------------------------------------------------------------- |
| `@type`         | `"StringFormFieldSettings"` |    ✓     |                                                                                                       |
| `allowNewLines` | `true`                      |    ✗     | If this flag is set, the free text form field is displayed in the App's UI as a text area form field. |
| `min`           | `number`                    |    ✗     | Lower limit for the length of the requested string.                                                   |
| `max`           | `number`                    |    ✗     | Upper limit for the length of the requested string.                                                   |

#### IntegerFormFieldSettings

| Name    | Type                         | Required | Description                            |
| ------- | ---------------------------- | :------: | -------------------------------------- |
| `@type` | `"IntegerFormFieldSettings"` |    ✓     |                                        |
| `unit`  | `string`                     |    ✗     | Unit of the requested integer.         |
| `min`   | `number`                     |    ✗     | Lower limit for the requested integer. |
| `max`   | `number`                     |    ✗     | Upper limit for the requested integer. |

#### DoubleFormFieldSettings

| Name    | Type                        | Required | Description                           |
| ------- | --------------------------- | :------: | ------------------------------------- |
| `@type` | `"DoubleFormFieldSettings"` |    ✓     |                                       |
| `unit`  | `string`                    |    ✗     | Unit of the requested double.         |
| `min`   | `number`                    |    ✗     | Lower limit for the requested double. |
| `max`   | `number`                    |    ✗     | Upper limit for the requested double. |

#### BooleanFormFieldSettings

| Name    | Type                         | Required | Description |
| ------- | ---------------------------- | :------: | ----------- |
| `@type` | `"BooleanFormFieldSettings"` |    ✓     |             |

#### DateFormFieldSettings

| Name    | Type                      | Required | Description |
| ------- | ------------------------- | :------: | ----------- |
| `@type` | `"DateFormFieldSettings"` |    ✓     |             |

#### RatingFormFieldSettings

The lower limit for the requested rating is always one.

| Name        | Type                                    | Required | Description                           |
| ----------- | --------------------------------------- | :------: | ------------------------------------- |
| `@type`     | `"RatingFormFieldSettings"`             |    ✓     |                                       |
| `maxRating` | `5` \| `6` \| `7` \| `8` \| `9` \| `10` |    ✓     | Upper limit for the requested rating. |

#### SelectionFormFieldSettings

| Name                     | Type                           | Required | Description                                                                                                                                                                                  |
| ------------------------ | ------------------------------ | :------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@type`                  | `"SelectionFormFieldSettings"` |    ✓     |                                                                                                                                                                                              |
| `options`                | `string[]`                     |    ✓     | Unique options of the selection form field. At least one option must be provided.                                                                                                            |
| `allowMultipleSelection` | `true`                         |    ✗     | If this flag is set, it is possible to select multiple of the provided options when responding to the selection form field. Otherwise, exactly one of the options provided must be selected. |

### Send Multiple Form Fields

Sending a form is not limited to just a single form field, but it is possible to send multiple form fields at the same time.
Several FormFieldRequestItems or suitable [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) can be inserted into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for forms for this purpose.
If you want to use a RequestItemGroup in order to send multiple form fields to the Recipient at the same time, you must insert corresponding FormFieldRequestItems into the `items` property of it.

## Send and Receive the Request

The Sender that wants to send a form to the Recipient may or may not already have a Relationship with the Recipient.
Depending on which is the case, a different method can be used to send the [Request for forms]({% link _docs_integrate/send-forms-via-requests.md %}#request-for-forms).
There are two ways to send the Request for forms created by the Sender to the Recipient.

### Request via RelationshipTemplate

If there is currently no Relationship between the Sender and the Recipient, this approach must be used.
But it is also possible for the Sender to use a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) to send a Request to the Recipient if there is already an active Relationship between them.
All details on how to send and receive a Request via a RelationshipTemplate in general can be found in the [Requests via RelationshipTemplates]({% link _docs_integrate/requests-via-relationshiptemplates.md %}) guide.

### Request via Message

The Sender only has the option of sending a Request to the Recipient via a [Message]({% link _docs_integrate/data-model-overview.md %}#message) if there is already an active Relationship between them.
All information on how to send and receive a Request via a Message can be found in the [Requests via Messages]({% link _docs_integrate/requests-via-messages.md %}) guide.

## Accept the Request

After the Recipient has received the [Request for forms]({% link _docs_integrate/send-forms-via-requests.md %}#request-for-forms), it can accept it to fill out the form sent by the Sender.
To do this, proceed as described in the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case documentation and specify the `id` of the received [Request]({% link _docs_integrate/data-model-overview.md %}#request).
You must also decide and specify for each FormFieldRequestItem contained in the Request for forms whether you want to accept or reject it.

If the Recipient does not want to fill out any form field of the form sent by the Sender and, therefore, does not want to accept the Request for forms of the Sender, it can reject it as a whole as well.
For this, follow the instructions of the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case.
{: .notice--info}

<!-- TODO: Insert diagram. -->

### Accept a FormFieldRequestItem

If the Recipient agrees to fill out a form field of the form sent by the Sender, it can accept the associated FormFieldRequestItem contained in the Request for forms.

<!-- TODO: Explain how to accept a FormFieldRequestItem. -->

### Reject a FormFieldRequestItem

Even if the Recipient accepts the Request for forms as a whole, it may decide not to fill out every form field.
To be more precise, the Recipient has the option of rejecting [FormFieldRequestItems]({% link _docs_integrate/data-model-overview.md %}#formfieldrequestitem) that have the value `false` specified in their `mustBeAccepted` property.
To reject a FormFieldRequestItem, use the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters).
The rejection of a FormFieldRequestItem leads to the creation of a ResponseItem of type [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem).
This will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request for forms.

### Example of Accepting a RequestItemGroup

<!-- TODO: Add JSON example of Request. -->

<!-- TODO: Add JSON example of Response. -->

## Receive the Response to the Request

We now assume that the Recipient has accepted the [Request for forms]({% link _docs_integrate/send-forms-via-requests.md %}#request-for-forms) of the Sender.
In order for the Sender to receive the Response of the Recipient, it needs to [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}).
Please note that this synchronization can also be automated by using the [Sync Module]({% link _docs_operate/modules.md %}#sync).

<!-- TODO: Insert diagram. -->

To view the Response to the Request, proceed as described in the [Query outgoing Requests]({% link _docs_use-cases/use-case-consumption-query-outgoing-requests.md %}) use case documentation and use the following query parameter:

- If the [Request was sent via a RelationshipTemplate]({% link _docs_integrate/send-forms-via-requests.md %}#request-via-relationshiptemplate): Specify `<ID of RelationshipTemplate>` as the value for the `source.reference` query parameter.
- If the [Request was sent via a Message]({% link _docs_integrate/send-forms-via-requests.md %}#request-via-message): Specify `<ID of Request>` as the value for the `id` query parameter.

The Integrator of the Sender can now get the Response of the Recipient from the `response.content` property of the result.
In the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) is a [FormFieldAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#formfieldacceptresponseitem) for each accepted and a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) for each rejected FormFieldRequestItem included.

<!-- TODO: Add more details about the Response. -->

In case of an error, [ErrorResponseItems]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) can also be included in the Response.
If the Request for forms contains a RequestItemGroup in its `items` property, the Response to this Request contains a corresponding [ResponseItemGroup]({% link _docs_integrate/data-model-overview.md %}#responseitemgroup) in its `items` property.
{: .notice--info}

## What's Next?

<!-- TODO: Add description of next possible steps. -->
