import React, { useState } from 'react';
import  ModalLayout  from '../layouts/modalLayout';
import { ProductForm } from './productForm';   
import { Tag } from '../../../../types/tagType'
import './productManager.css'


interface ProductManagerProps {
  tags: Tag[]; 
  onProductCreated: (newProduct: any) => void;
}

export const ProductManager: React.FC<ProductManagerProps> = ({ tags, onProductCreated }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveProduct = (productData: any) => {
    const newProduct = {
      ...productData,
      id: Date.now().toString(),
    };
    
    onProductCreated(newProduct);
   setIsModalOpen(false) 
  };

  return (
    <div className="product-manager-header">
      {/* Botón que dispara el modal */}
      <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>
        + Nuevo Producto
      </button>

      {/* Modal que renderiza el formulario de productos */}
      <ModalLayout 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false) }
        title="Crear nuevo Producto"
      >
        <ProductForm 
          tags={tags} 
          onSubmit={handleSaveProduct} 
        />
      </ModalLayout>
    </div>
  );
};

