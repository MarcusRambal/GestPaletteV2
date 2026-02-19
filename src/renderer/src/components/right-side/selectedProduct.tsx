import './selectedProduct.css'
import {ProductProps} from '../../types/productProps'  

interface SelectedProductProps extends ProductProps {
    quantity: number;
    onRemove: () => void;
}

export const SelectedProduct: React.FC<SelectedProductProps> = ({name, type, price, color, quantity, onRemove }) => {
    const totalPorProducto = price * quantity;

    return (
        <div className="selected-product-grid" style={{ backgroundColor: color }}>
            <div className="selected-product-info">
                <h2>{name}</h2>
                <p>{type}</p>
            </div>

            <div className="selected-quantity">
                <span>x{quantity}</span>
            </div>

            <div className="selected-unit-price">
                <small>Unidad: </small>${price}
            </div>

            <div className="selected-total">
                ${totalPorProducto}
            </div>
            <button className="remove-button-red" onClick={onRemove}>Eliminar</button>
        </div>
    );
};

