You can create an Identity Attribute for your own Connector by executing `POST /api/v2/Attributes` with the following payload

```json
{
  "content": {
    "@type": "IdentityAttribute",
    "owner": "<your Connector's Address>",
    "tags": ["<additional information 1>", ... , "<additional information m>"],
    "validFrom": "<date from which on this Attribute is valid>",
    "validTo": "<date until this Attribute is valid>",
    "value": {
      // Identity Attribute Value
      "@type": "<type of Identity Attribute Value>",
      "<property 1>": "<input value 1>", ... , "<property n>": "<input value n>"
    }
  }
}
```

where you need to replace the placeholders marked with <...> appropriately.

The Connector's Address is `id134nJmN7E4Carb6KyRJyePVnXxVHEYQgWD` if you are using the Demo Connector of the Tutorial. In general, you can query the Connector's Address under the route `/api/v2/Account/IdentityInfo`.
{: .notice--info}

{% include rapidoc api_route_regex="^post /api/v2/Attributes$" %}

![High level architecture diagram of enmeshed components and layers]({{ '/assets/images/integrate/Create own IdentityAttribute.svg' | relative_url }}){: .align-center}
