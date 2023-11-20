{% include warnings/feature-work-in-progress %}

# Flow

A peer can request the deletion of a formerly shared Attribute. Corresponding enmeshed Requests can sometimes be processed by the Connector, but might also be processed by attached systems.

To achieve an Attribute deletion, there are two ways:

- Request the deletion of the Attribute, with which the recipient of the Attribute could define a date to which the Attribute can be deleted and would be removed completely from the systems. The recipient can also reject the deletion, as it is a required Attribute in order to fulfill a contract. The idea behind this is to keep the Attributes between peer, Connector and external system "in-sync". Additionally, with this option backups can be taken into consideration (so that the Attribute to-be-deleted is slowly fading out of recurring backups).
- Force the Attribute deletion, with which the recipient of the Attribute gets the Notification, that the Attribute needs to be deleted (e.g. because it is expired). The Connector would in fact delete the respective Attribute right away, but fires an event that the Attribute can longer be used. This would result in an unsynced state between all parties, as the user might think the Attribute is deleted in all systems, the Connector has deleted the Attribute, but external systems would just have received an event.

It would be great if we could just ignore the second case (and not enable the user to force delete Attributes). We would love to hear your feedback on it.

# Examples

- If the user wants an organization to delete a shared IdentityAttribute, which is not required for contract fulfillment.
- If an organization wants to delete a created RelationshipAttribute.

# When not to use Delete Attributes

- If a user wants to cancel / delete a complete Relationship, as this is managed internally
