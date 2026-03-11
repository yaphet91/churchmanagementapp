import { jsxs, jsx } from "react/jsx-runtime";
import { useStripe, useElements, LinkAuthenticationElement, PaymentElement } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
const LoadingScreen = () => {
  return /* @__PURE__ */ jsxs("div", { className: "loading-screen", children: [
    /* @__PURE__ */ jsx("div", { className: "loading-spinner" }),
    /* @__PURE__ */ jsx("p", { className: "loading-text", children: "Loading, please wait..." })
  ] });
};
const CardPay = ({ auth }) => {
  useTranslation();
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [isStripeLoading, setIsStripeLoading] = useState(true);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (stripe && elements) {
      setTimeout(() => {
        setIsStripeLoading(false);
      }, 1e3);
    }
  }, [stripe, elements]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      console.error("Stripe.js has not loaded yet.");
      return;
    }
    setIsLoading(true);
    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/donation/success_page`
        }
      });
      console.log("You bulshit run this ", error, paymentIntent);
      if (error) {
        console.error(`Payment failed: ${error.message}`);
        setMessage(error.message);
        setIsLoading(false);
      } else if (paymentIntent.status === "succeeded") {
        console.log(`Payment succeeded: ${paymentIntent.id}`);
        recordPaymentSuccess(paymentIntent);
      } else {
        console.log("Payment processing or additional authentication needed.");
        setMessage("Payment processing or additional authentication needed.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error(`Payment processing failed: ${error.message}`);
      setMessage("Payment processing failed. Please try again.");
      setIsLoading(false);
    }
  };
  const recordPaymentSuccess = async (paymentIntent) => {
    try {
      const { data } = await axios.post("/donation/success", {
        intent_id: paymentIntent.id
      });
      if (data.success) {
        console.log("Payment recorded successfully");
      } else {
        console.error("Failed to record payment success.");
      }
    } catch (error) {
      console.error(`Error recording payment: ${error.message}`);
    }
  };
  if (isStripeLoading) {
    return /* @__PURE__ */ jsx(LoadingScreen, {});
  }
  return /* @__PURE__ */ jsx("div", { className: "w-1/2", children: /* @__PURE__ */ jsx("div", { className: "border rounded-md border-gray-300 dark:border-gray-600 p-10", children: /* @__PURE__ */ jsxs("form", { id: "payment-form", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx("h2", { className: "w-full text-2xl font-semibold text-gray-500 mb-4", children: "Payment Details" }),
    /* @__PURE__ */ jsx(
      LinkAuthenticationElement,
      {
        id: "link-authentication-element",
        onChange: (event) => {
          setEmail(event.value.email);
        },
        className: "my-5",
        options: { defaultValues: { email: auth.user.email } }
      }
    ),
    /* @__PURE__ */ jsx(PaymentElement, { id: "payment-element" }),
    /* @__PURE__ */ jsx("button", { className: "btnPrimary mt-6 w-full", disabled: isLoading || !stripe || !elements, id: "submit", children: /* @__PURE__ */ jsx("span", { id: "button-text", children: isLoading ? /* @__PURE__ */ jsxs("div", { className: "flex flex-row space-x-5 items-center justify-center", children: [
      /* @__PURE__ */ jsx("div", { className: "spinner", id: "spinner" }),
      /* @__PURE__ */ jsx("h3", { children: "Payment in progress ... " })
    ] }) : "Pay now" }) }),
    message && /* @__PURE__ */ jsx("div", { id: "payment-message", children: message })
  ] }) }) });
};
const CardPay$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CardPay
}, Symbol.toStringTag, { value: "Module" }));
export {
  CardPay as C,
  LoadingScreen as L,
  CardPay$1 as a
};
