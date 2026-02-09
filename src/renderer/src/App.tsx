import React from 'react'
import './App.css'
import { SearchBar } from './components/searchBar'
import { Filter } from './components/filter'
import  TagManager   from './components/tagManager'
import { ProductCard } from './components/productCard'

function App(): React.JSX.Element {
  /* Probar la custom API
  const handleSaludar = (): void => {
    const resultado = window.api.saludar()
    console.log(resultado)
    alert(resultado)
  }
 */ 
const productos = [
  { id: 1, nombre: "Fresas con crema", tipo: "Rellenas", precio: 6000, color: "#e5b3e1" },
  { id: 2, nombre: "Choco-Menta", tipo: "Especial", precio: 7500, color: "#b3e5d1" },
  { id: 3, nombre: "Vainilla Chips", tipo: "Clásica", precio: 5000, color: "#fdfd96" },
  { id: 4, nombre: "Red Velvet", tipo: "Rellenas", precio: 8000, color: "#ff6961" },
  { id: 5, nombre: "Dulce de Leche", tipo: "Especial", precio: 7000, color: "#f4a460" },
  { id: 6, nombre: "Limón y Merengue", tipo: "Clásica", precio: 5500, color: "#d1e7dd" },
];

 
  return (
    <>
    <div className="app-container">      
      <div className='left-container'>
        <div className = 'search-container'>
          <SearchBar />
          <Filter />
          <TagManager />
        </div>      {/* search-container */}
        
        <div className='products-container'>
          <h1>Lista de Productos</h1>
          <div className = 'product-list'>
            {productos.map((prod) => (
              <ProductCard 
                key={prod.id} 
                nombre={prod.nombre}
                tipo={prod.tipo}
                precio={prod.precio}
                color={prod.color}
              />
          ))}
          </div>
              

        </div> {/* products-container */}

      </div> {/* left-container */}
      
      <div className='right-container'>
        <div className='selected-products-container'>
          <h1>Productos Seleccionados</h1>
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
