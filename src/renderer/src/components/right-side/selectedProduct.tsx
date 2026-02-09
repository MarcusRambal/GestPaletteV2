import './selectedProduct.css'
import {ProductProps} from '../../types/productProps'  

export const SelectedProduct: React.FC<ProductProps & { quantity: number }> = ({ name, type, price, color, quantity }) => {
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
            <button className="remove-button-red">Eliminar</button>
        </div>
    );
};

