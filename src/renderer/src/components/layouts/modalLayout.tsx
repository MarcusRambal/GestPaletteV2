import React from 'react';
import styles from './modalLayout.module.css';

interface ModalLayoutProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode; 
}

const ModalLayout: React.FC<ModalLayoutProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <button onClick={onClose}>&times;</button>
          <h3>{title}</h3>
        </div>
        <div className={styles.modalBody}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalLayout;