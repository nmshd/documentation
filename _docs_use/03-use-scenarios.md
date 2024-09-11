---
layout: use
title: "Use enmeshed"
permalink: /use
published: true
main2_content: >-
  <h2>Secure device setup</h2>
  <p>
  We've summarized some tips for end-user device usage on this site. A great resource for more in-depth information about those tips is the [website of the Federal Office for Information Security (BSI, Bundesamt für Sicherheit in der Informationstechnik).](https://www.bsi.bund.de/EN/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Basisschutz-fuer-Computer-Mobilgeraete/Schutz-fuer-Mobilgeraete/Sicherheit-bei-Apps/sicherheit-bei-apps_node.html)

  We do not know every security guideline and tip out there, so please also check security tips of your operating systems like ([Android](https://www.android.com/intl/safety/), or [iOS](https://support.apple.com/guide/security/welcome/web)).

  Please also understand, that we - as anybody else - cannot give you any security guaranty of your device or our system. With this page we are addressing the most common risks of end-user device usage. Even if you follow those guidances, it might happen that a security incident happens.

  ## Enable PIN/Password Authentication of Device

  The first line of defense for your device is a strong password or PIN. It is essential to enable this feature on your device to prevent unauthorized access. A secure password should be at least between eight and twelve characters long and contain a mixture of upper and lower case letters, numbers and symbols. Additionally, you should avoid using easily guessable passwords, such as birthdays or names.

  ## Only One Person Should Use the Device

  It is recommended that only one person uses the device, and they should not share their password with anyone. Sharing passwords can lead to unauthorized access and compromise the security of the device.

  ## Update the Operating System Regularly

  Operating system updates are crucial to maintaining the security of your device. These updates often include security patches that address vulnerabilities and bugs that could compromise your device's security. Therefore, it is important to keep your device's operating system up-to-date with the latest patches and updates.

  ## Enable Hard-Disk Encryption

  Hard-disk encryption is a security feature that encrypts the data stored on your device's hard disk. This feature adds an extra layer of security to your device, making it difficult for anyone to access your data if the device is lost or stolen.

  ## Enable a Virus Scanner

  Viruses and malware pose a significant threat to your device's security. It is important to enable a virus scanner on your device to protect it from potential threats. The virus scanner will scan your device for viruses and malware and alert you if it detects any threats.

  ## Expert Corner

  ### Rooted Devices

  Rooting a device involves gaining access to the device's root or administrative privileges. While rooting a device provides greater control over the device, it also exposes the device to potential security risks. Rooted devices are more vulnerable to malware and other security threats. Therefore, it is recommended to avoid rooting your device unless you have a good reason to do so.

  ### Developer-enabled Phones

  Developer-enabled phones are designed for developers and come with additional features that allow them to customize the device's software. However, these features also make the device more vulnerable to potential security risks. Therefore, it is important to be cautious when using developer-enabled phones and avoid installing apps from untrusted sources.
  </p>
---

<style type="text/css">

    p {
    line-height: 24px;
    letter-spacing: -0.18px;
}

  .page__footer:before {
    display: none;
  }

  .page__footer {
    margin-top: 0;
  }

  h2 {
    margin-top: 0;
    }
    .second-half {
    padding-bottom: calc(128px - 1.3em);
}

#page-title {
    display: none;
}

h2#install-the-app {
    font-family: "Work Sans";
    font-size: 60px;
    font-style: normal;
    font-weight: 500;
    line-height: 60px;
    letter-spacing: -0.6px;
    color: var(--Primary-Colors-nmshd-Dark-Blue, #17428D);
}

.page__content h2 {
    padding-bottom: 16px;
    border-bottom: none;
    margin-bottom: 0;
}

.special-sub {
    font-size: 28px;
font-style: normal;
font-weight: 500;
line-height: 34px; /* 121.429% */
letter-spacing: -0.28px;
}

.caution-box {
          margin: 64px 0;
    border-radius: 6px;
    background: var(--tints-shades-nmshd-gold-nmshd-gold-10, #EADDCE);
    padding: 16px;
    border-left: 6px solid var(--Harmony-Colors-nmshd-Gold, #8C6117);
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.18px;
        display: flex;
    flex-direction: column;
    gap: 16px;
    color: var(--tints-shades-nmshd-gold-nmshd-gold-70, #533B14);

}

.caution-box span {
    display: flex;
    gap: 5px;}

.caution-box span:before {
    content: url(/assets/images/warning.svg);
}

h3#enmeshed-app {
    font-size: 34px;
        margin-bottom: 16px;
}

.down-app {
       margin: 32px 0 calc(32px - 1.3em) 0;
    display: inline-block;
        margin-right: 10px;
}

    #main {
        padding-top: 200px;
        padding-bottom: 128px;
    }

</style>

## Install the App

<span class="special-sub">Install the app in a secure environment.</span>

<div class="caution-box">
<span>Caution</span>
As enmeshed is open-source and the App is a white-label component, there are several flavors of the enmeshed App in the corresponding app stores.
</div>

### Enmeshed App

You can get the enmeshed App over your favorite app stores. Please find the links below:
Please drop us some feedback if you would like to see the enmeshed App on different stores as well.

[![Laden im Appstore](/assets/images/appstore.svg)](https://example.com){:target="\_blank"}{: .down-app} [![Jetzt bei Google Play](/assets/images/gplay.svg)](https://example.com){:target="\_blank"}{: .down-app}

<!-- component = app -->

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
    {% for doc in scenarios %}
    <tr>
        <td>
            <a href="{{ doc.url | relative_url }}">{{ doc.title }}</a>
        </td>
        <td>{{ doc.category }}</td>
        <td>{{ doc.customer }}</td>
        <td>{{ doc.component }}</td>
    </tr>
    {% endfor %}
</table>

<script>
    const table = document.getElementById("myTable");
    const search = {
        0: [], //Title
        1: [], //Category
        2: [], //Customer
        3: [], //Component
    };
    //Push data into search
    for (var i = 1, row; (row = table.rows[i]); i++) {
        for (var j = 0, col; (col = row.cells[j]); j++) {
            search[j].push(col.innerHTML.trim());
        }
    }
    //Remove duplicates
    for (const [key, column] of Object.entries(search)) {
        search[key] = column.filter(
            (value, index, array) => array.indexOf(value) == index
        );
    }

    //Create list elements
    for (const [key, column] of Object.entries(search)) {
        const list = document.getElementById(
            table.rows[0].cells[key].children[0].children[1].id
        );

        for (const value of column) {
            const element = document.createElement("li");
            element.classList.add("item");
            const elementText = document.createElement("span");
            elementText.classList.add("item-text");
            elementText.innerHTML = value;
            const checkbox = document.createElement("span");
            checkbox.classList.add("checkbox");
            element.appendChild(checkbox);
            element.appendChild(elementText);
            list.appendChild(element);
        }
    }

    const item = document.querySelectorAll(".item");
    item.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.target.classList.toggle("checked");
            e.target.children[0].classList.toggle("checked");

            filter({
                0: [],
                1: Array.from(
                    document.querySelectorAll("#category .checked span.item-text")
                ).map((value) => value.innerHTML),
                2: Array.from(
                    document.querySelectorAll("#customer .checked span.item-text")
                ).map((value) => value.innerHTML),
                3: Array.from(
                    document.querySelectorAll("#component .checked span.item-text")
                ).map((value) => value.innerHTML),
            });
        });
    });

    const selectBtn = document.querySelectorAll(".select-btn");
    selectBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("open");
        });
    });
</script> -->
