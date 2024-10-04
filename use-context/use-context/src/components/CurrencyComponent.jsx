import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

function CurrencyComponent() {
    const { handleCurrencyChange } = useContext(CurrencyContext);
  
    return (
        <select 
            onChange={(e) => {
                console.log(e.target.value);
                handleCurrencyChange(e.target.value);
            }} 
            className="bg-gray-800 text-white border border-gray-600 rounded p-2 hover:bg-gray-700 transition-colors"
        >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
        </select>
    );
}

export default CurrencyComponent;
