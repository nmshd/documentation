{{properties.description}}

{% include properties_list.html %}

Be advised that this is an App-specific use-case which is triggered without a user interaction. Although it is a very generic use-case which one would normally not describe, we introduced it because we require it in our overarching scenarios.
{: .notice--info}

This use-case describes an internal App behavior whenever a screen needs to refresh itself without user interaction.

To keep the screen's data in sync with what is actually happening (i.e. if the status of a LocalRequest changes or a new Mail is received) the App refreshes its screen when necessary.
