An Identity may have received information about a peer in the past that it needs to process a transaction at a later time. To ensure the accuracy of the available information, the Identity can propose [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes) to the peer for creation. Depending on whether the peer confirms the validity of a proposed Attribute, it can agree to its creation or correct the [Attribute Value]({% link _docs_integrate/attribute-values.md %}) beforehand. Proposing Attributes to a peer can be useful in many situations, such as:

- A company wants to make sure that the currently stored street address of a customer is valid before using it to ship an item to the customer.
- ...

We will now explain how a Connector, hereinafter referred to as the Sender, can propose an Attribute to another Connector, the so-called Recipient. Since understanding this proposing process requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and how to use them in general, you should take a look at our Request and Response introduction before continuing reading this guide.

<!--- TODO: Insert Link to "Request and Response introduction" guide --->

Please note that the general procedure is the same if the Connector wants to propose an Attribute to an App user instead of another Connector. For reasons of clarity, this guide focuses on the proposing process with two Connectors.
{: .notice--info}

<!--- {% include warnings/documentation-is-prerelease %}

The connector would like to save an attribute for another identity and has 2 options for this.

The Create Attribute creates a request that the peer can accept and thus an attribute is created. To avoid errors, it is better to use the "Propose attribute" request for some attributes, so that the user has the option of customizing the attribute to be saved. --->
