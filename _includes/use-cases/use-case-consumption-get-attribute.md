Get attribute by id

## Example Body

```json
{
    "content.value.@type": "DisplayName"
}
```

{% include rapidoc api_route_regex="^get /api/v2/Attributes/{id}$" %}

## Example 

```shell
curl --location --request GET 'http://{connector_url}/api/v2/Attributes/ATT_' \
--header 'X-API-KEY: xxx' \
--header 'Content-Type: application/json' \
--data-raw '{
    "content.value.@type": "DisplayName"
}'
```
