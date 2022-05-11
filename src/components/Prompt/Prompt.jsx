import './Prompt.css';
import Robot from '../../images/robot.jpg';
import { useState } from 'react';
import ResponseCard from '../ResponseCard/ResponseCard';

import { Configuration, OpenAIApi } from "openai";

    // API KEY
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY
    });

    // VARIABLE STORING API KEY
    const openai = new OpenAIApi(configuration);


const Prompt = (props) => {
    const [userInput, setUserInput] = useState('');
    // const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [responseCards, setResponseCards] = ([]);




    // FETCH API DATA FUNCTION
    const fetchResponse = () => {
        try {
            openai.createCompletion("text-curie-001", {
                prompt: userInput,
                temperature: 0.8,
                max_tokens: 30,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
                echo: true,
            })
            .then((response) => {
                console.log(response);
                setResponse(
                    response.data.choices[0].text
                )
            })
            .then((response) => {
                let copy = [...responseCards];
                console.log(copy);
                copy = [
                    ...copy,
                    {
                        id: responseCards.length + 1,
                        prompt: response.split('\n')[0],
                        response: response.split('\n\n')[1]
                    } 
                ];
                setResponseCards(copy);
            })
        } catch (err) {
            console.error(err);
        }
    }

    const ResponseCardData = responseCards?.map((response) => (
        <li key={response.id}>
            <ResponseCard response={response} />
        </li>
    ))

    // HANDLES SUBMIT TO FIRE OFF FETCHING FUNCTION
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchResponse();
        addResponseCard();
        setUserInput('');
    }


    // SETS THE INPUT TO THE USERINPUT VARIABLE WITH USESTATE HOOK 
    const handleChange = (e) => {
        setUserInput(e.target.value);
    };


    const addResponseCard = (responseCard) => {

        const newResponseCards = [responseCard, ...responseCards];

        setResponseCards(newResponseCards);
        console.log(newResponseCards);
    }


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
                        value={userInput}
                        onChange={handleChange}
                        placeholder="Enter your prompt here..."
                    />
                    <button
                        onClick={handleSubmit}
                        className="submit-button"
                    >
                        Submit
                    </button>
                </form>

            
            {/* ATTEMPT AT MAPPING THROUGH THE RESPONSES USING RESPONSECARD COMPONENT */}
                <ul>
                {responseCards?.map((response) => (
                
                    <li>
                        {<ResponseCard response={response} />}  
                    </li>
                
                ))}
                </ul>


                {/* COMMENT CODE BACK IN TO SEE WORKING VERSION OF CARD */}
                {/* <li>
                    {<ResponseCard response={response} />}  
                </li> */}
                

                
                
            </div>
            
        </>
    )
}



export default Prompt;