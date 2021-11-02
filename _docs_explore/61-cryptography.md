---
title: "Cryptography"
permalink: /explore/cryptography
---

# Introduction

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
