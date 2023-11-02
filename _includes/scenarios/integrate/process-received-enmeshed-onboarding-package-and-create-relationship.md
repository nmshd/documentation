Ziel dieses Guides...

Inspired by:

- Old Integration Example
- Requests over Templates

## Ausgangssituation: Received enmeshed onboarding package

- Zwei Connectoren möchten eine Beziehung eingehen.
- Prepare enmeshed onboarding package.
- Der eine Connector hat ein RelationshipTemplate erstellt. -> Templator Connector
- Der andere Connector hat dieses mit POST /api/v2/RelationshipTemplates/Peer auf sich geladen. Im Erfolgsfall die folgende Antwort erhalten: ...
- Intern wird außerdem Request erstellt, die an den Connector gesendet wird und auf die der Connector jetzt reagieren kann -> Je nachdem wird eine Relationship Request gesendet oder nicht.

### Begutachtung der Request

- Abfragen der zugehörigen Request GET /api/v2/Requests/Incoming (source.reference=<id-of-the-template> and status=ManualDecisionRequired)

- Alternative: Über Events

- Welche ID muss gespeichert werden?

## Handlungsoptionen für Requestor Connector -> Process/Answer the Request

Connector kann sich jetzt entscheiden:

- 1-Ablehnung der Request -> Keine Relationship Request wird gesendet
- 2-Annahme der Request -> Relationship Request wird gesendet

- Diagramm?

- Sync?

### Ablehnung der Request: No sending of Relationship Request

PUT /api/v2/Requests/Incoming/{id}/Reject

GET /api/v2/Requests/Incoming/{id}

### Annahme der Request: Sending of Relationship Request

PUT /api/v2/Requests/Incoming/{id}/Accept

GET /api/v2/Requests/Incoming/{id}

GET /api/v2/Relationships

## Handlungsoptionen für Templator Connector -> Process/Answer the Relationship Request

Im Falle, dass die Request angenommen wurde, wird an den Connector eine Relationship Request gesendet. Je nachdem, ob diese angenommen oder abgelehnt wird, kommt jetzt eine Beziehung zustande oder nicht.

- Diagramm?

### Ablehnung der Relationship Request: Kein Zustandekommen der Relationship

### Annahme der Relationship Request: Creation of the Relationship

- Sync -> POST /api/v2/Account/Sync Templator Connector
- PUT /api/v2/Relationships/{relationshipId}/Changes/{changeId}/Accept
- Sync -> POST /api/v2/Account/Sync Requestor Connector

## What's next?

- Integration Example
