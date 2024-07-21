import React from 'react'
import ProductImages from './ProductImages/ProductImages'
import ProductDescription from './ProductDescription/ProductDescription'

const App = () => {
  return (
      <div className="product-section">
        <ProductImages />
        <ProductDescription />
      </div>
  )
}

export default App
