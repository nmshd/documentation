---
# Start automatic generation
permalink: integrate/send-forms-via-requests
published: true
title: "Send Forms via Requests"
type: scenario
toc: true
properties:
  - id: SC122
  - category: Working With Requests
  - description: Using a FormFieldRequestItem, a form field can be defined within a Request
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: DONE
  - documentation status: DONE
  - published: true
  - link: send-forms-via-requests
require:
required_by:
# End automatic generation
---

## StringFormFieldSettings

| Name            | Type                        | Required | Description                                                                                           |
| --------------- | --------------------------- | :------: | ----------------------------------------------------------------------------------------------------- |
| `@type`         | `"StringFormFieldSettings"` |    ✓     |                                                                                                       |
| `allowNewLines` | `true`                      |    ✗     | If this flag is set, the free text form field is displayed in the App's UI as a text area form field. |
| `min`           | `number`                    |    ✗     | Lower limit for the length of the requested string.                                                   |
| `max`           | `number`                    |    ✗     | Upper limit for the length of the requested string.                                                   |

## IntegerFormFieldSettings

| Name    | Type                         | Required | Description                            |
| ------- | ---------------------------- | :------: | -------------------------------------- |
| `@type` | `"IntegerFormFieldSettings"` |    ✓     |                                        |
| `unit`  | `string`                     |    ✗     | Unit of the requested integer.         |
| `min`   | `number`                     |    ✗     | Lower limit for the requested integer. |
| `max`   | `number`                     |    ✗     | Upper limit for the requested integer. |

## DoubleFormFieldSettings

| Name    | Type                        | Required | Description                           |
| ------- | --------------------------- | :------: | ------------------------------------- |
| `@type` | `"DoubleFormFieldSettings"` |    ✓     |                                       |
| `unit`  | `string`                    |    ✗     | Unit of the requested double.         |
| `min`   | `number`                    |    ✗     | Lower limit for the requested double. |
| `max`   | `number`                    |    ✗     | Upper limit for the requested double. |

## BooleanFormFieldSettings

| Name    | Type                         | Required | Description |
| ------- | ---------------------------- | :------: | ----------- |
| `@type` | `"BooleanFormFieldSettings"` |    ✓     |             |

## DateFormFieldSettings

| Name    | Type                      | Required | Description |
| ------- | ------------------------- | :------: | ----------- |
| `@type` | `"DateFormFieldSettings"` |    ✓     |             |

## RatingFormFieldSettings

The lower limit for the requested rating is always one.

| Name        | Type                                    | Required | Description                           |
| ----------- | --------------------------------------- | :------: | ------------------------------------- |
| `@type`     | `"RatingFormFieldSettings"`             |    ✓     |                                       |
| `maxRating` | `5` \| `6` \| `7` \| `8` \| `9` \| `10` |    ✓     | Upper limit for the requested rating. |

## SelectionFormFieldSettings

| Name                     | Type                           | Required | Description                                                                                                                                                                                  |
| ------------------------ | ------------------------------ | :------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@type`                  | `"SelectionFormFieldSettings"` |    ✓     |                                                                                                                                                                                              |
| `options`                | `string[]`                     |    ✓     | Unique options of the selection form field. At least one option must be provided.                                                                                                            |
| `allowMultipleSelection` | `true`                         |    ✗     | If this flag is set, it is possible to select multiple of the provided options when responding to the selection form field. Otherwise, exactly one of the options provided must be selected. |
