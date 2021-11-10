---
title: "Cryptography"
permalink: /explore/cryptography
---

# Backbone Layer Encryption

The communication with the Backbone is encrypted on the http transport layer. This is done by using the transport-layer-security (TLS) standard which is common throughout the Internet. This prevents third parties to access any data communication to and from the Backbone.

Data at rest is encrypted on the respective systems. This is relevant for the underlying infrastructure services of the Backbone. The infrastructure provider, e.g. Microsoft Azure, is not able to access the data from the hard drives, as it is encrypted.

# Transport Layer Encryption

The communication between identities via the Backbone is end-to-end encrypted. This is done by using our own cryptography library based on standard implementations of elliptic curve cryptograhic algorithms.

This prevents even the operator of the Backbone to access the payload which is sent between identities. It is also reducing the threats of data leaks to a minimum, as only the metadata could be leaked.

We use modern cryptographic algorithms to our best knowledge. The cryptographic library we use is [libsodium](https://doc.libsodium.org/) and its JavaScript wrapper [libsodium.js](https://github.com/jedisct1/libsodium.js). Libsodium is a fork of NaCl which is primarily stripping out unnecessary or dangerours interfaces or algorithms.

Based on libsodium, we use elliptic curve cryptography with the Edwards Curve (Ed25519 or Curve25519) which is one of the most secure curves available - see [safecurves.cr.yp.to/](https://safecurves.cr.yp.to).

Key derivations are used as often as possible, in addition to strong and unique initialization vectors.

## Used Algorithms

Symmetric Encryption: [XChaCha-Poly1305 (256 bit)](https://doc.libsodium.org/secret-key_cryptography/aead/chacha20-poly1305/xchacha20-poly1305_construction)

Digital Signatures: ECDSA Ed25519 (Elliptic Curve Digital Signature Algorithm with Curve25519)

Key Exchange: ECDH X25519 (Elliptic Curve Diffie Hellman with Curve25519)

## Identity Keys

### Identity Signature Private Key

Abbreviated: PrivId

The identity's most secret, private signature key with which it is signing certificates, documents or the creation of new devices.

### Identity Signature Public Key

Abbreviated: PubId

The identity's public key which acts as the primary form of verifying data signed by an identity. Only with a known Identity Signature Public Key of an identity, the signature of an identity can be securely verified.

With the identity's public key, the identity's address is calculated.

Usually, you receive another identity's signature public key while making the first contact (e.g. from the relationship template or the relationship request followed upon it).

### Synchronization Derived Secret Key

The symmetric keys which are derived from the synchronization master key and are used to actually encrypt/decrypt the synchronization events.

### Synchronization Master Secret Key

The symmetric master key which is used to derive the synchronization derived secret keys. The synchronization master secret key is randomly generated on creation for every identity.

## Device Keys

## Device Signature Private Key

Every device of an identity has its own private key which is also not shared to other devices. With this, it is possible to have multi-factor authentication capabilities across different devices of one identity.

Additionally, the private signature keys can be used to sign data which is synchronized across devices.

## Device Signature Public Key

The device's public key which is stored in the Datawallet of an identity and thus is know to any other device of the identity. The public key can be used to verify data coming from other devices of an identity.

## File Encryption

As with tokens, prior to the upload, a random secret key is generated and used to encrypt the file payload. In addition to the file payload, metadata (like filename or mimetype) to the file is stored next to it. For this, another random secret key is generated for encrypting the metadata. To omit unnecessary payload while sharing files, the generated secret key for actual file payload is encrypted with its metadata, so that only the generated secret key for the metadata must be shared (in addition to the file id).

## Relationship Keys

With each relationship, there are relationship keys automatically generated. These keys are used for signing and encrypting the communication with the relationship on a technical level.

-   Relationship own exchange keypair: A pair of relationship own exchange private key (PrivOwnX) and corresponding relationship own exchange public key (PubOwnX). The relationship own exchange private key is used to derive the masterRelationship secret keys (transmit and receive). The relationship own exchange public key is communicated within the relationship creation change request or the relationship creation change response.
-   Relationship own signature keypair: A pair of relationship signature private key (PrivOwn) and corresponding relationship signature public key (PubOwn). The signature own private key is used for signing the communication with this relationship. It is synchronized across all devices and signed by the device signature private key of the device which creates the relationship creation change request or the relationship template. The signature own public key is used for verifying the signatures of all communications with this relationship.
-   Relationship peer exchange public key: The peer's exchange public key (PubPeerX) which is used to derive the master relationship secret keys (transmit and receive).
-   Relationship peer signature public key: The peer's signature public key which is used to verify communication sent by the peer.
-   Relationship receive derived secret key (SecPeer'): A derived symmetric key of the master, which is actually used for decryption.
-   Relationship receive master secret key (SecPeer):
    The symmetric master key for receiving communication of the relationship. The key is derived by the relationship peer exchange public key and the relationship own exchange private key while onboarding. This key equals to the relationship transmit master key of the peer.
-   Relationship transmit derived secret key (SecOwn'): A derived symmetric key of the master, which is actually used for encryption.
-   Relationship transmit master secret key (SecOwn):
    The derived symmetric master key for transmitting communication to the relationship. The key is derived by the relationship peer exchange public key and the relationship own exchange private key. This key equals to the relationship receive master key of the peer.

## Relationship Template Encryption

## Token Encryption
