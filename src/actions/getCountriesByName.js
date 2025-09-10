import axios from "axios";

export const getCountriesByName = async (query) => {
	try{
		// Gets country data asking for specific fields to improve performance in response
		const response = await axios.get(`https://restcountries.com/v3.1/name/${query}?fields=name,independent,currencies,capital,region,subregion,languages,population,flags`);
		return {
			status: true,
			data: response.data
		}
	}catch(e){
		console.log("Error fetching countries:",e)
		return {
			status: false,
			message: "Error fetching countries"
		}
	}
};
