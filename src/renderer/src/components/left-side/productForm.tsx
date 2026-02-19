import { useState } from 'react'
import { ProductFormData } from '../../types/productProps';
import './productForm.css'


export const ProductForm = ({ tags, onSubmit }) => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    type: '',
    price: 0,
    color: '#ffffff' 
  });

  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTagName = e.target.value;
 
    const selectedTag = tags.find(t => t.nombre === selectedTagName);

    setFormData({
      ...formData,
      type: selectedTagName,
      color: selectedTag ? selectedTag.color : '#ffffff'
    });
  };

  return (
    <form className="product-form" onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }}>
        <div className='product-form-name-container'>
          <p>Nombre del producto</p>
          <input className='product-form-name-input'
          type="text" 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="Nombre del producto"
          required 
        />
        </div>
        
        <div className='product-form-tag-container'>
          <p>Etiqueta del producto</p>
          <select className='product-form-tag-select' value={formData.type} onChange={handleTagChange} required>
          <option value="" disabled hidden>Selecciona un tag...</option>
          {tags.map(tag => (
            <option key={tag.id} value={tag.nombre}>
              {tag.nombre}
            </option>
          ))}
        </select>
        </div>
        

        <div className='product-form-price-container'>
          <p>Precio del producto</p>
          <input 
        className='product-form-price-input'
          type="number" 
          value={formData.price}
          onChange={(e) => setFormData({...formData, price: e.target.value === '' ? 0 : Number(e.target.value)})}
          required 
        />
        </div>
        
      
      <button type="submit" className="btn-save">Crear Producto</button>
    </form>
  );
};
