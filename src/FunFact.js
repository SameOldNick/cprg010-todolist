import React from 'react';

const FunFact = (props) => {
    // Initialize fact state variable
    const [fact, setFact] = React.useState('');

    // Needs to be in a seperate function
    const getFact = async () => {
        // Make the API request
        const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random", {
            "method": "GET"
        });

        const json = await response.json();

        const newFact = json.text;

        // Set as a state variable
        setFact(newFact);

        return () => null;
    };

    // Hook on to useEffect
    React.useEffect(() => {
        getFact();
    }, []);

    return (
        <p>Fun fact: {fact}</p>
    )
}

export default FunFact;