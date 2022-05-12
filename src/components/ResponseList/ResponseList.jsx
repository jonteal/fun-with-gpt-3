import ResponseCard from "../ResponseCard/ResponseCard";
// import { useState } from "react";
// import Prompt from "../Prompt/Prompt";

const ResponseList = ({ savedResponses }) => {
    if (savedResponses.length < 1) return <p>No responses yet...</p>;
    return (
        <ul>
            {savedResponses.map(response => (
                <ResponseCard 
                    prompt={response.prompt}
                    response={response.response}
                    key={response.date}
                />
            ))}
        </ul>
    )
}

export default ResponseList;