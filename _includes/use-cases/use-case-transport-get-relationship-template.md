Retrieves the relationship template or the corresponding QR-code by ID.
The format depends on the accept header.

{% include rapidoc api_route_regex="^get /api/v2/RelationshipTemplates/{id}$" %}

## Example 

```shell
curl --location 'http://{connector_url}/api/v2/RelationshipTemplates/{id}' \
--header 'X-API-KEY: xxx' \
--header 'Content-Type: image/png'
```
