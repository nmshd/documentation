---
title: "Cryptography"
permalink: /explore/cryptography
---

We use modern cryptographic algorithms to our best knowledge. The cryptographic library we use is libsodium and its JavaScript wrapper libsodium.js. Libsodium is a fork of NaCl which is primarily stripping out unnecessary or dangerours interfaces or algorithms.

Based on libsodium, we use elliptic curve cryptography with the Edwards Curve (Ed25519 or Curve25519) which is one of the most secure curves available - see [safecurves.cr.yp.to/](https://safecurves.cr.yp.to).

We use key derivations as often as possible, in addition to strong and unique initialization vectors.

# Used Algorithms

Symmetric Encryption: XChaCha-Poly1305 (256 bit)

Digital Signatures: ECDSA Ed25519 (Elliptic Curve Digital Signature Algorithm with Curve25519)

Key Exchange: ECDH X25519 (Elliptic Curve Diffie Hellman with Curve25519)
