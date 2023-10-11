Attempts to reject an incomming request by it's Id.

The items array indicate the decision made for each individual request item in the request.

## Example Body

```json
{
  "items": [{ "accept": false }, { "accept": false }]
}
```

{% include rapidoc api_route_regex="^put /api/v2/Requests/Incoming/{id}/Reject$" %}

## Example

```shell
curl --location --request PUT 'http://{connector_url}/api/v2/Requests/Incoming/{id}/Reject' \
--header 'X-API-KEY: xxx' \
--header 'Content-Type: application/json' \
--data '{
  "items": [
    {
      "accept": true
    },
    {
      "accept": false,
      "code": "an.error.code",
      "message": "Error Message"
    }
  ]
}'
```
