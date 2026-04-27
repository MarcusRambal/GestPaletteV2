import { useState } from 'react';
import './cashBackCalculator.css';


export const CashBackCalculator: React.FC<{ total: number }> = ({ total }) => {

     const [clientCash, setClientCash] = useState('')
    return (
        <div className="cashback-calculator-container">
            <h2>Calculadora de Vuelto</h2>
            <div className="input-group">
                <label htmlFor="cash">Total Recibido:</label>
                <input type="number" id="cash" placeholder="$0" value={clientCash} onChange={(e) => setClientCash(e.target.value)} />
            </div>
            <div className="change-result">
                <h3>Vuelto: ${clientCash ? (parseFloat(clientCash) - total).toLocaleString('es-CO'): '0.00'}   </h3>
            </div>
        </div>
    )

}