{{properties.description}}

{% include properties_list.html %}

This use-case is intended to create an [LocalAttribute](/integrate/data-model-overview#localattribute)
based on a given `attribute` (as a [Attribute](/integrate/data-model-overview#attributes) datastructure).

## Parameters 

- The `content` for the to be created attribute is described in the [data model](/integrate/data-model-overview#attributes)

## On Success 

- A [LocalAttribute](/integrate/data-model-overview#localattribute) is created according to the paramter.

## On Failure

- The attribute cannot be created if the parameter is malformed.
 
