Welcome to our FAQ page! Here, you'll find answers to the most common questions about enmeshed. If you're looking for quick and straightforward information, you've come to the right place.

# Common questions

## What is enmeshed?

A description of enmeshed can be found on the [main page]({% link index.md %}#what-is-enmeshed)

# Technical Questions

## When I scan the QR I get the error: "error.relationshipTemplateProcessedModule.raltionshipTemplateNotSupported"

It seems the wrapper [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) around the RequestItems in the RelationshipTemplate is missing. If the Template is intended for a User of the enmeshed App (which is the primary use-case), the wrapper RelationshipTemplateContent has to be used.
