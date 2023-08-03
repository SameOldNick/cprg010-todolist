import React from 'react';
import { getFactFromApi } from '../utils/api';

const FunFact = (props) => {
    // Initialize fact state variable
    const [fact, setFact] = React.useState('');

    // Needs to be in a seperate function
    const getFact = async () => {
        const fact = await getFactFromApi();
        
        setFact(fact);
    }

    // Hook on to useEffect
    React.useEffect(() => {
        getFact();
    }, []);

    return (
        <p>Fun fact: {fact}</p>
    )
}

export default FunFact;