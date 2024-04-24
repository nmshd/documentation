import * as fs from "fs";

const path = process.argv[2];

fs.readFile(path, "utf8", (err, data) => {
    if (err) {
        console.error(`Could not read file at ${path}`);
    } else {
        const parts = data.split("# End automatic generation\n---\n");
        if (parts.length > 1) {
            console.log(parts[1]);
        } else {
            console.log("The marker '# End automatic generation' was not found in the file.");
        }
    }
});
