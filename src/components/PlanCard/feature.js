import React from 'react'

const ProductCardFeature = ({ feature, isSuggested }) => (
  <p className={`planCard__feature ${isSuggested ? 'planCard__feature--suggested' : ''}`}>
    {feature}
  </p>)

export default ProductCardFeature

