import { useState } from "react";
import Joyride, { type Step } from "react-joyride";
import HomePage from "./components/modules/home/HomePage";










function App() {

const [steps] = useState<Step[]>([
  {
    target: "#login",
    content: "Already have an account? Click here to log in securely and access your wallet.",
  },
  {
    target: "#signup",
    content: "New here? Create your Nexus Wallet account in just a few steps and get started instantly.",
  },
  {
    target: "#joy-features",
    content: "Explore powerful features like instant transfers, global payments, and bank‑grade security.",
  },
  {
    target: "#joy-about",
    content: "Explore powerful more about us.",
  },
  {
    target: "#joy-contact",
    content: "Need help or have questions? Reach out to our support team anytime from here.",
  },
]);














  return (
    <>
    <Joyride
        steps={steps}
        continuous
        showSkipButton
        showProgress
        scrollToFirstStep
        scrollOffset={100} 
        styles={{
          options: {
            primaryColor: "#4f46e5", 
          },
        }}
      />
    <HomePage/>
    </>
  )
}

export default App