import MapPinIcon from '@heroicons/react/24/outline/MapPinIcon'
import GlobeAmericasIcon from '@heroicons/react/24/outline/GlobeAmericasIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import LanguageIcon from '@heroicons/react/24/outline/LanguageIcon'
import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon'

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
        <div className="rounded-md border border-gray-300">
            <div className="flex space-x-4 h-full">
                <div className="w-1/4 min-w-[100px] bg-gray-200">
                    <img src={country.flags.png} alt={country.flags.alt} className="w-full h-full object-cover"/>
                </div>
                <div className="flex-1 space-y-6 p-4">
                    <div>
                        <p>{country.name.official}</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center">
                                <MapPinIcon className="size-4 flex-none me-1" />
                                {country.capital[0]}
                            </div>
                            <div className="flex items-center">
                                <GlobeAmericasIcon className="size-4 flex-none me-1" />
                                {country.subregion}
                            </div>
                            <div className="flex items-center">
                                <UserIcon className="size-4 flex-none me-1" />
                                {country.population}
                            </div>
                            <div className="flex items-center">
                                <LanguageIcon className="size-4 flex-none me-1" />
                                {getLanguages(country.languages)}
                            </div>
                            <div className="flex items-center">
                                <CircleStackIcon className="size-4 flex-none me-1" />
                                {getCurrencies(country.currencies)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryCard