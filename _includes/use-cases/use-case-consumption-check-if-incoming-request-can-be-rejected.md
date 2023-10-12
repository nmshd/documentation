Checks if an incoming request can be successfully rejected.

A [request](/integrate/data-model-overview#request) consists of [RequestItems](/integrate/data-model-overview#requestitem)
and/or [RequestItemGroups](/integrate/data-model-overview#requestitemgroup). To reject the request
the body has to contain a items array that indicates the decisions made for each request item.
The decision are expressed through [ResponseItems](/integrate/data-model-overview#responseitem) whose
structure is dependent on the corresponding RequestItem.

## Example Body

```json
{
  "items": [{ "accept": false }, { "accept": false }]
}
```

{% include rapidoc api_route_regex="^put /api/v2/Requests/Incoming/{id}/CanReject$" title="API docs" %}

