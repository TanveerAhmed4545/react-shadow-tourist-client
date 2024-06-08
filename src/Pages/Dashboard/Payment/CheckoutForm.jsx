import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useBooking from "../../../hooks/useBooking";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Lottie from "lottie-react";
import loaderAnimation from "../../../assets/loader.json";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CheckoutForm = ({id}) => {
    // console.log(id);
    const {user} = useAuth();
    const navigate = useNavigate();
    const {booking,isLoading,refetch} = useBooking();
    const foundBooking = booking.find(b => b._id === id);
    // console.log(foundBooking);
    const price = foundBooking?.price;
    // console.log(price);
    const axiosSecure = useAxiosSecure();
    const [error,setError] = useState('');
     const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId,setTransactionId] = useState('');

    useEffect(()=>{
     
        if(price > 0){
            axiosSecure.post('/create-payment-intent',{price})
        .then(res=> {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
        }
    
    
      },[axiosSecure, price])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
          }
      
          const card = elements.getElement(CardElement);
      
          if (card == null) {
            return;
          }

          // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            // console.log('[error]', error);
            setError(error.message);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('');
          }

          // confirm payment 

      const {paymentIntent,error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
        payment_method: {
          card: card,
          billing_details: {
             email: user?.email || 'anonymous',
             name: user?.displayName || 'anonymous'
          } 
        }
      })

      if(confirmError){
        console.log('confirm error');
      }else{
        // console.log('payment intent',paymentIntent);
        if(paymentIntent.status=== 'succeeded'){
            // console.log('transaction id', paymentIntent.id);
            setTransactionId(paymentIntent.id);

            const payment = {
                email: user?.email,
                price: price,
                transactionId: paymentIntent.id,
                date: new Date(), 
                bookIds: foundBooking?._id,
                
              }
              const res =  await axiosSecure.post('/payments',payment)
            //   console.log('payment saved',res)
            refetch();
            if(res.data?.paymentResult?.insertedId){
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Thank you for payment",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboard/payment-history');
            }
        }
    }






    }

    if(isLoading) return <div className="flex justify-center items-center ">
    <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
    </div>

    return (
        <div>
            <div className="px-5">
             <div className="max-w-lg mx-auto my-10 p-5 md:p-10 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Payment</h2>
      <form
       onSubmit={handleSubmit}
       >
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-700 font-bold mb-5">
            Card Number
          </label>
          <CardElement
            id="cardNumber"
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
        </div>
        {booking?.length > 3 && (
        <button className="bg-green-600 text-white btn">Apply Discount</button>
      )}
       
        <button
          type="submit"
          disabled={!stripe || !clientSecret }
          className="bg-blue-500 btn mt-5 text-white font-bold  w-full rounded "
        >
          Pay
        </button>
        <p className="text-red-600 py-3">{error}</p>
        {transactionId && <p className="text-green-500">Your transaction id : {transactionId}</p>}
      </form>
    </div>
        </div>
        </div>
    );
};

export default CheckoutForm;