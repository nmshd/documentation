---
title: "Use Cases"
permalink: /explore/use-cases
published: true
---

{% assign useCases = site.docs_explore | where: "type", "useCase" %}

<table>
    <tr>
        <th>Title</th>
        <th>Component</th>
        <th>Level</th>
        <th>Implementation</th>
        <th>Documentation</th>
        <th>Type</th>
        <th>Layer</th>
        <th>Facade</th>
        <th>Actor</th>
        <th>Component</th>
        <th>CREATED_AT</th>
        <th>CHANGED_AT</th>
    </tr>

{% for useCase in useCases%}

<tr>
<td>
<a href="{{ useCase.url }}">
{{ useCase.title }}
</a>
</td>
<td>
{{ useCase.level }}
</td>
<td>
{{ useCase.implementation }}
</td>
<td>
{{ useCase.documentation }}
</td>
<td>
{{ useCase.type }}
</td>
<td>
{{ useCase.layer }}
</td>
<td>
{{ useCase.facade }}
</td>
<td>
{{ useCase.actor }}
</td>
<td>
{{ useCase.component }}
</td>
<td>
{{ useCase.CREATED_AT }}
</td>
<td>
{{ useCase.CHANGED_AT }}
</td>

</tr>
{% endfor %}
<table>
