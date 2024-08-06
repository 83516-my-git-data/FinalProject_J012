import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Faq = () => {
  return (
    <div className="container mt-5">
      <img src="https://via.placeholder.com/1200x300" alt="Terms" className="img-fluid mb-4" />
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Terms and Conditions</h2>
          <hr />
          <h4>1. Account Creation and Eligibility</h4>
          <p>
            To create an account and use our platform, you must be at least 18 years of age (or the legal age of majority in your location). 
            You must provide accurate personal information during registration. Your account may be suspended or terminated if you violate these terms, 
            provide false information, or attempt to create multiple accounts.
          </p>

          <h4>2. Listing Accuracy and Responsibility</h4>
          <p>
            Sellers are solely responsible for ensuring the accuracy and completeness of their vehicle listings. This includes detailed descriptions, 
            truthful disclosures of any known defects, accurate mileage, and clear photographs. Misrepresenting a vehicle or intentionally concealing 
            information may result in listing removal, account restrictions, or legal action. We encourage buyers to thoroughly inspect vehicles before purchase.
          </p>

          <h4>3. Buyer and Seller Conduct</h4>
          <p>
            Our platform is built on respect and professionalism. We expect all users to conduct themselves in a courteous manner. Harassment, 
            discrimination, threats, or any form of abusive behavior are strictly prohibited. Violations of this policy may result in account restrictions, 
            suspension, or permanent termination.
          </p>

          <h4>4. Transaction Disclaimer</h4>
          <p>
            Our platform serves as a marketplace to connect buyers and sellers. We are not a party to the actual sales transactions or involved in the 
            negotiation, financing, or transfer of ownership. Any agreements, warranties, or disputes arising from a vehicle sale are the sole responsibility 
            of the buyer and seller. We strongly advise users to exercise due diligence and consider using legal contracts when completing transactions.
          </p>

          <h4>5. Intellectual Property Rights</h4>
          <p>
            All content on our platform, including text, images, logos, and software, is the property of MyGaddi.com or its licensors. You may not copy, 
            reproduce, distribute, or create derivative works from our content without express written permission. Users who upload content to our platform 
            grant us a limited license to use it for displaying listings and operating our service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
