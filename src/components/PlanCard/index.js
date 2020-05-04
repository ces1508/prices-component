import React from 'react'
import PropTypes from 'prop-types'
import ProductCardFeature from './feature'
import ProductCardButton from './button'
import './planCard.css'

const PlanCard = ({ name, monthlyPrice, anuallyPrice, cardType, type, features }) => (
  <div className={`planCard ${cardType === 'suggested' ? 'planCard--suggested' : ''}`}>
    <p className='planCard__name'>{name}</p>
    <p className='planCard__price'>{type === 'monthly' ? monthlyPrice : anuallyPrice}</p>
    <div className='planCard__feature-wrapper'>
      {features.map((f, index) => (
        <ProductCardFeature 
          key={index} 
          feature={f}
          isSuggested={cardType === 'suggested'}
        />
      ))}
    </div>
    <ProductCardButton text='learn more' isSuggested={cardType === 'suggested'} />
  </div>
)

PlanCard.propTypes = {
  name: PropTypes.string.isRequired,
  monthlyPrice: PropTypes.string.isRequired,
  anuallyPrice: PropTypes.string.isRequired,
  cardType: PropTypes.oneOf(['normal', 'suggested']).isRequired,
  type: PropTypes.oneOf(['monthly', 'anually']).isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired
}

PlanCard.defaultProps = {
  cardType: 'normal',
  type: 'monthly',
  features: []
}

export default PlanCard