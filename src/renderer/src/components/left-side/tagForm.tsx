import { useState } from 'react';
import './tagForm.css'
import { Tag } from '../../types/tagType';


const TagForm = ({ onSubmit }: { onSubmit: (tag: Tag) => void }) => {
  const [tag, setTag] = useState<Tag>({ id: '', name: '', color: '#000000' });

  return (
    <form className="tag-form" onSubmit={(e) => { e.preventDefault(); onSubmit(tag); }}>
      
      <div className='tag-form-inpur-container'>
        <p>Nombre de la etiqueta</p>
        <input className="tag-input"
        placeholder="Nombre de la etiqueta" 
        onChange={e => setTag({...tag, name: e.target.value})} 
      />
      </div>
      
      <div className = "color-selector-container">
        <p>Presiona para elegir color</p>
      <input  className='color-selector'
        type="color" 
        onChange={e => setTag({...tag, color: e.target.value})} 
      />
      </div>
      
      <button type="submit">Crear Etiqueta</button>
    </form>
  );
};

export default TagForm;