import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContex } from '../../Context/ShopContex'
import cart_icon from '../Assets/cart_icon.png'
import logo from '../Assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  const {getTotalCartItems} = useContext(ShopContex)
  const [menu, setMenu] = useState('shop')
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>FAZ SHOP</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}><Link to={'/'} style={{ textDecoration: 'none' }}>Shop</Link>{menu === 'shop' ? <hr /> : ''}</li>
        <li onClick={() => setMenu("mens")}><Link to={'/mens'} style={{ textDecoration: 'none' }}>Men</Link>{menu === 'mens' ? <hr /> : ''}</li>
        <li onClick={() => setMenu("womens")}><Link to={'/womens'} style={{ textDecoration: 'none' }}>Women</Link>{menu === 'womens' ? <hr /> : ''}</li>
        <li onClick={() => setMenu("kids")}><Link to={'/kids'} style={{ textDecoration: 'none' }}>Kid</Link>{menu === 'kids' ? <hr /> : ''}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to={'/login'} style={{ textDecoration: 'none' }}><button>Login-FAZ</button></Link>
        <Link to={'/cart'} style={{ textDecoration: 'none' }}><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
