Query identity attributes.

[Identity attributes](/integrate/data-model-overview#identityattribute) are attributes that describe an identity.

## Example Body 

```json
{
    "query": {
        "valueType": "DisplayName"
    }
}
```

{% include rapidoc api_route_regex="^post /api/v2/Attributes/ExecuteIdentityAttributeQuery$" %}

## Example 

```shell
curl --location --request POST 'http://{connector_url}/api/v2/Attributes/ExecuteRelationshipAttributeQuery' \
--header 'X-API-KEY: xxx' \
--header 'Content-Type: application/json' \
--data-raw '{
    "query": {
        "valueType": "DisplayName"
    }
}
```

