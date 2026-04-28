 import  { useState, useEffect } from 'react';
 import './home.css'

 //Types
import { ProductProps } from '../../../../types/productProps';
import { Tag } from '../../../../types/tagType'

 //left side imports 
 import { SearchBar } from '../../components/left-side/searchBar'
 import { Filter } from '../../components/left-side/filter'
 import  TagManager   from '../../components/left-side/tagManager'
 import { ProductCard } from '../../components/left-side/productCard'
 import { ProductManager } from '../../components/left-side/productManager'
 
 //right side imports 
 import { SelectedProduct } from '../../components/right-side/selectedProduct'
 import { CashBackCalculator } from '../../components/right-side/cashBackCalculator'
 import { PaymentType } from '../../components/right-side/paymentType'
 import { CreateInvoice } from '../../components/right-side/createInvoice'
 
 
 

export function Home () {
const [selectedProducts, setSelectedProducts] = useState<ProductProps[]>([]);
const [searchQuery, setSearchQuery] = useState('');
const [selectedFilter, setSelectedFilter] = useState('');
const [productos, setProductos] = useState<ProductProps[]>([]);
const [tags, setTags] = useState<Tag[]>([]);

//Function to load tags
const loadTags = async () => {
  try {
    const loadedTags = await window.homeApi.getTags();
    setTags(loadedTags.map(tag => ({
          id: tag.label_id,
          name: tag.name,
          color: tag.color
        })));
  } catch (error) {
    console.error('Error loading tags:', error);
    setTags([]);
  }
}

useEffect(() => {
  // Obtener productos desde homeApi
  window.homeApi?.getProducts()
    .then(setProductos)
    .catch(error => console.error('Error loading products:', error));

  loadTags();
}, []);

// Datos por defecto si no se cargan desde la BD
const productosDefault = [
  // Cálidos (Pastel)
  { id: 1, name: "Fresa Pastel", type: "Rellenas", price: 6000, color: "#FFADAD" },
  { id: 2, name: "Durazno Suave", type: "Especial", price: 7500, color: "#FFD6A5" },
  { id: 3, name: "Limón Claro", type: "Clásica", price: 5000, color: "#FDFFB6" },
  { id: 4, name: "Frambuesa Pastel", type: "Rellenas", price: 8000, color: "#FFC6FF" },
  { id: 5, name: "Rosa Suave", type: "Especial", price: 7000, color: "#FFD1DC" },
  { id: 6, name: "Melocotón Claro", type: "Clásica", price: 5500, color: "#FFECD2" },
  // Naturaleza
  { id: 7, name: "Menta Fresca", type: "Rellenas", price: 8500, color: "#CAFFBF" },
  { id: 8, name: "Turquesa Suave", type: "Especial", price: 7500, color: "#9BF6FC" },
  { id: 9, name: "Azul Cielo", type: "Clásica", price: 6000, color: "#A0C4FF" },
  { id: 10, name: "Lavanda", type: "Rellenas", price: 8000, color: "#BDB2FF" },
  { id: 11, name: "Verde Menta", type: "Especial", price: 7200, color: "#E2F0CB" },
  { id: 12, name: "Agua Marina", type: "Clásica", price: 5800, color: "#D4F1F4" },
  // Vintage / Muted
  { id: 17, name: "Beige Vintage", type: "Especial", price: 7100, color: "#ECE4DB" },
  { id: 19, name: "Aqua Energía", type: "Rellenas", price: 6800, color: "#CAFFDF" },
  { id: 20, name: "Lilac Claro", type: "Especial", price: 7400, color: "#F0E6EF" },
  { id: 21, name: "Gris Elegante", type: "Clásica", price: 5400, color: "#E0E1DD" },
  { id: 23, name: "Azul Hielo", type: "Especial", price: 7500, color: "#D7E3FC" },
  { id: 24, name: "Amarillo Neón Suave", type: "Clásica", price: 6200, color: "#CCFF33" }
];

//Functions for homeApi

const handleCreateTag = async (tag: any) => {
    try{
      console.log('Creando etiqueta:', tag);
      await window.homeApi.createTag(tag);
      await loadTags();
    }catch(error) {
      console.error('Error al crear etiqueta:', error);
    }
}

const handleCreateProduct = async (product: any) => {
  try {
    const newProduct = await window.homeApi.createProduct(product);
    console.log('llamando creacion de producto:', newProduct);
    // Aquí podrías actualizar tu lista de productos si es necesario
  } catch (error) {
    console.error('Error al crear producto:', error);
  }
}


//Functions for selected products management
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

  const filteredProducts = (productos.length > 0 ? productos : productosDefault).filter(prod => {
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === '' || prod.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });


  return ( 
   <div className='home-container'>
    <div className='left-container'>
        <div className = 'search-container'>
          <SearchBar
          onSearch={setSearchQuery}
          />
          <Filter onFilterChange={setSelectedFilter} tags={tags} />
          <TagManager onTagCreated={(newTag) => { handleCreateTag(newTag) }} />
        </div>      {/* search-container */}
        
        <div className='products-container'>
          <div className='products-header-container'>
            <h1>Lista de Productos</h1>
            {/* tags para ProductManager y handler para recibir el producto creado */}
            {/** Si prefieres traer `tags` desde un store o API, reemplaza esta constante */}
            <ProductManager
              tags={tags}
              onProductCreated={(newProduct) => { handleCreateProduct(newProduct) }}
            />
          </div>
          <div className = 'product-list'>
            {filteredProducts.map((prod) => (
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
                <h2>Total: ${selectedProducts.reduce((total, prod) => total + (prod.price * (prod.quantity ?? 1)), 0).toLocaleString('es-CO')}</h2>
                <CreateInvoice />
              </div>
                
            </div> {/* left-side */}
            <div className='right-side'> 
              <CashBackCalculator 
                total={selectedProducts.reduce((total, prod) => total + (prod.price * (prod.quantity ?? 1)), 0)}
              
              />
            </div> {/* right-side */}
        </div> {/* right-bottom-container */}
      </div> {/* right-container */}
    </div> 
  )
}