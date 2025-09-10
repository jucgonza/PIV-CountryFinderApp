import {useState} from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://restcountries.com/v3.1/name/${search}?fields=name,independent,currencies,capital,region,subregion,languages,population,flags`)
      .then(response => {
        setCountries(response.data)
        console.log(response.data)
      })
      .catch(error => console.log("Error getting countries:", error))
  }

  const onInput = (e) => {
    setSearch(e.target.value);
  }

  const getLanguages = (data) => {
    let languages = [];

    for(let property in data){
      languages.push(data[property]);
    }

    return languages.join(", ");
  }

  const getCurrencies = (data) => {
    let currencies = [];

    for(let property in data){
      currencies.push(`${data[property].name} (${data[property].symbol})`);
    }

    return currencies.join(", ")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" required placeholder="Search by country name..." onInput={onInput}/>
        <button type="submit">Search</button>
      </form>

      {countries.map(i => 
        <div key={i.name.official} style={{border: "1px solid black", margin: "20px", padding: "20px"}}>
          <p>Name: {i.name.official}</p>
          <p>Capital: {i.capital[0]}</p>
          <p>Region: {i.subregion}</p>
          <p>Population: {i.population}</p>
          <p>Languages: {getLanguages(i.languages)}</p>
          <p>Currencies: {getCurrencies(i.currencies)}</p>
          <p>
            <img src={i.flags.png} alt={i.flags.alt} />
          </p>
        </div>
      )}
    </>
  )
}

export default App
