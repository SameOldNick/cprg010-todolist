const getFactFromApi = async () => {
    // Make the API request
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random", {
        "method": "GET"
    });

    const json = await response.json();

    const newFact = json.text;

    return newFact;
}

export { getFactFromApi };
