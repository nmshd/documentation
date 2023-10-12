## 1 BuildingBlocks
### 1.1 API.Mvc.ExceptionFilters.CustomExceptionFilter:
|Code|Event Name|
|--|--|
|`560507`|ExceptionFilter.InfrastructureException|
|`437832`|ExceptionFilter.ApplicationException|
|`505278`|ExceptionFilter.DomainException|
|`938218`|ExceptionFilter.RequestBodyTooLarge|
|`259125`|ExceptionFilter.ErrorWhileProcessingRequestToUri|

### 1.2 Application.MediatR.LoggingBehavior
|Code|Event Name|
|--|--|
|`437002`|LoggingBehavior.HandleRequestInformation (Warning)|
|`214089`|LoggingBehavior.HandleRequestInformation (Information)|

### 1.3 Infrastructure.EventBus.AzureServiceBus.EventBusAzureServiceBus
|Code|Event Name|
|--|--|
|`302940`|EventBusAzureServiceBus.SendingIntegrationEvent|
|`630568`|EventBusAzureServiceBus.EventWasNotProcessed|
|`949322`|EventBusAzureServiceBus.ErrorHandlingMessage|
|`341537`|EventBusAzureServiceBus.NoSubscriptionForEvent|
|`726744`|EventBusAzureServiceBus.ErrorWhileExecutingEventTypeHandler|
|`146670`|EventBusAzureServiceBus.ErrorWhileProcessingIntegrationEvent|

### 1.4 Infrastructure.EventBus.GoogleCloudPubSub.EventBusGoogleCloudPubSub
|Code|Event Name|
|--|--|
|`830408`|EventBusGoogleCloudPubSub.SendingIntegrationEvent|
|`712382`|EventBusGoogleCloudPubSub.ErrorHandlingMessage|
|`590747`|EventBusGoogleCloudPubSub.NoSubscriptionForEvent|
|`304842`|EventBusGoogleCloudPubSub.ErrorWhileExecutingEventHandlerType|

### 1.5 Infrastructure.EventBus.RabbitMQ.DefaultRabbitMqPersistentConnection
|Code|Event Name|
|--|--|
|`715507`|DefaultRabbitMqPersistentConnection.BrokerUnreachableException|
|`119836`|DefaultRabbitMqPersistentConnection.ConnectionIsShutdown|
|`143946`|DefaultRabbitMqPersistentConnection.ConnectionThrewAnException|
|`454129`|DefaultRabbitMqPersistentConnection.ConnectionIsOnShutdown|

### 1.6 Infrastructure.EventBus.RabbitMQ.EventBusRabbitMQ
|Code|Event Name|
|--|--|
|`411326`|EventBusRabbitMQ.SocketException|
|`585231`|EventBusRabbitMQ.PublishedIntegrationEvent|
|`702822`|EventBusRabbitMQ.ErrorWhileProcessingIntegrationEvent|
|`980768`|EventBusRabbitMQ.NoSubscriptionForEvent|
|`288394`|EventBusRabbitMQ.ErrorWhileExecutingEventHandlerType|

### 1.7 Infrastructure.Persistence.BlobStorage.AzureStorageAccount
|Code|Event Name|
|--|--|
|`516591`|AzureStorageAccount.ErrorListingAllTheBlobs|
|`645028`|AzureStorageAccount.ErrorDeletingTheBlob|