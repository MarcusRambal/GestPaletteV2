import { useState } from 'react'
import './searchBar.css';

export const SearchBar = () => {
  const [query, setQuery] = useState('')

  return (
    <div className="search-bar-container">
      <input 
        type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar en la app..."
      />
    </div>
  )
}