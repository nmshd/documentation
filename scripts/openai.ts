import OpenAI from "openai";

require("dotenv").config();
const openai = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"] // This is the default and can be omitted
});

export async function main(content: string): Promise<OpenAI.Chat.Completions.ChatCompletion.Choice> {
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content:
                    "you paraphrase the text of a technical documentation in fluent, professional-sounding business english, and output the result as jekyll markdown, keep existing links and html"
            },
            { role: "user", content: content }
        ],
        model: "gpt-3.5-turbo-0125",
        temperature: 1
    });
    console.log(completion.choices[0]);

    return completion.choices[0];

    // const choice: OpenAI.Chat.Completions.ChatCompletion.Choice = {
    //     // Fill in the properties of the Choice object here
    //     // For example:
    //     finish_reason: "stop",
    //     index: 0,
    //     message: {
    //         role: "assistant",
    //         content: "The quick brown fox jumps over the lazy dog."
    //     },
    //     logprobs: null
    // };
    // return choice;
}
getFiles();
async function getFiles() {
    const list = await openai.files.list();

    for await (const file of list) {
        console.log(file);
    }
}
