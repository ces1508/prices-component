import React, { useState } from 'react';
import Header from './components/header'
import Switch from './components/switch'
import PlandCard from './components/PlanCard'
import data from './data'
import './globals.css'
import './index.css'


function App() {
  const [subscriptionType, setSubscriptionType] = useState('anually')
  function handleChange(value) {
    if (value) return setSubscriptionType('monthly')
    setSubscriptionType('anually')
  }
  return (
    <div className='app'>
      <div className="main-wrapper">
        <Header>
          <Switch handleChange={handleChange}/>
        </Header>
        <section className="plans-wrapper">
          {data.plans.map(plan => (
            <PlandCard
              type={subscriptionType}
              key={plan.id}
              {...plan}
              cardType={plan.isSuggested ? 'suggested' : 'normal'}
            />
          ))}
        </section>
      </div>

    </div>
  );
}

export default App;
