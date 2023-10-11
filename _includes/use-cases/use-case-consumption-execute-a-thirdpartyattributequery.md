Execute third party attribute query.

Searches an relationship attribute by key in third parties given in the
thirdParty array.

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

{% include rapidoc api_route_regex="^post /api/v2/attributes/ExecuteThirdPartyRelationshipAttributeQuery$" %}

## Example

```shell
curl --location --request POST 'http://{connector_url}/api/v2/Attributes/ExecuteRelationshipAttributeQuery' \
--header 'X-API-KEY: xxx' \
--header 'Content-Type: application/json' \
--data-raw '{
    "query": {
        "key": "KeyOfAttribute",
        "owner": "enmeshedAddressOfOwner",
        "thirdParty": [
            "address_a",
            "address_b"
        ]
    }
}
```
