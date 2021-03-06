import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";
export default function contact() {
  return (
    <Layout>
      <SEO title="Contact" keywords={[`contact`]} />
      <div className="container">
        <h1 className="title">Contact</h1>
        <hr className="title-underline" />
        <p>
          Interested in having me <strong>speak</strong> at your event? Creating
          and/or <strong>teaching</strong> content? Have a suggestion for
          content? Maybe just a general question? I would love to hear from you!
        </p>
        <ContactForm />
      </div>
    </Layout>
  );
}
