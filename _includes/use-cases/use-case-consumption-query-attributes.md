Query all attributes.

Since this api uses a GET request the query has to be properly formated in the query-string,
refer to the interactive API docs bellow for reference.

## Example Query

```json
{
  "content.value.@type": "DisplayName"
}
```

{% include rapidoc api_route_regex="^get /api/v2/Attributes$" title="API docs" %}
