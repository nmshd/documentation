---
title: "Enmeshed Addresses"
permalink: /explore/addresses
---

The Address is the primary identifier for an enmeshed Identity. It is public and created out of the Identity’s Signature Public Key. Thus, the Identity’s root signature key and its corresponding Address are interlinked with each other and cannot be changed. Nobody is able to change the public key for a corresponding Address and everybody has the possibility to check, if a given public key matches a given Address without having to trust someone. Both are important security features.

- As Addresses do not contain special characters, copy and pasting via double-click is supported.
- As they also do not contain any characters which might be visually mixed up by humans (I (uppercase i), l (lowercase L), 0 (zero) and O (uppercase o)) reading them is easier than with other encodings - but still quite cumbersome, because of their length.
- As they do have a checksum included, syntactically wrong Addresses can be checked by a computer program locally.

## Realms/Environments

An Address is fixed to a certain realm/environment. So far, there is only one realm supported which is `id1`, the main productive network.

The same Identity (Identity Signature Key Pair) may act within different realms, but will have different Addresses. Additionally, there are many open questions with regards to using multiple realms, e.g. which realm is in charge for the synchronization.

## Syntax

An Address consists of a three character alphanumeric realm prefix and seemingly random characters afterwards. These random characters are a [Base58](https://en.bitcoinwiki.org/wiki/Base58) encoded 24 byte sequence: The first 20 bytes are a hash of the Identity’s Signature Public Key. The last 4 bytes of the sequence represent a checksum of the Address.

## Address Creation

- Create Identity Signature Key Pair
- Only use Identity Signature Public Key → PublicKey
- SHA-512 hash the PublicKey
- SHA-256 hash the SHA-512 Hash
- Take the first 20 bytes of the SHA-256 Hash → HashedPublicKey
- Prepend the given 3 character realm (as UTF-8 bytes) to the front of the created HashedPublicKey → ChecksumSource
- SHA-512 Hash the ChecksumSource
- SHA-256 Hash the SHA-512 Hash
- Take the first 4 bytes of the SHA-256 Hash → Checksum
- Concatenate HashedPublicKey and Checksum → Concatenation
- Base58 the Concatenation → B58Concatenation
- Concatenate 3 character realm (string) with B58Concatenation → Address

## Pseudocode

```text
createAddress(PublicKey, RealmAsThreeCharUtf8) {
  Hash := SHA256(SHA512(PublicKey))
  HashedPublicKey := Hash[0-19]
  ChecksumSource := realm.toBuffer()  + HashedPublicKey
  ChecksumHash := SHA256(SHA512(ChecksumSource))
  Checksum := ChecksumHash[0-3]
  Concatenation := HashedPublicKey + Checksum
  Address := Realm + Base58(Concatenation)
}
```

## Examples

Below there are a few examples for valid enmeshed Addresses.

```text
Realm: id1
PublicKey: fj0o9eOiPRswTZL6j9lE9TRvpDDnPRMF0gJeahz/W2c=
Address: id1QF24Gk2DfqCywRS7NpeH5iu7D4xvu6qv1

Realm: id1
PublicKey: jRxGfZtQ8a90TmKCGk+dhuX1CBjgoXuldhNPwrjpWsw=
Address: id1HwY1TuyVBp3CmY3h18yTt1CKyu5qwB9wj

Realm: id1
PublicKey: PEODpwvi7KxIVa4qeUXia9apMFvPMktdDHiDitlfbjE=
Address: id1LMp4k1XwxZ3WFXdAn9y12tv1ofe5so4kM

Realm: id1
PublicKey: mJGmNbxiVZAPToRuk9O3NvdfsWl6V+7wzIc+/57bU08=
Address: id1McegXycvRoiJppS2LG25phn3jNveckFUL

Realm: id1
PublicKey: l68K/zdNp1VLoswcHAqN6QUFwCMU6Yvzf7XiW2m1hRY=
Address: id193k6K5cJr94WJEWYb6Kei8zp5CGPyrQLS

Realm: id1
PublicKey: Gl8XTo8qFuUM+ksXixwp4g/jf3H/hU1F8ETuYaHCM5I=
Address: id1BLrHAgDpimtLcGJGssMSm7bJHsvVe7CN

Realm: id1
PublicKey: rIS4kAzHXT7GgCA6Qm1ANlwM3x12QMSkeprHb6tjPyc=
Address: id1NjGvLfWPrQ34PXWRBNiTfXv9DFiDQHExx

Realm: id1
PublicKey: hg/cbeBvfNrMiJ0dW1AtWC4IQwG4gkuhzG2+z6bAoRU=
Address: id1Gda4aTXiBX9Pyc8UnmLaG44cX46umjnea

Realm: id1
PublicKey: kId+qWen/lKeTdyxcIQhkzvvvTU8wIJECfWUWbmRQRY=
Address: id17RDEphijMPFGLbhqLWWgJfatBANMruC8f

Realm: id1
PublicKey: NcqlzTEpSlKX9gmNBv41EjPRHpaNYwt0bxqh1bgyJzA=
Address: id19meHs4Di7JYNXoRPx9bFD6FUcpHFo3mBi
```
