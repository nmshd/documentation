{{properties.description}}

{% include properties_list.html %}

This use-case retrieves the [Token]({% link _docs_integrate/data-model-overview.md %}#token)
of a so far not-onboarded Device that corresponds to the given Device `id` in order to onboard the Device to the Identity.

## Parameters

- `id` of the Device.
- `expiresAt` is the ISODateTime the Token expires at.

## On Success

- Returns the Token of the Device to onboard.

## On Failure

- The Device was already onboarded.
