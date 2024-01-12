{% include warnings/documentation-is-prerelease %}

# Flow

For services using the Connector, it is best practice to await events fired by the Connector, instead of long-polling the Connector if changes occured.

First, an operator needs to set up the Connector accordingly. There are 2 modules available for this:

- With the webhook module an http request is sent to a defined web route of the service.
- With the AMQP module an event is submitted to a given AMQP event broker, to which the service can subscribe to.

The configuration of both modules also needs to include which enmeshed events needs to be fired to the respective system.

Second, the enmeshed event needs to be handled in the respective system.

# Examples

- Connector calls a service when a Relationship Request came in to automatically handle it
- Connector triggers a service to synchronize stored Attributes when the Connector received changes to the shared personal data of the user
- Connector routes incoming enmeshed Messages/Requests to the corresponding inboxes/decision systems
