import React from 'react'
import './App.css'
import { useState } from 'react';
import { ProductProps } from './types/productProps';

//left side imports 
import { SearchBar } from './components/left-side/searchBar'
import { Filter } from './components/left-side/filter'
import  TagManager   from './components/left-side/tagManager'
import { ProductCard } from './components/left-side/productCard'
import { ProductManager } from './components/left-side/productManager'

//right side imports 
import { SelectedProduct } from './components/right-side/selectedProduct'
import { CashBackCalculator } from './components/right-side/cashBackCalculator'
import { PaymentType } from './components/right-side/paymentType'
import { CreateInvoice } from './components/right-side/createInvoice'

function App(): React.JSX.Element {
  /* Probar la custom API
  const handleSaludar = (): void => {
    const resultado = window.api.saludar()
    console.log(resultado)
    alert(resultado)
  }
 */ 
const [selectedProducts, setSelectedProducts] = useState<ProductProps[]>([]);
const productos = [
  { id: 1, name: "Fresas, crema chantilly salsa de mora, leche. condensadas y M&M", type: "Rellenas", price: 6000, color: "#e5b3e1" },
  { id: 2, name: "Choco-Menta", type: "Especial", price: 7500, color: "#b3e5d1" },
  { id: 3, name: "Vainilla Chips", type: "Clásica", price: 5000, color: "#fdfd96" },
  { id: 4, name: "Red Velvet", type: "Rellenas", price: 8000, color: "#ff6961" },
  { id: 5, name: "Dulce de Leche", type: "Especial", price: 7000, color: "#f4a460" },
  { id: 6, name: "Limón y Merengue", type: "Clásica", price: 5500, color: "#d1e7dd" },
  { id: 7, name: "Chocolate con Avellanas", type: "Rellenas", price: 8500, color: "#c3b091" },
  { id: 8, name: "Frutos Rojos", type: "Especial", price: 7500, color: "#ffb6c1" },
  { id: 9, name: "Café y Nuez", type: "Clásica", price: 6000, color: "#d2b48c" },
  { id: 10, name: "Caramelo Salado", type: "Rellenas", price: 8000, color: "#f5c6cb" }
];

const handleAddProduct = (product: any) => {
    setSelectedProducts(prevList => {
      const exists = prevList.find(item => item.id === product.id);
      if (exists) {
        return prevList.map(item =>
          item.id === product.id ? { ...item, quantity: (item.quantity ?? 0) + 1 } : item
        );
      }
      return [...prevList, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveProduct = (id: number) => {
    setSelectedProducts(prevList => {
      return prevList.map(item => 
        item.id === id 
          ? { ...item, quantity: (item.quantity ?? 1) - 1 }
          : item
      ).filter(item => (item.quantity ?? 0) > 0);
    });
  };
 
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
          <div className='products-header-container'>
            <h1>Lista de Productos</h1>
            {/* tags para ProductManager y handler para recibir el producto creado */}
            {/** Si prefieres traer `tags` desde un store o API, reemplaza esta constante */}
            <ProductManager
              tags={[
                { id: '1', name: 'Rellenas', color: '#e5b3e1' },
                { id: '2', name: 'Especial', color: '#b3e5d1' },
                { id: '3', name: 'Clásica', color: '#fdfd96' }
              ]}
              onProductCreated={(newProduct) => { console.log('Producto creado:', newProduct); }}
            />
          </div>
          <div className = 'product-list'>
            {productos.map((prod) => (
              <ProductCard 
                key={prod.id}
                {...prod}
                onAdd={() => handleAddProduct(prod)}
                />
          ))}
          </div>
              

        </div> {/* products-container */}

      </div> {/* left-container */}
      
      <div className='right-container'>
       
          <h1>Productos Seleccionados</h1>
           <div className='selected-products-container'>
            {selectedProducts.map((prod) => (
              <SelectedProduct 
                key={prod.id}
                {...prod}
                quantity={prod.quantity ?? 1}
                onRemove={() => handleRemoveProduct(prod.id)}
              />
            ))}
            {/* Aquí van los productos seleccionados */}
        </div> {/* selected-products-container */}
        <div className='right-bottom-container'>
            <div className='left-side'>
              <div className='left-side-container'>
                <PaymentType /> 
                <h2>Total: $1110.0</h2>
                <CreateInvoice />
              </div>
                
            </div> {/* left-side */}
            <div className='right-side'> 
              <CashBackCalculator />
            </div> {/* right-side */}
        </div> {/* right-bottom-container */}
      </div> {/* right-container */}
    </div> {/* app-container */}
      
    </>
  )
}

export default App
