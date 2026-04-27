import { useState } from 'react';
import './tagForm.css'
import { Tag } from '../../types/tagType';


const TagForm = ({ onSubmit }: { onSubmit: (tag: Tag) => void }) => {
  const [tag, setTag] = useState<Tag>({ id: '', name: '', color: '#000000' });
  const colors_preset = [
    '#FFADAD', '#FFD6A5', '#FDFFB6', '#FFC6FF', '#FFD1DC', '#FFECD2',
    '#CAFFBF', '#9BF6FC', '#A0C4FF', '#BDB2FF', '#E2F0CB', '#D4F1F4',
     '#ECE4DB','#CAFFDF', '#F0E6EF', '#E0E1DD', '#D7E3FC', '#CCFF33',
  ];

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
      <div className="suggested-colors">
        {colors_preset.map((color) => (
          <button
            key={color}
            type="button"
            className={`color-button ${tag.color === color ? 'active' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => setTag({...tag, color})}
            title={color}
          />
        ))}
      </div>
      </div>
      
      <button type="submit">Crear Etiqueta</button>
    </form>
  );
};

export default TagForm;