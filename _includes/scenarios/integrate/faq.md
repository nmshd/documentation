Welcome to our FAQ page! Here, you'll find answers to the most common questions about enmeshed. If you're looking for quick and straightforward information, you've come to the right place.

# Common questions

## What is enmeshed?

A description of enmeshed can be found on the [main page]({% link index.md %}#what-is-enmeshed)

# technical questions

## when i scan the qr i get the error: "error.relationshipTemplateProcessedModule.raltionshipTemplateNotSupported"

The wrapper [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) around the items in the RealtionshipTemplate has been forgotten. If the Template is intended for a User of the enmeshed App, RelationshipTemplateContent has to be used.
