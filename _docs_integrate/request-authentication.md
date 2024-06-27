---
# Start automatic generation
permalink: integrate/request-authentication
published: false
title: "Request authentication"
type: scenario
toc: true
properties:
  - id: SC032
  - category: Request authentication
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: DONE
  - documentation status: OPEN
  - published:
  - link: request-authentication
require:
  - integrate/requests-via-relationshiptemplates
  - integrate/requests-via-messages
required_by:
# End automatic generation
---

{% include warnings/documentation-is-prerelease %}

# Flow

enmeshed supports specific authentication requests for users, e.g. for multi-factor based logins. This is done by sending out Requests with AuthenticationRequestItems.

# Examples

- Single-factor based logins, e.g. scanning in an enmeshed QR Code from an unknown browser window
- Multi-factor based logins, e.g. requesting the user's authentication over enmeshed after a password-based login
- Multi-factor based business processes, e.g. requesting the user's authentication if the user want to read or change certain kind of administrative information
