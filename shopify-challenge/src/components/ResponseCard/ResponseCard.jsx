import './ResponseCard.css';

const ResponseCard = (props) => {
    return (
        <>
        {/* {props && ? <p>true</p> : <p>not true</p>} */}
            <div className="response-card-wrapper">
                <div className="response-card-content">
                    <div className='prompt-container'>
                        <p className='left-side'>
                            <span>Prompt</span>: 
                        </p>
                        <p className='right-side'>
                            {props.prompt}
                        </p>
                    </div>
                    <div className='response-container'>
                        <p className='left-side'>
                            <span>Response</span>:
                        </p>
                        <p className='right-side'>
                            {props.response}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResponseCard;