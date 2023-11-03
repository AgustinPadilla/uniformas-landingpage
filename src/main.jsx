import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContactProvider } from './context/contact.jsx'
import { ProductProvider } from './context/product.jsx'
import { AboutUsProvider } from './context/aboutus.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactProvider>
      <ProductProvider>
        <AboutUsProvider>
          <App />
        </AboutUsProvider>
      </ProductProvider>
    </ContactProvider>
  </React.StrictMode>
)
