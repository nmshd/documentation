Retrieve number of requests and the status codes returned by the connector.

{% include rapidoc api_route_regex="^get /monitoring/requests$" %}

## Example

```shell
curl -X 'GET' \
  'https://{connector_url}/monitoring/requests' \
-H 'accept: application/json'
```
