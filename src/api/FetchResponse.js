// function for making http post request to api
const fetchResponse = async data => {
    const response = await fetch(
        'https://api.openai.com/v1/engines/text-curie-001/completions',
        {
            method: 'POST',
            headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_API}`,
            },
            body: JSON.stringify(data),
        }
    );
    const responseData = await response.json();
    return responseData;
};
    
export default fetchResponse;