{{properties.description}}

{% include properties_list.html %}

This use-case retrieves the onboarding information a so far not-onboarded Device that corresponds to the given Device `id` in order to onboard the Device to the Identity.

## Parameters

- `id` of the Device.

## On Success

- Returns the onboarding information of the Device.

## On Failure

- The Device was already onboarded.
