Execute relationship attribute query.

[Relationship attributes](/integrate/data-model-overview#relationshipattribute) are all attributes that are shared within a
relationship of the identity. This endpoint is used to query the realationship attributes of a peer.

The structure of the query is defined in the [data model](/integrate/data-model-overview#attributequeries).

## Example Body

```json
{
  "query": {
    "key": "ElectricMeterNumber",
    "owner": "enmeshedAddressOfOwner",
    "attributeCreationHints": {
      "confidentiality": "public",
      "title": "electric meter number",
      "valueType": "ProprietaryString",
      "valueHints": {
        "@type": "Proprietary"
      }
    }
  }
}
```

{% include rapidoc api_route_regex="^post /api/v2/attributes/ExecuteRelationshipAttributeQuery$" title="API docs" %}

