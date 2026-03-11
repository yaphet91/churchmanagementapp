import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useStripe, useElements, PaymentRequestButtonElement } from "@stripe/react-stripe-js";
import StatusMessages, { useMessages } from "./StatusMessages-PgTJa3iQ.js";
const ApplePay = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentRequest, setPaymentRequest] = useState(null);
  const [messages, addMessage] = useMessages();
  useEffect(() => {
    if (!stripe || !elements) {
      return;
    }
    const pr = stripe.paymentRequest({
      country: "AE",
      currency: "aed",
      total: {
        label: "Demo total",
        amount: 1999
      },
      requestPayerName: true,
      requestPayerEmail: true
    });
    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
      } else {
        console.log("Payment request not available");
      }
    }).catch((error) => {
      console.error("Error checking payment availability: ", error);
    });
    pr.on("paymentmethod", async (e) => {
      const { error: backendError, clientSecret } = await fetch(
        "/create_donation_intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            paymentMethodType: "card",
            currency: "aed"
          })
        }
      ).then((r) => r.json());
      if (backendError) {
        addMessage(backendError.message);
        console.log(backendError.message);
        return;
      }
      addMessage("Client secret returned");
      console.log("Client Scret retured");
      const {
        error: stripeError,
        paymentIntent
      } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: e.paymentMethod.id
      }, { handleActions: false });
      if (stripeError) {
        addMessage(stripeError.message);
        console.log(stripeError.message);
        return;
      }
      addMessage(`Payment ${paymentIntent.status}: ${paymentIntent.id}`);
      console.log(`Payment ${paymentIntent.status}: ${paymentIntent.id}`);
    });
  }, [stripe, elements, addMessage]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    !paymentRequest && console.log("no payment request", paymentRequest),
    paymentRequest && /* @__PURE__ */ jsx(PaymentRequestButtonElement, { options: { paymentRequest } }),
    /* @__PURE__ */ jsx(StatusMessages, { messages })
  ] });
};
export {
  ApplePay as default
};
