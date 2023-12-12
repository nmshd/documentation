{{properties.description}}

{% include properties_list.html %}

This use-case updates the `name` or `description` of a Device using its `id`.

## Parameters

- The `id` of the Device.
- The new `name` of the Device
- The new `description` of the Device

## On Success

- The corresponding Device is updated to the given `name` and `description`.

## On Failure

- There is no such Device.
