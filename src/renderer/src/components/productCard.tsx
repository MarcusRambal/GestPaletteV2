import './productCard.css';

interface ProductProps {
  nombre: string;
  tipo: string;
  precio: number;
  color: string;
}

export const ProductCard: React.FC<ProductProps> = ({ nombre, tipo, precio, color }) => {
  return (
    <div className="product-card" style={{ backgroundColor: color }}>
      <div className="product-info">
        <p className="product-description">{nombre}</p>
        <span className="product-category">{tipo}</span>
      </div>

      <div className="actions">
        <button className="add-button-red">+</button>
        <div className="price-tag">${precio}</div>
      </div>
    </div>
  );
};