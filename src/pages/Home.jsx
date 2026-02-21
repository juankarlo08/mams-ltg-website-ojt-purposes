import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HomeComponent/HeroSection";
import FeatureListSection from "../components/HomeComponent/FeatureListSection";
import TestimonialSection from "../components/HomeComponent/TestimonialSection";
import NewsAndEventSection from "../components/HomeComponent/NewsAndEventSection";
import CTASection from "../components/HomeComponent/CTASection";
import CustomerTestimonial from "../components/HomeComponent/CustomerTestimonial";
import LogoClouds from "../components/HomeComponent/LogoClouds";

const Home = () => {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LT&G Credit Line",
    "url": "https://ltgcreditline.com",
    "logo": "https://ltgcreditline.com/logo.png",
    "description": "LT&G Credit Line offers a structured microlending franchise opportunity in the Philippines, empowering entrepreneurs to build their own lending business with a proven system and operational support.",
    "areaServed": {
      "@type": "Country",
      "name": "Philippines"
    }
  };

  return (
    <>
      <Helmet>
        <title>Microlending Franchise in the Philippines | LT&G Credit Line</title>

        <meta
          name="description"
          content="Join LT&G Credit Line, the first microlending franchise in the Philippines. Empower your future with accessible loans and nationwide opportunities."
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://ltgcreditline.com/" />

        <meta property="og:title" content="Microlending Franchise in the Philippines | LT&G Credit Line" />
        <meta property="og:description" content="Join LT&G Credit Line, the first microlending franchise in the Philippines." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ltgcreditline.com/" />
        <meta property="og:image" content="https://ltgcreditline.com/preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <HeroSection />
      <LogoClouds />
      <FeatureListSection />
      <CustomerTestimonial />
      <TestimonialSection />
      <NewsAndEventSection />
      <CTASection />
    </>
  );
};

export default Home;