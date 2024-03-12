---

# Start automatic generation
permalink: integrate/use-cases
redirect_from:
  - /explore/use-cases
published: true
title: "Use Cases"
type: scenario
toc: true
properties:
  - id: SC082
  - category: Getting Started
  - description:
  - customer:
  - component: integrate
  - level:
  - implementation status: DONE
  - documentation status: OLD
  - published: true
  - link: use-cases
require:
required_by:
# End automatic generation

---

<!-- markdownlint-disable MD011 -->
<style>
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
{% assign use-cases = site.docs_use-cases | where: "type", "use-case" %}
<table id="myTable" style="width: 100%; display: table">
    <tr>
        <th style="width: 20%">Title</th>
        <th style="width: 20%">
            <div class="container">
                <div class="select-btn">Layer ⌄</div>
                <ul class="list-items" id="layer"></ul>
            </div>
        </th>
        <th style="width: 15%">
            <div class="container">
                <div class="select-btn">Actor ⌄</div>
                <ul class="list-items" id="actor">
                    <li class="item checked"></li>
                </ul>
            </div>
        </th>
        <th style="width: 15%">
            <div class="container">
                <div class="select-btn">Category ⌄</div>
                <ul class="list-items" id="category"></ul>
            </div>
        </th>
        <th style="width: 15%">
            <div class="container">
                <div class="select-btn">Component ⌄</div>
                <ul class="list-items" id="component"></ul>
            </div>
        </th>
        <!-- <th style="width: 10%">
            <div class="container">
                <div class="select-btn">Status ⌄</div>
                <ul class="list-items" id="status"></ul>
            </div>
        </th> -->
    </tr>
    {% for use-case in use-cases%}
    <tr>
        <td>
            <a href="{{ use-case.url }}"> {{ use-case.title }} </a>
        </td>
        <td class="layer-list">{{ use-case.properties | map:"layer" }}</td>
        <td class="actor-list">{{ use-case.properties | map:"actor" }}</td>
        <td class="category-list">{{ use-case.properties | map:"tech category" }}</td>
        <td class="component-list">{{ use-case.properties | map:"component" }}</td>
        <!-- <td class="status-list">{{ use-case.properties | map:"status" }}</td> -->
    </tr>
    {% endfor %}

</table>
<script>
    const columns = ["layer", "actor", "category", "component", "status"];
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
            elements[4] = new Array();
            elements[5] = new Array();
            checked.forEach((element) => {
                elements[element.parentElement.parentElement.parentElement.cellIndex].push(element.innerText.replace(/[\n\r]+|[\s]{2,}/g, ""));
            });
            filter(elements);
        });
    });
</script>
