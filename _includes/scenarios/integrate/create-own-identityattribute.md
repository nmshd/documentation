This guide explains the end to end flow of creating an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) for your own Connector as an Integrator. Before you start, you should check out our IdentityAttribute introduction first.

<!--- TODO: Insert link to "IdentityAttribute introduction" --->

## Input for creating an IdentityAttribute

To create an IdentityAttribute as an Integrator for your own Connector, you need to proceed as described in the [Create a RepositoryAttribute]({% link _docs_use-cases/use-case-consumption-create-a-repositoryattribute.md %}) use case documentation using the following content:

```jsonc
{
  "content": {
    "@type": "IdentityAttribute",
    "owner": "<Address of your Connector>",
    "validFrom": "<start of Attribute validity>",
    "validTo": "<end of Attribute validity>",
    "value": {
      // IdentityAttribute Value
      ...
    },
    "tags": ["<additional information 1>", ..., "<additional information m>"]
  }
}
```

You need to replace the placeholders marked with `<...>` appropriately. Also, it is necessary that you insert one of the available [IdentityAttribute Values]({% link _docs_integrate/attribute-values.md %}#identity-attributes) into the `value` property. You are not allowed to specify the Address of a Connector other than your own as the value for the `owner` property, as the [Create a RepositoryAttribute]({% link _docs_use-cases/use-case-consumption-create-a-repositoryattribute.md %}) use case relates to the creation of IdentityAttributes for yourself and not for others. For that reason, it is also possible to omit the `owner` property. In that case, your Connector automatically becomes the owner of the IdentityAttribute. Note that the properties `validFrom`, `validTo` and `tags` are optional, so you can omit them as well.

You can query your Connector's Address by proceeding as documented in the [Get currently used Identity]({% link _docs_use-cases/use-case-transport-get-currently-used-identity.md %}) use case.
{: .notice--info}

## Process

As you can see from the diagram below, after you have entered the input values to create an IdentityAttribute for your own Connector, a few checks are performed to verify the correctness of your input. If the input is not entered correctly, an [error message]({% link _docs_integrate/error-codes.md %}) is sent in response. Otherwise, a check is performed whether the input values for the properties of the specified IdentityAttribute Value meet the validation criteria documented on the [IdentityAttribute Values]({% link _docs_integrate/attribute-values.md %}#identity-attributes) page. Assuming a successful validation, the IdentityAttribute to be created is saved as a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute). If it is a simple IdentityAttribute, a success response is sent directly. In the case of a complex IdentityAttribute, on the other hand, another LocalAttribute is created beforehand for each of its appropriate components. These LocalAttributes of the components contain the `id` of the LocalAttribute belonging to the complex IdentityAttribute within their `parentId` property.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/310cea0e-6f6f-4ee0-9efd-55e180ec5dda" id="WT4OFNWd3bcS"></iframe></div>

### Example 1: Create an own simple IdentityAttribute

An example of a simple IdentityAttribute is one of type [DisplayName]({% link _docs_integrate/attribute-values.md %}#displayname). If you want to create it without specifying optional parameters, you must use the following content:

```jsonc
{
  "content": {
    "@type": "IdentityAttribute",
    "owner": "<Address of your Connector>",
    "value": {
      "@type": "DisplayName",
      "value": "<display name of your Connector>"
    }
  }
}
```

Assuming that the input value for the Connector's display name specified in the `value.value` property meets the [validation criterion]({% link _docs_integrate/attribute-values.md %}#displayname), which means that the entered name is not more than 100 characters long, the IdentityAttribute is saved as a LocalAttribute and a success response is sent.

### Example 2: Create an own complex IdentityAttribute

An example of a complex IdentityAttribute is one of type [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate). If you want to create it without specifying optional parameters, you must use the following content:

```jsonc
{
  "content": {
    "@type": "IdentityAttribute",
    "owner": "<Address of your Connector>",
    "value": {
      "@type": "BirthDate",
      "day": <day of birth>,
      "month": <month of birth>,
      "year": <year of birth>
    }
  }
}
```

Assuming that the input values ​​for the properties `value.day`, `value.month` and `value.year` meet the [validation criteria]({% link _docs_integrate/attribute-values.md %}#birthdate), which means, for example, that the input value for `value.month` is an integer between 1 and 12, the IdentityAttribute is saved as a LocalAttribute. The components `value.day`, `value.month` and `value.year` can each be understood as an additional simple IdentityAttribute of type [BirthDay]({% link _docs_integrate/attribute-values.md %}#birthday), [BirthMonth]({% link _docs_integrate/attribute-values.md %}#birthmonth) and [BirthYear]({% link _docs_integrate/attribute-values.md %}#birthyear), respectively. For this reason, another LocalAttribute is created internally for each of these components before a success response is sent.

## Success response

When you have successfully created an IdentityAttribute for your Connector, you will receive a success response. From the result, you can get the `id` of the corresponding [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) belonging to the IdentityAttribute. You will need this `id`, for example, if you want to share the IdentityAttribute with other Identities later, as in the [Integration Example]({% link _docs_integrate/integration-example.md %}).