import React from 'react';
import './modalLayout.css';

interface ModalLayoutProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode; 
}

const ModalLayout: React.FC<ModalLayoutProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" >
        <div className="modal-header">
        <button onClick={onClose}>&times;</button>
          <h3>{title}</h3> 
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalLayout;