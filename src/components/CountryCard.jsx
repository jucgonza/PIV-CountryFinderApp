const CountryCard = ({country}) => {

    // Utility function to format languages separated by comma
    const getLanguages = (data) => {
        let languages = [];

        for(let property in data){
            languages.push(data[property]);
        }

        return languages.join(", ");
    }

    // Utility function to format currencies separated by comma
    const getCurrencies = (data) => {
        let currencies = [];

        for(let property in data){
            currencies.push(`${data[property].name} (${data[property].symbol})`);
        }

        return currencies.join(", ")
    }

    return (
        <div style={{border: "1px solid black", margin: "20px", padding: "20px"}}>
            <p>Name: {country.name.official}</p>
            <p>Capital: {country.capital[0]}</p>
            <p>Region: {country.subregion}</p>
            <p>Population: {country.population}</p>
            <p>Languages: {getLanguages(country.languages)}</p>
            <p>Currencies: {getCurrencies(country.currencies)}</p>
            <p>
                <img src={country.flags.png} alt={country.flags.alt} />
            </p>
        </div>
    )
}

export default CountryCard