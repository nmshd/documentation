{{properties.description}}

{% include properties_list.html %}

This use-case returns metadata about the synchronization status of the current Identity or Device with the Backbone. So far, it returns the timestamp of the last successful synchronization run which is triggered by the [Synchronize updates of Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}) use-case.

## On Success

- Returns the metadata of the last sync run.
