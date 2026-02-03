import React from 'react'
import './App.css'
import { SearchBar } from './components/searchBar'
import { Filter } from './components/filter'
import { ProductCard } from './components/productCard'

function App(): React.JSX.Element {
  
  /* Probar la custom API
  const handleSaludar = (): void => {
    const resultado = window.api.saludar()
    console.log(resultado)
    alert(resultado)
  }
 */ 
 
  return (
    <>
    <div className="app-container">
      <div className='left-container'>
        <div className = 'search-container'>
          <SearchBar />
          <Filter />
        </div>      {/* search-container */}
        
        <div className='items-container'>
          <h1>Lista de Productos</h1>
            <ProductCard />

        </div> {/* items-container */}

      </div> {/* left-container */}
      
      <div className='right-container'>
        <h1>Productos Seleccionados</h1>
        <div className='selected-products-container'>
            {/* Aquí van los productos seleccionados */}
        </div> {/* selected-products-container */}
        <div className='right-bottom-container'>
            <div className='left-side'>
                <h2>Calculadora de vuelto</h2>
            </div> {/* left-side */}
            <div className='right-side'>
                <h2>Total: $1110.0</h2>
            </div> {/* right-side */}
        </div> {/* right-bottom-container */}
      </div> {/* right-container */}
    </div> {/* app-container */}
      
    </>
  )
}

export default App
