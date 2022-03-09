import React from 'react'
import CurrencyInput from './CurrencyInput'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './CurrencyForm.css'

const CurrencyForm = () => {
    const [amount1, setAmount1] = useState(1)
    const [amount2, setAmount2] = useState(1)
    const [currency1, setCurrency1] = useState('USD')
    const [currency2, setCurrency2] = useState('EUR')
    const [rates, setRates] = useState([])
    // const secret = process.env.FIXER_KEY
    // const [secret, setSecret] = useState("")

    
    
    // useEffect(()=>{
    //     axios.get("http://localhost:8000/api")
    //     .then(res=> setSecret(res.data.message))
    //     .catch(err=>err)
    //     }, [])
    
    useEffect(()=>{
        axios.get(`http://data.fixer.io/api/latest?access_key=a825e4b32ae7287001e9e0ef2e74a852`)
        .then(res=> {
            setRates(res.data.rates);
        })
        }, [])
    
    useEffect(()=>{
        if (!!rates) {
            handleAmount1Change(1)
        }
        }, [rates]) 

    //keeps number totwo decimals    
    const format = (number) => {
        return number.toFixed(2);
    }

    const handleAmount1Change = (amount1) => {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
        setAmount1(amount1)
    }
    
    const handleCurrency1Change = (currency1) => {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
        setCurrency1(currency1)
    }
    
    const handleAmount2Change = (amount2) => {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]))
        setAmount2(amount2)
    }
    
    const handleCurrency2Change = (currency2) => {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]))
        setCurrency2(currency2)
    }
    return (
        <div className="convert-container">
            <h1 className="currency-text"> Currency Converter </h1>
            <div>
                <CurrencyInput
                    onAmountChange={handleAmount1Change}
                    onCurrencyChange={handleCurrency1Change}
                    currencies={Object.keys(rates)}
                    amount={amount1}
                    currency={currency1} />
                <CurrencyInput
                    onAmountChange={handleAmount2Change}
                    onCurrencyChange={handleCurrency2Change}
                    currencies={Object.keys(rates)}
                    amount={amount2}
                    currency={currency2} />
            </div>
        </div>
    )
}

export default CurrencyForm
