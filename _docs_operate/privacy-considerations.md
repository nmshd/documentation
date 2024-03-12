---

# Start automatic generation
permalink: operate/privacy-considerations
redirect_from:
  - /integrate/connector-privacy
published: true
title: "Privacy Considerations"
type: scenario
toc: true
properties:
  - id: SC085
  - category: Connector Operations
  - description:
  - customer:
  - component: operate
  - level:
  - implementation status: DOCS ONLY
  - documentation status: OLD
  - published: true
  - link: privacy-considerations
require:
required_by:
# End automatic generation

---

Please be aware that personal or sensitive plaintext data is processed and stored in the Connector and the corresponding MongoDB database. The same applies to secret and private keys which should be treated as strictly confidential.

Thus the access to the Connector and its database should be kept to a bare minimum of authorized users or systems. Please refer to the [Security Considerations]({% link _docs_operate/security-considerations.md %}) for details.

As the Connector is running on the customer's infrastructure in the complete authority of the customer, it is in the customer's liability to ensure a secure and legal operation.

## Which data is processed by the Connector?

## Deleting Data
