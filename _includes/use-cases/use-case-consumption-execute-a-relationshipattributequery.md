Execute relationship attribute query.

Relationship attributes are all attributes that are shared within a
relationship of the identity.

## Example Body

```json
{
  "query": {
    "key": "KeyOfRelAttribute",
    "owner": "enmeshedAddressOfOwner",
    "attributeCreationHints": {
      "confidentiality": "public",
      "title": "My display name",
      "valueHints": {
        "@type": "ProprietaryBoolean"
      }
    }
  }
}
```

{% include rapidoc api_route_regex="^post /api/v2/attributes/ExecuteRelationshipAttributeQuery$" %}

## Example

```shell
curl --location --request POST 'http://{connector_url}/api/v2/Attributes/ExecuteRelationshipAttributeQuery' \
--header 'X-API-KEY: xxx' \
--header 'Content-Type: application/json' \
--data-raw '{
    "query": {
        "key": "KeyOfRelAttribute",
        "owner": "enmeshedAddressOfOwner",
        "attributeCreationHints": {
            "confidentiality": "public",
            "title": "My display name",
            "valueHints": {
                "@type": "ProprietaryBoolean"
            }
        }
    }
}
```
