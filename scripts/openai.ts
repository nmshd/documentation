import OpenAI from "openai";

require("dotenv").config();
const openai = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"] // This is the default and can be omitted
});

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo"
    });

    console.log(completion.choices[0]);
}

main();
