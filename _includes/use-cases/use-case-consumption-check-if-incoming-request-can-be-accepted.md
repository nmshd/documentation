{{properties.description}}

{% include properties_list.html %}

This use-case tests if an incoming [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest)
can be accepted with the given parameters without actually accepting it.

This is great for checking if all required information of a Request was filled out in order to accept it, e.g. to update a user interface with the respective errors (and render an "Accept Button" as disabled) as long as there are errors.

## Parameters

- The `id` of the incoming Request.
- The decision for each individual [RequestItem]({% link _docs_integrate/data-model-overview.md %}#request)
  expressed as the appropriate [Parameters defined in the Data Model]({% link _docs_integrate/requests-and-requestitems.md %}).

## On Success

- Returns a `RequestValidationResult` that indicates if the Request can be accepted with the given parameters.

## On Failure

- The decisions do not match the RequestItems.
- The decisions and values of respective RequestItems do not match the requested or required values, e.g. an E-Mail Address is wrong.
- An item that has the mustBeAccepted field set was not accepted or left blank.
