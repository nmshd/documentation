{{properties.description}}

{% include properties_list.html %}

Be advised that this is an App-specific use-case which is triggered without a user interaction. Although it is a very generic use-case which one would normally not describe, we introduced it because we require it in our overarching scenarios.
{: .notice--info}

This use-case describes an internal App behavior when a specific screen should be shown or navigated to, based on an internal event and without a user interaction. The context of the App updates to show the content of the screen in question.

Examples would be to show an error page if something really bad happens or an automated navigation to a specific screen because a RelationshipTemplate has been accepted.
