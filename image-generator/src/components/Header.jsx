import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='bg-slate-600 text-white p-2 flex justify-between'>
        <h1><Link to="/">Home</Link></h1>
      <ul className='flex justify-between gap-1'>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/">Home</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
