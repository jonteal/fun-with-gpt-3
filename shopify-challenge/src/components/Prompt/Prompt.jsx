import './Prompt.css';
import Robot from '../../images/robot.jpg';
import { useState } from 'react';
import ResponseCard from '../ResponseCard/ResponseCard';

const { Configuration, OpenAIApi } = require("openai");




const Prompt = (props) => {
    const [userInput, setUserInput] = useState('');
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');


    const configuration = new Configuration({
        apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    const fetchResponse = () => {
        try {
            console.log('test')
            openai.createCompletion("text-curie-001", {
                prompt: userInput,
                temperature: 0.8,
                max_tokens: 30,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            })
            .then((response) => {
                console.log(response);
                setPrompt(
                    userInput
                )
                setResponse(
                    response.data.choices[0].text
                )
            })
        } catch (err) {
            console.error(err);
        }
    }
    


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('test');

        // props.onSubmit({
        //     id: Math.floor(Math.random() * 1000),
        //     text: userInput
        // })
        fetchResponse();

        setUserInput('');
    }

    const handleChange = (e) => {
        setUserInput(e.target.value);
    };

    return(
        <>
            <div className="prompt-wrapper">
                <h1>Hi! I'm Ned!</h1>
                <img className='robot-img' src={Robot} alt="Robot Cartoon" />
                <h2>Sometimes I say random things...</h2>
                <p className='question-text'>What would you like to me to riff about?</p>

                <p className='prompt-instruction'>Enter your prompt...</p>
                
                <form className="prompt-form">
                    <input 
                        type="text" 
                        className="textbox"
                        value={userInput}
                        onChange={handleChange}
                    />
                <button
                    onClick={handleSubmit}
                    className="submit-button"
                >
                    Submit
                </button>

                </form>

                <div>
                    <h2>Responses</h2>
                    <ResponseCard prompt={prompt} response={response} />
                </div>
                
            </div>



            
        </>
    )
}



export default Prompt;



