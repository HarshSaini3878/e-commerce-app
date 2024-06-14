import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout
    title= "Privacy Policy - Trend Hive"
  desc="Read our privacy policy to understand how we collect, use, and protect your data at Trend Hive."
  keywords= "privacy policy, data protection, Trend Hive, user privacy"
  author= "Harsh Saini"
    >
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            <strong>Data Collection and Usage:</strong> We collect personal
            information such as name, email address, shipping address, and
            payment details to fulfill orders and provide customer support. Your
            information may also be used for marketing purposes with your
            consent, which you can withdraw at any time.
          </p>


          <p>
            <strong>User Rights:</strong> You have the right to access, correct,
            or delete your personal information. You can also request a copy of
            the data we hold about you. To exercise these rights or inquire
            about our privacy practices, please contact us through the contact
            information provided below.
          </p>

          <p>
            <strong>Changes to Privacy Policy:</strong> We may update this
            privacy policy periodically to reflect changes in our data practices
            or legal requirements. Any significant changes will be communicated
            to you through email or prominent notices on our website.
          </p>

          <p>
            <strong>Contact Information:</strong> If you have questions or
            concerns about our privacy policy or data practices, please contact
            us at <a href="mailto:contact@email.com">contact@email.com</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
