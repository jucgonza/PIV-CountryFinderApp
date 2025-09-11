import ExclamationCircleIcon from '@heroicons/react/24/outline/ExclamationCircleIcon'
import CountryCard from "../components/CountryCard"

const CountriesList = ({countries, error, loading}) => {
    return (
        <>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-4">
                {loading ? 
                    [1,2,3,4,5].map(i => 
                        <div key={i} className="rounded-md border border-gray-300">
                            <div className="flex animate-pulse space-x-4">
                                <div className="w-1/4 min-w-[100px] bg-gray-200"></div>
                                <div className="flex-1 space-y-6 p-4">
                                    <div className="h-2 rounded bg-gray-200"></div>
                                    <div className="space-y-3">
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                                            <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                                        </div>
                                        <div className="h-2 rounded bg-gray-200"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                :
                    countries.map(i => <CountryCard country={i} key={i.name.official} />)
                }
            </div>

            {error && <p className="text-gray-500 flex items-center">
                <ExclamationCircleIcon className="size-5 me-1" />
                {error}
            </p>}
        </>
    )
}

export default CountriesList