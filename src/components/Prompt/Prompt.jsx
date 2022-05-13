import './Prompt.css';
import Robot from '../../images/robot.jpg';
import { useState } from 'react';

import { Configuration, OpenAIApi } from "openai";

    // API KEY
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPEN_AI_API
    });

    // VARIABLE STORING API KEY
    const openai = new OpenAIApi(configuration);


const Prompt = ({ saveResponse }) => {
    const [prompt, setPrompt] = useState('');


    // FETCH API DATA FUNCTION
    const fetchResponse = () => {
        try {
            openai.createCompletion("text-curie-001", {
                prompt: prompt,
                temperature: 0.8,
                max_tokens: 30,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
                echo: true,
            })
            .then(data => {
                const response = data.data.choices[0].text
                console.log(response);

                const newResponse = {
                    prompt: prompt, 
                    response: response,
                    date: Date.now(),
                };
                saveResponse(newResponse);
            })
            
        } catch (err) {
            console.error(err);
        }
    }


    // HANDLES SUBMIT TO FIRE OFF FETCHING FUNCTION
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchResponse();
        setPrompt('');
    }

    // SETS THE INPUT TO THE USERINPUT VARIABLE WITH USESTATE HOOK 
    const handleChange = input => {
        setPrompt(input);
    };

    return(
        <>
            <div className="prompt-wrapper">
                <h1>Hi! I'm Ned!</h1>
                <img className="robot-img" src={Robot} alt="Robot Cartoon" />
                <h2>Sometimes I say random things...</h2>
                <p className="question-text">All I need is a little help!</p>

                <p className="prompt-instruction">What would you like me to talk about?</p>
                
                <form className="prompt-form">
                    <input 
                        type="text" 
                        className="textbox"
                        value={prompt}
                        onChange={({ target }) => handleChange(target.value)}
                        placeholder="Enter your prompt here..."
                    />
                    <button
                        onClick={handleSubmit}
                        className="submit-button"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}



export default Prompt;