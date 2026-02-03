import { useState } from 'react'

export const SearchBar = () => {
  const [query, setQuery] = useState('')

  return (
    <div className="search-container">
      <input 
        type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar en la app..."
      />
      <button onClick={() => console.log('Buscando:', query)}>🔍</button>
    </div>
  )
}