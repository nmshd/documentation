Syncs relationships and messages with the backbone.
Returns all relationships and messages with a new status.

{% include rapidoc api_route_regex="^post /api/v2/Account/Sync$" %}

## Example 

```shell
curl --location --request POST 'http://{connector_url}/api/v2/Account/Sync' \
--header 'X-API-KEY: xxx' \
--header 'Content-Type: application/json' \
```
