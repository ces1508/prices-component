export default  {
  plans: [
    {
      id: 'basic',
      name: 'basic',
      anuallyPrice: '199.99',
      monthlyPrice: '19.99',
      features: [
        '500 GB storage',
        '2 user allowed',
        'send up to 3 GB'
      ]
    },
    {
      id: 'professional',
      name: 'professional',
      anuallyPrice: '249.99',
      monthlyPrice: '24.99',
      features: [
        '1 TB storage',
        '5 user allowed',
        'send up to 10 GB'
      ],
      isSuggested: true
    },
    {
      id: 'master',
      name: 'master',
      monthlyPrice: '39.99',
      anuallyPrice: '399.99',
      features: [
        '2 TB storage',
        '10 user allowed',
        'send up to 20 GB'
      ]
    },
  ]
  
}