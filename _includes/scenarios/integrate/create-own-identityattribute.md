This guide explains the end to end flow of creating an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) for your own Connector. Before you start, you should check out our IdentityAttribute introduction first.

<!--- [IdentityAttribute introduction]({_docs_integrate/identityattribute-introduction.md }) --->

## Send Request

To create an IdentityAttribute as a user for your own Connector, you need to send a Request by executing `POST /api/v2/Attributes` with an IdentityAttribute JSON payload:

```jsonc
{
  "content": {
    "@type": "IdentityAttribute",
    "owner": "<your Connector's Address>",
    "validFrom": "<start of Attribute validity>",
    "validTo": "<end of Attribute validity>",
    "value": {
      //IdentityAttribute Value
      "@type": "<type of IdentityAttribute Value>",
      "<property 1>": <input value 1>, ..., "<property n>": <input value n>
    },
    "tags": ["<additional information 1>", ..., "<additional information m>"]
  }
}
```

You need to replace the placeholders marked with <...> appropriately. In particular, it is necessary that you feed one of the available [IdentityAttribute Values]({% link _docs_integrate/attribute-values.md %}#identity-attributes) into the payload. Note that the properties `validFrom`, `validTo` and `tags` are optional, so you can omit them.

In general, you can query your Connector's Address by sending a Request using `GET /api/v2/Account/IdentityInfo`. If you use the Demo Connector provided by us for testing purposes in the [interactive excerpt of the Connector's API documentation]({% link _docs_use-cases/use-case-consumption-create-an-attribute.md %}), the Connector's Address is `id134nJmN7E4Carb6KyRJyePVnXxVHEYQgWD`.
{: .notice--info}

<!---{% include rapidoc api_route_regex="^post /api/v2/Attributes$" %}--->

## Process

As you can see from the diagram below, after you send a Request to create an IdentityAttribute for your own Connector, several checks are performed to verify the correctness of your Request.

Note that both an [IdentityAttribute JSON]({% link _docs_integrate/create-own-identityattribute.md %}#send-request) and a RelationshipAttribute JSON are accepted as payload when requesting via `POST /api/v2/Attributes`, but only an IdentityAttribute JSON is suitable for creating an IdentityAttribute. Therefore, in this guide we assume that an IdentityAttribute JSON is passed. As the name suggests, you can use a RelationshipAttribute JSON to create a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute).
{: .notice--info}

If the Request is not made correctly, an [error message]({% link _docs_integrate/error-codes.md %}) is sent in response. Otherwise, the [Create an Attribute]({% link _docs_use-cases/use-case-consumption-create-an-attribute.md %}) use case occurs. In this case it is checked whether the input values for the properties of the specified IdentityAttribute Value meet the validation criteria documented on the [IdentityAttribute Values]({% link _docs_integrate/attribute-values.md %}#identity-attributes) page. Assuming a successful validation, the IdentityAttribute to be created is saved as a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute). If it is a simple IdentityAttribute, a success response is sent directly. In the case of a complex IdentityAttribute, on the other hand, another LocalAttribute is created beforehand for each of its appropriate components.

[![High level architecture diagram of enmeshed components and layers]({{ '/assets/images/integrate/Create own IdentityAttribute.svg' | relative_url }}){: .align-center}]({{ '/assets/images/integrate/Create own IdentityAttribute.svg' | relative_url }})

<!--- Not magnifiable version: ![High level architecture diagram of enmeshed components and layers]({{ '/assets/images/integrate/Create own IdentityAttribute.svg' | relative_url }}){: .align-center} --->

### Example 1: Create an own simple IdentityAttribute

An example of a simple IdentityAttribute is an IdentityAttribute with IdentityAttribute Value of type [DisplayName]({% link _docs_integrate/attribute-values.md %}#displayname). If you want to create one without specifying optional parameters, the payload of the Request must have the following form:

```json
{
  "content": {
    "@type": "IdentityAttribute",
    "owner": "<your Connector's Address>",
    "value": {
      "@type": "DisplayName",
      "value": "<your Connector's display name>"
    }
  }
}
```

Assuming that the input value for the Connector's display name meets the validation criterion, which means that the specified name is not more than 100 characters long, the IdentityAttribute is saved as a LocalAttribute and a success response is sent.

### Example 2: Create an own complex IdentityAttribute

An example of a complex IdentityAttribute is an IdentityAttribute with IdentityAttribute Value of type [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate). If you want to create one without specifying optional parameters, the payload of the Request must have the following form:

```json
{
  "content": {
    "@type": "IdentityAttribute",
    "owner": "<your Connector's Address>",
    "value": {
      "@type": "BirthDate",
      "day": <day of birth>,
      "month": <month of birth>,
      "year": <year of birth>
    }
  }
}
```

Assuming that the input values ​​for the properties `day`, `month` and `year` meet the validation criteria, which means, for example, that the input value for `month` is an integer between 1 and 12, the IdentityAttribute is saved as a LocalAttribute. The components `day`, `month` and `year` can each be understood as an additional IdentityAttribute with IdentityAttribute Value type [BirthDay]({% link _docs_integrate/attribute-values.md %}#birthday), [BirthMonth]({% link _docs_integrate/attribute-values.md %}#birthmonth) and [BirthYear]({% link _docs_integrate/attribute-values.md %}#birthyear), respectively. For this reason, another LocalAttribute is created internally for each of these components before a success response is sent.

## Success Response

When you have successfully created an IdentityAttribute for your Connector, you will receive a success response. This has the general form:

```jsonc
{
  "result": {
    "id": "<your Attribute's ID>",
    "createdAt": "<creation date>",
    "content": {
      "@type": "IdentityAttribute",
      "owner": "<your Connector's Address>",
      "value": {
        //IdentityAttribute Value
        "@type": "<type of IdentityAttribute Value>",
        "<property 1>": <input value 1>, ..., "<property n>": <input value n>
      },
      "tags": ["<additional information 1>", ..., "<additional information m>"],
      "validFrom": "<start of Attribute validity>",
      "validTo": "<end of Attribute validity>"
    }
  }
}
```

From this response, you can get the ID of the created IdentityAttribute from the `id` property. You will need this ID, for example, if you want to share the IdentityAttribute with other Identities later, as in the [Integration Example]({% link _docs_integrate/integration-example.md %}).
