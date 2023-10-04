Accepts a relationship change with the given change Id. 
The given change has to belong to the relationship specified in the path.

{% include rapidoc api_route_regex="^put /api/v2/Relationships/{id}/Changes/{changeId}/Accept$" %}

```shell
curl --location --request PUT \
'http://{connector_url}/api/v2/Relationships/{id}/Changes/{changeId}/Accept' \
--header 'X-API-KEY: xxx'
```
