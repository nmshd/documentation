Query outgoing requests.

Since this api uses a GET request the query has to be properly formated in the query-string,
see the example below for reference.

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
curl -X 'GET' \
  'https://blubi.codes/api/v2/Requests/Outgoing?peer=addressOfPeerThatTheRequestWasSentTo
  &content.items.%40type=ShareAttributeRequestItem
  &content.items.items.%40type=DisplayName' \
  -H 'accept: application/json' \
  -H 'X-API-KEY: xxx'
```
