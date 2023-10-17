Create a relationship template.

A relationship template can be used by a third party to initiate a relationship with you.
Read [more](/integrate/data-model-overview#relationshiptemplate).

## Example Body

```json
{
  "maxNumberOfAllocations": 1,
  "expiresAt": "2024-06-01T00:00:00.000Z",
  "content": {
    "@type": "RelationshipTemplateContent",
    "title": "Connector Demo Contact",
    "onNewRelationship": {
      // <A valid request, please refer to the data model for more details>
    }
  }
}
```

{% include rapidoc api_route_regex="^post /api/v2/RelationshipTemplates/Own$" title="API docs" %}
