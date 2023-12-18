import * as fs from "fs";
import path from "path";
const Excel = require("exceljs");
const filePath = path.normalize(__dirname + "/UseCases.xlsx");

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

function readExcelFile() {
    var workbook = new Excel.Workbook();
    workbook.xlsx.readFile(filePath).then(function () {
        var worksheet = workbook.getWorksheet("Szenarios");
        worksheet.eachRow({ includeEmpty: true }, function (row: any, rowNumber: any) {
            if (rowNumber == 1) {
                // console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
                console.log(row.values);
            }
        });
    });
}

// Funktion aufrufen
// dateiLesenUndAusgeben(normalisedPath);
readExcelFile();
