---
title: Helm Chart
permalink: /integrate/helm-chart
---

## Versions

The available Helm chart versions can be found [here](https://github.com/nmshd/cns-connector/pkgs/container/connector-helm-chart/versions).

We provide a new Helm chart version for each new Connector release and each Helm chart will deploy the Connector in the chart's version. (Helm chart version `3.2.1` deploys Connector version `3.2.1`)
You can override the Connector version by setting the `image.tag` value in the Helm chart.

## Configuration

The Helm chart can be configured using a [yaml file or the command line](https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing). The following table lists the configurable parameters of the Helm chart and their default values.

You can also query the available options using the command line: `helm show values oci://ghcr.io/nmshd/connector-helm-chart --version <version>`

| Parameter                       | Description                                                                                                                                                                                               | Default                        |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `image.pullPolicy`              | The image's [PullPolicy](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy)                                                                                                        | `"IfNotPresent"`               |
| `image.tag`                     | The image's tag. [Available tags](https://github.com/nmshd/cns-connector/pkgs/container/connector/versions)                                                                                               | The version of the Helm chart. |
| `config`                        | The configuration of the Connector in yaml or json format. [Configuration options](https://enmeshed.eu/integrate/connector-configuration)                                                                 | `{}`                           |
|                                 |                                                                                                                                                                                                           |                                |
| `pod.securityContext`           | [SecurityContext](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#security-context) for the pod.                                                                           | `{}`                           |
| `pod.nodeSelector`              | [NodeSelector](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector) for the pod.                                                                                        | `{}`                           |
| `pod.tolerations`               | [Tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/) for the pod.                                                                                                 | `[]`                           |
| `pod.affinity`                  | [Affinity](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#NodeAffinity) for the pod.                                                                                      | `{}`                           |
|                                 |                                                                                                                                                                                                           |                                |
| `pod.connector.environment`     | A list of [environment variables](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#environment-variables) for the Connector container. Can be used for configuring secrets. | `[]`                           |
| `pod.connector.securityContext` | [SecurityContext](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#security-context-1) for the Connector container.                                                         | `{}`                           |
| `pod.connector.resources`       | [Resources](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#resources) for the Connector container.                                                                        | `{}`                           |
| `pod.connector.containerPort`   | The port the Connector is listening on. Must be the same as `infrastructure.httpServer.port` in the `config`.                                                                                             | `80`                           |
|                                 |                                                                                                                                                                                                           |                                |
| `pod.ferretdb.enabled`          | Enables / disables the FerretDB sidecar.                                                                                                                                                                  | false                          |
| `pod.ferretdb.tag`              | The tag used to deploy the FerretDB sidecar.                                                                                                                                                              | `"latest"`                     |
| `pod.ferretdb.environment`      | A list of [environment variables](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#environment-variables) for the FerretDB container. Can be used for configuring secrets.  | `[]`                           |
| `pod.ferretdb.securityContext`  | [SecurityContext](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#security-context-1) for the FerretDB container.                                                          | `{}`                           |
| `pod.ferretdb.resources`        | [Resources](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#resources) for the FerretDB container.                                                                         | `{}`                           |
|                                 |                                                                                                                                                                                                           |                                |
| `service.type`                  | The [ServiceType](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types) of the service.                                                                     | `"ClusterIP"`                  |
| `service.port`                  | The port of the service.                                                                                                                                                                                  | `80`                           |

### Example Configuration

The following example shows how to configure the Helm chart.

```yaml
config:
  debug: true
  modules:
    coreHttpApi:
      docs:
        enabled: true

pod:
  connector:
    environment:
      - name: database__connectionString
        valueFrom:
          secretKeyRef:
            name: db-connection-string
            key: VALUE

      - name: transportLibrary__platformClientId
        value: test
      - name: transportLibrary__platformClientSecret
        valueFrom:
          secretKeyRef:
            name: platform-client-secret
            key: VALUE

      - name: infrastructure__httpServer__apiKey
        valueFrom:
          secretKeyRef:
            name: api-key
            key: VALUE
```

If you prefer json over yaml for the `config` section the following example is equivalent to the yaml example above.

```yaml
config: { "modules": { "coreHttpApi": { "docs": { "enabled": false } } } }
# ...
```

## Installation

Create a file named `values.yaml` with the desired configuration and run the following command to install the Helm chart.

```bash
helm install <installationName> oci://ghcr.io/nmshd/connector-helm-chart --version <version> -f values.yaml
```

## Using port 80 as non-root

By default the Connector will run on port 80 but as a non-root user. This means that you need to give the container the NET_BIND_SERVICE capability. You can do this by adding the following to your config file if you are using the `Baseline` [Pod Security Standard](https://kubernetes.io/docs/concepts/security/pod-security-standards/):

```yaml
pod:
  connector:
    securityContext:
      capabilities:
        add:
          - NET_BIND_SERVICE
```
