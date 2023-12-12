import * as fs from "fs";

const dateipfad = "_docs_operate/check-health-of-connector.md";

// Asynchrone Funktion zum Lesen der Datei
function dateiLesenUndAusgeben(dateipfad: string): void {
    fs.readFile(dateipfad, "utf8", (err, daten) => {
        if (err) {
            console.error("Fehler beim Lesen der Datei:", err);
            return;
        }

        // Dateiinhalt in der Konsole ausgeben
        console.log("Dateiinhalt:", daten);
    });
}

// Funktion aufrufen
dateiLesenUndAusgeben(dateipfad);
