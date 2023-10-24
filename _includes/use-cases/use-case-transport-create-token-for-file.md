Creates a [token]({% link _docs_integrate/data-model-overview.md %}#token) for a given file that
corresponds to the given id.

## Example Body

```json
{
  "expiresAt": "2024-01-01T00:00:00.000Z"
}
```

{% include rapidoc api_route_regex="^post /api/v2/Files/{id}/Token$" title="API docs" %}
