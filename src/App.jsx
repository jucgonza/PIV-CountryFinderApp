import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import CountriesList from "./countries/CountriesList";
import Loading from "./components/Loading";
import { getCountriesByName } from "./actions/getCountriesByName";
import "./App.css";

function App() {
	const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState("");
	const [error, setError] = useState(""); // Shows message if response is empty

	const handleSubmit = (e) => {
		// Avoids page reload
		e.preventDefault();

		setLoading(true);

		// Resets state
		setCountries([]);
		setError("");

		// Makes API call and return countries
		getCountriesByName(search).then((response) => {
			if (response.status) {
				setCountries(response.data);
				return;
			}

			setError("No matches found. Try with another name.");
		}).finally(() => setLoading(false));
	};

	// Keeps user input
	const onInput = (e) => {
		setSearch(e.target.value);
	};

	return (
		<>
			<Header title="CountriesApp" description="Buscador de Países" />

			<Search
				onInput={onInput}
				onSubmit={handleSubmit}
				placeholder="Search by country name..."
			/>

			{loading && <Loading />}

			<CountriesList countries={countries} error={error} />
		</>
	);
}

export default App;
