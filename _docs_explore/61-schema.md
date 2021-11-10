---
title: "Enmeshed Schema"
permalink: /explore/schema
toc: true
---

The Enmeshed Schema normalized many common data structures to a single set which can be understood by all Enmeshed participants. It is the definition of cross-identity payload schemas and thus needs to be kept as stable as possible.

In general, structured data communicated via Enmeshed is in JSON format. It is strongly typed, enabling the consumers to validate and process the communicated data in a common way.

# Entities

## Attributes

Attributes are a generic way to share normalized data between identities.

-   @type="Attribute"
-   name: The name of the attribute which should be shared
-   value: The value of the attribute
-   validFrom: From which date on the attribute is valid (optional)
-   validTo: To which date the attribute should be valid (optional)

```json
{
    "@type": "Attribute",
    "name": "somebonuscompany.id",
    "value": "xyz77920993882",
    "validFrom": "2021-10-01"
}
```

### Person Attributes

Based upon: [Person Schema](https://schema.org/Person)

-   Person.givenName
-   Person.familyName
-   Person.title
-   Person.gender
-   Person.bithDate
-   Person.birthPlace
-   Person.birthName
-   Person.nationality

### Address Attributes

### Communication Attributes

## Mails

Mails are the primary communication payload if persons are addressed.

-   @type="Mail"
-   to[]: An array of direct recipients (as addresses)
-   cc[]: An array of recipients (as addresses) who should regard this mail as "for your information"
-   subject: The subject of the mail
-   body: The body of the mail. Simple HTML formatting should be allowed with a very limited subset.

```json
{
    "@type": "Mail",
    "to": ["IdentityAddress"],
    "cc": [],
    "subject": "Welcome Anne",
    "body": "Welcome Anne,<br /><br />You are now onboarded with your digital identity and we can securely submit sensitive data to you.<br /><br />Please let us know what you think about this solutions by answering to this mail.<br /><br />Best Regards!<br />Your Team"
}
```

## Requests

Structured digital requests allow the manual or automated processing and sharing of data between identities. Once a request is received, a client should act in standardized ways and either ask the user to accept the request or automatically process them based on a ruleset.

Messages (not to confuse with Mails) could be sent with a Request as the only content. Such a message is then regarded as technical message and thus is not displayed to the user. However, if the request cannot be processed automatically (e.g. if it requires user approval), it should be automatically declined if it is not sent with a RequestMail.

In other words, when sending a request to any identity, the RequestMail should be used with a human-readable explanation, just like a person usually receive a cover letter with explanatory words next to a form which should be filled out.

### AttributesChangeRequest

To change attributes at the remote site - either for the receiving identity ("I like to change your data") or the sending identity ("I like to change the data you stored of me") - the AttributesChangeRequest can be used.

-   @type="AttributesChangeRequest"
-   id: The unique id of the request. Optional, default is a generated REQ id
-   key: The technial key of the request which is submitted back with the answer. This can be used for mapping requests and answers. The key should be unique and non-personal.
-   reason: The human-readable reason for this request. This can be used to provide the user with more input why this request is necessary and should be answered. Optional
-   expiresAt: The point in time the request is considered obsolete either technically (e.g. the request is no longer valid or its response is no longer accepted) or from a business perspective (e.g. the request is no longer of interest). Optional, default is no expiry
-   attributes[]: An array of attributes which act as the new values
-   applyTo: Address to which the change should be applied. This is usually the sender or the recipient. Optional

```json
{
    "@type": "AttributesChangeRequest",
    "id": "REQ__",
    "attributes": [
        {
            "name": "somebonuscompany.id",
            "value": "xyz77920993882",
            "validFrom": "2021-10-01"
        }
    ],
    "applyTo": "IdentityAddress",
    "reason": "Your bonus card id to share and benefit of discounts."
}
```

### AttributesShareRequest

AttributesShareRequests are used to request the submission of attributes from one identity to other identities. Keep in mind that attributes can only be shared to established relationships. It is technically not possible to communicate with identities without an active relationship.

If received by the app, the user is asked if the respective attributes should be shared to the given recipients. If yes, the attributes are shared with an AttributesChangeRequest with the queried attributes to the known recipients.

If received by a connector, the corresponding business system should act accordingly and answer with an AttributesChangeRequest to the recipients if the sharing of attributes to these recipients is allowed by company policy.

-   @type="AttributesShareRequest"
-   id: The unique id of the request. Optional, default is a generated REQ id
-   key: The technial key of the request which is submitted back with the answer. This can be used for mapping requests and answers. The key should be unique and non-personal.
-   reason: The human-readable reason for this request. This can be used to provide the user with more input why this request is necessary and should be answered. Optional
-   expiresAt: The point in time the request is considered obsolete either technically (e.g. the request is no longer valid or its response is no longer accepted) or from a business perspective (e.g. the request is no longer of interest). Optional, default is no expiry
-   attributes[]: An array of attribute keys which should be shared
-   recipients[]: An array of Addresses which should receive the given attributes

```json
{
    "@type": "AttributesShareRequest",
    "attributes": ["Person.birthDate"],
    "recipients": ["CompanyAddress"],
    "reason": "German regulation X2303 §35 requires us to print a birth date on language certificates."
}
```

## RequestMails

A RequestMail is a special type of Mail which are human-readable forms of requests. It is especially used to address and explain machine-readable request to a human.
The requests sent with a RequestMail could be regarded as a special kind of attachment.

-   @type="RequestMail"
-   to[]: An array of direct recipients (as addresses)
-   cc[]: An array of recipients (as addresses) who should regard this mail as "for your information"
-   subject: The subject of the mail
-   body: The body of the RequestMail. It should contain an explanation, why this request should be accepted, how long the user might have to process the request and what happens if the user does or does not process it.
-   requests[]: An array of requests which should be sent to the user

**Example of RequestMail to request attributes**

```json
{
    "@type": "RequestMail",
    "to": ["IdentityAddress"],
    "cc": [],
    "subject": "We need to know your birth date",
    "body": "Hi Anne,<br /><br />We require your birth date, as German regulations have changed and official language certificates must be given out with a birth date of the participant from next month on.<br /><br />Please let us know your birth date by accepting this request.<br /><br />Best Regards!<br />Your Team",
    "requests": [
        {
            "@type": "AttributesShareRequest",
            "attributes": ["Person.birthDate"],
            "recipients": ["CompanyAddress"],
            "reason": "German regulation X2303 §35 requires us to print a birth date on language certificates."
        }
    ]
}
```

**Example of RequestMail to change attributes and share them afterwards**

```json
{
    "@type": "RequestMail",
    "to": ["IdentityAddress"],
    "cc": [],
    "subject": "Your digital bonus card",
    "body": "Hi Anne,<br /><br />Attached please find your personal bonus card id. You can share this id to our partners to benefit of attractive discounts.<br /><br />Best Regards!<br />Your Team",
    "requests": [
        {
            "@type": "AttributesChangeRequest",
            "id": "REQ__",
            "attributes": [
                {
                    "@type": "Attribute",
                    "name": "somebonuscompany.id",
                    "value": "xyz77920993882",
                    "validFrom": "2021-10-01"
                }
            ],
            "applyTo": "IdentityAddress",
            "reason": "Your bonus card id to share and benefit of discounts."
        },
        {
            "@type": "AttributesShareRequest",
            "id": "REQ__",
            "attributes": ["somebonuscompany.id"],
            "recipients": ["PartnerAddress1", "PartnerAddress2", "PartnerAddress3"],
            "reason": "You can share your new bonus card id with our partners by just accepting this request. The id is only shared with partners you already have a contact to."
        }
    ]
}
```
