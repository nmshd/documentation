---
# Start automatic generation
permalink: use-case-consumption-change-default-ownidentityattribute
redirect_from:
  - /use-case-consumption-change-default-repositoryattribute
published: true
title: "Change default OwnIdentityAttribute"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA4
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: changeDefaultOwnIdentityAttribute
  - description:
  - feature category: Normalized Attributes
  - tech category: Attributes
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger: REST API
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex:
  - published: default
  - link: use-case-consumption-change-default-ownidentityattribute
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is only accessible if setting default OwnIdentityAttributes is enabled in the Runtime configuration.
By default, this is only the case for the App and not for the Connector.
{: .notice--info}

If setting default OwnIdentityAttributes is enabled, for every [IdentityAttribute value type]({% link _docs_integrate/attribute-values.md %}#identity-attributes) exactly one [OwnIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#ownidentityattribute) will have the property `isDefault` set, given that at least one OwnIdentityAttribute of that value type exists.
By default, this is the first OwnIdentityAttribute of that value type that was created.
However, if the default OwnIdentityAttribute is [succeeded]({% link _docs_integrate/update-attributes-by-succession.md %}), its successor will become the new default OwnIdentityAttribute.
This use case allows you to change the default OwnIdentityAttribute.

## Parameters

- The `attributeId` of the OwnIdentityAttribute that is to be the new default OwnIdentityAttribute.

## On Success

- The OwnIdentityAttribute belonging to the input `attributeId` has `isDefault` set and is returned. Further, the former default OwnIdentityAttribute has `isDefault` unset.

## On Failure

- The default OwnIdentityAttribute can't be changed if the provided `attributeId` doesn't correlate to an OwnIdentityAttribute.
- The default OwnIdentityAttribute can't be changed if the provided `attributeId` correlates to an OwnIdentityAttribute with a successor.
- The default OwnIdentityAttribute can't be changed if the parameters are malformed.
