## 1 BuildingBlocks

### 1.1 API.Mvc.ExceptionFilters.CustomExceptionFilter

| Code     | Event Name                                       |
| -------- | ------------------------------------------------ |
| `560507` | ExceptionFilter.InfrastructureException          |
| `437832` | ExceptionFilter.ApplicationException             |
| `505278` | ExceptionFilter.DomainException                  |
| `938218` | ExceptionFilter.RequestBodyTooLarge              |
| `259125` | ExceptionFilter.ErrorWhileProcessingRequestToUri |

### 1.2 Application.MediatR.LoggingBehavior

| Code     | Event Name                                             |
| -------- | ------------------------------------------------------ |
| `437002` | LoggingBehavior.HandleRequestInformation (Warning)     |
| `214089` | LoggingBehavior.HandleRequestInformation (Information) |

### 1.3 Infrastructure.EventBus.AzureServiceBus.EventBusAzureServiceBus

| Code     | Event Name                                                   |
| -------- | ------------------------------------------------------------ |
| `302940` | EventBusAzureServiceBus.SendingIntegrationEvent              |
| `630568` | EventBusAzureServiceBus.EventWasNotProcessed                 |
| `949322` | EventBusAzureServiceBus.ErrorHandlingMessage                 |
| `341537` | EventBusAzureServiceBus.NoSubscriptionForEvent               |
| `726744` | EventBusAzureServiceBus.ErrorWhileExecutingEventTypeHandler  |
| `146670` | EventBusAzureServiceBus.ErrorWhileProcessingIntegrationEvent |

### 1.4 Infrastructure.EventBus.GoogleCloudPubSub.EventBusGoogleCloudPubSub

| Code     | Event Name                                                    |
| -------- | ------------------------------------------------------------- |
| `830408` | EventBusGoogleCloudPubSub.SendingIntegrationEvent             |
| `712382` | EventBusGoogleCloudPubSub.ErrorHandlingMessage                |
| `590747` | EventBusGoogleCloudPubSub.NoSubscriptionForEvent              |
| `304842` | EventBusGoogleCloudPubSub.ErrorWhileExecutingEventHandlerType |

### 1.5 Infrastructure.EventBus.RabbitMQ.DefaultRabbitMqPersistentConnection

| Code     | Event Name                                                     |
| -------- | -------------------------------------------------------------- |
| `715507` | DefaultRabbitMqPersistentConnection.BrokerUnreachableException |
| `119836` | DefaultRabbitMqPersistentConnection.ConnectionIsShutdown       |
| `143946` | DefaultRabbitMqPersistentConnection.ConnectionThrewAnException |
| `454129` | DefaultRabbitMqPersistentConnection.ConnectionIsOnShutdown     |

### 1.6 Infrastructure.EventBus.RabbitMQ.EventBusRabbitMQ

| Code     | Event Name                                            |
| -------- | ----------------------------------------------------- |
| `411326` | EventBusRabbitMQ.SocketException                      |
| `585231` | EventBusRabbitMQ.PublishedIntegrationEvent            |
| `702822` | EventBusRabbitMQ.ErrorWhileProcessingIntegrationEvent |
| `980768` | EventBusRabbitMQ.NoSubscriptionForEvent               |
| `288394` | EventBusRabbitMQ.ErrorWhileExecutingEventHandlerType  |

### 1.7 Infrastructure.Persistence.BlobStorage.AzureStorageAccount

| Code     | Event Name                                  |
| -------- | ------------------------------------------- |
| `516591` | AzureStorageAccount.ErrorListingAllTheBlobs |
| `645028` | AzureStorageAccount.ErrorDeletingTheBlob    |

### 1.8 Infrastructure.Persistence.BlobStorage.GoogleCloudStorage

| Code     | Event Name                                         |
| -------- | -------------------------------------------------- |
| `997942` | GoogleCloudStorage.ErrorDownloadingTheBlobWithName |
| `998879` | GoogleCloudStorage.ErrorListingAllTheBlobs         |
| `166344` | GoogleCloudStorage.ErrorUploadingTheBlobWithName   |
| `358892` | GoogleCloudStorage.ErrorBlobWithTheNameExists      |
| `304533` | GoogleCloudStorage.ErrorDeletingTheBlobWithName    |

## 2 Modules

### 2.1 Devices.Application.Clients.Commands.DeleteClient

| Code     | Event Name                               |
| -------- | ---------------------------------------- |
| `418943` | DeleteClient.Handler.DeletedClientWithId |

### 2.2 Devices.Application.Devices.Commands.ChangePassword

| Code     | Event Name                                            |
| -------- | ----------------------------------------------------- |
| `277894` | ChangePassword.Handler.ChangedPasswordForDeviceWithId |

### 2.3 Devices.Application.Devices.Commands.DeleteDevice

| Code     | Event Name                                     |
| -------- | ---------------------------------------------- |
| `776010` | DeleteDevice.Handler.MarkDeviceWithIdAsDeleted |

### 2.4 Devices.Application.Devices.Commands.RegisterDevice

| Code     | Event Name                           |
| -------- | ------------------------------------ |
| `219823` | RegisterDevice.Handler.CreatedDevice |

### 2.5 Devices.Application.Identities.Commands.CreateIdentity

| Code     | Event Name                             |
| -------- | -------------------------------------- |
| `436321` | CreateIdentity.Handler.CreatedIdentity |

### 2.6 Devices.Application.Identities.Commands.CreateTier

| Code     | Event Name                     |
| -------- | ------------------------------ |
| `383136` | CreateTier.Handler.CreatedTier |

### 2.7 Devices.Infrastructure.PushNotifications.AzureNotificationHub.AzureNotificationHubPushService

| Code     | Event Name                                         |
| -------- | -------------------------------------------------- |
| `585563` | AzureNotificationHubPushService.DeviceRegistered   |
| `767782` | AzureNotificationHubPushService.DeviceUnregistered |

### 2.8 Devices.Infrastructure.PushNotifications.DirectPush.DirectPushService

| Code     | Event Name                                           |
| -------- | ---------------------------------------------------- |
| `950845` | DirectPushService.DeletingDeviceRegistration         |
| `624412` | DirectPushService.ErrorWhileTryingToSendNotification |
| `628738` | DirectPushService.UnregisteredDevice                 |

### 2.9 Files.Jobs.SanityCheck.Infrastructure.Reporter.LogReporter

| Code     | Event Name                                 |
| -------- | ------------------------------------------ |
| `629592` | Files.SanityCheck.NoBlobForFileId          |
| `487180` | Files.SanityCheck.NoDatabaseEntryForBlobId |

### 2.10 Messages.Jobs.SanityCheck.Infrastructure.Reporter.LogReporter

| Code     | Event Name                                    |
| -------- | --------------------------------------------- |
| `859729` | Messages.SanityCheck.NoBlobForMessageId       |
| `809167` | Messages.SanityCheck.NoDatabaseEntryForBlobId |

### 2.11 Quotas.Application.IntegrationEvents.Incoming.IdentityCreated.IdentityCreatedIntegrationEventHandler

| Code     | Event Name                                             |
| -------- | ------------------------------------------------------ |
| `811934` | IdentityCreatedIntegrationEventHandler.IdentityCreated |

### 2.12 Quotas.Application.IntegrationEvents.Incoming.TierCreated.TierCreatedIntegrationEventHandler

| Code     | Event Name                                     |
| -------- | ---------------------------------------------- |
| `151788` | TierCreatedIntegrationEventHandler.TierCreated |

### 2.13 Quotas.Application.IntegrationEvents.Incoming.TierDeleted.TierDeletedIntegrationEventHandler

| Code     | Event Name                                     |
| -------- | ---------------------------------------------- |
| `582359` | TierDeletedIntegrationEventHandler.TierDeleted |

### 2.14 Quotas.Application.IntegrationEvents.Incoming.TierQuotaDefinitionDeleted.TierQuotaDefinitionDeletedIntegrationEventHandler

| Code     | Event Name                                                                   |
| -------- | ---------------------------------------------------------------------------- |
| `942996` | TierQuotaDefinitionDeletedIntegrationEventHandler.DeletedQuotasForIdentities |

### 2.15 Quotas.Application.Tiers.Commands.CreateQuotaForIdentity.Handler

| Code     | Event Name                                                |
| -------- | --------------------------------------------------------- |
| `868289` | CreateQuotaForIdentity.Handler.CreatedQuotasForIdentities |

### 2.16 Quotas.Application.Tiers.Commands.CreateQuotaForTier.Handler

| Code     | Event Name                                    |
| -------- | --------------------------------------------- |
| `346835` | CreateQuotaForTier.Handler.CreatedQuotaToTier |

### 2.17 Quotas.Application.Tiers.Commands.DeleteQuotaForIdentity.Handler

| Code     | Event Name                                  |
| -------- | ------------------------------------------- |
| `247156` | DeleteQuotaForIdentity.Handler.DeletedQuota |

### 2.18 Relationships.Infrastructure.Persistence.Database.Repository.RelationshipsRepository

| Code     | Event Name                                                  |
| -------- | ----------------------------------------------------------- |
| `664861` | RelationshipsRepository.ErrorTryingToSaveRelationshipChange |

### 2.19 Relationships.Jobs.SanityCheck.RelationshipChange.Infrastructure.Reporter.LogReporter

| Code     | Event Name                                              |
| -------- | ------------------------------------------------------- |
| `349287` | Relationships.SanityCheck.NoBlobForRelationshipChangeId |
| `429922` | Messages.SanityCheck.NoDatabaseEntryForBlobId           |

### 2.20 Relationships.Jobs.SanityCheck.RelationshipTemplate.Infrastructure.Reporter.LogReporter

| Code     | Event Name                                                |
| -------- | --------------------------------------------------------- |
| `231727` | Relationships.SanityCheck.NoBlobForRelationshipTemplateId |
| `232800` | Messages.SanityCheck.NoDatabaseEntryForBlobId             |

### 2.21 Synchronization.Jobs.SanityCheck.Infrastructure.Reporter.LogReporter

| Code     | Event Name                                                    |
| -------- | ------------------------------------------------------------- |
| `525684` | Synchronization.SanityCheck.NoBlobForDatawalletModificationId |
| `560290` | Synchronization.SanityCheck.NoDatabaseEntryForBlobId          |

### 2.22 Tokens.Jobs.SanityCheck.Infrastructure.Reporter.LogReporter

| Code     | Event Name                                  |
| -------- | ------------------------------------------- |
| `826083` | Tokens.SanityCheck.NoBlobForTokenId         |
| `271286` | Tokens.SanityCheck.NoDatabaseEntryForBlobId |
