import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">ShopApp</h1>
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/items">Items</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <div className="home-content">
        <h1>Welcome to ShopApp</h1>
        <p>Your one-stop shop for all your needs!</p>
        <div className="home-actions">
          <Link to="/items" className="btn-primary">Browse Items</Link>
          <Link to="/cart" className="btn-secondary">View Cart</Link>
        </div>
      </div>
    </>
  )
}

export default App
