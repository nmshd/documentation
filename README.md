# nmshd.github.io

This is the source code of the Enmeshed Documentation hosted at [nmshd.github.io](nmshd.github.io).

## Purpose of this documentation

This documentation is meant as an overarching documentation for the whole Enmeshed open source project. It describes overarching concepts whereas the individual repositories provide technical documentation for the respective source code or functionality.

## Documentation guidelines

-   So far, English only
-   Keep it simple
-   Think about the audience

## Contribute to the documentation

The documentation itself uses GitHub pages and thus `jekyll` as the technical framework.  
The preferred way of setting up a local "instance" of the environment is via a so-called "Development Container" in VS Code:

VSCode
JavaScript

Install:

-   [Visual Studio Code](https://code.visualstudio.com/)
-   [Remote Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
-   [Docker](https://code.visualstudio.com/docs/remote/containers)

Then in VS Code, clone the repository with the command _[Remote-Containers: Clone Repository in Container Volume...](https://code.visualstudio.com/docs/remote/containers-advanced#_use-clone-repository-in-container-volume)_

This will

-   Clone the Repository in a Container Volume
-   Build the Docker Image
-   Start the Docker Container and map the required ports
-   Mount the created Container Volume
-   Install the required npm packages
-   Install the required ruby gems

Finally, open the `Terminal` in VS Code (it is attached to the running Development Container), and start the "instance":

```shell
bundle exec jekyll serve --livereload
```

Alternatively, you can use the predefined VS Code Tasks

-   `Serve` &rarr; see above
-   `Build` &rarr; build the jekyll site

## regenerate diagrams

execute

```shell
java -jar puml.jar _docs_integrate/diagrams/*.pu -o "$PWD/assets/diagrams/integrate"

```
