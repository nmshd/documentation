Send a message to the given gecipient(s).

For the exact structure of a message refer to the [data model](/integrate/data-model-overview#message).

## Example Body 

```json
{
    "recipients": [
        "addressOfRecipient"
    ],
    "content": {
        "@type": "Mail",
        "to": [        
            "addressOfRecipient"
        ],
        "subject": "Example",
        "body": "Hello. This is an example message."
    }
}
```

{% include rapidoc api_route_regex="^post /api/v2/Messages$" %}

## Example

```shell
curl --location --request POST 'http://{connector_url}/api/v2/Messages' \
--header 'X-API-KEY: xxx' \
--header 'Content-Type: application/json' \
--data-raw '{
    "recipients": [
        "addressOfRecipient"
    ],
    "content": {
        "@type": "Mail",
        "to": [        
            "addressOfRecipient"
        ],
        "subject": "Example",
        "body": "Hello. This is an example message."
    }
}'
```
