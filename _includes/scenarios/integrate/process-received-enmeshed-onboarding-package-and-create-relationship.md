{% include warnings/documentation-is-prerelease %}

# Flow

This scenario describes the steps to go through after an onboarding package was created by an IdentityA and has been processed and accepted by another IdentityB. Thus, IdentityA received all required information by IdentityB over enmeshed with a RelationshipCreationChange. For IdentityB, this means the (possibly so far unknown) peer accepted the Request within the RelationshipTemplate and thus responded with the requested data.

If the RelationshipTemplate was personalized or session-based, IdentityA needs to map the information within the created RelationshipTemplate for IdentityB and the received RelationshipCreationChange from IdentityB with the known data of external system of the user or session. IdentityA should be able to reflect the status for IdentityB in an existing web-session, e.g. update the screen which was formerly the enmeshed onboarding QR-Code.

Now the received data needs to be manually checked for completeness, if the data is semantically correct and possibly could even be trusted. Even long-running real-world identity and credit rating checks could be performed now. Throughout this period, IdentityA can decide to accept or reject the Relationship. On the other hand, IdentityB could also decide to revoke the sent RelationshipCreationChange and thus revoke the whole onboarding process.

We propose to have a very low entry barrier in order to create the secure Relationship and have secure means to communicate bidirectionally with the peer. Status, roles or flags could be used for the authorization and verification of the corresponding natural person or specific attributes afterwards. In fact, our favored scenario is to directly accept every incoming onboarding package and afterwards check the respective data. Therefore, we've created the AutoAcceptRelationshipCreationChanges Module.

# Examples

- Received: Once an onboarding package is accepted by the recipient, the web-session could refresh the screen and state that the communication over enmeshed was successful and the content is being processed.
- Acceptance: Net new users onboard themselves via enmeshed and profiles are generated for them
- Acceptance: Existing users onboard themselves via enmeshed and their existing profiles get updated
- Rejection: Users who entered wrong data in order to fulfill a business need (e.g. obvious fake data)
