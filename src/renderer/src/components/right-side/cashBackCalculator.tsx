import './cashBackCalculator.css';


export const CashBackCalculator  = () => {
    return (
        <div className="cashback-calculator-container">
            <h2>Calculadora de Vuelto</h2>
            <div className="input-group">
                <label htmlFor="cash">Efectivo Recibido:</label>
                <input type="number" id="cash" placeholder="$0.00" />
            </div>
            <button className="calculate-button">Calcular Vuelto</button>
            <div className="change-result">
                <h3>Vuelto: $0.00</h3>
            </div>
        </div>
    )

}