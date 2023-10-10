Query outgoing requests by id.

{% include rapidoc api_route_regex="^get /api/v2/Requests/Outgoing/{id}$" %}

## Example

```shell
curl --location --request GET 'http://{connector_url}/api/v2/Requests/Outgoing/{id}' \
--header 'X-API-KEY: xxx' \
--header 'Content-Type: application/json' \
```
