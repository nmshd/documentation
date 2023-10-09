---
title: "Cryptography"
permalink: /explore/cryptography
---

# Backbone Layer Encryption

The communication with the Backbone is encrypted on the http transport layer. This is done by using the transport-layer-security (TLS) standard which is common throughout the Internet. This prevents third parties to access any data communication to and from the Backbone, like authentication tokens of devices, recipient addresses, timestamps.

Stored data - so called "data at rest" - is encrypted on the respective systems, like databases. This is relevant for the underlying infrastructure services of the Backbone. The cloud infrastructure provider, is not able to access the data from the hard drives, as it is encrypted.

# Transport Layer Encryption

The communication between identities via the Backbone is end-to-end encrypted. This means, that nobody between the digital identities (i.e. their devices) is able to access the data. This prevents even the operator of the Backbone to access the payload which is sent between identities. It is also reducing the threats of data leaks to a minimum, as only the metadata could be leaked. Such a metadata leak would be the same level of information leak as a public blockchain is doing all along its public network.

We use modern cryptographic algorithms to our best knowledge. The cryptographic library we use is [libsodium](https://doc.libsodium.org/) and its JavaScript wrapper [libsodium.js](https://github.com/jedisct1/libsodium.js). Libsodium is a fork of NaCl which is primarily stripping out unnecessary or dangerours interfaces or algorithms.

Based on libsodium, we use elliptic curve cryptography with the Edwards Curve (Ed25519 or Curve25519) which is one of the most secure elliptic curves available. It is used by the [Digital Signature Standard (DSS)](https://csrc.nist.gov/publications/detail/fips/186/5/final) and one of a few elliptic curves passing the tests on [safecurves.cr.yp.to/](https://safecurves.cr.yp.to). Additional references supporting the Edwards Curve are [The Provable Security of Ed25519: Theory and Practice](https://eprint.iacr.org/2020/823.pdf) and [Guidance for Choosing an Elliptic Curve Signature Algorithm in 2022](https://soatok.blog/2022/05/19/guidance-for-choosing-an-elliptic-curve-signature-algorithm-in-2022/).

Key derivations are used as often as possible, in addition to strong and unique initialization vectors.

## Used Algorithms

Symmetric Encryption: [XChaCha-Poly1305 (256 bit)](https://doc.libsodium.org/secret-key_cryptography/aead/chacha20-poly1305/xchacha20-poly1305_construction)

Digital Signatures: ECDSA Ed25519 (Elliptic Curve Digital Signature Algorithm with Curve25519), 256bit

Key Exchange: ECDH X25519 (Elliptic Curve Diffie Hellman with Curve25519), 256bit

## Used Randomness

To reach enough entropy for safe private and secret keys, key generation is based on randomness, which is very important for modern cryptography. Applications rely on cryptographic libraries for randomness which in turn use software-based randomness (like timestamps, calculation durations and seeds) and hardware-supported randomness (like sensor input, hardware ids or even dedicated ranomness modules).

Our randomness is based on the mentioned library [libsodium.js](https://github.com/jedisct1/libsodium.js) which is using the standard [WebCrypto APIs](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues). With the WebCrypto API, the browser's randomness generator is used. The browser uses either an own implementation of a secure Pseudo-Random-Generator, or - in modern browsers - the operating system's random generator, which is usually taking hardware into consideration. Our solution is thus using the same mechanisms the browser use for securing Transport Layer Security (TLS) communication over the world wide web.

## Identity Keys

Every Identity needs a set of keys used by the Identity in order to digitally sign information (Identity Signature Key) and enable cross-device synchronization (Synchronization Base Key).

### Identity Signature Private Key

Abbreviated: PrivId

The identity's most secret, private signature key with which it is signing certificates, documents or the creation of new devices.

### Identity Signature Public Key

Abbreviated: PubId

The identity's public key which acts as the primary form of verifying data signed by an identity. Only with a known Identity Signature Public Key of an identity, the signature of an identity can be securely verified.

With the identity's public key, the identity's address is calculated.

Usually, you receive another identity's signature public key while making the first contact (e.g. from the relationship template or the relationship request followed upon it).

### Synchronization Base Secret Key

The secret key which is used to derive the synchronization derived secret keys. The synchronization base secret key is randomly generated on creation for every identity. The symmetric keys which are derived from the synchronization base key and are used to actually encrypt/decrypt the synchronization events.

## Device Keys

One identity has one to many devices using the identity. In order to authenticate the devices between each other, a device creates an own signing key, which will never leave the device.

## Device Signature Private Key

Every device of an identity has its own private key which is also not shared to other devices. With this, it is possible to have multi-factor authentication capabilities across different devices of one identity.

Additionally, the private signature keys can be used to sign data which is synchronized across devices.

## Device Signature Public Key

The device's public key which is stored in the Datawallet of an identity and thus is know to any other device of the identity. The public key can be used to verify data coming from other devices of an identity.

## Symmetric Encryption

Symmetric encryption is used throughout this solution in order to securely encrypt sensitive data. Prior to a communication to a different device or identity, a random secret key is generated and used to encrypt the payload. This secret key is then shared via a secure side-channel / out-of-band communication. This could be a message communicated over enmeshed, a QR-Code shown in a browser session or any other secure communication channel. The secret key is never transmitted unencrypted over the Backbone, as this would break up the end-to-end encryption.

Examples where symmetric encryption is used:

- Device-to-Device Synchronization
- Sharing Files
- Messages
- Relationship Templates
- Tokens

For files only: In addition to the payload, metadata (like filename or mimetype) of the file needs to be separately encrypted. For this, another random secret key is generated for encrypting the metadata of the file. To omit unnecessary payload while sharing files, the generated secret key for actual file payload is stored within this metadata. Thus, only the generated secret key for the metadata must be shared (in addition to the file id).

## Relationship Keys

With each relationship, there are relationship keys automatically generated. These keys are used for signing and encrypting the communication with the relationship on a technical level.

- Relationship own exchange keypair: A pair of relationship own exchange private key (PrivOwnX) and corresponding relationship own exchange public key (PubOwnX). The relationship own exchange private key is used to derive the masterRelationship secret keys (transmit and receive). The relationship own exchange public key is communicated within the relationship creation change request or the relationship creation change response.
- Relationship own signature keypair: A pair of relationship signature private key (PrivOwn) and corresponding relationship signature public key (PubOwn). The signature own private key is used for signing the communication with this relationship. It is synchronized across all devices and signed by the device signature private key of the device which creates the relationship creation change request or the relationship template. The signature own public key is used for verifying the signatures of all communications with this relationship.
- Relationship peer exchange public key: The peer's exchange public key (PubPeerX) which is used to derive the master relationship secret keys (transmit and receive).
- Relationship peer signature public key: The peer's signature public key which is used to verify communication sent by the peer.
- Relationship receive derived secret key (SecPeer'): A derived symmetric key of the master, which is actually used for decryption.
- Relationship receive master secret key (SecPeer):
  The symmetric master key for receiving communication of the relationship. The key is derived by the relationship peer exchange public key and the relationship own exchange private key while onboarding. This key equals to the relationship transmit master key of the peer.
- Relationship transmit derived secret key (SecOwn'): A derived symmetric key of the master, which is actually used for encryption.
- Relationship transmit master secret key (SecOwn):
  The derived symmetric master key for transmitting communication to the relationship. The key is derived by the relationship peer exchange public key and the relationship own exchange private key. This key equals to the relationship receive master key of the peer.
