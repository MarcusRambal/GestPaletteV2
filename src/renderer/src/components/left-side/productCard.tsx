import './productCard.css';
import {ProductProps} from '../../types/productProps'


export const ProductCard: React.FC<ProductProps> = ({ name, type, price, color }) => {
  return (
    <div className="product-card" style={{ backgroundColor: color }}>
      <div className="product-info">
        <p className="product-description">{name}</p>
        <span className="product-category">{type}</span>
      </div>

      <div className="actions">
        <button className="add-button-red">+</button>
        <div className="price-tag">${price}</div>
      </div>
    </div>
  );
};