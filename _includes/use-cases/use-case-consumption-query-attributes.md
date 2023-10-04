
Query all attributes.

## Example Body

```json
{
    "content.value.@type": "DisplayName"
}
```

{% include rapidoc api_route_regex="^get /api/v2/Attributes$" %}

## Example 

```shell
curl --location --request GET 'http://{connector_url}/api/v2/Attributes' \
--header 'X-API-KEY: xxx' \
--header 'Content-Type: application/json' \
--data-raw '{
    "content.value.@type": "DisplayName"
}'
```
