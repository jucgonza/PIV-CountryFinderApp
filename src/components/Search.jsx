import MagnifyingGlassIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon'

const Search = ({onSubmit, onInput, placeholder, loading}) => {
    return (
        <form onSubmit={onSubmit} className="my-5 border border-gray-400 rounded-sm max-w-[450px] flex items-center">
            <div className="p-2">
                <MagnifyingGlassIcon className="size-5" />
            </div>
            <input type="text" required placeholder={placeholder} onInput={onInput} className="flex-1 min-w-[200px] py-2 px-3 focus:outline-gray-400 disabled:bg-gray-200" disabled={loading}/>
            <button type="submit" className="px-3 py-2 bg-gray-200 border border-gray-300 rounded-sm cursor-pointer disabled:cursor-not-allowed" disabled={loading}>Search</button>
        </form>
    )
}

export default Search
