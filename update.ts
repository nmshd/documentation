import * as fs from "fs";
import path from "path";
const Excel = require("exceljs");
const filePath = path.normalize(__dirname + "/UseCases.xlsx");
const scenarioWorksheetName = 1;

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
        var worksheet = workbook.getWorksheet(scenarioWorksheetName);

        // Check if the worksheet exists
        if (!worksheet) {
            console.error("Worksheet  " + scenarioWorksheetName + "  not found.");
            return;
        }

        // Get the headers from the first row of the Excel file
        const headers: string[] = [];
        worksheet.getRow(1).eachCell({ includeEmpty: false }, (cell: { value: string }) => {
            headers.push(cell.value as string);
        });

        // Define the interface dynamically based on the headers
        interface DynamicUseCase {
            [key: string]: any;
        }
        // Initialize an array to store DynamicUseCase objects
        const dynamicUseCases: DynamicUseCase[] = [];

        // Iterate over each row (skipping the first row as it contains headers)
        for (let rowNumber = 2; rowNumber <= worksheet.rowCount; rowNumber++) {
            const currentRow = worksheet.getRow(rowNumber);

            // Create a DynamicUseCase object for the current row
            const dynamicUseCase: DynamicUseCase = {};
            headers.forEach((header, index) => {
                // if the result is a formula, only the result is used
                if (typeof currentRow.getCell(index + 1).value === "object" && currentRow.getCell(index + 1).value !== null) {
                    dynamicUseCase[header] = currentRow.getCell(index + 1).value.result;
                } else {
                    dynamicUseCase[header] = currentRow.getCell(index + 1).value;
                }
            });

            // Add the DynamicUseCase object to the array
            dynamicUseCases.push(dynamicUseCase);
        }

        // Now 'dynamicUseCases' is an array containing objects for each row in the Excel table
        console.log("Dynamic Use Cases List:", dynamicUseCases);
    });
}

// Funktion aufrufen
// dateiLesenUndAusgeben(normalisedPath);
readExcelFile();
