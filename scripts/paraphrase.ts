import { exec } from "child_process";
import * as fs from "fs";
import * as openai from "./openai";

const path = process.argv[2];

function validatePath(filePath: string): void {
    if (!filePath) {
        console.error("Please provide a file path as a command line argument.");
        process.exit(1);
    }
}

function formatDocument(filePath: string): void {
    exec(`prettier --write ${filePath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing prettier: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Prettier stderr: ${stderr}`);
            return;
        }
        console.log("File formatted successfully.");
    });
}

function splitText(fullText: string): string[] {
    if (fullText.match(/^# .+$/gm)) {
        console.error("H1 heading found. Aborting process.");
        process.exit(1);
    }
    return fullText.split(/\n(?=## [^#])/);
}

async function processTextParts(textParts: string[]): Promise<string[]> {
    return Promise.all(
        textParts.map(async (textPart, index) => {
            if (checkForSummary(textPart)) {
                const result = await openai.paraphrase(textPart);
                return result.message.content as string;
            } else {
                const result = await openai.summarize(textParts.join("\n"));
                return result.message.content as string;
            }
        })
    );
}

function readFile(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                reject(`Could not read file at ${filePath}`);
            } else {
                resolve(data);
            }
        });
    });
}

function writeFile(filePath: string, content: string): Promise<void> {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, (err) => {
            if (err) {
                reject(`Could not write file at ${filePath}`);
            } else {
                resolve();
            }
        });
    });
}

async function main(filePath: string): Promise<void> {
    validatePath(filePath);
    try {
        const fullText = await readFile(filePath);

        const parts = getContent(fullText);

        var data = splitText(parts[1]);
        if (parts.length > 1) {
            const textParts = await processTextParts(data);
            await writeFile(filePath, `${parts[0]}# End automatic generation\n---\n${textParts.join("\n")}`);
            console.log("File updated successfully.");
            formatDocument(filePath);
        }
    } catch (error) {
        console.error(error);
    }
}

function checkForSummary(textPart: string): boolean {
    return textPart.startsWith("##");
}

function getContent(fullText: string): string[] {
    const parts = fullText.split("# End automatic generation\n---\n");
    if (parts.length < 2) {
        throw new Error("No content found after the marker.");
    }
    return parts;
}

main(path);
