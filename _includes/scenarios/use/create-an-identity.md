{% include warnings/documentation-is-prerelease %}

# Identity

A new digital Identity can be created in the App by the user. The Identity is the user's primary entity and digital twin. All data and metadata in enmeshed is stored for Identities. Every Identity represents a certain natural or legal person. One can create separate Identities for personal and professional purposes.

# Devices

The Device which created an Identity automatically is onboarded to the Identity. But a user can add more Devices, to have multiple devices accessing the very same digital Identity. An Identity which is used by a mobile phone, a tablet and a laptop has onboarded three Devices.

# Profiles

The user can manage multiple Identities with one single App. Each Identity-to-App combination is called a Profile. Thus, each Profile within the App represents a separate digital Identity for which the App can be used.

# Example

Consider a user who has three Devices (phone, tablet and business laptop) and three Identities (personal, work, child). A senseful combination would be the following:

Multi-Device: Structured by Identities and their Devices:

- Identity Personal
  - Device: Phone
  - Device: Tablet
- Identity Child
  - Device: Phone
  - Device: Child
- Identity Work
  - Device: Phone
  - Device: Business Laptop

Multi-Profile: Structured by Devices and their Profiles:

- Device: Phone
  - Profile: Personal
  - Profile: Work
  - Profile: Child
- Device: Tablet
  - Profile: Personal
  - Profile: Child
- Device: Business Laptop
  - Profile: Work
