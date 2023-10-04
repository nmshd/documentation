Query incoming requests.

## Example Body

```json
{
    "peer": "addressOfPeerThatSentTheRequest",
    "content.items.@type": "ShareAttributeRequestItem"
}
```

{% include rapidoc api_route_regex="^get /api/v2/Requests/Incoming$" %}

## Example

```shell
curl --location --request GET 'http://{connector_url}/api/v2/Requests/Incoming' \
--header 'X-API-KEY: xxx' \
--header 'Content-Type: application/json' \
--data-raw '{
    "peer": "addressOfPeerThatSentTheRequest",
    "content.items.@type": "ShareAttributeRequestItem"
}'
```
