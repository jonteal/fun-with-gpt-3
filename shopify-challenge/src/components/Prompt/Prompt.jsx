import './Prompt.css';
import Robot from '../../images/robot.jpg';
import { useState } from 'react';




const Prompt = (props) => {
    const [userInput, setUserInput] = useState('');


    // const data = {
    //     prompt: "Write a poem about a dog wearing skis",
    //     temperature: 0.6,
    //     max_tokens: 64,
    //     top_p: 1,
    //     frequency_penalty: 0,
    //     presence_penalty: 0,
    // };


    // fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    //     },
    //     body: JSON.stringify(data),
    // });

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: userInput
        })
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
                
                <form className="prompt-form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        className="textbox"
                        value={userInput}
                        onChange={handleChange}
                    />
                <button 
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
