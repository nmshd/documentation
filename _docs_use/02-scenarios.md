---
title: "Scenarios"
permalink: /use/scenarios
published: true
---

{% assign scenarios = site.docs_use | where: "type", "scenario" %}

<table>
    <tr>
        <th>Title</th>
        <th>Level</th>
    </tr>

{% for scenario in scenarios%}

<tr>
<th>
<a href="{{ scenario.url }}">
{{ scenario.title }}
</a>
</th>
<th>
{{ scenario.require }}
{% if scenario.require == "test" %}
    hi
{% endif %}
</th>

</tr>
{% endfor %}
<table>
