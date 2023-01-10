---
title: Helm Chart
permalink: /integrate/helm-chart
---

## Versions

The available Helm chart versions can be found [here](https://github.com/nmshd/cns-connector/pkgs/container/connector-helm-chart/versions).

We provide a new Helm chart version for each new Connector release and each Helm chart will deploy the Connector in the charts version. (Helm chart version `3.2.1` deploys Connector version `3.2.1`)
You can override the Connector version by setting the `image.tag` value in the Helm chart.

## Configuration

The Helm chart can be configured using a [yaml file or the command line](https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing). The following table lists the configurable parameters of the Helm chart and their default values.

You can also query the available options using the command line: `helm show values oci://ghcr.io/nmshd/connector-helm-chart --version <version>`

| Parameter                      | Description                                                                                                                                                                   | Default                        |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `image.pullPolicy`             | The images [PullPolicy](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy)                                                                             | `"IfNotPresent"`               |
| `image.tag`                    | The images tag. [Available tags](https://github.com/nmshd/cns-connector/pkgs/container/connector/versions)                                                                    | The version of the Helm chart. |
| `config`                       | The configuration of the Connector in yaml or json format. [Configuration options](https://enmeshed.eu/integrate/connector-configuration)                                     | `{}`                           |
| `pod.environment`              | A list of [environment variables](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#environment-variables). Can be used for configuring secrets. | `[]`                           |
| `pod.annotations`              | [Annotations](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/) for the pod.                                                                    | `{}`                           |
| `pod.securityContext`          | [SecurityContext](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#security-context) for the pod.                                               | `{}`                           |
| `pod.containerSecurityContext` | [SecurityContext](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#security-context-1) for the container in the pod.                            | `{}`                           |
| `pod.resources`                | [Resources](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#resources) for the pod.                                                            | `{}`                           |
| `pod.nodeSelector`             | [NodeSelector](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector) for the pod.                                                            | `{}`                           |
| `pod.tolerations`              | [Tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/) for the pod.                                                                     | `[]`                           |
| `pod.affinity`                 | [Affinity](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#NodeAffinity) for the pod.                                                          | `{}`                           |
| `service.type`                 | The [ServiceType](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types) of the service.                                         | `"ClusterIP"`                  |
| `service.port`                 | The port of the service.                                                                                                                                                      | `80`                           |

### Example Configuration

The following example shows how to configure the Helm chart.

```yaml
config:
    modules:
        coreHttpApi:
            docs:
                enabled: true

pod:
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

pod:
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

## Installation

Create a file named `values.yaml` with the desired configuration and run the following command to install the Helm chart.

```bash
helm install <installationName> oci://ghcr.io/nmshd/connector-helm-chart --version <version> -f values.yaml
```
