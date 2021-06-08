import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_KEY

  const onToken = token => {
    axios({
      url: 'payment',
      method:'post',
      data:{
        amount:priceForStripe,
        token
      }
    }).then(responce=>{
      alert('payment successful')
    }).catch(err =>{
      console.log('payment error', JSON.parse(err));
      alert(
        'there was an issue with your payment. please ensure')
    })
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Maple Market.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
