## Zusammenfassung

TODO

## Einführung

Natürliche Sprachverarbeitung (NLP) und künstliche Intelligenz (AI) können einen bedeutenden Einfluss auf die Vereinfachung technischer Dokumentationen haben. Durch den Einsatz von AI können komplexe technische Konzepte in verständlichere Formulierungen umgewandelt werden, wodurch der Lesefluss verbessert wird. Die AI kann auch dabei helfen, präzisere und treffendere Wörter zu finden, um den Inhalt noch zugänglicher zu machen. Darüber hinaus kann die AI eine wertvolle Unterstützung für Nicht-Muttersprachler bieten, indem sie dabei hilft, technische Texte in ihre Muttersprache zu übersetzen und dabei eine klarere Ausdrucksweise zu gewährleisten. Insgesamt ermöglicht der Einsatz von AI in der Paraphrasierung technischer Dokumentationen eine erhöhte Verständlichkeit und Zugänglichkeit für ein breiteres Publikum.

Die Doku von enmeshed besteht aus Markdown Dateien, mit einem Metadata Header und dem Body. Dieser wird mit Jekyll in Form einer Webseite gerendert. Die Paraphrasierung ist nur für den Body dieser Markdown Datei notwendig.
Der Inhalt der Bodys kann aus Tabellen und Links (mit absoluten Bezug und relativen Bezug, welcher von Jekyll aufgelöst wird) bestehen die weiterhin bestehen bleiben müssen und von der AI auch als solche erkannt werden.

Ziele:

- einfache Möglichkeit des Paraphrasieren
- direkt aus dir IDE aufrufen
- hohe Textqualität
- Optional ist auch eine direkte Übersetzung möglich.

## Evaluation

Als Beispieltext wir 'create-attribute-for-peer.md' ausgewählt, da dieser Text über verschieden lange Paragraphen, Tabellen, Code und Eigennamen verfügt.

### hohe Textqualität

um die Textqualität zu evaluieren wird eine Referenztext verwendet. Dieser wird erstellt indem eine vorhandene Dokumentation mit [wordtune](https://app.wordtune.com) paraphiert wird. Das verwenden von Markdown wird nicht unterstützt, deshalb wird der HTML Text verwendet.

### Übersetzung

In vielen Situationen möchte eine Identität ihre eigene Identitätsattribute oder Beziehungsattribute mit einer anderen Identität teilen, zum Beispiel:

    Eine Universität möchte einem Studenten die Straßenadresse ihrer Studentenverwaltung geben, damit er Dokumente per Post senden kann.
    Eine Organisation möchte ihre E-Mail-Adresse mit ihren Mitgliedern teilen, um E-Mails von ihnen empfangen zu können.
    Ein Unternehmen möchte die Kundennummer eines seiner Kunden mit einem anderen Unternehmen teilen.

In diesem Leitfaden erläutern wir, wie ein Connector, nachfolgend als Sender bezeichnet, sein eigenes Attribut mit einem anderen Connector, dem sogenannten Empfänger, teilen kann. Da das Verständnis dieses Freigabeprozesses Kenntnisse über Anfragen und deren allgemeine Verwendung erfordert, sollten Sie sich vor dem Weiterlesen dieses Leitfadens unsere Einführung in Anfragen und Antworten ansehen.

Bitte beachten Sie, dass das allgemeine Verfahren dasselbe ist, wenn der Connector ein eigenes Attribut mit einem App-Benutzer anstelle eines anderen Connectors teilen möchte. Aus Gründen der Klarheit konzentriert sich dieser Leitfaden hauptsächlich auf den Freigabeprozess mit zwei Connectors.

Anfrage zum Teilen von Attributen

Der Sender möchte ein eigenes Attribut mit dem Empfänger teilen. Dazu muss der Sender zunächst eine geeignete Anfrage erstellen, die er dann an den Empfänger senden kann. In den folgenden Unterabschnitten beschreiben wir das allgemeine Erscheinungsbild einer Anfrage zum Teilen von Attributen.

Rolle des ShareAttributeRequestItem

Um ein einzelnes Attribut zu teilen, muss der Sender ein einzelnes Anforderungselement vom Typ ShareAttributeRequestItem in das Elementeigenschaft der Anfrage einfügen. Der Sender kann nur ein Attribut teilen, das bereits als LocalAttribute existiert und im Fall von Identitätsattributen ihm gehört. Letzteres bedeutet, dass die Adresse des Senders in der content.owner-Eigenschaft des entsprechenden LocalAttribute enthalten ist. Die ID des LocalAttribute muss in die sourceAttributeId-Eigenschaft und der Inhalt des LocalAttribute in die attribute-Eigenschaft des ShareAttributeRequestItem eingefügt werden.

Um eine umfassende Liste aller LocalAttributes abzurufen, die dem Sender gehören, siehe die Dokumentation zum Abfragen von Attributen und verwenden Sie "content.owner=<Adresse des Senders>" als Abfrageparameter. Bitte beachten Sie, dass die <...> -Notation wie üblich als Platzhalter für die tatsächlichen Daten verwendet wird. Ist die ID eines LocalAttribute bekannt, können das zugrunde liegende Identitätsattribut oder Beziehungsattribut innerhalb seiner content-Eigenschaft durch Konsultieren der Beschreibung des Szenarios "Attribut abrufen" und Angabe der ID des LocalAttribute angezeigt werden.

Kombinationen und Anwendungsszenarien von ShareAttributeRequestItem

Die folgende Tabelle bietet einen Überblick über die möglichen Arten von Attributen, die der Sender mithilfe des ShareAttributeRequestItem mit dem Empfänger teilen kann. Es muss berücksichtigt werden, ob das Attribut ein Identitätsattribut oder ein Beziehungsattribut ist und welcher Identität es gehört. Wenn der Sender ein Beziehungsattribut mit dem Empfänger teilen möchte, muss unterschieden werden, zwischen welchen Identitäten die betreffende Beziehung besteht.

[Die Tabelle wurde aus Platzgründen weggelassen.]

Beispiel für das Teilen eines eigenen Identitätsattributs

Angenommen, der Integrator des Senders hat ein eigenes Identitätsattribut vom Typ Geburtsdatum für den Sender erstellt, indem er den Anweisungen in unserer Szenariodokumentation "Attribut für sich selbst erstellen" gefolgt ist. Dieses Identitätsattribut ist lokal im content-Eigenschaft des entsprechenden LocalAttribute des Senders gespeichert.

[Das Beispiel für die Struktur wurde aus Platzgründen weggelassen.]

In diesem Szenario möchte der Sender das Identitätsattribut mit dem Empfänger teilen. Dazu muss er die ID des entsprechenden LocalAttribute in die sourceAttributeId-Eigenschaft und das Identitätsattribut selbst in die attribute-Eigenschaft des ShareAttributeRequestItem einfügen, das sich im Elementeigenschaft der Anfrage zum Teilen von Attributen befindet. In diesem Beispiel ist der Wert der mustBeAccepted-Eigenschaft des ShareAttributeRequestItem auf true gesetzt.

[Das Beispiel für die Anfrage wurde aus Platzgründen weggelassen.]

Der er mange situationer, hvor en identitet ønsker at dele sin egen identitetsattribut eller en relationsattribut med en anden identitet, for eksempel:

    Et universitet ønsker at give en studerende adressen på dets studieadministration, så de kan sende dokumenter med posten.
    En organisation ønsker at dele sin e-mail-adresse med sine medlemmer for at kunne modtage e-mails fra dem.
    Et firma ønsker at dele et kundenummer med et andet firma.

I denne vejledning forklarer vi, hvordan en forbindelse, herefter benævnt Sender, kan dele sin egen attribut med en anden forbindelse, den såkaldte Modtager. Da forståelsen af denne delingsproces kræver kendskab til anmodninger og hvordan man bruger dem generelt, bør du se vores introduktion til anmodninger og svar, før du fortsætter med at læse denne vejledning.

Bemærk venligst, at den generelle procedure er den samme, hvis forbindelsen ønsker at dele sin egen attribut med en app-bruger i stedet for en anden forbindelse. Af hensyn til klarhed fokuserer denne vejledning primært på delingsprocessen med to forbindelser.

Anmodning om deling af attributter

Afsenderen ønsker at dele en egen attribut med Modtageren. For at gøre dette skal Afsenderen først oprette en passende anmodning, som den derefter kan sende til Modtageren. I de følgende underafsnit beskriver vi det generelle udseende af en anmodning om deling af attributter.

Rolle af ShareAttributeRequestItem

For at dele en enkelt attribut skal Afsenderen indsætte et enkelt anmodningselement af typen ShareAttributeRequestItem i elementerne af anmodningen. Afsenderen kan kun dele en attribut, der allerede eksisterer som LocalAttribute, og i tilfælde af identitetsattributter ejes af den. Dette betyder, at Afsenderens adresse er inkluderet i content.owner-egenskaben for det tilsvarende LocalAttribute. ID'en for LocalAttribute skal indsættes i sourceAttributeId-egenskaben, og indholdet af LocalAttribute skal placeres i attribute-egenskaben for ShareAttributeRequestItem.

For at få en omfattende liste over alle LocalAttributes, der ejes af Afsenderen, henvises der til dokumentationen for forespørgsler om attributter og brug "content.owner=<Afsenderens adresse>" som forespørgselsparameter. Det er vigtigt at bemærke, at <...> notationen fungerer som en pladsholder for faktiske data, som sædvanligt. Hvis ID'en for et LocalAttribute er kendt, kan det underliggende identitetsattribut eller relationsattribut inden for dets content-egenskab fås ved at konsultere beskrivelsen af scenariet "Hent attribut" og angive ID'en for LocalAttribute.

Kombinationer og anvendelsesscenarier for ShareAttributeRequestItem

Tabellen nedenfor giver et overblik over de mulige typer attributter, som Afsenderen kan dele med Modtageren ved hjælp af ShareAttributeRequestItem. Det skal tages i betragtning, om attributten er en identitetsattribut eller en relationsattribut, og hvilken identitet der ejer den. I tilfælde, hvor Afsenderen har til hensigt at dele en relationsattribut med Modtageren, skal der foretages forskelle med hensyn til de involverede identiteter i den pågældende relation.

[Tabellen er udeladt af pladshensyn.]

Eksempel på deling af en egen identitetsattribut

Lad os antage, at Integratoren for Afsenderen har oprettet en egen identitetsattribut af typen Fødselsdato for Afsenderen ved at følge instruktionerne i vores dokumentation for scenarioet "Opret attribut til dig selv". Denne identitetsattribut er lokalt gemt inden for indholdet af et tilsvarende LocalAttribute for Afsenderen.

[Eksempelet for strukturen er udeladt af pladshensyn.]

I dette scenarie ønsker Afsenderen at dele identitetsattributten med Modtageren. For at gøre dette skal den indsætte ID'en for det tilsvarende LocalAttribute i sourceAttributeId-egenskaben og identitetsattributten selv i attribute-egenskaben for ShareAttributeRequestItem, der findes inden for elementerne af anmodningen om deling af attributter. I dette eksempel er værdien af mustBeAccepted-egenskaben for ShareAttributeRequestItem sat til true.

[Eksemplet for anmodningen er udeladt af pladshensyn.]

## Ergebnisse

TODO
