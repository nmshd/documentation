Create an attribute.

The content is the to be created attribute, either an 'IdentityAttribute' or an
'RelationshipAttribute', defined in the [data model](/integrate/data-model-overview#attributes).

## Example Body

```json
{
    "content": {
        "@type": "IdentityAttribute",
        "owner": "<your address>",
        "value": {
            "@type": "DisplayName",
            "value": "Example"
        }
    }
}
```

{% include rapidoc api_route_regex="^post /api/v2/Attributes$" %}

## Example

```shell
curl --location --request POST 'http://{connector_url}/api/v2/Attributes' \
--header 'X-API-KEY: xxx' \
--header 'Content-Type: application/json' \
--data-raw '{
    "content": {
        "@type": "IdentityAttribute",
        "owner": "<your address>",
        "value": {
            "@type": "DisplayName",
            "value": "Example"
        }
    }
}'
```