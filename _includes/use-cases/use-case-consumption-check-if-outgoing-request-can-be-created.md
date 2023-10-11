Validates an outgoing request without creating it.

The content is the to be created request defined in the [data model](/integrate/data-model-overview#request).

## Example Body

```json
{
  "content": {
    "expiresAt": "2024-01-01T00:00:00.000Z",
    "items": [
      {
        "@type": "ShareAttributeRequestItem",
        "mustBeAccepted": true,
        "attribute": {
          "@type": "IdentityAttribute",
          "owner": "",
          "value": {
            "@type": "DisplayName",
            "value": "Example"
          }
        },
        "sourceAttributeId": "<id of attribute above, generated on creation>"
      }
    ]
  },
  "peer": "peerId"
}
```

{% include rapidoc api_route_regex="^post /api/v2/Requests/Outgoing/Validate$" %}

## Example

```shell
curl --location --request POST 'http://{connector_url}/api/v2/Requests/Outgoing/Validate' \
--header 'X-API-KEY: xxx' \
--header 'Content-Type: application/json' \
--data-raw '{
    "content": {
        "expiresAt": "2024-01-01T00:00:00.000Z",
        "items": [
        {
            "@type": "ShareAttributeRequestItem",
            "mustBeAccepted": true,
            "attribute": {
                "@type": "IdentityAttribute",
                "owner": "",
                "value": {
                    "@type": "DisplayName",
                    "value": "Example"
                }
            },
            "sourceAttributeId": "<id of attribute above, generated on creation>"
        }
        ]
    },
    "peer": "peerId"
}'
```
