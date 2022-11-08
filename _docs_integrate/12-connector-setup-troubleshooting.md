---
title: "Troubleshooting"
permalink: /integrate/connector-setup-troubleshooting
---

## Common Errors

### Config file mounting (`EISDIR` | `invalid mode: RO`)

**Symptoms**

One of the following errors are logged during the startup of the connector:

-   `Error parsing your configuration file: [/config.json]: EISDIR: illegal operation on a directory, read`
-   `ERROR: for connector Cannot create container for service connector: invalid mode: RO`

**How to fix?**

Given the following filesystem structure:

```text
home/
└── connector/
    ├── config.json
    └── docker-compose.yml
```

If you mount `/home/connector:/config.json:RO`, the created `/config.json` in the container will be a directory. To fix this the mount has to be `/home/connector/config.json:/config.json:RO` or `./config.json:/config.json:RO` (docker compose translates relative links to absolute links).
