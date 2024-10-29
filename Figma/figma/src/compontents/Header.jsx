import React from 'react'
import "../style/header.css"
function Header() {
  return (
    <header>
        <h1>reMarkable</h1>
        <div>
            <select>
                <option value="desktop">About Remarkable 2</option>
                <option value="tablet">Tablet</option>
                <option value="mobile">Mobile</option>
            </select>
            <a>Shop</a>
            <a>For Business</a>
            <select>
                <option value="desktop">FAQ & Support</option>
                <option value="tablet">Tablet</option>
                <option value="mobile">Mobile</option>
            </select>
            <select>
                <option value="desktop">More</option>
                <option value="tablet">Tablet</option>
                <option value="mobile">Mobile</option>
            </select>
            
        </div>
        <button>
            Buy Now
        </button>
    </header>
  )
}

export default Header
