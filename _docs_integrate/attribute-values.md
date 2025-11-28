---
# Start automatic generation
permalink: integrate/attribute-values
redirect_from:
  - /integrate/data-model-attribute-values
published: true
title: "Attribute Values"
type: scenario
toc: true
properties:
  - id: SC092
  - category: Data Model
  - description:
  - customer:
  - component: integrate
  - level:
  - implementation status: DOCS ONLY
  - documentation status: OLD
  - published: true
  - link: attribute-values
require:
required_by:
# End automatic generation
---

Each [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) contains an instance of an Attribute Value within its `value` property.
There are different types of Attribute Values.
The types define the value's structural definition, rendering information and validators.
For example, an email address with the value `address@company.corp` is stored with the Attribute Value type [`EMailAddress`](#emailaddress), which defines

- the data type of the actual value (a String)
- how it is validated (the pattern of an email address and a maximum length)
- information about how it can be rendered on the UI

enmeshed defines a standard set of possible Attribute Value types for Identities within the enmeshed ecosystem and its meaning for the Identities.
And every Identity can understand/use/fill/query these Attribute Value types of other Identities.

Most Attribute Value types are atomic, which means that they have only one property called `value` (e.g. [`EMailAddress`](#emailaddress), [`DisplayName`](#displayname), [`PhoneNumber`](#phonenumber)).
But there are also more complex Attribute Value types which consist of multiple properties with a strong correlation (e.g. [`StreetAddress`](#streetaddress), [`PersonName`](#personname)).

# Valid Characters in Attributes

Characters in Attribute values are restricted to the [normative characters of DIN 91379](https://en.wikipedia.org/wiki/DIN_91379#Normative_part) which reduces validation efforts required from integrators.
This bans, for example, foreign scripts like Greek or Chinese, but transliterations are possible in that case.
Also banned are emojis, which deters joke entries.
See [a one-page overview of the characters](https://github.com/String-Latin/DIN-91379-Characters-and-Sequences/blob/e6eff1e/latin_letters_1.3.txt#L1-L40) (the allowed characters are highlighted) and the [regex used for validation](https://xoev.de/schemata/din/91379/2022-08/din-norm-91379-datatypes.xsd) - search for datatypeC.

# Identity Attributes

The Attribute Values in this chapter can only be used in an [Identity Attribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute).

## Affiliation

A complex Attribute Value type which defines the affiliation of a person to an organization.
Inside of the organization the person can have a role and it can be assigned to a specific unit inside of the organization.

**Properties**

| Name           | Type            | Required | Validation       |
| -------------- | --------------- | :------: | ---------------- |
| `@type`        | `"Affiliation"` |    ✓     |                  |
| `role`         | `string`        |    ✗     | max. length: 100 |
| `organization` | `string`        |    ✓     | max. length: 100 |
| `unit`         | `string`        |    ✗     | max. length: 100 |

## BirthDate

The birth date of a natural person in the Gregorian calendar.

**Properties**

| Name    | Type          | Required | Validation                                |
| ------- | ------------- | :------: | ----------------------------------------- |
| `@type` | `"BirthDate"` |    ✓     |                                           |
| `day`   | `number`      |    ✓     | min: 1<br>max: 31<br>must be an integer   |
| `month` | `number`      |    ✓     | min: 1<br>max: 12<br>must be an integer   |
| `year`  | `number`      |    ✓     | min: 1<br>max: 9999<br>must be an integer |

## BirthName

The BirthName is the surname of the person at birth.
Some countries allow changing the surname, thus the BirthName is also used as the identification.
The BirthName is innate depending on your surname at birth.

If this value is set, there has been a change of the surname throughout the life of the person.

**Properties**

| Name    | Type          | Required | Validation       |
| ------- | ------------- | :------: | ---------------- |
| `@type` | `"BirthName"` |    ✓     |                  |
| `value` | `string`      |    ✓     | max. length: 100 |

## BirthPlace

The BirthPlace consists of the birth city and birth country and can optionally include a birth state (e.g. if the birth city is ambiguous within the birth country).

**Properties**

| Name      | Type           | Required | Validation                                                                                                                  |
| --------- | -------------- | :------: | --------------------------------------------------------------------------------------------------------------------------- |
| `@type`   | `"BirthPlace"` |    ✓     |                                                                                                                             |
| `city`    | `string`       |    ✓     | max. length: 100                                                                                                            |
| `country` | `string`       |    ✓     | only [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) country codes |
| `state`   | `string`       |    ✗     | max. length: 100                                                                                                            |

## Citizenship

The Citizenship defines which country currently recognizes you as a citizen.
Thus, the Citizenship usually refers to the country you have a passport from.

**Properties**

| Name    | Type            | Required | Validation                                                                                                                  |
| ------- | --------------- | :------: | --------------------------------------------------------------------------------------------------------------------------- |
| `@type` | `"Citizenship"` |    ✓     |                                                                                                                             |
| `value` | `string`        |    ✓     | only [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) country codes |

## CommunicationLanguage

The CommunicationLanguage is an officially recognized language the person can communicate with.

**Properties**

| Name    | Type                      | Required | Validation                                                                             |
| ------- | ------------------------- | :------: | -------------------------------------------------------------------------------------- |
| `@type` | `"CommunicationLanguage"` |    ✓     |                                                                                        |
| `value` | `string`                  |    ✓     | only [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes |

## DeliveryBoxAddress

A complex Attribute Value defining the components of a delivery box address.

**Properties**

| Name            | Type                   | Required | Validation                                                                                                                  |
| --------------- | ---------------------- | :------: | --------------------------------------------------------------------------------------------------------------------------- |
| `@type`         | `"DeliveryBoxAddress"` |    ✓     |                                                                                                                             |
| `recipient`     | `string`               |    ✓     | max. length: 100                                                                                                            |
| `deliveryBoxId` | `string`               |    ✓     | max. length: 100                                                                                                            |
| `userId`        | `string`               |    ✓     | max. length: 100                                                                                                            |
| `zipCode`       | `string`               |    ✓     | max. length: 100                                                                                                            |
| `city`          | `string`               |    ✓     | max. length: 100                                                                                                            |
| `country`       | `string`               |    ✓     | only [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) country codes |
| `phoneNumber`   | `string`               |    ✗     | see [`PhoneNumber`](#phonenumber)                                                                                           |
| `state`         | `string`               |    ✗     | max. length: 100                                                                                                            |

## DisplayName

The Display Name is the textual representation of the natural or legal person.
It is usually combined out of titles, names or legal statuses.

**Properties**

| Name    | Type            | Required | Validation       |
| ------- | --------------- | :------: | ---------------- |
| `@type` | `"DisplayName"` |    ✓     |                  |
| `value` | `string`        |    ✓     | max. length: 100 |

## EMailAddress

The email address which can be used to reach the Identity over email systems.

**Properties**

| Name    | Type             | Required | Validation                                                                                |
| ------- | ---------------- | :------: | ----------------------------------------------------------------------------------------- |
| `@type` | `"EMailAddress"` |    ✓     |                                                                                           |
| `value` | `string`         |    ✓     | min. length: 3<br>max. length: 254<br>must match `^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$` |

## FaxNumber

The telephone number which can be used to reach the Identity via fax systems.

**Properties**

| Name    | Type          | Required | Validation                                                                    |
| ------- | ------------- | :------: | ----------------------------------------------------------------------------- |
| `@type` | `"FaxNumber"` |    ✓     |                                                                               |
| `value` | `string`      |    ✓     | min. length: 3<br>max. length: 100<br>must match `^[\d+\-x#*()/[\] ]{3,100}$` |

## IdentityFileReference

An IdentityFileReference is a link to an enmeshed [File]({% link _docs_integrate/data-model-overview.md %}#file) and can be used to add a File as an Attribute of an Identity.
One example for a use case is some kind of certificate.
How an IdentityFileReference can be used to [exchange Files using Attributes]({% link _docs_integrate/exchange-files-using-attributes.md %}) is described in the corresponding scenario documentation.

**Properties**

| Name    | Type                      | Required | Validation                          |
| ------- | ------------------------- | :------: | ----------------------------------- |
| `@type` | `"IdentityFileReference"` |    ✓     |                                     |
| `value` | `string`                  |    ✓     | min. length: 30<br>max. length: 150 |

## GivenName

The Given Name, also called first name or forename, is the name given to a person at birth which differentiates it from other family, tribe or community members.

**Properties**

| Name    | Type          | Required | Validation       |
| ------- | ------------- | :------: | ---------------- |
| `@type` | `"GivenName"` |    ✓     |                  |
| `value` | `string`      |    ✓     | max. length: 100 |

## HonorificPrefix

The honorific prefix of a person, e.g. 'Sir'.

**Properties**

| Name    | Type                | Required | Validation       |
| ------- | ------------------- | :------: | ---------------- |
| `@type` | `"HonorificPrefix"` |    ✓     |                  |
| `value` | `string`            |    ✓     | max. length: 100 |

## HonorificSuffix

The honorific suffix of a person, e.g. 'PhD'

**Properties**

| Name    | Type                | Required | Validation       |
| ------- | ------------------- | :------: | ---------------- |
| `@type` | `"HonorificSuffix"` |    ✓     |                  |
| `value` | `string`            |    ✓     | max. length: 100 |

## JobTitle

A short phrase that describes the position an employee has within an organization, e.g. "Senior Developer" in case of a software company.

**Properties**

| Name    | Type         | Required | Validation       |
| ------- | ------------ | :------: | ---------------- |
| `@type` | `"JobTitle"` |    ✓     |                  |
| `value` | `string`     |    ✓     | max. length: 100 |

## MiddleName

In various cultures, a middle name is a portion of a personal name that is written between the person's first given name and their surname.

**Properties**

| Name    | Type           | Required | Validation       |
| ------- | -------------- | :------: | ---------------- |
| `@type` | `"MiddleName"` |    ✓     |                  |
| `value` | `string`       |    ✓     | max. length: 100 |

## Nationality

The Nationality is the citizenship of a person at birth.
One cannot change the Nationality because it's innate.
Thus, the Nationality refers usually to the country where you are born.

**Properties**

| Name    | Type            | Required | Validation                                                                                                                  |
| ------- | --------------- | :------: | --------------------------------------------------------------------------------------------------------------------------- |
| `@type` | `"Nationality"` |    ✓     |                                                                                                                             |
| `value` | `string`        |    ✓     | only [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) country codes |

## PersonName

The PersonName is a complex Attribute Value type consisting of the GivenName, MiddleName, Surname, HonorificSuffix and HonorificPrefix of a person.

**Properties**

| Name              | Type           | Required | Validation                                |
| ----------------- | -------------- | :------: | ----------------------------------------- |
| `@type`           | `"PersonName"` |    ✓     |                                           |
| `givenName`       | `string`       |    ✓     | see [`GivenName`](#givenname)             |
| `middleName`      | `string`       |    ✗     | see [`MiddleName`](#middlename)           |
| `surname`         | `string`       |    ✓     | see [`Surname`](#surname)                 |
| `honorificSuffix` | `string`       |    ✗     | see [`HonorificSuffix`](#honorificsuffix) |
| `honorificPrefix` | `string`       |    ✗     | see [`HonorificPrefix`](#honorificprefix) |

## PhoneNumber

The telephone number which can be used to reach the Identity via telephone.

**Properties**

| Name    | Type            | Required | Validation       |
| ------- | --------------- | :------: | ---------------- |
| `@type` | `"PhoneNumber"` |    ✓     |                  |
| `value` | `string`        |    ✓     | max. length: 100 |

## PostOfficeBoxAddress

A complex Attribute Value defining the components of a post office box address.

**Properties**

| Name        | Type                     | Required | Validation                                                                                                                  |
| ----------- | ------------------------ | :------: | --------------------------------------------------------------------------------------------------------------------------- |
| `@type`     | `"PostOfficeBoxAddress"` |    ✓     |                                                                                                                             |
| `recipient` | `string`                 |    ✓     | max. length: 100                                                                                                            |
| `boxId`     | `string`                 |    ✓     | max. length: 100                                                                                                            |
| `zipCode`   | `string`                 |    ✓     | max. length: 100                                                                                                            |
| `city`      | `string`                 |    ✓     | max. length: 100                                                                                                            |
| `country`   | `string`                 |    ✓     | only [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) country codes |
| `state`     | `string`                 |    ✗     | max. length: 100                                                                                                            |

## Pseudonym

The officially registered pseudonym of a person.

**Properties**

| Name    | Type          | Required | Validation       |
| ------- | ------------- | :------: | ---------------- |
| `@type` | `"Pseudonym"` |    ✓     |                  |
| `value` | `string`      |    ✓     | max. length: 100 |

## SchematizedXML

SchematizedXML can be used to exchange files in XML format.
The exchange of XML files is also possible via [`IdentityFileReference`](#identityfilereference), but SchematizedXML has the advantage that it is possible to validate the XML and display the Attributes in the wallet.

**Properties**

| Name        | Type               | Required | Validation                                                 |
| ----------- | ------------------ | :------: | ---------------------------------------------------------- |
| `@type`     | `"SchematizedXML"` |    ✓     |                                                            |
| `value`     | `string`           |    ✓     | max. length: 50000 <br>must be a valid XML encoded string  |
| `schemaURL` | `string`           |    ✗     | min. length: 3<br>max. length: 1024<br>must be a valid URL |

## Sex

The Sex is the biological, medical, or officially registered gender of a natural person.

Please be advised that the possible values are defined by the public laws and technical identification standards that may vary between countries.<br><br>
We acknowledge and respect each person’s self-defined sexual and gender identity.
The "Gender" Attribute Value type is currently being evaluated to ensure inclusive and consistent representation.
{: .notice--info}

**Properties**

| Name    | Type     | Required | Validation                                 |
| ------- | -------- | :------: | ------------------------------------------ |
| `@type` | `"Sex"`  |    ✓     |                                            |
| `value` | `string` |    ✓     | one of: `"intersex"`, `"female"`, `"male"` |

## StreetAddress

A complex Attribute Value defining the components of a "normal" address.

**Properties**

| Name        | Type                    | Required | Validation                                                                                                                  |
| ----------- | ----------------------- | :------: | --------------------------------------------------------------------------------------------------------------------------- |
| `@type`     | `"StreetAddress"`       |    ✓     |                                                                                                                             |
| `recipient` | `string`                |    ✓     | max. length: 100                                                                                                            |
| `street`    | `string`                |    ✓     | max. length: 100                                                                                                            |
| `houseNo`   | `string`                |    ✓     | max. length: 100                                                                                                            |
| `zipCode`   | `string`                |    ✓     | max. length: 100                                                                                                            |
| `city`      | `string`                |    ✓     | max. length: 100                                                                                                            |
| `country`   | `string`                |    ✓     | only [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) country codes |
| `state`     | `string` \| `undefined` |    ✓     | max. length: 100                                                                                                            |

## Surname

The Surname, also called family name or last name, is the portion of the personal name that indicates the family, tribe or community.

**Properties**

| Name    | Type        | Required | Validation       |
| ------- | ----------- | :------: | ---------------- |
| `@type` | `"Surname"` |    ✓     |                  |
| `value` | `string`    |    ✓     | max. length: 100 |

## Website

The website of the person which can be used to get more information about the person.

**Properties**

| Name    | Type        | Required | Validation                                                 |
| ------- | ----------- | :------: | ---------------------------------------------------------- |
| `@type` | `"Website"` |    ✓     |                                                            |
| `value` | `string`    |    ✓     | min. length: 3<br>max. length: 1024<br>must be a valid URL |

# Relationship Attributes

The Attribute Values in this chapter can only be used in a [Relationship Attribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute).
Most of them are generic.
You can recognize those by the prefix `Proprietary` (e.g. `ProprietaryInteger`, `ProprietaryString`, ...).
In order to add some validation, you have the option to add [`valueHints`]({% link _docs_integrate/data-model-overview.md %}#valuehints).

## Consent

Represents the consent of an Identity to a specific topic.
To obtain persistent consent from a peer, a [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) can be sent, which contains a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), whose `owner` is the peer, with Consent as `value.@type` within its `attribute` property.
For more details, refer to the documentation of the [Request persistent consent of peer]({% link _docs_integrate/request-persistent-consent-of-peer.md %}) scenario.

**Properties**

| Name                 | Type                                                                                         | Required | Validation                                                                          |
| -------------------- | -------------------------------------------------------------------------------------------- | :------: | ----------------------------------------------------------------------------------- |
| `@type`              | `"Consent"`                                                                                  |    ✓     |                                                                                     |
| `consent`            | `string`                                                                                     |    ✓     | max. length: 10000                                                                  |
| `valueHintsOverride` | [`ValueHintsOverride`]({% link _docs_integrate/data-model-overview.md %}#valuehintsoverride) |    ✗     |                                                                                     |
| `link`               | `string`                                                                                     |    ✗     | min. length: 3<br>max. length: 1024<br>must be a valid URL                          |
| `linkDisplayText`    | `string`                                                                                     |    ✗     | min. length: 3<br>max. length: 30<br>can only be specified if a `link` is specified |

## ProprietaryBoolean

An arbitrary boolean value.

**Properties**

| Name                 | Type                                                                                         | Required | Validation        |
| -------------------- | -------------------------------------------------------------------------------------------- | :------: | ----------------- |
| `@type`              | `"ProprietaryBoolean"`                                                                       |    ✓     |                   |
| `title`              | `string`                                                                                     |    ✓     | max. length: 100  |
| `description`        | `string`                                                                                     |    ✗     | max. length: 1000 |
| `valueHintsOverride` | [`ValueHintsOverride`]({% link _docs_integrate/data-model-overview.md %}#valuehintsoverride) |    ✗     |                   |
| `value`              | `boolean`                                                                                    |    ✓     |                   |

## ProprietaryCountry

A two-letter country code according to [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements).

**Properties**

| Name                 | Type                                                                                         | Required | Validation                                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------- | :------: | --------------------------------------------------------------------------------------------------------------------------- |
| `@type`              | `"ProprietaryCountry"`                                                                       |    ✓     |                                                                                                                             |
| `title`              | `string`                                                                                     |    ✓     | max. length: 100                                                                                                            |
| `description`        | `string`                                                                                     |    ✗     | max. length: 1000                                                                                                           |
| `valueHintsOverride` | [`ValueHintsOverride`]({% link _docs_integrate/data-model-overview.md %}#valuehintsoverride) |    ✗     |                                                                                                                             |
| `value`              | `string`                                                                                     |    ✓     | only [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) country codes |

## ProprietaryEMailAddress

An email address.

**Properties**

| Name                 | Type                                                                                         | Required | Validation                                                                                |
| -------------------- | -------------------------------------------------------------------------------------------- | :------: | ----------------------------------------------------------------------------------------- |
| `@type`              | `"ProprietaryEMailAddress"`                                                                  |    ✓     |                                                                                           |
| `title`              | `string`                                                                                     |    ✓     | max. length: 100                                                                          |
| `description`        | `string`                                                                                     |    ✗     | max. length: 1000                                                                         |
| `valueHintsOverride` | [`ValueHintsOverride`]({% link _docs_integrate/data-model-overview.md %}#valuehintsoverride) |    ✗     |                                                                                           |
| `value`              | `string`                                                                                     |    ✓     | min. length: 3<br>max. length: 254<br>must match `^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$` |

## ProprietaryFileReference

A ProprietaryFileReference is a link to an enmeshed [File]({% link _docs_integrate/data-model-overview.md %}#file) and can be used to add a File as an Attribute of a Relationship.
Similar to an [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference), a ProprietaryFileReference can be used to [exchange Files using Attributes]({% link _docs_integrate/exchange-files-using-attributes.md %}#utilization-of-a-proprietaryfilereference).

**Properties**

| Name                 | Type                                                                                         | Required | Validation                          |
| -------------------- | -------------------------------------------------------------------------------------------- | :------: | ----------------------------------- |
| `@type`              | `"ProprietaryFileReference"`                                                                 |    ✓     |                                     |
| `title`              | `string`                                                                                     |    ✓     | max. length: 100                    |
| `description`        | `string`                                                                                     |    ✗     | max. length: 1000                   |
| `valueHintsOverride` | [`ValueHintsOverride`]({% link _docs_integrate/data-model-overview.md %}#valuehintsoverride) |    ✗     |                                     |
| `value`              | `string`                                                                                     |    ✓     | min. length: 30<br>max. length: 150 |

## ProprietaryFloat

An arbitrary floating-point number.

**Properties**

| Name                 | Type                                                                                         | Required | Validation        |
| -------------------- | -------------------------------------------------------------------------------------------- | :------: | ----------------- |
| `@type`              | `"ProprietaryFloat"`                                                                         |    ✓     |                   |
| `title`              | `string`                                                                                     |    ✓     | max. length: 100  |
| `description`        | `string`                                                                                     |    ✗     | max. length: 1000 |
| `valueHintsOverride` | [`ValueHintsOverride`]({% link _docs_integrate/data-model-overview.md %}#valuehintsoverride) |    ✗     |                   |
| `value`              | `number`                                                                                     |    ✓     |                   |

## ProprietaryHEXColor

A hexadecimal color code.

**Properties**

| Name                 | Type                                                                                         | Required | Validation                                                            |
| -------------------- | -------------------------------------------------------------------------------------------- | :------: | --------------------------------------------------------------------- |
| `@type`              | `"ProprietaryHEXColor"`                                                                      |    ✓     |                                                                       |
| `title`              | `string`                                                                                     |    ✓     | max. length: 100                                                      |
| `description`        | `string`                                                                                     |    ✗     | max. length: 1000                                                     |
| `valueHintsOverride` | [`ValueHintsOverride`]({% link _docs_integrate/data-model-overview.md %}#valuehintsoverride) |    ✗     |                                                                       |
| `value`              | `string`                                                                                     |    ✓     | min.length: 4<br>max. length: 9<br>must match `^#([0-9A-F]{3}){1,2}$` |

## ProprietaryInteger

An arbitrary integer number.

**Properties**

| Name                 | Type                                                                                         | Required | Validation         |
| -------------------- | -------------------------------------------------------------------------------------------- | :------: | ------------------ |
| `@type`              | `"ProprietaryInteger"`                                                                       |    ✓     |                    |
| `title`              | `string`                                                                                     |    ✓     | max. length: 100   |
| `description`        | `string`                                                                                     |    ✗     | max. length: 1000  |
| `valueHintsOverride` | [`ValueHintsOverride`]({% link _docs_integrate/data-model-overview.md %}#valuehintsoverride) |    ✗     |                    |
| `value`              | `number`                                                                                     |    ✓     | must be an integer |

## ProprietaryJSON

An arbitrary JSON value.
The `value` property can contain any valid JSON structure (except `null`).

For validation purposes, the `value` property is stringified using `JSON.stringify`.
That string must not exceed the maximum length of 4096 characters.

**Properties**

| Name          | Type                | Required | Validation        |
| ------------- | ------------------- | :------: | ----------------- |
| `@type`       | `"ProprietaryJSON"` |    ✓     |                   |
| `title`       | `string`            |    ✓     | max. length: 100  |
| `description` | `string`            |    ✗     | max. length: 1000 |
| `value`       | `unknown`           |    ✓     | max. length: 4096 |

**Examples**

```jsonc
{
  "@type": "ProprietaryJSON",
  "title": "My JSON",
  // length: 94
  "value": {
    "foo": "bar",
    "baz": 123,
    "qux": true,
    "quux": {
      "corge": "grault"
    },
    "garply": ["waldo", "fred", "plugh"]
  }
}
```

```jsonc
{
  "@type": "ProprietaryJSON",
  "title": "My JSON",
  // length: 8
  "value": "a string"
}
```

```jsonc
{
  "@type": "ProprietaryJSON",
  "title": "My JSON",
  // length: 28
  "value": ["a string", 1, { "foo": "bar" }]
}
```

## ProprietaryLanguage

A two-letter [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code.

**Properties**

| Name                 | Type                                                                                         | Required | Validation                                                                             |
| -------------------- | -------------------------------------------------------------------------------------------- | :------: | -------------------------------------------------------------------------------------- |
| `@type`              | `"ProprietaryLanguage"`                                                                      |    ✓     |                                                                                        |
| `title`              | `string`                                                                                     |    ✓     | max. length: 100                                                                       |
| `description`        | `string`                                                                                     |    ✗     | max. length: 1000                                                                      |
| `valueHintsOverride` | [`ValueHintsOverride`]({% link _docs_integrate/data-model-overview.md %}#valuehintsoverride) |    ✗     |                                                                                        |
| `value`              | `string`                                                                                     |    ✓     | only [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes |

## ProprietaryPhoneNumber

A phone number.

**Properties**

| Name                 | Type                                                                                         | Required | Validation                                                                    |
| -------------------- | -------------------------------------------------------------------------------------------- | :------: | ----------------------------------------------------------------------------- |
| `@type`              | `"ProprietaryPhoneNumber"`                                                                   |    ✓     |                                                                               |
| `title`              | `string`                                                                                     |    ✓     | max. length: 100                                                              |
| `description`        | `string`                                                                                     |    ✗     | max. length: 1000                                                             |
| `valueHintsOverride` | [`ValueHintsOverride`]({% link _docs_integrate/data-model-overview.md %}#valuehintsoverride) |    ✗     |                                                                               |
| `value`              | `string`                                                                                     |    ✓     | min. length: 3<br>max. length: 100<br>must match `^[\d+\-x#*()/[\] ]{3,100}$` |

## ProprietaryString

An arbitrary string.

**Properties**

| Name                 | Type                                                                                         | Required | Validation        |
| -------------------- | -------------------------------------------------------------------------------------------- | :------: | ----------------- |
| `@type`              | `"ProprietaryString"`                                                                        |    ✓     |                   |
| `title`              | `string`                                                                                     |    ✓     | max. length: 100  |
| `description`        | `string`                                                                                     |    ✗     | max. length: 1000 |
| `valueHintsOverride` | [`ValueHintsOverride`]({% link _docs_integrate/data-model-overview.md %}#valuehintsoverride) |    ✗     |                   |
| `value`              | `string`                                                                                     |    ✓     | max. length: 100  |

## ProprietaryURL

A URL.

**Properties**

| Name                 | Type                                                                                         | Required | Validation                                                 |
| -------------------- | -------------------------------------------------------------------------------------------- | :------: | ---------------------------------------------------------- |
| `@type`              | `"ProprietaryURL"`                                                                           |    ✓     |                                                            |
| `title`              | `string`                                                                                     |    ✓     | max. length: 100                                           |
| `description`        | `string`                                                                                     |    ✗     | max. length: 1000                                          |
| `valueHintsOverride` | [`ValueHintsOverride`]({% link _docs_integrate/data-model-overview.md %}#valuehintsoverride) |    ✗     |                                                            |
| `value`              | `string`                                                                                     |    ✓     | min. length: 3<br>max. length: 1024<br>must be a valid URL |

## ProprietaryXML

An XML.

**Properties**

| Name                 | Type                                                                                         | Required | Validation                                                 |
| -------------------- | -------------------------------------------------------------------------------------------- | :------: | ---------------------------------------------------------- |
| `@type`              | `"ProprietaryXML"`                                                                           |    ✓     |                                                            |
| `title`              | `string`                                                                                     |    ✓     | max. length: 100                                           |
| `description`        | `string`                                                                                     |    ✗     | max. length: 1000                                          |
| `valueHintsOverride` | [`ValueHintsOverride`]({% link _docs_integrate/data-model-overview.md %}#valuehintsoverride) |    ✗     |                                                            |
| `value`              | `string`                                                                                     |    ✓     | max. length: 50000 <br>must be a valid XML encoded string  |
| `schemaURL`          | `string`                                                                                     |    ✗     | min. length: 3<br>max. length: 1024<br>must be a valid URL |
