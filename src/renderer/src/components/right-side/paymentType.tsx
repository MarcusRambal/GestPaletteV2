import './paymentType.css';


export const PaymentType = () => {

    return ( 
            <div className="payment-type-container">
                <div className = "payment-select">
                    <select name="payment-type" id="payment-type">
                    <option value="opcion0">Metodo de pago</option>
                    <option value="opcion1">Hatsune Miku</option>
                    <option value="opcion2">Kagamine Rin</option>
                    <option value="opcion3">Kagamine Len</option>
                    <option value="opcion4">Megurine Luka</option>
                    <option value="opcion5">KAITO</option>
                    <option value="opcion6">MEIKO</option>
                    <option value="opcion7">Kasane Teto</option>
                </select>
                </div>
            
                <input type="text" placeholder="Cantidad en efectivo" />
                <input type="text" placeholder="Cantidad en tarjeta/transferencia/etc" />
            </div>
    )

}