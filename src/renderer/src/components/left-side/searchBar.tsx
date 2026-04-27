import { useState } from 'react'
import './searchBar.css';

export const SearchBar: React.FC<{onSearch: (query: string) => void}> = ({ onSearch}) => {
  const [query, setQuery] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    onSearch(e.target.value) 
  }

  return (
    <div className="search-bar-container">
      <input 
        type="text" 
        value={query}
        onChange={handleChange}
        placeholder="Buscar en la app..."
      />
    </div>
  )
}