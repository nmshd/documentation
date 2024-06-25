import OpenAI from "openai";

require("dotenv").config();
const openai = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"] // This is the default and can be omitted
});

export async function paraphrase(content: string): Promise<OpenAI.Chat.Completions.ChatCompletion.Choice> {
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content:
                    "you paraphrase the text of a technical documentation in fluent, professional-sounding english business, and output the result as jekyll markdown, keep existing links, html, attributes and values in inline code"
            },
            { role: "user", content: content }
        ],
        model: "gpt-4-turbo",
        temperature: 1
    });
    console.log(completion.choices[0]);

    return completion.choices[0];
}
export async function summarize(content: string): Promise<OpenAI.Chat.Completions.ChatCompletion.Choice> {
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content:
                    "you summarize in a short text without headlines the text of a technical documentation in fluent, professional-sounding english business, and output the result as jekyll markdown, try to use links from text in jekyll format"
            },
            { role: "user", content: content }
        ],
        model: "gpt-4-turbo",
        temperature: 1
    });
    console.log(completion.choices[0]);

    return completion.choices[0];
}
