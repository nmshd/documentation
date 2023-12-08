{% include warnings/feature-work-in-progress %}

# Flow

Attributes as such cannot be updated, but can be succeeded by a new Attribute. Thus, the value of an Attribute cannot be changed but overwritten by a new Attribute. We ensure that a coherent history of Attributes are available at all times on different parties.

Consider an IdentityA which shared its DisplayName to IdentityB, IdentityC, and IdentityD. IdentityA now would like to change the DisplayName and has to execute the following steps:

- Succeed the LocalAttribute of the current DisplayName with the new DisplayName
- Notify each peer individually that the DisplayName changed (this is optional, for every peer it can be decided if the peer receives the new Attribute or not)

Each peer would receive a Notification containing an AttributeSucceededNotificationItem which is automatically processed by each Identity. Thus, succeeding Attribute does not result into decidable Requests for the peer. They are only informed about the change.

# Examples

- Changing IdentityAttributes because of name changes, a move to a new address or change of communication details
- An Identity receiving a new telephone number but does not want to share this new telephone number to every peer
