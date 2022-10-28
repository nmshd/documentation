---
title: "Attribute Values"
permalink: /explore/attribute-values
toc: true
---

# Identity Attributes

The Attribute values in this chapter can only be used in a [Identity Attriubte]({% link _docs_explore/61-data-model.md %}#identityattribute).

## DeliveryBoxAddress

**Properties**

| Name            | Type                          | Required | Validation       |
| --------------- | ----------------------------- | :------: | ---------------- |
| `@type`         | `"DeliveryBoxAddress"`        |    ✓     |                  |
| `recipient`     | `string`                      |    ✓     | max. length: 100 |
| `deliveryBoxId` | `string`                      |    ✓     | max. length: 100 |
| `userId`        | `string`                      |    ✓     | max. length: 100 |
| `zipCode`       | [`ZipCode`](#zipcode)         |    ✓     |                  |
| `city`          | [`City`](#city)               |    ✓     |                  |
| `country`       | [`Country`](#country)         |    ✓     |                  |
| `phoneNumber`   | [`PhoneNumber`](#phonenumber) |    ✗     |                  |
| `state`         | [`State`](#state)             |    ✗     |                  |

## PostOfficeBoxAddress

**Properties**

| Name        | Type                     | Required | Validation       |
| ----------- | ------------------------ | :------: | ---------------- |
| `@type`     | `"PostOfficeBoxAddress"` |    ✓     |                  |
| `recipient` | `string`                 |    ✓     | max. length: 100 |
| `boxId`     | `string`                 |    ✓     | max. length: 100 |
| `zipCode`   | [`ZipCode`](#zipcode)    |    ✓     |                  |
| `city`      | [`City`](#city)          |    ✓     |                  |
| `country`   | [`Country`](#country)    |    ✓     |                  |
| `state`     | [`State`](#state)        |    ✗     |                  |

## StreetAddress

**Properties**

| Name          | Type                          | Required | Validation       |
| ------------- | ----------------------------- | :------: | ---------------- |
| `@type`       | `"StreetAddress"`             |    ✓     |                  |
| `recipient`   | `string`                      |    ✓     | max. length: 100 |
| `street`      | [`Street`](#street)           |    ✓     |                  |
| `houseNumber` | [`HouseNumber`](#housenumber) |    ✓     |                  |
| `zipCode`     | [`ZipCode`](#zipcode)         |    ✓     |                  |
| `city`        | [`City`](#city)               |    ✓     |                  |
| `country`     | [`Country`](#country)         |    ✓     |                  |
| `state`       | [`State`](#state)             |    ✓     |                  |

## Street

**Properties**

| Name    | Type       | Required | Validation       |
| ------- | ---------- | :------: | ---------------- |
| `@type` | `"Street"` |    ✓     |                  |
| `value` | `string`   |    ✓     | max. length: 100 |

## HouseNumber

**Properties**

| Name    | Type            | Required | Validation       |
| ------- | --------------- | :------: | ---------------- |
| `@type` | `"HouseNumber"` |    ✓     |                  |
| `value` | `string`        |    ✓     | max. length: 100 |

## City

**Properties**

| Name    | Type     | Required | Validation       |
| ------- | -------- | :------: | ---------------- |
| `@type` | `"City"` |    ✓     |                  |
| `value` | `string` |    ✓     | max. length: 100 |

## Country

**Properties**

| Name    | Type        | Required | Validation                                                                                |
| ------- | ----------- | :------: | ----------------------------------------------------------------------------------------- |
| `@type` | `"Country"` |    ✓     |                                                                                           |
| `value` | `string`    |    ✓     | only [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes |

## PhoneNumber

**Properties**

| Name    | Type            | Required | Validation       |
| ------- | --------------- | :------: | ---------------- |
| `@type` | `"PhoneNumber"` |    ✓     |                  |
| `value` | `string`        |    ✓     | max. length: 100 |

## State

**Properties**

| Name    | Type      | Required | Validation       |
| ------- | --------- | :------: | ---------------- |
| `@type` | `"State"` |    ✓     |                  |
| `value` | `string`  |    ✓     | max. length: 100 |

## ZipCode

**Properties**

| Name    | Type        | Required | Validation       |
| ------- | ----------- | :------: | ---------------- |
| `@type` | `"ZipCode"` |    ✓     |                  |
| `value` | `string`    |    ✓     | max. length: 100 |

## Affiliation

**Properties**

| Name         | Type                                                  | Required |
| ------------ | ----------------------------------------------------- | :------: |
| `@type`      | `"Affiliation"`                                       |    ✓     |
| role         | [`AffiliationRole`](#affiliationrole)                 |    ✓     |
| organization | [`AffiliationOrganization`](#affiliationorganization) |    ✓     |
| unit         | [`AffiliationUnit`](#affiliationunit)                 |    ✓     |

## AffiliationRole

**Properties**

| Name    | Type                | Required | Validation       |
| ------- | ------------------- | :------: | ---------------- |
| `@type` | `"AffiliationRole"` |    ✓     |                  |
| `value` | `string`            |    ✓     | max. length: 100 |

## AffiliationOrganization

**Properties**

| Name    | Type                        | Required | Validation       |
| ------- | --------------------------- | :------: | ---------------- |
| `@type` | `"AffiliationOrganization"` |    ✓     |                  |
| `value` | `string`                    |    ✓     | max. length: 100 |

**Validation**

## AffiliationUnit

**Properties**

| Name    | Type                | Required | Validation       |
| ------- | ------------------- | :------: | ---------------- |
| `@type` | `"AffiliationUnit"` |    ✓     |                  |
| `value` | `string`            |    ✓     | max. length: 100 |

## BirthDate

**Properties**

| Name    | Type                        | Required |
| ------- | --------------------------- | :------: |
| `@type` | `"BirthDate"`               |    ✓     |
| `day`   | [`BirthDay`](#birthday)     |    ✓     |
| `month` | [`BirthMonth`](#birthmonth) |    ✓     |
| `year`  | [`BirthYear`](#birthyear)   |    ✓     |

## BirthDay

| Name    | Type     | Required | Validation                              |
| ------- | -------- | :------: | --------------------------------------- |
| `value` | `number` |    ✓     | min: 1<br>max: 31<br>must be an integer |

## BirthMonth

| Name    | Type         | Required | Validation                              |
| ------- | ------------ | :------: | --------------------------------------- |
| `@type` | `"BirthDay"` |    ✓     |                                         |
| `value` | `number`     |    ✓     | min: 1<br>max: 12<br>must be an integer |

## BirthYear

| Name    | Type           | Required | Validation                                |
| ------- | -------------- | :------: | ----------------------------------------- |
| `@type` | `"BirthMonth"` |    ✓     |                                           |
| `value` | `number`       |    ✓     | min: 1<br>max: 9999<br>must be an integer |

## BirthPlace

**Properties**

| Name      | Type                            | Required |
| --------- | ------------------------------- | :------: |
| `@type`   | `"BirthPlace"`                  |    ✓     |
| `city`    | [`BirthCity`](#birthcity)       |    ✓     |
| `country` | [`BirthCountry`](#birthcountry) |    ✓     |
| `state`   | [`BirthState`](#birthstate)     |    ✗     |

## BirthCity

**Properties**

| Name    | Type          | Required | Validation       |
| ------- | ------------- | :------: | ---------------- |
| `@type` | `"BirthCity"` |    ✓     |                  |
| `value` | `string`      |    ✓     | max. length: 100 |

## BirthCountry

**Properties**

| Name    | Type             | Required | Validation                                                                                |
| ------- | ---------------- | :------: | ----------------------------------------------------------------------------------------- |
| `@type` | `"BirthCountry"` |    ✓     |                                                                                           |
| `value` | `string`         |    ✓     | only [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes |

## BirthState

**Properties**

| Name    | Type           | Required | Validation                                                                               |
| ------- | -------------- | :------: | ---------------------------------------------------------------------------------------- |
| `@type` | `"BirthState"` |    ✓     |                                                                                          |
| `value` | `string`       |    ✓     | only [ISO-639-1](https://de.wikipedia.org/wiki/Liste_der_ISO-639-1-Codes) language codes |

## CommunicationLanguage

**Properties**

| Name    | Type                      | Required | Validation       |
| ------- | ------------------------- | :------: | ---------------- |
| `@type` | `"CommunicationLanguage"` |    ✓     |                  |
| `value` | `string`                  |    ✓     | max. length: 100 |

## EMailAddress

**Properties**

| Name    | Type             | Required | Validation                                                                                |
| ------- | ---------------- | :------: | ----------------------------------------------------------------------------------------- |
| `@type` | `"EMailAddress"` |    ✓     |                                                                                           |
| `value` | `string`         |    ✓     | min. length: 3<br>max. length: 100<br>must match `^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$` |

## FaxNumber

**Properties**

| Name    | Type          | Required | Validation                                                                    |
| ------- | ------------- | :------: | ----------------------------------------------------------------------------- |
| `@type` | `"FaxNumber"` |    ✓     |                                                                               |
| `value` | `string`      |    ✓     | min. length: 3<br>max. length: 100<br>must match `^[\d+\-x#*()/[\] ]{3,100}$` |

## Website

**Properties**

| Name    | Type        | Required | Validation                                                 |
| ------- | ----------- | :------: | ---------------------------------------------------------- |
| `@type` | `"Website"` |    ✓     |                                                            |
| `value` | `string`    |    ✓     | min. length: 3<br>max. length: 1024<br>must be a valid URL |

## DisplayName

**Properties**

| Name    | Type            | Required | Validation       |
| ------- | --------------- | :------: | ---------------- |
| `@type` | `"DisplayName"` |    ✓     |                  |
| `value` | `string`        |    ✓     | max. length: 100 |

## FileReference

**Properties**

| Name    | Type              | Required | Validation       |
| ------- | ----------------- | :------: | ---------------- |
| `@type` | `"FileReference"` |    ✓     |                  |
| `value` | `string`          |    ✓     | max. length: 100 |

## PersonName

**Properties**

| Name              | Type                                  | Required |
| ----------------- | ------------------------------------- | :------: |
| `@type`           | `"PersonName"`                        |    ✓     |
| `givenName`       | [`GivenName`](#givenname)             |    ✓     |
| `middleName`      | [`MiddleName`](#middlename)           |    ✗     |
| `surname`         | [`Surname`](#surname)                 |    ✓     |
| `honorificSuffix` | [`HonorificSuffix`](#honorificsuffix) |    ✗     |
| `honorificPrefix` | [`HonorificPrefix`](#honorificprefix) |    ✗     |

## GivenName

**Properties**

| Name    | Type          | Required | Validation       |
| ------- | ------------- | :------: | ---------------- |
| `@type` | `"GivenName"` |    ✓     |                  |
| `value` | `string`      |    ✓     | max. length: 100 |

## HonorificPrefix

**Properties**

| Name    | Type                | Required | Validation       |
| ------- | ------------------- | :------: | ---------------- |
| `@type` | `"HonorificPrefix"` |    ✓     |                  |
| `value` | `string`            |    ✓     | max. length: 100 |

## HonorificSuffix

**Properties**

| Name    | Type                | Required | Validation       |
| ------- | ------------------- | :------: | ---------------- |
| `@type` | `"HonorificSuffix"` |    ✓     |                  |
| `value` | `string`            |    ✓     | max. length: 100 |

## MiddleName

**Properties**

| Name    | Type           | Required | Validation       |
| ------- | -------------- | :------: | ---------------- |
| `@type` | `"MiddleName"` |    ✓     |                  |
| `value` | `string`       |    ✓     | max. length: 100 |

## Pseudonym

**Properties**

| Name    | Type          | Required | Validation       |
| ------- | ------------- | :------: | ---------------- |
| `@type` | `"Pseudonym"` |    ✓     |                  |
| `value` | `string`      |    ✓     | max. length: 100 |

## Surname

**Properties**

| Name    | Type        | Required | Validation       |
| ------- | ----------- | :------: | ---------------- |
| `@type` | `"Surname"` |    ✓     |                  |
| `value` | `string`    |    ✓     | max. length: 100 |

## BirthName

**Properties**

| Name    | Type          | Required | Validation       |
| ------- | ------------- | :------: | ---------------- |
| `@type` | `"BirthName"` |    ✓     |                  |
| `value` | `string`      |    ✓     | max. length: 100 |

## Citizenship

**Properties**

| Name    | Type            | Required | Validation                                                                                |
| ------- | --------------- | :------: | ----------------------------------------------------------------------------------------- |
| `@type` | `"Citizenship"` |    ✓     |                                                                                           |
| `value` | `string`        |    ✓     | only [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes |

## JobTitle

**Properties**

| Name    | Type         | Required | Validation       |
| ------- | ------------ | :------: | ---------------- |
| `@type` | `"JobTitle"` |    ✓     |                  |
| `value` | `string`     |    ✓     | max. length: 100 |

## Nationality

**Properties**

| Name    | Type            | Required | Validation                                                                  |
| ------- | --------------- | :------: | --------------------------------------------------------------------------- |
| `@type` | `"Nationality"` |    ✓     |                                                                             |
| `value` | `string`        |    ✓     | only [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) |

## Sex

**Properties**

| Name    | Type     | Required | Validation                                 |
| ------- | -------- | :------: | ------------------------------------------ |
| `@type` | `"Sex"`  |    ✓     |                                            |
| `value` | `string` |    ✓     | one of: `"intersex"`, `"female"`, `"male"` |

# Relationship Attributes

The Attribute values in this chapter can only be used in a [Relationship Attriubte]({% link _docs_explore/61-data-model.md %}#relationshipattribute). Most of them are generic. You can recognize those by the prefix `Proprietary` (e.g. `ProprietaryInteger`, `ProprietaryString`, ...). In order to add some validation, you have the option to add [`valueHints`]({% link _docs_explore/61-data-model.md %}#valuehints).

## Consent

**Properties**

| Name                 | Type                                                                              | Required | Validation                                                 |
| -------------------- | --------------------------------------------------------------------------------- | :------: | ---------------------------------------------------------- |
| `@type`              | `"Consent"`                                                                       |    ✓     |                                                            |
| `consent`            | `string`                                                                          |    ✓     | max. length: 2000                                          |
| `valueHintsOverride` | `Partial<`[`ValueHints`]({% link _docs_explore/61-data-model.md %}#valuehints)`>` |    ✗     |                                                            |
| `link`               | `string`                                                                          |    ✗     | min. length: 3<br>max. length: 1024<br>must be a valid URL |

## ProprietaryBoolean

**Properties**

| Name                 | Type                                                                              | Required | Validation |
| -------------------- | --------------------------------------------------------------------------------- | :------: | ---------- |
| `@type`              | `"ProprietaryBoolean"`                                                            |    ✓     |            |
| `title`              | `string`                                                                          |    ✓     |            |
| `description`        | `string`                                                                          |    ✗     |            |
| `valueHintsOverride` | `Partial<`[`ValueHints`]({% link _docs_explore/61-data-model.md %}#valuehints)`>` |    ✗     |            |
| `value`              | `boolean`                                                                         |    ✓     |            |

## ProprietaryCountry

**Properties**

| Name                 | Type                                                                              | Required | Validation                                                                  |
| -------------------- | --------------------------------------------------------------------------------- | :------: | --------------------------------------------------------------------------- |
| `@type`              | `"ProprietaryCountry"`                                                            |    ✓     |                                                                             |
| `title`              | `string`                                                                          |    ✓     |                                                                             |
| `description`        | `string`                                                                          |    ✗     |                                                                             |
| `valueHintsOverride` | `Partial<`[`ValueHints`]({% link _docs_explore/61-data-model.md %}#valuehints)`>` |    ✗     |                                                                             |
| `value`              | `string`                                                                          |    ✓     | only [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) |

## ProprietaryEMailAddress

**Properties**

| Name                 | Type                                                                              | Required | Validation                                                                                |
| -------------------- | --------------------------------------------------------------------------------- | :------: | ----------------------------------------------------------------------------------------- |
| `@type`              | `"ProprietaryEMailAddress"`                                                       |    ✓     |                                                                                           |
| `title`              | `string`                                                                          |    ✓     |                                                                                           |
| `description`        | `string`                                                                          |    ✗     |                                                                                           |
| `valueHintsOverride` | `Partial<`[`ValueHints`]({% link _docs_explore/61-data-model.md %}#valuehints)`>` |    ✗     |                                                                                           |
| `value`              | `string`                                                                          |    ✓     | min. length: 3<br>max. length: 100<br>must match `^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$` |

## ProprietaryFileReference

**Properties**

| Name                 | Type                                                                              | Required | Validation       |
| -------------------- | --------------------------------------------------------------------------------- | :------: | ---------------- |
| `@type`              | `"ProprietaryFileReference"`                                                      |    ✓     |                  |
| `title`              | `string`                                                                          |    ✓     |                  |
| `description`        | `string`                                                                          |    ✗     |                  |
| `valueHintsOverride` | `Partial<`[`ValueHints`]({% link _docs_explore/61-data-model.md %}#valuehints)`>` |    ✗     |                  |
| `value`              | `string`                                                                          |    ✓     | max. length: 100 |

## ProprietaryFloat

**Properties**

| Name                 | Type                                                                              | Required | Validation |
| -------------------- | --------------------------------------------------------------------------------- | :------: | ---------- |
| `@type`              | `"ProprietaryFloat"`                                                              |    ✓     |            |
| `title`              | `string`                                                                          |    ✓     |            |
| `description`        | `string`                                                                          |    ✗     |            |
| `valueHintsOverride` | `Partial<`[`ValueHints`]({% link _docs_explore/61-data-model.md %}#valuehints)`>` |    ✗     |            |
| `value`              | `number`                                                                          |    ✓     |            |

## ProprietaryHEXColor

**Properties**

| Name                 | Type                                                                              | Required | Validation                                                               |
| -------------------- | --------------------------------------------------------------------------------- | :------: | ------------------------------------------------------------------------ |
| `@type`              | `"ProprietaryHEXColor"`                                                           |    ✓     |                                                                          |
| `title`              | `string`                                                                          |    ✓     |                                                                          |
| `description`        | `string`                                                                          |    ✗     |                                                                          |
| `valueHintsOverride` | `Partial<`[`ValueHints`]({% link _docs_explore/61-data-model.md %}#valuehints)`>` |    ✗     |                                                                          |
| `value`              | `string`                                                                          |    ✓     | min.length: 4<br> must match `^#([0-9A-F]{3}){1,2}$`<br>max. length: 100 |

## ProprietaryInteger

**Properties**

| Name                 | Type                                                                              | Required | Validation         |
| -------------------- | --------------------------------------------------------------------------------- | :------: | ------------------ |
| `@type`              | `"ProprietaryInteger"`                                                            |    ✓     |                    |
| `title`              | `string`                                                                          |    ✓     |                    |
| `description`        | `string`                                                                          |    ✗     |                    |
| `valueHintsOverride` | `Partial<`[`ValueHints`]({% link _docs_explore/61-data-model.md %}#valuehints)`>` |    ✗     |                    |
| `value`              | `number`                                                                          |    ✓     | must be an integer |

## ProprietaryLanguage

**Properties**

| Name                 | Type                                                                              | Required | Validation                                                                               |
| -------------------- | --------------------------------------------------------------------------------- | :------: | ---------------------------------------------------------------------------------------- |
| `@type`              | `"ProprietaryLanguage"`                                                           |    ✓     |                                                                                          |
| `title`              | `string`                                                                          |    ✓     |                                                                                          |
| `description`        | `string`                                                                          |    ✗     |                                                                                          |
| `valueHintsOverride` | `Partial<`[`ValueHints`]({% link _docs_explore/61-data-model.md %}#valuehints)`>` |    ✗     |                                                                                          |
| `value`              | `string`                                                                          |    ✓     | only [ISO-639-1](https://de.wikipedia.org/wiki/Liste_der_ISO-639-1-Codes) language codes |

## ProprietaryPhoneNumber

**Properties**

| Name                 | Type                                                                              | Required | Validation                                                                    |
| -------------------- | --------------------------------------------------------------------------------- | :------: | ----------------------------------------------------------------------------- |
| `@type`              | `"ProprietaryPhoneNumber"`                                                        |    ✓     |                                                                               |
| `title`              | `string`                                                                          |    ✓     |                                                                               |
| `description`        | `string`                                                                          |    ✗     |                                                                               |
| `valueHintsOverride` | `Partial<`[`ValueHints`]({% link _docs_explore/61-data-model.md %}#valuehints)`>` |    ✗     |                                                                               |
| `value`              | `string`                                                                          |    ✓     | min. length: 3<br>max. length: 100<br>must match `^[\d+\-x#*()/[\] ]{3,100}$` |

## ProprietaryString

**Properties**

| Name                 | Type                                                                              | Required | Validation       |
| -------------------- | --------------------------------------------------------------------------------- | :------: | ---------------- |
| `@type`              | `"ProprietaryString"`                                                             |    ✓     |                  |
| `title`              | `string`                                                                          |    ✓     |                  |
| `description`        | `string`                                                                          |    ✗     |                  |
| `valueHintsOverride` | `Partial<`[`ValueHints`]({% link _docs_explore/61-data-model.md %}#valuehints)`>` |    ✗     |                  |
| `value`              | `string`                                                                          |    ✓     | max. length: 100 |

## ProprietaryURL

**Properties**

| Name                 | Type                                                                              | Required | Validation                                                 |
| -------------------- | --------------------------------------------------------------------------------- | :------: | ---------------------------------------------------------- |
| `@type`              | `"ProprietaryURL"`                                                                |    ✓     |                                                            |
| `title`              | `string`                                                                          |    ✓     |                                                            |
| `description`        | `string`                                                                          |    ✗     |                                                            |
| `valueHintsOverride` | `Partial<`[`ValueHints`]({% link _docs_explore/61-data-model.md %}#valuehints)`>` |    ✗     |                                                            |
| `value`              | `string`                                                                          |    ✓     | min. length: 3<br>max. length: 1024<br>must be a valid URL |

<!--
TODO:
- ValueHints properties
 -->
