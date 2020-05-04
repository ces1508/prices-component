import React from 'react'

const ProductCardButton = ({ text, isSuggested }) => (
  <button className={`planCard__button ${isSuggested ? 'planCard__button--suggested' : ''}`}>
    {text}
  </button>
)

export default ProductCardButton
