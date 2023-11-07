This use-case is intended to retrieve attributes that have been shared to a specific peer.
The attribute can be specified using a query.

### Parameters

- `peer` is the address of the identity that the attribute was shared to.
- `onlyValid` filters the searched attributes to only consider valid attributes if set.
- `query` describes the searched attribute in detail if present.
- `hideTechnical` if set technical attributes are not considered.

### On Success 

- A list of [LocalRequests]({% link _docs_integrate/data-model-overview.md %}#localrequest) 
shared to the peer that match the query.

### On Failure

- The parameters are malformed.
