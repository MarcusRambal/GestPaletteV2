import { useState } from 'react';
import ModalLayout   from '../layouts/modalLayout';
import TagForm  from './tagForm';
import './tagManager.css';

const TagManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. La función que procesa los datos finales
  const handleSaveTag = (data: { name: string; color: string }) => {
    console.log("Nueva etiqueta creada:", data);
    // Aquí harías tu llamada a la API
    setIsModalOpen(false); // Cerramos el modal tras guardar
  };

  return (
    <div className='label-container'>
      
      <button onClick={() => setIsModalOpen(true)}>
        + Nueva Etiqueta
      </button>

   
      <ModalLayout 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Configurar Etiqueta"
      >
           {/* Metemos el formulario como propiedad para el modallayout*/}
        <TagForm onSubmit={handleSaveTag} />
      </ModalLayout>
    </div>
  );
};

export default TagManager;