{{properties.description}}

{% include properties_list.html %}

This use-case is intended to retrieve Attributes that a peer has shared with the current Identity as [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#LocalAttribute). The LocalAttributes can be specified using a complex query.

## Parameters

- `peer` is the Address of the Identity that shared the LocalAttributes.
- `onlyValid` filters the requested LocalAttributes to only consider currently valid LocalAttributes if set.
- `query` describes the requested LocalAttributes in detail.
- `hideTechnical` filters out technical LocalAttributes if set.

## On Success

- Returns a list of [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#LocalAttribute) shared by the peer that match the query.

## On Failure

- The parameters are malformed.
