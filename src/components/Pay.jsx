import React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div`

`

const Button = styled.button`

`

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null)
    const onToken = (token) =>{
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try{
            const res = await axios.post(
                "http://localhost:5000/api/checkout/payment",
                {
                    tokenId: stripeToken.id,
                    amount: 2000,
                }
            );
                console.log(res.data);
            }catch(err){
                console.log(err)
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken]);


    return (
        <Container>
            <StripeCheckout 
            name="Text Company"
            billingAddress
            shippingAddress
            description = "Your Total is 20Yen"
            amount={2000}
            token={onToken}
            stripeKey={KEY}
            >
                <Button>
                    Pay
                </Button>            
            </StripeCheckout>
        </Container>
    )
}

export default Pay
