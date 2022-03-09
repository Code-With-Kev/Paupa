//npm install --save prop-types
import React, {useEffect} from 'react'
import './CurrencyInput.css'
import PropTypes from 'prop-types'
import './CurrencyInput.css'
import { Scatter } from 'react-chartjs-2'
const CurrencyInput = (props) => {

    return (
        <div className="group">
            <input className="currency-inputs" type="number" value={props.amount} onChange = {e => props.onAmountChange(e.target.value)}></input>
            <select style={{transform: "scale(1.3)"}} value={props.currency} onChange={e=> props.onCurrencyChange(e.target.value)}>
                {props.currencies.map(((currency, i )=>
                    <option key={i} value={currency}>{currency}</option>
                    ))}
            </select>
        </div>
    )
}

CurrencyInput.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,

}
export default CurrencyInput
