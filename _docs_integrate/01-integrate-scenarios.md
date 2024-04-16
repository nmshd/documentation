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

Here you'll find everything you need to seamlessly dive into the world of enmeshed and integrate it into your applications and systems. Whether you're just starting out or already familiar with enmeshed, our comprehensive guide and resources are at your disposal.

## Getting Started

Begin your integration journey by familiarizing yourself with the Connector REST API and exploring the fundamental steps for integration.

## Data Model

Understand enmeshed's data model and how it fits into your integration, including error codes and attribute values.

## Handling Events

Discover how events work and how you can leverage them in your application.

## Working with Requests

Learn how to create and manage Requests.

## Manage Attributes of Others

Explore how to store and query attributes in the Wallet for other users.

## Messages

Explore how to send messages through enmeshed for simple and secure communication.

## Programming

Gain insights into effectively utilizing the Connector SDKs to streamline and optimize your integration.

## Requesting Consent of Users

Discover how to request one-time consents from users.

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
