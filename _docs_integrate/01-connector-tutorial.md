---
title: "Connector Tutorial"
permalink: /integrate/connector-tutorial
---

We've summarized all the information you need to get an Connector up and running in this tutorial.

# Testing the Connector

Call the /health endpoint of the Connector we've just set up.

<rapi-doc-mini
spec-url = "https://enmeshed.is.enmeshed.eu/docs/json"
style= "min-width:600px;"
paths-expanded = "false"
theme = "light"
bg-color = "#f9f9fb"
match-paths="^get /health$"
match-type="regex"

> </rapi-doc-mini>

The full set of APIs can be found <a href="https://enmeshed.is.enmeshed.eu/docs/rapidoc">in the OpenAPI specification</a> of every Connector.

Some Flows:
![Test Diagram]({{site.plantuml}}integrate/diagrams/Test.pu)
