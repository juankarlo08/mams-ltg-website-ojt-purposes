import React from 'react';
import { Helmet } from 'react-helmet-async';
import FranchiseProgramSection from '../components/FranchisingComponent/FranchiseProgramSection';
import PricingSection from '../components/FranchisingComponent/PricingSection';
import FAQSection from '../components/FranchisingComponent/FAQSection';

const Franchising = () => {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LT&G Credit Line",
    "url": "https://ltgcreditline.com/franchising",
    "logo": "https://ltgcreditline.com/logo.png",
    "description": "LT&G Credit Line offers microlending franchise opportunities in the Philippines, providing entrepreneurs with a proven lending business model, operational support, and scalable income potential.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PH"
    },
    "makesOffer": {
      "@type": "Offer",
      "name": "Microlending Franchise Opportunity",
      "description": "Franchise opportunities for entrepreneurs seeking to operate a microlending business under the LT&G Credit Line brand."
    }
  };

  return (
    <>
      <Helmet>
        <title>Franchise | LT&G Credit Line</title>

        <meta
          name="description"
          content="Explore LT&G Credit Line’s franchising program. Learn about investment costs, franchise support, and pricing."
        />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

      </Helmet>

      <PricingSection />
      <FranchiseProgramSection />
      <FAQSection />
    </>
  );
};

export default Franchising;