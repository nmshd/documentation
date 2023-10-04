Query outgoing requests.

## Example Body

```json
{
    "peer": "addressOfPeerThatTheRequestWasSentTo",
    "content.items.@type": "ShareAttributeRequestItem",
    "content.items.items.@type": "DisplayName"
}
```

{% include rapidoc api_route_regex="^get /api/v2/Requests/Outgoing$" %}

## Example

```shell
curl --location --request GET 'http://{connector_url}/api/v2/Requests/Outgoing' \
--header 'X-API-KEY: xxx' \
--header 'Content-Type: application/json' \
--data-raw '{
    "peer": "addressOfPeerThatSentTheRequest",
    "content.items.@type": "ShareAttributeRequestItem",
    "content.items.items.@type": "DisplayName"
}'
```
