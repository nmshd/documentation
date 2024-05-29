---
# Start automatic generation
permalink: integrate/faq
published: true
title: "FAQ"
type: scenario
toc: true
properties:
  - id: SC097
  - category: Troubleshooting
  - description:
  - customer:
  - component: integrate
  - level:
  - implementation status: DOCS ONLY
  - documentation status: DONE
  - published: true
  - link: faq
require:
required_by:
# End automatic generation
---

Welcome to our FAQ page! Here, you'll find answers to the most common questions about enmeshed. If you're looking for quick and straightforward information, you've come to the right place.

# Common questions

## What is enmeshed?

A description of enmeshed can be found on the [main page]({% link index.md %}#what-is-enmeshed).

# Technical questions

## When I scan the QR Code, why do I get the error "error.relationshipTemplateProcessedModule.relationshipTemplateNotSupported"?

It seems the wrapper [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) around the RequestItems in the RelationshipTemplate is missing. If the RelationshipTemplate is intended for a User of the enmeshed App (which is the primary use-case), the wrapper RelationshipTemplateContent has to be used.
