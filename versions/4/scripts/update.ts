import * as fs from "fs";
import path from "path";
const Excel = require("exceljs");
const filePath = path.normalize(__dirname + "/../UseCases.xlsx");
const scenariosWorksheetName = "Scenarios";
const useCasesWorksheetName = "UseCases";

interface DynamicUseCase {
    [key: string]: string;
}

function getFileName(object: DynamicUseCase): string {
    if (object["ID"].startsWith("SC")) {
        return `_docs_${object.Component}/${object.Link}.md`;
    } else {
        return `_docs_use-cases/${object.Link}.md`;
    }
}
async function writeTextToFile(object: DynamicUseCase, text: string): Promise<void> {
    const fileName = getFileName(object);
    const regex = /# Start automatic generation([\s\S]*?)# End automatic generation/g;

    try {
        const data = await fs.promises.readFile(fileName, "utf8");
        console.info("\x1b[93m%s", `Update: ${object.ID} - ${object.Link}`);
        const newText = data.replace(regex, text);
        await fs.promises.writeFile(fileName, newText, "utf-8");
    } catch (missingFile) {
        console.info("\x1b[32m%s", `Create: ${object.ID} - ${object.Link}`);
        text = "---\n" + text + "\n---\n";
        await fs.promises.writeFile(fileName, text, "utf-8");
    }
}

function createScenarioText(scenarioObject: DynamicUseCase): string {
    var text = "# Start automatic generation\n";
    text += "permalink: " + scenarioObject.Component + "/" + scenarioObject.Link + "\n";
    if ((scenarioObject["Documentation Status"] == "DONE" || scenarioObject["Documentation Status"] == "OLD") && scenarioObject.redirect_from !== null) {
        text += "redirect_from:\n";
        for (const link of scenarioObject.redirect_from.split(" ")) {
            text += `  - ${link}\n`;
        }
    }
    if (scenarioObject["Documentation Status"] == "DONE" || scenarioObject["Documentation Status"] == "OLD") {
        text += "published: true\n";
    } else {
        text += "published: false\n";
    }
    text += 'title: "' + replaceEach(scenarioObject.Title, ["<", "", ">", "", ":", "", "’", "'"]) + '"\n';
    text += "type: scenario\n";
    text += "toc: true\n";
    text += "properties:\n";

    for (const key in scenarioObject) {
        if (
            key != "Product" &&
            key != "Role" &&
            key != "Title" &&
            key != "User Story" &&
            key != "New Component" &&
            key != "Require" &&
            key != "NBP_Scenario" &&
            key != "Link to Jira" &&
            key != "redirect_from" &&
            key != "required_by" &&
            key != "require"
        )
            if (Object.prototype.hasOwnProperty.call(scenarioObject, key)) {
                const value = scenarioObject[key];
                if (value == null) {
                    text += "  - " + `${key.toLowerCase()}:\n`;
                } else {
                    if (typeof value === "string") {
                        text += "  - " + `${key.toLowerCase()}: ${value.replaceAll("\n", " ")}\n`;
                    } else {
                        text += "  - " + `${key.toLowerCase()}: ${value}\n`;
                    }
                }
            }
    }
    text += "require:\n";
    if (scenarioObject.require != null) {
        const requirements = scenarioObject.require.valueOf().replaceAll(" ", "").split(",");
        for (const requirement of requirements) {
            text += "  - " + requirement + "\n";
        }
    }
    text += "required_by:\n";
    if (scenarioObject.required_by != null) {
        const requirements = scenarioObject.required_by.valueOf().replaceAll(" ", "").split(",");
        for (const requirement of requirements) {
            text += "  - " + requirement + "\n";
        }
    }
    text += "# End automatic generation";
    return text;
}

function createUseCaseText(useCaseObject: DynamicUseCase): string {
    var text = "# Start automatic generation\n";
    text += "permalink: " + useCaseObject.Link + "\n";
    if ((useCaseObject["Documentation Status"] == "DONE" || useCaseObject["Documentation Status"] == "OLD") && useCaseObject.redirect_from !== null) {
        text += "redirect_from:\n";
        for (const link of useCaseObject.redirect_from.split(" ")) {
            text += `  - ${link}\n`;
        }
    }
    if (useCaseObject["Documentation Status"] == "DONE" || useCaseObject["Documentation Status"] == "OLD") {
        text += "published: true\n";
    } else {
        text += "published: false\n";
    }
    text += 'title: "' + replaceEach(useCaseObject.Title, ["<", "", ">", "", ":", "", "’", "'"]) + '"\n';
    text += "type: use-case\n";
    text += "toc: true\n";
    text += 'sidebar:\n  - title: "Integrate enmeshed"\n    nav: "docs_integrate"\n';
    text += "properties:\n";

    for (const key in useCaseObject) {
        if (key != "Title" && key != "Require" && key != "redirect_from" && key != "required_by" && key != "require")
            if (Object.prototype.hasOwnProperty.call(useCaseObject, key)) {
                const value = useCaseObject[key];
                text += "  - " + `${key.toLowerCase()}:`;
                if (value == null || !value.trim()) {
                    text += "\n";
                } else {
                    text += ` ${value.replaceAll("\n", " ")}\n`;
                }
            }
    }

    text += "require:\n";
    if (useCaseObject.require != null) {
        const requirements = useCaseObject.require.valueOf().replaceAll(" ", "").split(",");
        for (const requirement of requirements) {
            text += "  - " + requirement + "\n";
        }
    }
    text += "required_by:\n";
    if (useCaseObject.required_by != null) {
        const requirements = useCaseObject.required_by.valueOf().replaceAll(" ", "").split(",");
        for (const requirement of requirements) {
            text += "  - " + requirement + "\n";
        }
    }
    if (useCaseObject["api_route_regex"] && useCaseObject["api_route_regex"].trim()) {
        text += "api_route_regex: ^" + useCaseObject["api_route_regex"] + "$\n";
    }
    text += "# End automatic generation";
    return text;
}

function getCellValue(cell: { value: any }): string {
    if (typeof cell.value === "object" && cell.value !== null) {
        return cell.value.result;
    } else {
        return cell.value;
    }
}

async function readExcelFile(filePath: string, worksheetName: string): Promise<DynamicUseCase[]> {
    var workbook = new Excel.Workbook();
    try {
        await workbook.xlsx.readFile(filePath);

        var worksheet = workbook.getWorksheet(worksheetName);

        if (!worksheet) {
            const worksheetNames = workbook.worksheets.map((worksheet: { name: any }) => worksheet.name);
            throw new Error(`Worksheet '${worksheetName}' not found. Possible entries are: ${worksheetNames}`);
        }

        // Get the headers from the first row of the Excel file
        const headers: string[] = [];
        worksheet.getRow(1).eachCell({ includeEmpty: false }, (cell: { value: string }) => {
            headers.push(cell.value as string);
        });
        var dynamicUseCases: DynamicUseCase[] = [];

        // Iterate over each row (skipping the first row as it contains headers)
        for (let rowNumber = 2; rowNumber <= worksheet.rowCount; rowNumber++) {
            const currentRow = worksheet.getRow(rowNumber);

            const dynamicUseCase: DynamicUseCase = {};
            headers.forEach((header, index) => {
                dynamicUseCase[header] = getCellValue(currentRow.getCell(index + 1));
            });
            dynamicUseCases.push(dynamicUseCase);
        }
        return dynamicUseCases;
    } catch (error: any) {
        console.error("Async operation failed:", error.message);
        throw error;
    }
}

function replaceEach(str: string, replacements: string[]): string {
    let result = str;
    for (let i = 0; i < replacements.length; i += 2) {
        result = result.replace(new RegExp(replacements[i], "g"), replacements[i + 1]);
    }
    return result;
}

function findMissingFilesInArray(folderPath: string, objectArray: DynamicUseCase[]): string[] {
    const allFiles = fs.readdirSync(folderPath);
    const linksInArray = new Set(objectArray.map((obj) => obj.Link + ".md"));
    const missingLinks = allFiles.filter((file) => {
        const filePath = path.join(folderPath, file);
        const isDirectory = fs.statSync(filePath).isDirectory();
        return !isDirectory && !linksInArray.has(file);
    });
    return missingLinks;
}

async function processObjects(
    filePath: string,
    worksheetName: string,
    createTextFunction: (object: DynamicUseCase) => string,
    paths: string[],
    requiredByTable: { [key: string]: string },
    requireTable: { [key: string]: string }
) {
    try {
        const objects = await readExcelFile(filePath, worksheetName);
        console.info("\x1b[31m%s\x1b[0m", "untracked Files:");
        paths.forEach((path) => {
            console.info("\x1b[31m%s\x1b[0m", findMissingFilesInArray(path, objects));
        });

        if (objects && objects.length > 0) {
            for (const object of objects) {
                if (object.ID != null) {
                    object.required_by = requiredByTable[object.ID];
                    object.require = requireTable[object.ID];

                    const text = createTextFunction(object);
                    await writeTextToFile(object, text);
                }
            }
        } else {
            console.log("The array is empty or undefined.");
        }
    } catch (error) {
        console.error(`Error updating ${worksheetName}:`, error);
    }
}

function updateTable(table: { [key: string]: string }, key: string, value: string) {
    return table[key] ? `${table[key]},${value}` : value;
}

function findLinkByElement(scenarios: DynamicUseCase[], useCases: DynamicUseCase[], element: string): string {
    if (element.startsWith("SC")) {
        for (const object of scenarios) {
            if (object.ID === element) {
                return object.Component + "/" + object.Link;
            }
        }
    } else {
        for (const object of useCases) {
            if (object.ID === element) {
                return object.Link;
            }
        }
    }
    throw new Error(`Element '${element}' not found in scenarios or use cases.`);
}

async function main() {
    const scenarios = await readExcelFile(filePath, scenariosWorksheetName);
    const useCases = await readExcelFile(filePath, useCasesWorksheetName);
    var requiredByTable: { [key: string]: string } = {};
    var requireTable: { [key: string]: string } = {};

    for (const object of scenarios) {
        if (object.ID != null && object.Require != null) {
            const require = object.Require.valueOf().replaceAll(" ", "").split(",");
            for (const element of require) {
                requireTable[object.ID] = updateTable(requireTable, object.ID, findLinkByElement(scenarios, useCases, element));
                requiredByTable[element] = updateTable(requiredByTable, element, `${object.Component}/${object.Link}`);
            }
        }
    }

    await processObjects(
        filePath,
        scenariosWorksheetName,
        createScenarioText,
        [__dirname + "/../_docs_operate/", __dirname + "/../_docs_use/", __dirname + "/../_docs_integrate/"],
        requiredByTable,
        requireTable
    );
    await processObjects(filePath, useCasesWorksheetName, createUseCaseText, [__dirname + "/../_docs_use-cases/"], requiredByTable, requireTable);
}

main();
