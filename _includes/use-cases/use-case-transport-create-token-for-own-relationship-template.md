Creates a [token](/integrate/data-model-overview#token) for a given [relationship template](/integrate/data-model-overview#relationshiptemplate)
that coresponds to the given id.

## Example Body

```json
{
  "expiresAt": "2024-01-01T00:00:00.000Z"
}
```

{% include rapidoc api_route_regex="^post /api/v2/RelationshipTemplates/Own/{id}/Token$" title="API docs" %}
