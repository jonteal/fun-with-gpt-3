import ResponseCard from "../ResponseCard/ResponseCard";

const Responses = ({ responses }) => {
    return (
        <>
            <div>
                {responses.map((response) => (
                    <ResponseCard response={response} />
                ))}
            </div>
        </>
    )
}

export default Responses;