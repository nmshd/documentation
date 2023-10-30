In a productive environment your Connector will probably have many Relationships.
Consequently, a lot of actions can occur that need to be processed, like Messages, Requests, or changes of Attributes or Relationships.
Working with Events allows you to stay updated about these occurences.
Furthermore, they can trigger processes, that take care of an automated handling.

## What is an Event?

Events are defined actions or occurences, that are exposed on a software level.
They allow to determine routines, that are executed whenever a specific Event arises, called handlers.
This way of actively triggering a process at the respective Event is not only more efficient compared to contiuously asking if a specific action occured.
Also, it is saver, since it keeps you updated about any changes of interest.
An overview of the [Connector Events]({% link _docs_integrate/connector-events.md %}) that may occur is given in the corresponding section.

## Modules to handle Events

In order to receive Events, the Connector needs to be synchronized with the Backbone.
This is taken care of by the [Sync Module]({% link _docs_operate/modules.md %}#sync).
Thereafter, the Events can be processed.
Currently, there are two modules available to do so: the [AMQP Publisher Module]({% link _docs_operate/modules.md %}#amqppublisher) and the [WebhooksV2 Module]({% link _docs_operate/modules.md %}#webhooksv2).
We recommend working with the AMQP Publisher Module, since it functions with a message broker, ensuring the conservation of events even in case of a downtime of the recipient.
Furthermore, configuring exchanges allows to optimize the event processing for one's system.
An example of an open source message broker is [RabbitMQ](https://www.rabbitmq.com/).
In contrast, Webhooks will send HTTP POST requests to the corresponding handler, if an event occurs.
However, in case of a downtime of the recipient, these events will get lost.
In case you need a further module for your application, please raise an [issue](https://github.com/nmshd/feedback/issues/new/choose).

## Example

An example how Events can come in handy is given by a changed privacy policy.
Let's say we require an updated agreement from our contact, in order to process their data.
For this, we need to create a Request with a [ConsentRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#consentrequestitem).
If this outgoing Request is accepted, a `consumtion.outgoingRequestStatusChanged` event is created, indicating that its status has changed.
The data of the Event contains the information of the new status, in this example `accepted`.
The associated handler of the Event is triggered and checks the updated status of the Request.
Since it was accepted, the data of the contact can be processed.
