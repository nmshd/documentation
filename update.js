"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const Excel = require("exceljs");
const filePath = path_1.default.normalize(__dirname + "/UseCases.xlsx");
// Asynchrone Funktion zum Lesen der Datei
function dateiLesenUndAusgeben(dateipfad) {
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
        worksheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
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
