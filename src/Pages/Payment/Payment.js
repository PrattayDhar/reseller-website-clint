import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chekout from '../Prepayment/Chekout';
const stripePromise = loadStripe('pk_test_51M8qimGPXpMGbXvmpY6uaRVHTd1dNLaMsTetAb2Nw8dgp0Bh2lBNWs8BT7oTSXrO6DZRRZM5CF30XGL6ameA0rCV00N4J8Rrtl');

const Payment = () => {
const pay=useLoaderData()
console.log(pay);
    return (
        <div className=' w-75 align-item-center m-5 p-5'>
                <p className='pb-5'>Please Complete Payment</p>

            <Elements stripe={stripePromise}>
     <Chekout pay={pay}></Chekout>
    </Elements>
        </div>
    );
};

export default Payment;