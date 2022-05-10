<<<<<<< HEAD
const { Configuration, OpenAIApi } = require("openai");
=======
// const { Configuration, OpenAIApi } = require("openai");
// import { Configuration, OpenAIApi } from "openai";
>>>>>>> d6acef08742c3850ce3246acc10ce0ffbb7e41af

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);


const data = {
    prompt: "Write a poem about a dog wearing skis",
    temperature: 0.6,
    max_tokens: 64,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
};




fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify(data),
});
<<<<<<< HEAD
const openai = new OpenAIApi(configuration);


const data = {
    prompt: "Write a poem about a dog wearing skis",
    temperature: 0.6,
    max_tokens: 64,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
};
=======
>>>>>>> d6acef08742c3850ce3246acc10ce0ffbb7e41af




<<<<<<< HEAD
fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify(data),
});




=======
>>>>>>> d6acef08742c3850ce3246acc10ce0ffbb7e41af
// function generateReply(phrase) {
//     return 
// }