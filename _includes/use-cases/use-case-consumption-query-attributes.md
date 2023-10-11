Query all attributes.

Since this api uses a GET request the query has to be properly formated in the query-string,
see the example below for reference.

## Example Query

```json
{
  "content.value.@type": "DisplayName"
}
```

{% include rapidoc api_route_regex="^get /api/v2/Attributes$" %}

## Example

```shell
curl --location --request GET 'http://{connector_url}/api/v2/Attributes?content.value.%40type=DisplayName' \
--header 'X-API-KEY: xxx' \
--header 'Content-Type: application/json'
```
