Execute third party attribute query.

Searches an relationship attribute by key in third parties given in the
thirdParty array.

The structure of the query is defined in the [data model](/integrate/data-model-overview#thirdpartyrelationshipattributequery).

## Example Body

```json
{
  "query": {
    "key": "KeyOfAttribute",
    "owner": "enmeshedAddressOfOwner",
    "thirdParty": ["address_a", "address_b"]
  }
}
```

{% include rapidoc api_route_regex="^post /api/v2/attributes/ExecuteThirdPartyRelationshipAttributeQuery$" title="API docs" %}

