const Search = ({onSubmit, onInput, placeholder}) => {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" required placeholder={placeholder} onInput={onInput}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default Search
