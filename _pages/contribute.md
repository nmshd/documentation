---
permalink: /contribute
title: Contribute to Enmeshed
---

No matter your expertise - we love to hear your feedback and your opinion about Enmeshed!

Additionally, there are multiple ways how you can contribute to Enmeshed:

- Inform us, by providing feedback to our solutions
- Enlighten us, by [filing bug reports](https://github.com/nmshd/feedback/issues/new/choose) of bugs you encountered
  Please do check beforehand if a similar issue is already tracked.
- Guide us, by bringing in your expertise and [fill out feature requests](https://github.com/nmshd/feedback/issues/new/choose) or vote for existing ones. This is done in the same repository
  Please do check beforehand if a similar feature was already requested.
- Challenge us, by reviewing our concepts, architecture and implementations on a more technical base. We'd love to hear from you either by contacting us directly or take part in the [GitHub discussions](https://github.com/nmshd/feedback/discussions).
- Harden us, by digging deep into our software and find security relevant issues
- Enhance us, by contributing your work to [our open source repositories](https://github.com/nmshd) (as of now, not supported yet).

## contribute documentation

The documentation site itself uses gh pages and thus `jekyll` as the technical framework.  
The preferred way of setting up a local "instance" of the environment is via a so-called "Development Container" in VS Code:

install:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Remote Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- [Docker](https://code.visualstudio.com/docs/remote/containers)

Then in VS Code, clone the repository with the command _[Remote-Containers: Clone Repository in Container Volume...](https://code.visualstudio.com/docs/remote/containers-advanced#_use-clone-repository-in-container-volume)_

This will

- Clone the Repository in a Container Volume
- Build the Docker Image
- Start the Docker Container and map the required ports
- Mount the created Container Volume
- Install the required npm packages
- Install the required ruby gems

Finally, open the `Terminal` in VS Code (it is attached to the running Development Container), and start the "instance":

```shell
bundle exec jekyll serve --livereload
```

Alternatively, you can use the predefined VS Code Tasks

- `Serve` &rarr; see above
- `Build` &rarr; build the jekyll site
