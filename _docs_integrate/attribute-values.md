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

Each [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) contains an instance of an Attribute Value within its `value` property. There are different types of Attribute Values. The types define the value's structural definition, rendering information and validators. For example, an email address with the value `address@company.corp` is stored with the Attribute Value type [`EMailAddress`](#emailaddress), which defines

- the data type of the actual value (a String)
- how it is validated (the pattern of an email address and a maximum length)
- information about how it can be rendered on the UI

enmeshed defines a standard set of possible Attribute Value types for Identities within the enmeshed ecosystem and its meaning for the Identities. And every Identity can understand/use/fill/query these Attribute Value types of other Identities.

Most Attribute Value types are atomic, which means that they have only one property called `value` (e.g. [`EMailAddress`](#emailaddress), [`DisplayName`](#displayname), [`PhoneNumber`](#phonenumber)). But there are also more complex Attribute Value types which consist of multiple properties with a strong correlation (e.g. [`StreetAddress`](#streetaddress), [`PersonName`](#personname)). These properties can (but don't have to) contain other Attribute Values.

# Identity Attributes

The Attribute Values in this chapter can only be used in an [Identity Attribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute).

## Affiliation

A complex Attribute Value type which defines the affiliation of a person to an organization. Inside of the organization the person can have a role and it can be assigned to a specific unit inside of the organization.

**Properties**

| Name           | Type            | Required | Validation                                                |
| -------------- | --------------- | :------: | --------------------------------------------------------- |
| `@type`        | `"Affiliation"` |    ✓     |                                                           |
| `role`         | `string`        |    ✗     | see [`AffiliationRole`](#affiliationrole)                 |
| `organization` | `string`        |    ✓     | see [`AffiliationOrganization`](#affiliationorganization) |
| `unit`         | `string`        |    ✗     | see [`AffiliationUnit`](#affiliationunit)                 |

## AffiliationOrganization

The organization the person is affiliated to.

It is not recommended to send an AffiliationOrganization to another Identity by its own. Instead, send an [`Affiliation`](#affiliation) with the `organization` property set.
{: .notice--warning}

**Properties**

| Name    | Type                        | Required | Validation       |
| ------- | --------------------------- | :------: | ---------------- |
| `@type` | `"AffiliationOrganization"` |    ✓     |                  |
| `value` | `string`                    |    ✓     | max. length: 100 |

**Validation**

## AffiliationRole

The role the person has in the organization.

It is not recommended to send an AffiliationRole to another Identity by its own. Instead, send an [`Affiliation`](#affiliation) with the `role` property set.
{: .notice--warning}

**Properties**

| Name    | Type                | Required | Validation       |
| ------- | ------------------- | :------: | ---------------- |
| `@type` | `"AffiliationRole"` |    ✓     |                  |
| `value` | `string`            |    ✓     | max. length: 100 |

## AffiliationUnit

The organization unit the person is affiliated to.

It is not recommended to send an AffiliationUnit to another Identity by its own. Instead, send an [`Affiliation`](#affiliation) with the `unit` property set.
{: .notice--warning}

**Properties**

| Name    | Type                | Required | Validation       |
| ------- | ------------------- | :------: | ---------------- |
| `@type` | `"AffiliationUnit"` |    ✓     |                  |
| `value` | `string`            |    ✓     | max. length: 100 |

## BirthCity

The city of birth.

It is not recommended to send a BirthCity to another Identity by its own. Instead, send a [`BirthPlace`](#birthplace) with the `city` property set.
{: .notice--warning}

**Properties**

| Name    | Type          | Required | Validation       |
| ------- | ------------- | :------: | ---------------- |
| `@type` | `"BirthCity"` |    ✓     |                  |
| `value` | `string`      |    ✓     | max. length: 100 |

## BirthCountry

The country of birth.

It is not recommended to send a BirthCountry to another Identity by its own. Instead, send a [`BirthPlace`](#birthplace) with the `country` property set.
{: .notice--warning}

**Properties**

| Name    | Type             | Required | Validation                                                                                                                  |
| ------- | ---------------- | :------: | --------------------------------------------------------------------------------------------------------------------------- |
| `@type` | `"BirthCountry"` |    ✓     |                                                                                                                             |
| `value` | `string`         |    ✓     | only [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) country codes |

## BirthDate

The birth date of a natural person.

**Properties**

| Name    | Type          | Required | Validation                      |
| ------- | ------------- | :------: | ------------------------------- |
| `@type` | `"BirthDate"` |    ✓     |                                 |
| `day`   | `number`      |    ✓     | see [`BirthDay`](#birthday)     |
| `month` | `number`      |    ✓     | see [`BirthMonth`](#birthmonth) |
| `year`  | `number`      |    ✓     | see [`BirthYear`](#birthyear)   |

## BirthDay

The day of birth.

It is not recommended to send a BirthDay to another Identity by its own. Instead, send a [`BirthDate`](#birthdate) with the `day` property set.
{: .notice--warning}

| Name    | Type         | Required | Validation                              |
| ------- | ------------ | :------: | --------------------------------------- |
| `@type` | `"BirthDay"` |    ✓     |                                         |
| `value` | `number`     |    ✓     | min: 1<br>max: 31<br>must be an integer |

## BirthMonth

The month of birth.

It is not recommended to send a BirthMonth to another Identity by its own. Instead, send a [`BirthDate`](#birthdate) with the `month` property set.
{: .notice--warning}

| Name    | Type           | Required | Validation                              |
| ------- | -------------- | :------: | --------------------------------------- |
| `@type` | `"BirthMonth"` |    ✓     |                                         |
| `value` | `number`       |    ✓     | min: 1<br>max: 12<br>must be an integer |

## BirthName

The BirthName is the surname of the person at birth. Some countries allow changing the surname, thus the BirthName is also used as the identification. The BirthName is innate depending on your surname at birth.

If this value is set, there has been a change of the surname throughout the life of the person.

**Properties**

| Name    | Type          | Required | Validation       |
| ------- | ------------- | :------: | ---------------- |
| `@type` | `"BirthName"` |    ✓     |                  |
| `value` | `string`      |    ✓     | max. length: 100 |

## BirthPlace

The BirthPlace consists of the BirthCity and BirthCountry and can optionally include a BirthState (e.g. if the BirthCity is ambiguous within the BirthCountry).

**Properties**

| Name      | Type           | Required | Validation                      |
| --------- | -------------- | :------: | ------------------------------- |
| `@type`   | `"BirthPlace"` |    ✓     |                                 |
| `city`    | `string`       |  ✓ see   | [`BirthCity`](#birthcity)       |
| `country` | `string`       |  ✓ see   | [`BirthCountry`](#birthcountry) |
| `state`   | `string`       |  ✗ see   | [`BirthState`](#birthstate)     |

## BirthState

The state of birth.

It is not recommended to send a BirthState to another Identity by its own. Instead, send a [`BirthPlace`](#birthplace) with the `state` property set.
{: .notice--warning}

**Properties**

| Name    | Type           | Required | Validation       |
| ------- | -------------- | :------: | ---------------- |
| `@type` | `"BirthState"` |    ✓     |                  |
| `value` | `string`       |    ✓     | max. length: 100 |

## BirthYear

The year of birth in the Gregorian calendar.

It is not recommended to send a BirthYear to another Identity by its own. Instead, send a [`BirthDate`](#birthdate) with the `year` property set.
{: .notice--warning}

| Name    | Type          | Required | Validation                                |
| ------- | ------------- | :------: | ----------------------------------------- |
| `@type` | `"BirthYear"` |    ✓     |                                           |
| `value` | `number`      |    ✓     | min: 1<br>max: 9999<br>must be an integer |

## Citizenship

The Citizenship defines which country currently recognizes you as a citizen. Thus, the Citizenship usually refers to the country you have a passport from.

**Properties**

| Name    | Type            | Required | Validation                                                                                                                  |
| ------- | --------------- | :------: | --------------------------------------------------------------------------------------------------------------------------- |
| `@type` | `"Citizenship"` |    ✓     |                                                                                                                             |
| `value` | `string`        |    ✓     | only [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) country codes |

## City

The name of a city. This is usually used as part of a [`DeliveryBoxAddress`](#deliveryboxaddress), [`PostOfficeBoxAddress`](#postofficeboxaddress) or [`StreetAddress`](#streetaddress).

It is not recommended to send a City to another Identity by its own. Instead, send a [`DeliveryBoxAddress`](#deliveryboxaddress), [`PostOfficeBoxAddress`](#postofficeboxaddress) or [`StreetAddress`](#streetaddress) with the `city` property set.
{: .notice--warning}

**Properties**

| Name    | Type     | Required | Validation       |
| ------- | -------- | :------: | ---------------- |
| `@type` | `"City"` |    ✓     |                  |
| `value` | `string` |    ✓     | max. length: 100 |

## CommunicationLanguage

The CommunicationLanguage is an officially recognized language the person can communicate with.

**Properties**

| Name    | Type                      | Required | Validation                                                                             |
| ------- | ------------------------- | :------: | -------------------------------------------------------------------------------------- |
| `@type` | `"CommunicationLanguage"` |    ✓     |                                                                                        |
| `value` | `string`                  |    ✓     | only [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes |

## Country

A country code according to the standard "ISO 3166-1 alpha-2". This is usually used as part of a [`DeliveryBoxAddress`](#deliveryboxaddress), [`PostOfficeBoxAddress`](#postofficeboxaddress) or [`StreetAddress`](#streetaddress).

It is not recommended to send a Country to another Identity by its own. Instead, send a [`DeliveryBoxAddress`](#deliveryboxaddress), [`PostOfficeBoxAddress`](#postofficeboxaddress) or [`StreetAddress`](#streetaddress) with the `country` property set.
{: .notice--warning}

**Properties**

| Name    | Type        | Required | Validation                                                                                                                  |
| ------- | ----------- | :------: | --------------------------------------------------------------------------------------------------------------------------- |
| `@type` | `"Country"` |    ✓     |                                                                                                                             |
| `value` | `string`    |    ✓     | only [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) country codes |

## DeliveryBoxAddress

A complex Attribute Value defining the components of a delivery box address.

**Properties**

| Name            | Type                   | Required | Validation                        |
| --------------- | ---------------------- | :------: | --------------------------------- |
| `@type`         | `"DeliveryBoxAddress"` |    ✓     |                                   |
| `recipient`     | `string`               |    ✓     | max. length: 100                  |
| `deliveryBoxId` | `string`               |    ✓     | max. length: 100                  |
| `userId`        | `string`               |    ✓     | max. length: 100                  |
| `zipCode`       | `string`               |    ✓     | see [`ZipCode`](#zipcode)         |
| `city`          | `string`               |    ✓     | see [`City`](#city)               |
| `country`       | `string`               |    ✓     | see [`Country`](#country)         |
| `phoneNumber`   | `string`               |    ✗     | see [`PhoneNumber`](#phonenumber) |
| `state`         | `string`               |    ✗     | see [`State`](#state)             |

## DisplayName

The Display Name is the textual representation of the natural or legal person. It is usually combined out of titles, names or legal statuses.

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

## HouseNumber

A house number. This is usually used as part of a [`StreetAddress`](#streetaddress).

It is not recommended to send a HouseNumber to another Identity by its own. Instead, send a [`StreetAddress`](#streetaddress) with the `houseNumber` property set.
{: .notice--warning}

**Properties**

| Name    | Type            | Required | Validation       |
| ------- | --------------- | :------: | ---------------- |
| `@type` | `"HouseNumber"` |    ✓     |                  |
| `value` | `string`        |    ✓     | max. length: 100 |

## JobTitle

A short phrase that describes the position an employee has within an organization. (e.g. "Senior Developer" in case of a software company).

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

The Nationality is the citizenship of a person at birth. One cannot change the Nationality because it's innate. Thus, the Nationality refers usually to the country where you are born.

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

| Name        | Type                     | Required | Validation                |
| ----------- | ------------------------ | :------: | ------------------------- |
| `@type`     | `"PostOfficeBoxAddress"` |    ✓     |                           |
| `recipient` | `string`                 |    ✓     | max. length: 100          |
| `boxId`     | `string`                 |    ✓     | max. length: 100          |
| `zipCode`   | `string`                 |    ✓     | see [`ZipCode`](#zipcode) |
| `city`      | `string`                 |    ✓     | see [`City`](#city)       |
| `country`   | `string`                 |    ✓     | see [`Country`](#country) |
| `state`     | `string`                 |    ✗     | see [`State`](#state)     |

## Pseudonym

The officially registered pseudonym of a person.

**Properties**

| Name    | Type          | Required | Validation       |
| ------- | ------------- | :------: | ---------------- |
| `@type` | `"Pseudonym"` |    ✓     |                  |
| `value` | `string`      |    ✓     | max. length: 100 |

## SchematizedXML

SchematizedXML can be used to exchange files in XML format. The exchange of XML files is also possible via [`IdentityFileReference`](#identityfilereference), but SchematizedXML has the advantage that it is possible to validate the XML and display the Attributes in the wallet.

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

## State

The name of a state. This is usually used as part of a [`DeliveryBoxAddress`](#deliveryboxaddress), [`PostOfficeBoxAddress`](#postofficeboxaddress) or [`StreetAddress`](#streetaddress).

It is not recommended to send a State to another Identity by its own. Instead, send a [`DeliveryBoxAddress`](#deliveryboxaddress), [`PostOfficeBoxAddress`](#postofficeboxaddress) or [`StreetAddress`](#streetaddress) with the `state` property set.
{: .notice--warning}

**Properties**

| Name    | Type      | Required | Validation       |
| ------- | --------- | :------: | ---------------- |
| `@type` | `"State"` |    ✓     |                  |
| `value` | `string`  |    ✓     | max. length: 100 |

## Statement

The statement allows a very generic digital mapping of facts

**Properties**

| Name               | Type          | Required | Validation                                                              |
| ------------------ | ------------- | :------: | ----------------------------------------------------------------------- |
| `@type`            | `"Statement"` |    ✓     |                                                                         |
| `value`            | `string`      |    ✓     | see [`StatementSubject`](#statementsubject)                             |
| `predicate`        | `string`      |    ✓     | see [`StatementPredicate`](#statementpredicate)                         |
| `object`           | `string`      |    ✓     | see [`StatementObject`](#statementobject)                               |
| `issuer`           | `string`      |    ✓     | see [`DigitalIdentityDescriptor`](#statement-digitalidentitydescriptor) |
| `issuerConditions` | `string`      |    ✓     | see [`StatementIssuerConditions`](#statementissuerconditions)           |

## Statement DigitalIdentityDescriptor

The issuer of a [`statement`](#statement).

It is not recommended to send a DigitalIdentityDescriptor to another Identity by its own. Instead, send a [`statement`](#statement)
{: .notice--warning}

**Properties**

| Name         | Type                          | Required | Validation                                                                                                           |
| ------------ | ----------------------------- | :------: | -------------------------------------------------------------------------------------------------------------------- |
| `@type`      | `"DigitalIdentityDescriptor"` |    ✓     |                                                                                                                      |
| `address`    | `string`                      |    ✓     | The `address` of the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) that owns the statement. |
| `attributes` | `string []`                   |    ✗     | see [`Identity Attributes`](#identity-attributes)                                                                    |

## StatementAuthorityType

The authority type in [`StatementIssuerConditions`](#statementissuerconditions)

It is not recommended to send a StatementAuthorityType to another Identity by its own. Instead, send a [`statement`](#statement)
{: .notice--warning}

**Properties**

| Name    | Type          | Required | Validation                                                                                                                                           |
| ------- | ------------- | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@type` | `"Statement"` |    ✓     |                                                                                                                                                      |
| `value` | `string`      |    ✓     | one of: `"ownAuthority"`, `"trustedAuthority"`, `"publicAuthority"`,`"relayedOwnAuthority"`, `"relayedTrustedAuthority"`, `"relayedPublicAuthority"` |

## StatementEvidence

The evidence in [`StatementIssuerConditions`](#statementissuerconditions)

It is not recommended to send a StatementEvidence to another Identity by its own. Instead, send a [`statement`](#statement)
{: .notice--warning}

**Properties**

| Name    | Type                  | Required | Validation                                                                                                                                                                                                                                                  |
| ------- | --------------------- | :------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@type` | `"StatementEvidence"` |    ✓     |                                                                                                                                                                                                                                                             |
| `value` | `string`              |    ✓     | one of: `"ownFact"`, `"digitalPublicIDCard"`, `"digitalPublicDocument"`,`"digitalDocument"`, `"sightCheckOfPublicIDCard"`, `"sightCheckOfPublicDocument"`,`"sightCheckOfDocument"`, `"mediaOfPublicIDCard"`, `"mediaOfPublicDocument"`, `"mediaOfDocument"` |

## StatementIssuerConditions

The issuer conditions in a [`Statement`](#statement)

It is not recommended to send a StatementIssuerConditions to another Identity by its own. Instead, send a [`statement`](#statement)
{: .notice--warning}

**Properties**

| Name            | Type                          | Required | Validation                                                              |
| --------------- | ----------------------------- | :------: | ----------------------------------------------------------------------- |
| `@type`         | `"StatementIssuerConditions"` |    ✓     |                                                                         |
| `validFrom`     | `string`                      |    ✓     | The date from which on the Attribute is valid.                          |
| `validTo`       | `string`                      |    ✓     | The date until this Attribute is valid                                  |
| `evidence`      | `string`                      |    ✓     | see [`StatementEvidence`](#statementevidence)                           |
| `authorityType` | `string`                      |    ✓     | see [`StatementAuthorityType`](#statementauthoritytype)                 |
| `relayedParty`  | `string`                      |    ✗     | see [`DigitalIdentityDescriptor`](#statement-digitalidentitydescriptor) |

## StatementObject

The object of a [`statement`](#statement).

It is not recommended to send a object to another Identity by its own. Instead, send a [`statement`](#statement)
{: .notice--warning}

**Properties**

| Name         | Type                | Required | Validation                                                                                                           |
| ------------ | ------------------- | :------: | -------------------------------------------------------------------------------------------------------------------- |
| `@type`      | `"StatementObject"` |    ✓     |                                                                                                                      |
| `address`    | `string`            |    ✓     | The `address` of the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) that owns the statement. |
| `attributes` | `string []`         |    ✗     | see [`Identity Attributes`](#identity-attributes)                                                                    |

## StatementPredicate

The predicate of a [`statement`](#statement).

It is not recommended to send a predicate to another Identity by its own. Instead, send a [`statement`](#statement)
{: .notice--warning}

**Properties**

| Name    | Type                   | Required | Validation                                                                                |
| ------- | ---------------------- | :------: | ----------------------------------------------------------------------------------------- |
| `@type` | `"StatementPredicate"` |    ✓     |                                                                                           |
| `value` | `string`               |    ✓     | one of: `"hasAttribute"`, `"relatesTo"`, `"isRelatedTo"` or any string starting with "z-" |

## StatementSubject

The subject of a [`statement`](#statement).

It is not recommended to send a subject to another Identity by its own. Instead, send a [`statement`](#statement)
{: .notice--warning}

**Properties**

| Name         | Type                 | Required | Validation                                                                                                           |
| ------------ | -------------------- | :------: | -------------------------------------------------------------------------------------------------------------------- |
| `@type`      | `"StatementSubject"` |    ✓     |                                                                                                                      |
| `address`    | `string`             |    ✓     | The `address` of the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) that owns the statement. |
| `attributes` | `string []`          |    ✗     | see [`Identity Attributes`](#identity-attributes)                                                                    |

## Street

A street name. This is usually used as part of a [`StreetAddress`](#streetaddress).

It is not recommended to send a Street to another Identity by its own. Instead, send a [`StreetAddress`](#streetaddress) with the `street` property set.
{: .notice--warning}

**Properties**

| Name    | Type       | Required | Validation       |
| ------- | ---------- | :------: | ---------------- |
| `@type` | `"Street"` |    ✓     |                  |
| `value` | `string`   |    ✓     | max. length: 100 |

## StreetAddress

A complex Attribute Value defining the components of a "normal" address.

**Properties**

| Name        | Type                    | Required | Validation                        |
| ----------- | ----------------------- | :------: | --------------------------------- |
| `@type`     | `"StreetAddress"`       |    ✓     |                                   |
| `recipient` | `string`                |    ✓     | max. length: 100                  |
| `street`    | `string`                |    ✓     | see [`Street`](#street)           |
| `houseNo`   | `string`                |    ✓     | see [`HouseNumber`](#housenumber) |
| `zipCode`   | `string`                |    ✓     | see [`ZipCode`](#zipcode)         |
| `city`      | `string`                |    ✓     | see [`City`](#city)               |
| `country`   | `string`                |    ✓     | see [`Country`](#country)         |
| `state`     | `string` \| `undefined` |    ✓     | see [`State`](#state)             |

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

## ZipCode

A zip code. This is usually used as part of a [`DeliveryBoxAddress`](#deliveryboxaddress), [`PostOfficeBoxAddress`](#postofficeboxaddress) or [`StreetAddress`](#streetaddress).

It is not recommended to send a ZipCode to another Identity by its own. Instead, send a [`DeliveryBoxAddress`](#deliveryboxaddress), [`PostOfficeBoxAddress`](#postofficeboxaddress) or [`StreetAddress`](#streetaddress) with the `zipCode` property set.
{: .notice--warning}

**Properties**

| Name    | Type        | Required | Validation       |
| ------- | ----------- | :------: | ---------------- |
| `@type` | `"ZipCode"` |    ✓     |                  |
| `value` | `string`    |    ✓     | max. length: 100 |

# Relationship Attributes

The Attribute Values in this chapter can only be used in a [Relationship Attribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute). Most of them are generic. You can recognize those by the prefix `Proprietary` (e.g. `ProprietaryInteger`, `ProprietaryString`, ...). In order to add some validation, you have the option to add [`valueHints`]({% link _docs_integrate/data-model-overview.md %}#valuehints).

## Consent

Represents the consent of an Identity to a specific topic. To obtain persistent consent from a peer, a [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) can be sent, which contains a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), whose `owner` is the peer, with Consent as `value.@type` within its `attribute` property. For more details, refer to the documentation of the [Request persistent consent of peer]({% link _docs_integrate/request-persistent-consent-of-peer.md %}) scenario.

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

An arbitrary JSON value. The `value` property can contain any valid JSON structure (except `null`).

For validation purposes, the `value` property is stringified using `JSON.stringify`. That string must not exceed the maximum length of 4096 characters.

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
