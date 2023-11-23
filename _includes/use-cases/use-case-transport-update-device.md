{{properties.description}}

{% include properties_list.html %}

This use-case attempts to update the `name` or `description` of a `device` that matches an `id`.

## Parameters

- `id` 
- `name` 
- `description`

## On Success

- The corresponding `device` now has the given `name` and `description`.

## On Failure

- The `id` does not resolve to a `device`.
