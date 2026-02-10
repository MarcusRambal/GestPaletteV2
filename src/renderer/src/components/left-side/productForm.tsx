import { useState } from 'React'
import './productForm.css'

export const ProductForm = ({ tags, onSubmit }) => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    type: '',
    price: '',
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
      <div className="form-group">
        <label>Nombre del Producto</label>
        <input 
          type="text" 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="Ej. Fresas con Crema"
          required 
        />
      </div>

      <div className="form-group">
        <label>Categoría (Tag)</label>
        <select value={formData.type} onChange={handleTagChange} required>
          <option value="" disabled hidden>Selecciona un tag...</option>
          {tags.map(tag => (
            <option key={tag.id} value={tag.nombre}>
              {tag.nombre}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Precio</label>
        <input 
          type="number" 
          value={formData.price}
          onChange={(e) => setFormData({...formData, price: e.target.value})}
          placeholder="6000"
          required 
        />
      </div>

    
      <div className="color-preview" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>Color de etiqueta:</span>
        <div style={{ 
          width: '20px', 
          height: '20px', 
          borderRadius: '50%', 
          backgroundColor: formData.color,
          border: '1px solid #ccc' 
        }} />
      </div>

      <button type="submit" className="btn-save">Crear Producto</button>
    </form>
  );
};
