import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutFrom = ({appointment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionID, setTransactonID] = useState('');

    // send price to the backend api 
    
    const [clientSecret,setClientSecret] = useState('');
    const {_id,price,patient,patientName} = appointment;

    useEffect(()=>{
        fetch('https://doctor-portal-server-kbzx.vercel.app/create-payment-intent',{
            method:'POST',
            headers: {
                'content-type':'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({price})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.clientSecret){
                setClientSecret(data.clientSecret)
            }
        })

    },[price])



    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
        

          setCardError(error?.message || "")
          setSuccess('')
          setProcessing(true)

          //confirm card payment
          const {paymentIntent, error : intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email:patient
                },
              },
            },
          );

          if(intentError){
              setCardError(intentError?.message)
              setSuccess('')
              setProcessing(false)
          }
          else{
              setCardError('')
              setTransactonID(paymentIntent.id)
              console.log(paymentIntent);
              setSuccess('Your payment is completed')

            // store payment on database
            const payment={
                appointment:_id,
                transactionID: paymentIntent.id,
                appointment:appointment
            }

              fetch(`https://doctor-portal-server-kbzx.vercel.app/bookings/${_id}`,{
                  method:'PATCH',
                  headers: {
                    'content-type':'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body:JSON.stringify(payment)

              }).then(res=>res.json())
              .then(data=>{
                  setProcessing(false)
                  console.log(data);
              })


          }
    }   

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || success}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p>{success}</p>
                    <p>Your transaction id : <span className='text-orange-500 font-bold'>{transactionID}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutFrom;