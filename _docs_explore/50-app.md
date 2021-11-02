---
title: "Enmeshed App"
permalink: /explore/app
toc: true
---

# App Components

## Platform-dependant App Binaries

For each of the various platforms, each version of the app is packaged into a platform-dependant binary. This binary is then executable / installable for the users. The binaries of the Enmeshed App are created, maintained and published by j&amp;s-soft GmbH.

Following binaries are currently created:

- iOS App for the Apple AppStore
- Android App Bundle for the Google PlayStore
- Electron App for Microsoft Windows

## Platform-dependant App Sourcecode and Build environment

Alongside the platform-independant code, platform-dependant source code is sometimes necessary. Also the build-steps and processes vary across the different platforms.

- Cordova Environment for building iOS and Android apps
- Electron Environment for building Windows applications
- Web Environment for developing the app

## App User Interface

The user interface of the Enmeshed App is platform-independently built with [OpenUI5](https://openui5.org/), a JavaScript framework for user interfaces primarily used for business applications.

## App Runtime

The Enmeshed business logic for the app is extending the [Enmeshed Runtime](#enmeshed-runtime) with app-specific implementations, like multi-profile support, local data handling or automations. You can think of the App Runtime as a more user-interface-friendly way of the Enmeshed Runtime.
