import './Prompt.css';
import Robot from '../../images/robot.jpg';
import { useState } from 'react';
import ResponseCard from '../ResponseCard/ResponseCard';

const { Configuration, OpenAIApi } = require("openai");




const Prompt = (props) => {
    const [userInput, setUserInput] = useState('');
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [responseCards, setResponseCards] = ([]);


    // API KEY
    const configuration = new Configuration({
        apiKey: "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",
    });

    // VARIABLE STORING API KEY
    const openai = new OpenAIApi(configuration);

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
            })
            .then((response) => {
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
    

    // HANDLES SUBMIT TO FIRE OFF FETCHING FUNCTION
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchResponse();
        addResponseCard();
        // addResponse();
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


                {/* <div>
                    {responseList[0] ? (
                        <div>
                            {responseList.map((prompt) => {
                                return (
                                    <div key={prompt.value}>
                                        <div>
                                            <ResponseCard prompt={prompt} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : null}
                </div> */}


                {/* <ul>
                    {ResponseData}
                </ul> */}

                <ul>
                    <li>
                        <ResponseCard prompt={prompt} response={response} />
                    </li>
                </ul>
                
                
            </div>



            
        </>
    )
}



export default Prompt;
