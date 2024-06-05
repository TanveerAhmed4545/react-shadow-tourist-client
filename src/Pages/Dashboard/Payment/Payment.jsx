import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";

const stripePromise  = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
const Payment = () => {
    const {id} = useParams();
    // console.log(id);
    
    return (
        <div>
    <Helmet>
        <title>Shadow Tourist || Payment</title>
      </Helmet>
            

            <div>
            <Elements stripe={stripePromise}>
             <CheckoutForm id={id}></CheckoutForm>
           </Elements>
        </div>
        </div>
    );
};

export default Payment;