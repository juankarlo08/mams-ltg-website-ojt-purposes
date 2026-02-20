import React from 'react'
import { Helmet } from 'react-helmet-async';
import ContactFormSection from '../components/ContactComponent/ContactFormSection';
import ApplyForLoanSection from '../components/ContactComponent/ApplyForLoanSection';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | LT&G Credit Line</title>
        <meta
          name="description"
          content="Get in touch with LT&G Credit Line for inquiries about our microlending franchise opportunities."
        />
      </Helmet>

      <ContactFormSection />
      <ApplyForLoanSection />
    </>
  )
}

export default Contact