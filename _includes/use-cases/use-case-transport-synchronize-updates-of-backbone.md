{{properties.description}}

{% include properties_list.html %}

Be advised that calling this use-case to sync the Identity/Device on a regular basis is discouraged, as it could lead to wrong return values if multiple endpoints trigger this use-case.
Please configure the [SyncModule]({% link _docs_operate/modules.md %}#sync) and use eventing instead.
{: .notice--warning}

This use-case retrieves all relevant data changes between the current Identity (and Device) and the Backbone since the last synchronization. The relevant data are so far new RelationshipChanges and Messages.

## On Success

- A list of [Relationships]({% link _docs_integrate/data-model-overview.md %}#relationship) that have a new status.
- A list of [Messages]({% link _docs_integrate/data-model-overview.md %}#message) that were retrieved since the last call.
