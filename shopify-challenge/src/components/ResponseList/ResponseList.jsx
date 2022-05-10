import ResponseCard from "../ResponseCard/ResponseCard";
import { useState } from "react";
import Prompt from "../Prompt/Prompt";

const ResponseList = () => {
    // const [responses, setResponses] = useState([]);

    // const addResponse = (response) => {
    //     const newResponses = [response, ...responses];

    //     setResponses(newResponses);
    //     console.log(newResponses);
    // }

    return (
        <>
            <div>
                <ResponseCard />
                <ResponseCard />
                <ResponseCard />
                <ResponseCard />
                <ResponseCard />

            </div>
        </>
    )
}

export default ResponseList;