import './ResponseCard.css';

const ResponseCard = (props) => {
    return (
        <>
            <div className="response-card-wrapper">
                <div className="response-card-content">
                    <div className='prompt-container'>
                        <p className='left-side'>
                            <span>Prompt</span>: 
                        </p>
                        <p className='right-side'>
                            {props.prompt}
                            {/* Here is the prompt. It is very very long. And what if my prompt was super long as well! */}
                        </p>
                    </div>
                    <div className='response-container'>
                        <p className='left-side'>
                            <span>Response</span>:
                        </p>
                        <p className='right-side'>
                            {/* Here is my response to the prompt. It is a very long response. What if my response was even longer though. */}
                            {props.response}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResponseCard;