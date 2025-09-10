import {useState} from 'react'
import './App.css'

function App() {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching",search)
  }

  const onInput = (e) => {
    setSearch(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" required placeholder="Search by country name..." onInput={onInput}/>
        <button type="submit">Search</button>
      </form>
    </>
  )
}

export default App
