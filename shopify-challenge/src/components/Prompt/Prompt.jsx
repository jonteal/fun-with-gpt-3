import './Prompt.css';
import Robot from '../../images/robot.jpg';


const Prompt = () => {
    return(
        <>
            <div className="prompt-wrapper">
                <h1>Hi! I'm Ned!</h1>
                <img className='robot-img' src={Robot} alt="Robot Cartoon" />
                <h2>Sometimes I say random things...</h2>
                <p className='question-text'>What would you like to me to riff about?</p>

                <p className='prompt-instruction'>Enter your prompt...</p>
                <textarea name="textarea" rows="5" cols="40" className="textbox">

                </textarea>
                <button className="submit-button">
                    Submit
                </button>
            </div>



            
        </>
    )
}



export default Prompt;
