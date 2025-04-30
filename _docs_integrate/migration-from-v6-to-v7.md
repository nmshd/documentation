---
# Start automatic generation
permalink: integrate/migration-from-v6-to-v7
published: true
title: "Migration From v6 to v7"
type: scenario
toc: true
properties:
  - id: SC123
  - category: Migration Guides
  - description: Changes due to release/v7
  - customer:
  - component: integrate
  - level:
  - implementation status: DOCS ONLY
  - documentation status: DONE
  - published: true
  - link: migration-from-v6-to-v7
require:
required_by:
# End automatic generation
---

The [Runtime](https://github.com/nmshd/runtime) of enmeshed has recently been updated from version 6 to version 7.
Accordingly, a new version of the [Connector](https://github.com/nmshd/connector) has also been released to make the updated Runtime available to Integrators of Connectors.
The version update has resulted in some breaking changes.
To support the migration of existing systems to the new version, the breaking changes made are listed and explained in this migration guide.

## Step-by-Step Instructions

The step-by-step instructions can be consulted to start the migration to version 7 directly.

### Connector Setup

- The data from the database that was used by the Connector of the former version is outdated. This is because the `title` of most [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitems) has been removed, for example. For this reason, the old data must be deleted. Alternatively, the database can be deleted as a whole and [set up again]({% link _docs_operate/setup-with-docker-compose.md %}).
- The [image](https://github.com/nmshd/connector?tab=readme-ov-file#connector) used to run the Connector must be updated to version 7.

### Removed and Changed Data Structures

- The `title` property of most [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitems) has been removed.
- The `title` property of the [AuthenticationRequestItem]({% link _docs_integrate/data-model-overview.md %}#authenticationrequestitem) is now mandatory.
- The FreeTextRequestItem has been removed.

### Changed Behavior of Known Features

- Stricter validation of `tags` of [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) has been added.
