---
title: "Integrate enmeshed"
permalink: /integrate
published: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
---

You want to seamlessly use enmeshed with your processes, solutions and software components? No worries, you are good to go!

We've built the enmeshed Connector exactly for this scenario: to integrate existing systems with the enmeshed approach with as little effort as possible.

Here you'll find everything you need to seamlessly dive into the world of enmeshed and integrate it into your applications and systems. Whether you're just starting out or are already familiar with enmeshed, our comprehensive guide and resources are at your disposal.

## Getting Started

Begin your integration journey by familiarizing yourself with the [Connector REST API]({% link _docs_integrate/access-the-connector.md %}) and exploring the fundamental steps for integration. Gain insights into effectively utilizing the [Connector SDKs]({% link _docs_integrate/access-the-connector.md %}#accessing-the-connector-by-software-development-kits-sdk) to streamline and optimize your integration. To get a first impression of certain integration processes, take a look at our [Integration example]({% link _docs_integrate/integration-example.md %}). Discover how events work and how you can leverage them in your application in the [Event introduction]({% link _docs_integrate/event-introduction.md %}).

## Get in touch with other Identities

Learn how to [establish a Relationship to another Identity]({% link _docs_integrate/establish-a-relationship-to-another-identity.md %}) in order to be able to communicate and exchange information with it.

## Work with Requests

Learn how to create and manage Requests. Check out the [Request and Response introduction]({% link _docs_integrate/request-and-response-introduction.md %}) and the [Requests over Templates]({% link _docs_integrate/requests-over-templates.md %}) and [Requests over Messages]({% link _docs_integrate/requests-over-messages.md %}) guides.

## Manage Attributes

Explore how to [create Attributes for yourself]({% link _docs_integrate/create-attribute-for-yourself.md %}) and how to [share Attributes]({% link _docs_integrate/share-attribute-with-peer.md %}) with a peer. Also, discover how to [read Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}) from a peer and how to store Attributes in a peer's Wallet for them. The latter can be realised by [creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}) for them or by [proposing Attributes]({% link _docs_integrate/propose-attribute-to-peer.md %}) to them. The peer must give you their permission for this. Furthermore, learn how to [succeed Attributes to update their values]({% link _docs_integrate/succeed-attribute-to-update-its-value.md %}).

## Basic communication

Explore how to [send Messages]({% link _docs_integrate/send-messages.md %}) using enmeshed to communicate simply and securely with your peers.

## Request consent

Discover how to request [persistent consent]({% link _docs_integrate/request-persistent-consent-of-peer.md %}) and [one-time consent]({% link _docs_integrate/request-one-time-consent-of-peer.md %}) of a peer.

## Data Model

Understand the [Data Model]({% link _docs_integrate/data-model-overview.md %}) of enmeshed and how it fits into your integration. Also get an overview of the [Attribute Values]({% link _docs_integrate/attribute-values.md %}), the [Connector Events]({% link _docs_integrate/connector-events.md %}) and our [Use Cases]({% link _docs_integrate/use-cases.md %}).

## Troubleshooting

Here you can find the [Error Codes]({% link _docs_integrate/error-codes.md %}) and our [FAQ]({% link _docs_integrate/faq.md %}) page.

<!-- markdownlint-disable MD011 -->
<!-- <style>
    .container {
        position: relative;
        max-width: 320px;
        width: 100%;
    }
    .select-btn {
        display: flex;
        cursor: pointer;
    }

    .list-items {
        position: relative;
        padding: 16px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        display: none;
        position: fixed;
        background-color: #fff;
        z-index: 1;
    }
    .select-btn.open ~ .list-items {
        display: block;
    }
    .list-items .item {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .item .item-text {
        font-weight: 400;
    }
    .item .checkbox {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 16px;
        width: 16px;
        border-radius: 4px;
        margin-right: 12px;
        border: 1.5px solid #c0c0c0;
        transition: all 0.3s ease-in-out;
    }
    .item.checked .checkbox {
        background-color: #0092ca;
        border-color: #0092ca;
    }
</style>
<script>
    function searchByName() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("searchByNameInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    function filter(input) {
        // Declare variables
        var table, tr, td, i, txtValue;
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            for (const [key, column] of Object.entries(input)) {
                td = tr[i].getElementsByTagName("td")[key];
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    // Loop through all columns

                    if (column.includes(txtValue)) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                        break;
                    }
                }
            }
        }
    }
</script>

<input type="text" id="searchByNameInput" onkeyup="searchByName()" placeholder="Search for title.." />
{% assign scenarios = site.docs_scenarios | where: "type", "scenario" %}

<table id="myTable" style="width: 100%; display: table">
    <tr>
        <th style="width: 30%">Title</th>
        <th style="width: 30%">
            <div class="container">
                <div class="select-btn">Category ⌄</div>
                <ul class="list-items" id="category"></ul>
            </div>
        </th>
        <th style="width: 20%">
            <div class="container">
                <div class="select-btn">customer ⌄</div>
                <ul class="list-items" id="customer"></ul>
            </div>
        </th>
        <th style="width: 20%">
            <div class="container">
                <div class="select-btn">Component ⌄</div>
                <ul class="list-items" id="component"></ul>
            </div>
        </th>
    </tr>
    {% for scenario in scenarios %}
     {% assign status = scenario.properties | map:"documentation status" %}{% assign component = scenario.properties | map:"component" %}{% if component contains "Runtime" %}    <tr>
        <td>
            <a href="{{ scenario.url }}"> {{ scenario.title }} </a>
        </td>
        <td class="category-list">{{ scenario.properties | map:"category" }}</td>
        <td class="customer-list">{{ scenario.properties | map:"customer" }}</td>
        <td class="component-list">{{ scenario.properties | map:"component" }}</td>
    </tr>
    {%- endif -%} {% endfor %}
</table>
<script>
    const columns = ["category", "customer", "component"];
    columns.forEach((element_id) => {
        const used_elements = [];
        var ul = document.getElementById(element_id);
        var category_list = document.getElementsByClassName(element_id + "-list");
        for (let i = 0; i < category_list.length; i++) {
            if (!used_elements.includes(category_list[i].innerHTML)) {
                used_elements.push(category_list[i].innerHTML);
                var li = document.createElement("li");
                li.classList.add("item");
                li.classList.add("checked");
                var checkbox = document.createElement("SPAN");
                checkbox.classList.add("checkbox");
                var text = document.createElement("SPAN");
                text.classList.add("item-text");
                text.textContent = category_list[i].innerHTML;
                li.appendChild(checkbox);
                li.appendChild(text);
                ul.appendChild(li);
            }
        }
    });
</script>
<script>
    const selectBtns = document.querySelectorAll(".select-btn"),
        items = document.querySelectorAll(".item");
    selectBtns.forEach((selectBtn) => {
        selectBtn.addEventListener("click", () => {
            selectBtn.classList.toggle("open");
        });
    });
    items.forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked");
            let checked = document.querySelectorAll(".checked");
            var elements = new Array();
            elements[1] = new Array();
            elements[2] = new Array();
            elements[3] = new Array();
            checked.forEach((element) => {
                elements[element.parentElement.parentElement.parentElement.cellIndex].push(element.innerText.replace(/[\n\r]+|[\s]{2,}/g, ""));
            });
            filter(elements);
        });
    });
</script> -->
