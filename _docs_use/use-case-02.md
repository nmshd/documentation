---
id: 2
title: "Refresh (screen) Screen"
permalink: /use/use-case-02
published: true
category:
component:
  - App
  - Connector
level: Advanced
implementation: DONE
documentation: OPEN
type: useCase
layer: Human
facade: Screen
actor: User
CREATED_AT:
CHANGED_AT:
---

Second Test
The user navigates manually to the desired screen. If the screen has preconditions, these preconditions are considered to be fulfilled (e.g. a Profile has been selected and authenticated first).

<table>
    <tr>
        <td>Title:</td>
        <td>{{page.title}}</td>
    </tr>
    <tr>
        <td>Component: </td>
        <td>{{page.component[1]}}</td>
    </tr>
    <tr>
        <td>Level</td>
        <td>{{page.level}}</td>
    </tr>
    <tr>
        <td>Implementation</td>
        <td>{{page.implementation}}</td>
    </tr>
    <tr>
        <td>Documentation</td>
        <td>{{page.documentation}}</td>
    </tr>
    <tr>
        <td>Layer</td>
        <td>{{page.layer}}</td>
    </tr>
    <tr>
        <td>Facade</td>
        <td>{{page.facade}}</td>
    </tr>
    <tr>
        <td>Actor</td>
        <td>{{page.actor}}</td>
    </tr>
    <tr>
        <td colspan="2">
<details markdown=block>
<summary markdown=span>require</summary>
{% assign useCases = site.docs_use | where: "type", "useCase" %}
{% for useCase in useCases %}

{{ useCase.id }}

stop

{% if useCase.ida == "1" %}
<a href="{{ useCase.url }}">
{{ useCase.title }}
</a>
{% endif %}

{% endfor %}

</details> 
        </td>
    </tr>
        <tr>
        <td colspan="2">
<details markdown=block>
<summary markdown=span>required by</summary>
These are the **details** for this item.
</details> 
        </td>
    </tr>
</table>

# Trigger:

Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptas deserunt alias accusantium rem? Quaerat, temporibus alias fuga rerum unde dolor blanditiis quia incidunt modi rem, sequi, esse aut accusamus.

# Changelog:

Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nihil sequi ipsam blanditiis optio nulla quidem tempore sapiente nam, molestiae et voluptas ab harum quo incidunt reiciendis dolorum sed eligendi quos in itaque vel facilis. Rerum quia asperiores porro, odit laborum error voluptates repellat repellendus doloribus minima voluptate debitis libero nemo sit, dolorem consequatur expedita architecto! Molestiae, quae maxime ut iste ratione veniam velit asperiores. Earum corrupti architecto molestiae necessitatibus ullam modi beatae optio distinctio et labore, consectetur, repudiandae alias recusandae quas delectus placeat error laudantium quos, autem non nemo cum. Obcaecati iure maiores quas temporibus assumenda, qui veritatis necessitatibus.
