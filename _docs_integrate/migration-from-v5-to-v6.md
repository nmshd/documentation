---
# Start automatic generation
permalink: integrate/migration-from-v5-to-v6
published: true
title: "Migration From v5 to v6"
type: scenario
toc: true
properties:
  - id: SC424242
  - category: Migration Guides
  - description: Changes due to release/v6
  - customer:
  - component: integrate
  - level:
  - implementation status: DOCS ONLY
  - documentation status: DONE
  - published: true
  - link: migration-from-v5-to-v6
require:
required_by:
# End automatic generation
---

The [Runtime](https://github.com/nmshd/runtime) of enmeshed has recently been updated from version 5 to version 6.

Accordingly, a new version of the [Connector](https://github.com/nmshd/connector) has also been released to make the updated Runtime available to Integrators of Connectors.

The version update has resulted in some breaking changes.
To support the migration of existing systems to the new version, the breaking changes made are listed and explained in this migration guide.

## Removal of Routes for loading peer objects by id and key

The routes `POST /api/v2/Files/Peer`, `POST /api/v2/RelationshipTemplates/Peer`, `POST /api/v2/Tokens/Peer` all had the possibility to load peer objects with two different payloads:

```json
{
  "id": "the id of the peer object",
  "secretKey": "the secret key to decrypt the peer object"
}
```

and

```json
{
  "reference": "the truncated reference containing all the information to load the peer object"
}
```

In preperation for upcoming features loading peer objects by id and key has been removed.

## Removal of `secretKey` from objects

The `secretKey` field has been removed from all objects. As it is not possible to load peer objects by id and key anymore, the `secretKey` field became redundant.
