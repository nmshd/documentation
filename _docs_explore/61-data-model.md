---
title: "Enmeshed Data Model"
permalink: /explore/data-model
toc: true
---

The Enmeshed data model can be devided into three parts:

-   Transport types
-   Local types
-   Content types

The following diagram gives you an overview of all the existing types and how they are connected to each other. The subsequent chapters describe these types in more detail.

<div style="width: 100%; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:100%; height:480px" src="https://lucid.app/documents/embedded/66e3002c-335a-4c22-a352-3a7a50a17d37" id="uPhuT48AMcNp"></iframe></div>

At a first glance the amount of types is overwhelming. But in the following chapters all of them are explained in detail.

# Transport Types

Transport types like `RelationshipTemplate`, `Token` or `File` are types that are "exchanged" between Identities via the Backbone. In most cases they have a `content` property, which contains the actual payload that should be transfered between the Identities. This payload is being encrypted when it is sent to the Backbone, and decrypted by the other Identity when it is received. The following sections describe the differnt Transport types and their properties.

## Token

Tokens can be used to save arbitrary structured data on the Backbone, which is encrypted with a random symmetric key. You can then pass the ID of the Token, together with the random key, to another Identity, which can then retrieve the token and decrypt it, e.g. inside of a QR Code, which you send to the recipient via letter. Tokens  can be handy in a lot of scenarios, for example:
- You want to share secret information with someone you don't have a Relationship with.
- The Enmeshed App currently uses a Token to save a Backup of the Identity. ID and secret key are then encoded in a QR Code, which the user can print out and scan later in order to restore the Identity on a new device.

## RelationshipTemplate

A Relationship Template serves to purposes:

1. It represents the permission to establish a Relationship. When sending a Relationship request, the sender has to attach the ID of a valid Relationship Template created by the recipient. Otherwise the Backbone blocks the Relationship request. And since the IDs are randomly generated, you can only obtain such an ID from the recipient.
2. It can contain data which is of intereset for the one who uses the Relationship Template. The Enmeshed App for example expects a Relationship Template content which contains a `Request` which contains e.g. Attributes about the creator of the Template as well as queries for Attributes that the Template creator wants to receive together with the Relationship request.

## Relationship

A Relationship between two Identities is the prerequisite for them to exchange Messages. If there is no Relationship, the Backbone blocks all Messages that are tried to be sent. This ensures that you only receive Messages from Identities you know, so you are protected from any harmful Messages like spam or fishing mails.

## Message

A Message is a piece of data that can be sent to one or more recipients. The sender is completely free in what the content of the Message looks like. Though in order to enable a normalized communication, Enmeshed defines some content structures for Messages, and in the future there will be more of those. Currently there are:
-  Mail
-  Request
-  Response

You can read more details about each of these in the corresponding sections of the "Content Types" chapter.

But if you are communicating with another Connector, feel free to settle on any content structure that fits your needs. 

## File

The Backbone allows you to upload encrypted files, which are saved as - you probably guessed it - Files. There is nothing more special about them.