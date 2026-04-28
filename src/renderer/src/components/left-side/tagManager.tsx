import { useState } from 'react';
import ModalLayout   from '../layouts/modalLayout';
import TagForm  from './tagForm';
import './tagManager.css';

interface TagManagerProps { 
  onTagCreated: (newTag: any) => void;
}

const TagManager = ({ onTagCreated }: TagManagerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveTag = (data: { name: string; color: string }) => {
    console.log("Nueva etiqueta creada:", data);
    // Aquí harías tu llamada a la API
    onTagCreated(data);
    setIsModalOpen(false); 
  };

  return (
    <div className='label-container'>
      
      <button onClick={() => setIsModalOpen(true)}>
        + Nueva Etiqueta
      </button>

   
      <ModalLayout 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Crear nueva Etiqueta"
      >
           {/* Metemos el formulario como propiedad para el modallayout*/}
        <TagForm onSubmit={handleSaveTag} />
      </ModalLayout>
    </div>
  );
};

export default TagManager;