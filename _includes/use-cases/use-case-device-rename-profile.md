{{properties.description}}

{% include properties_list.html %}

This use-case intends to rename a account that matches an `id`.

## Parameters

- The `localAccountId` is the id of the account in question.
- The `newAccountName` describes the new account name.

## On Success

- The account with the `localAccountId` is now named `newAccountName`.

## On Failure

- There is no such account.
