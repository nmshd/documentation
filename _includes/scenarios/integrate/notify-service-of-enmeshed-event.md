**Attention: Site Under Construction**
Please note that this page is currently under construction, and we are actively working on updates to enhance your experience.
During this period, you encounter incomplete sections or temporary disruptions. If you have any urgent inquiries or need specific information, please feel free to contact us directly. We apologize for any inconvenience and look forward to unveiling the updated site soon.
{: .notice--warning}

If an event is triggered by the connector, this must be transmitted to the connected service system.

The subsystem has the option of using the sync function to load updates from the connector at regular intervals via pull. However, it would be better if the connector informs the subsystem via push that there are new requests or messages.

There are 2 modules available for this. With the webhook module an http request is sent to a defined web route in the subsystem or with the AMQP the event is broadcasted.
