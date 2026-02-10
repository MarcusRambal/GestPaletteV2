import React, { useState } from 'react';
import { ModalLayout } from '../ModalLayout'; // Ajusta la ruta según tu estructura
import { ProductForm } from './productForm';   // El formulario que crearemos
import './productManager.css';

interface Tag {
  id: string;
  nombre: string;
  color: string;
}

interface ProductManagerProps {
  tags: Tag[]; // Necesitamos los tags para el select del formulario
  onProductCreated: (newProduct: any) => void;
}

export const ProductManager: React.FC<ProductManagerProps> = ({ tags, onProductCreated }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSaveProduct = (productData: any) => {
    // Aquí podrías generar un ID único o tratar los datos antes de enviarlos
    const newProduct = {
      ...productData,
      id: Date.now().toString(), // ID temporal
    };
    
    onProductCreated(newProduct);
    handleCloseModal(); // Cierra el modal tras crear
  };

  return (
    <div className="product-manager-header">
      {/* Botón que dispara el modal */}
      <button className="open-modal-btn" onClick={handleOpenModal}>
        Nuevo Producto
      </button>

      {/* Modal que renderiza el formulario de productos */}
      <ModalLayout 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        title="Crear Nuevo Producto"
      >
        <ProductForm 
          tags={tags} 
          onSubmit={handleSaveProduct} 
          onCancel={handleCloseModal} 
        />
      </ModalLayout>
    </div>
  );
};
