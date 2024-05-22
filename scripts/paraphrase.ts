import * as fs from "fs";
import * as openai from "./openai";

const path = process.argv[2];

if (!path || typeof path !== "string") {
    console.error("Please provide a file path as a command line argument.");
    process.exit(1);
}

fs.readFile(path, "utf8", async (err, data) => {
    if (err) {
        console.error(`Could not read file at ${path}`);
    } else {
        const parts = await data.split("# End automatic generation\n---\n");
        if (parts.length > 1) {
            var textParts = splitText(parts[1]);

            await Promise.all(
                textParts.map(async (testPart, index) => {
                    const result = await openai.main(testPart);
                    textParts[index] = result.message.content as string;
                })
            );
            fs.writeFile(path, `${parts[0]}# End automatic generation2\n---\n${textParts.join("")}`, (err: NodeJS.ErrnoException | null) => {
                if (err) {
                    console.error(`Could not write file at ${path}`);
                } else {
                    console.log("File updated successfully.");
                }
            });
        }
    }
});

function splitText(fullText: string): string[] {
    // Check if there is an H1 heading in the text
    if (fullText.match(/^# .+$/gm)) {
        console.error("H1 heading found. Aborting process.");
        process.exit(1);
    }
    // Split the text at each H2 heading, but include the heading in the resulting parts
    const parts = fullText.split(/(?=^## .*$)/gm);

    return parts;
}

// function send(params:type) {
//                 openai.main(parts[1]).then((result: OpenAI.Chat.Completions.ChatCompletion.Choice) => {
//                     fs.writeFile(path, `${parts[0]}# End automatic generation\n---\n${result.message.content}`, (err: NodeJS.ErrnoException | null) => {
//                         if (err) {
//                             console.error(`Could not write file at ${path}`);
//                         } else {
//                             console.log("File updated successfully.");
//                         }
//                     });
//                 });
// }
