---
# Start automatic generation
permalink: use-case-consumption-change-default-repositoryattribute
published: true
title: "Change default RepositoryAttribute"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA28
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: changeDefaultRepositoryAttribute
  - description:
  - feature category: Normalized Attributes
  - tech category: Attributes
  - status: DONE
  - documentation status:
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
  - published:
  - link: use-case-consumption-change-default-repositoryattribute
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is only accessible if setting default RepositoryAttributes is enabled in the Runtime configuration.
By default, this is only the case for the App and not for the Connector.
{: .notice--info}

If setting default RepositoryAttributes is enabled, for every [IdentityAttribute value type]({% link _docs_integrate/attribute-values.md %}#identity-attributes) exactly one [RepositoryAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) will have the property `isDefault` set, given that at least one RepositoryAttribute of that value type exists.
By default, this is the first RepositoryAttribute of that value type that was created.
However, if the default RepositoryAttribute is [succeeded]({% link _docs_integrate/update-attributes-by-succession.md %}), its successor will become the new default RepositoryAttribute.
This use case allows you to change the default RepositoryAttribute.

## Parameters

- The `attributeId` of the RepositoryAttribute that is to be the new default RepositoryAttribute.

## On Success

- The RepositoryAttribute belonging to the input `attributeId` has `isDefault` set and is returned. Further, the former default RepositoryAttribute has `isDefault` unset.

## On Failure

- The default RepositoryAttribute can't be changed if the provided `attributeId` doesn't correlate to a RepositoryAttribute.
- The default RepositoryAttribute can't be changed if the provided `attributeId` correlates to a RepositoryAttribute with a successor.
- The default RepositoryAttribute can't be changed if the parameters are malformed.
