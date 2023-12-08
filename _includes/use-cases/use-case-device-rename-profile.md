{{properties.description}}

{% include properties_list.html %}

This use-case intends to rename a LocalAccount (Profile) of the App that matches the given `id`.

## Parameters

- The `localAccountId` is the id of the LocalAccount in question.
- The `newAccountName` the LocalAccount name should use.

## On Success

- The LocalAccount with the `localAccountId` is now named `newAccountName`.

## On Failure

- There is no such LocalAccount.
