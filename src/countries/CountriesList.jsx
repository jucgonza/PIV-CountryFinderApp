import CountryCard from "../components/CountryCard"

const CountriesList = ({countries, error}) => {
    return (
        <>
            {countries.map(i => <CountryCard country={i} key={i.name.official} />)}
            {error && <p style={{color: "red"}}>{error}</p>}
        </>
    )
}

export default CountriesList