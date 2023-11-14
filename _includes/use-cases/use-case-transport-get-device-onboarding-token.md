{{properties.description}}

{% include properties_list.html %}

This use-case retrieves the [Token]({% link _docs_integrate/data-model-overview.md %}#token)
of the `onboarding device` that corresponds to the given device `id`.

## Parameters

- `id` of the device.
- `expiresAt` is the ISODateTime the token expires at.

## On Success

- Returns the `token` of the `onboarding device information`.

## On Failure

--
