import StripeCheckout from "react-stripe-checkout";

const StripeChekoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51J4Ki6SI3WyaUR0E9TEvSyczs7efXUuDsPTugbyffYw17YPkWl7ebOLLxUItKtuz0ma71INWc4Md0Nw0gtg8r0jy002bGyPhSd";

    const onToken = token => {
        console.log('Token:',token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout 
            label="Pay Now" 
            name="CRWN clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is ${price}`}
            amount={ priceForStripe }
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={ publishableKey }
        />
    )
}

export default StripeChekoutButton;