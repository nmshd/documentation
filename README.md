# Documentation

This is the source code of the enmeshed documentation hosted at [enmeshed.eu](https://enmeshed.eu).

## Purpose of this documentation

This documentation is meant as an overarching documentation for the whole enmeshed open source project. It describes overarching concepts whereas the individual repositories provide technical documentation for the respective source code or functionality.

## Documentation guidelines

- So far, English only
- Keep it simple
- Think about the audience
- Links to other pages of the documentation are rendered using jekyll's liquid:
  `{% link {path_to_file} %}#{fragment_identifier}`

## Contribute to the documentation

The documentation itself uses GitHub pages and thus `jekyll` as the technical framework.  
The preferred way of setting up a local "instance" of the environment is via a so-called "Development Container" in VS Code:

VSCode
JavaScript

Install:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Dev Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- [Docker](https://code.visualstudio.com/docs/remote/containers)

Then in VS Code, clone the repository with the command _[Dev Containers: Clone Repository in Container Volume...](https://code.visualstudio.com/docs/remote/containers-advanced#_use-clone-repository-in-container-volume)_

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

## Update dependencies

You can update dependencies using the command `bundle update`.

## Regenerate diagrams

To regenerate diagrams, execute the command

```shell
java -jar puml.jar _docs_integrate/diagrams/*.pu -o "$PWD/assets/diagrams/integrate"

```

## Regenerate header

1. add excel file to root directory
2. execute script

```shell
npx ts-node scripts/update.ts
```
