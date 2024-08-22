---
title: "enmeshed Addresses"
permalink: /explore/addresses
---

The Address is the primary identifier for an enmeshed Identity. It is public and created out of the Identity’s Signature Public Key. Thus, the Identity’s root signature key and its corresponding Address are interlinked with each other and cannot be changed. Nobody is able to change the public key for a corresponding Address and everybody has the possibility to check, if a given public key matches a given Address without having to trust someone. Both are important security features.

- As Addresses do not contain special characters, copy and pasting via double-click is supported.
- As they do have a checksum included, syntactically wrong Addresses can be checked by a computer program locally.

Enmeshed uses [Decentralized Identifiers](https://www.w3.org/TR/did-core/), also called DIDs, which are specified by the W3C and commonly used with W3C's [Verifiable Credentials](https://www.w3.org/TR/vc-overview/). Enmeshed plans to launch its own DID method `did:e`, and already uses those DIDs for Addresses even though the method is not yet constructed.

## Addresses are Backbone-specific

An Address is fixed to a certain backbone. The same Identity (Identity Signature Key Pair) may act within different backbones, but will have different Addresses. Additionally, there are many open questions with regards to using multiple backbones, e.g. which one is in charge for the synchronization.

## Syntax

An Address follows the DID syntax and is `did:e:<backbone-hostname>:dids:<public-key-hash><checksum>`. Public-Key-Hash and Checksum are lower-case hexadecimal-encoded, 10 bytes for the hash of the Identity’s Signature Public Key, 1 byte for the checksum of the Address.

## Address Creation

- Create Identity Signature Key Pair
- Only use Identity Signature Public Key → PublicKey
- SHA-512 hash the PublicKey
- SHA-256 hash the SHA-512 Hash
- Convert the SHA-256 hash into hexadecimal (lower case)
- Take the first 10 bytes/20 characters of the hexadecimal (as UTF-8 bytes) → HashedPublicKey
- Prepend `did:e:<backbone-hostname>:dids:` (as UTF-8 bytes) to the front of the created HashedPublicKey → ChecksumSource
- SHA-256 Hash the ChecksumSource
- Convert the SHA-256 hash into hexadecimal (lower case)
- Take the first byte/two characters of the hexadecimal → Checksum
- Concatenate ChecksumSource and Checksum → Address

## Pseudocode

```text
createAddress(PublicKey) {
Hash := SHA256(SHA512(PublicKey)) // 32 bytes
HashedPublicKey := Hash[0-9] // 10 bytes
EnmeshedSpecificPart := "did:e:"
BackboneSpecificPart := "<backbone-hostname>:dids:" // e. g. "example.com:dids:"
IdentitySpecificPart := HEX(HashedPublicKey) // 10 bytes (20 characters), e.g. "eadae3b3d814ebb0c0d6"
Checksum := HEX(SHA256(EnmeshedSpecificPart + BackboneSpecificPart + IdentitySpecificPart)[0]) // 1 byte, e.g. "de"
Address = EnmeshedSpecificPart + BackboneSpecificPart + IdentitySpecificPart + Checksum // e.g. did:e:example.com:dids:eadae3b3d814ebb0c0d6de
}
```

## Examples

Below there are a few examples for valid enmeshed Addresses.

```text
backboneHostname: "example.com"
publicKey: "fj0o9eOiPRswTZL6j9lE9TRvpDDnPRMF0gJeahz/W2c="
address: "did:e:example.com:dids:fef1992c5e529adc41328d"

backboneHostname: "example.com",
publicKey: "jRxGfZtQ8a90TmKCGk+dhuX1CBjgoXuldhNPwrjpWsw="
address: "did:e:example.com:dids:b9d25bd0a2bbd3aa4843ed"

backboneHostname: "example.com",
publicKey: "PEODpwvi7KxIVa4qeUXia9apMFvPMktdDHiDitlfbjE="
address: "did:e:example.com:dids:d459ff2144f0eac7aff5f7"

backboneHostname: "example.com",
publicKey: "mJGmNbxiVZAPToRuk9O3NvdfsWl6V+7wzIc+/57bU08="
address: "did:e:example.com:dids:e2208784ee2769c5d9686a"
```
