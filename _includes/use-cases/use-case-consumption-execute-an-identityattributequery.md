Query identity attributes.

[Identity attributes](/integrate/data-model-overview#identityattribute) are attributes that describe an identity.
This use case is used to query a specific identity attribute described by the query.

The query structure is defined in the [data model](/integrate/data-model-overview#identityattributequery).

## Example Body

```json
{
  "query": {
    "valueType": "DisplayName"
  }
}
```

{% include rapidoc api_route_regex="^post /api/v2/Attributes/ExecuteIdentityAttributeQuery$" %}

