// const { Configuration, OpenAIApi } = require("openai");
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
    const response = await openai.createCompletion("text-curie-001", {
        prompt: generateReply(req.body.phrase),
        temperature: 0.6,
        max_tokens: 64,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    res.status(200).json({ result: completion.data.choices[0].text})
}


function generateReply(phrase) {
    return 
}