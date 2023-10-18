## 1 BuildingBlocks

### 1.1 API.Mvc.ExceptionFilters.CustomExceptionFilter

| Code     | Event Name                                       |
| -------- | ------------------------------------------------ |
| `799306` | ExceptionFilter.InvalidUserInput                 |
| `938218` | ExceptionFilter.RequestBodyTooLarge              |
| `259125` | ExceptionFilter.ErrorWhileProcessingRequestToUri |

### 1.2 Application.MediatR.LoggingBehavior

| Code     | Event Name                                |
| -------- | ----------------------------------------- |
| `724322` | LoggingBehavior.HandledRequestInformation |

### 1.3 Infrastructure.EventBus.AzureServiceBus.EventBusAzureServiceBus

| Code     | Event Name                                                          |
| -------- | ------------------------------------------------------------------- |
| `302940` | EventBusAzureServiceBus.SendingIntegrationEvent                     |
| `630568` | EventBusAzureServiceBus.EventWasNotProcessed                        |
| `949322` | EventBusAzureServiceBus.ErrorHandlingMessage                        |
| `341537` | EventBusAzureServiceBus.NoSubscriptionForEvent                      |
| `726744` | EventBusAzureServiceBus.ErrorWhileExecutingEventHandlerCausingRetry |
| `146670` | EventBusAzureServiceBus.ErrorWhileProcessingIntegrationEvent        |

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

| Code     | Event Name                               |
| -------- | ---------------------------------------- |
| `516591` | AzureStorageAccount.ErrorListingAllBlobs |
| `645028` | AzureStorageAccount.ErrorDeletingBlob    |

### 1.8 Infrastructure.Persistence.BlobStorage.GoogleCloudStorage

| Code     | Event Name                                      |
| -------- | ----------------------------------------------- |
| `997942` | GoogleCloudStorage.ErrorDownloadingBlobWithName |
| `998879` | GoogleCloudStorage.ErrorListingAllBlobs         |
| `166344` | GoogleCloudStorage.ErrorUploadingBlobWithName   |
| `358892` | GoogleCloudStorage.ErrorBlobWithNameExists      |
| `304533` | GoogleCloudStorage.ErrorDeletingBlobWithName    |

## 2 Modules

### 2.1 Challenges.Application.Challenges.Commands.DeleteExpiredChallenges

| Code     | Event Name                                                           |
| -------- | -------------------------------------------------------------------- |
| `599235` | Challenges.Application.DeleteExpiredChallenges.CancellationRequested |
| `916630` | Challenges.Application.DeleteExpiredChallenges.DeletionSuccessful    |

### 2.2 Devices.Application.Clients.Commands.DeleteClient

| Code     | Event Name                  |
| -------- | --------------------------- |
| `418943` | Devices.DeletedClientWithId |

### 2.3 Devices.Application.Devices.Commands.ChangePassword

| Code     | Event Name                             |
| -------- | -------------------------------------- |
| `277894` | Devices.ChangedPasswordForDeviceWithId |

### 2.4 Devices.Application.Devices.Commands.DeleteDevice

| Code     | Event Name                        |
| -------- | --------------------------------- |
| `776010` | Devices.MarkDeviceWithIdAsDeleted |

### 2.5 Devices.Application.Devices.Commands.RegisterDevice

| Code     | Event Name            |
| -------- | --------------------- |
| `219823` | Devices.CreatedDevice |

### 2.6 Devices.Application.Identities.Commands.CreateIdentity

| Code     | Event Name              |
| -------- | ----------------------- |
| `436321` | Devices.CreatedIdentity |

### 2.7 Devices.Application.Identities.Commands.CreateTier

| Code     | Event Name          |
| -------- | ------------------- |
| `383136` | Devices.CreatedTier |

### 2.8 Devices.Infrastructure.PushNotifications.AzureNotificationHub.AzureNotificationHubPushService

| Code     | Event Name                                                 |
| -------- | ---------------------------------------------------------- |
| `585563` | Devices.AzureNotificationHubPushService.DeviceRegistered   |
| `767782` | Devices.AzureNotificationHubPushService.DeviceUnregistered |

### 2.9 Devices.Infrastructure.PushNotifications.DirectPush.DirectPushService

| Code     | Event Name                                           |
| -------- | ---------------------------------------------------- |
| `950845` | DirectPushService.DeletingDeviceRegistration         |
| `624412` | DirectPushService.ErrorWhileTryingToSendNotification |
| `628738` | DirectPushService.UnregisteredDevice                 |

### 2.10 Files.Jobs.SanityCheck.Infrastructure.Reporter.LogReporter

| Code     | Event Name                                 |
| -------- | ------------------------------------------ |
| `629592` | Files.LogReporter.NoBlobForFileId          |
| `487180` | Files.LogReporter.NoDatabaseEntryForBlobId |

### 2.11 Messages.Jobs.SanityCheck.Infrastructure.Reporter.LogReporter

| Code     | Event Name                                    |
| -------- | --------------------------------------------- |
| `859729` | Messages.LogReporter.NoBlobForMessageId       |
| `809167` | Messages.LogReporter.NoDatabaseEntryForBlobId |

### 2.12 Quotas.Application.IntegrationEvents.Incoming.IdentityCreated.IdentityCreatedIntegrationEventHandler

| Code     | Event Name                                                    |
| -------- | ------------------------------------------------------------- |
| `811934` | Quotas.IdentityCreatedIntegrationEventHandler.IdentityCreated |

### 2.13 Quotas.Application.IntegrationEvents.Incoming.TierCreated.TierCreatedIntegrationEventHandler

| Code     | Event Name                                            |
| -------- | ----------------------------------------------------- |
| `151788` | Quotas.TierCreatedIntegrationEventHandler.TierCreated |

### 2.14 Quotas.Application.IntegrationEvents.Incoming.TierDeleted.TierDeletedIntegrationEventHandler

| Code     | Event Name                                            |
| -------- | ----------------------------------------------------- |
| `582359` | Quotas.TierDeletedIntegrationEventHandler.TierDeleted |

### 2.15 Quotas.Application.Tiers.Commands.CreateQuotaForIdentity.Handler

| Code     | Event Name                        |
| -------- | --------------------------------- |
| `868289` | Quotas.CreatedQuotasForIdentities |

### 2.16 Quotas.Application.Tiers.Commands.CreateQuotaForTier.Handler

| Code     | Event Name                |
| -------- | ------------------------- |
| `346835` | Quotas.CreatedQuotaToTier |

### 2.17 Quotas.Application.Tiers.Commands.DeleteQuotaForIdentity.Handler

| Code     | Event Name          |
| -------- | ------------------- |
| `247156` | Quotas.DeletedQuota |

### 2.18 Quotas.Application.Tiers.Commands.DeleteTierQuotaDefinition.Handler

| Code     | Event Name              |
| -------- | ----------------------- |
| `519284` | Quotas.DeletedTierQuota |

### 2.19 Relationships.Infrastructure.Persistence.Database.Repository.RelationshipsRepository

| Code     | Event Name                                                                |
| -------- | ------------------------------------------------------------------------- |
| `664861` | Relationships.RelationshipsRepository.ErrorTryingToSaveRelationshipChange |

### 2.20 Relationships.Jobs.SanityCheck.RelationshipChange.Infrastructure.Reporter.LogReporter

| Code     | Event Name                                              |
| -------- | ------------------------------------------------------- |
| `349287` | Relationships.LogReporter.NoBlobForRelationshipChangeId |
| `429922` | Relationships.LogReporter.NoDatabaseEntryForBlobId      |

### 2.21 Relationships.Jobs.SanityCheck.RelationshipTemplate.Infrastructure.Reporter.LogReporter

| Code     | Event Name                                                |
| -------- | --------------------------------------------------------- |
| `231727` | Relationships.LogReporter.NoBlobForRelationshipTemplateId |
| `232800` | Relationships.LogReporter.NoDatabaseEntryForBlobId        |

### 2.22 Synchronization.Jobs.SanityCheck.Infrastructure.Reporter.LogReporter

| Code     | Event Name                                                    |
| -------- | ------------------------------------------------------------- |
| `525684` | Synchronization.LogReporter.NoBlobForDatawalletModificationId |
| `560290` | Synchronization.LogReporter.NoDatabaseEntryForBlobId          |

### 2.23 Tokens.Jobs.SanityCheck.Infrastructure.Reporter.LogReporter

| Code     | Event Name                                  |
| -------- | ------------------------------------------- |
| `826083` | Tokens.LogReporter.NoBlobForTokenId         |
| `271286` | Tokens.LogReporter.NoDatabaseEntryForBlobId |
