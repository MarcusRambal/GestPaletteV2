import './productCard.css';
import {ProductProps} from '../../../../types/productProps'

interface ProductCardProps extends ProductProps {
  onAdd: () => void;
}


export const ProductCard: React.FC<ProductCardProps> = ({ name, type, price, color, onAdd }) => {
  return (
    <div className="product-card" style={{ backgroundColor: color }}>
      <div className="product-info">
        <p className="product-description">{name}</p>
        <span className="product-category">{type}</span>
      </div>

      <div className="actions">
        <button className="add-button-red" onClick={onAdd}>+</button>
        <div className="price-tag">${price}</div>
      </div>
    </div>
  );
};