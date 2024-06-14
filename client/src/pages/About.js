import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <p style={{ textAlign: 'justify', marginTop: '20px', fontFamily: 'Poppins, sans-serif', fontSize: '16px', lineHeight: '1.6' }}>
  <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#333' }}>WELCOME</span> to TrendHive, your premier destination for the latest trends in fashion, technology, and lifestyle. Founded with a passion for innovation and style, TrendHive strives to curate a unique shopping experience that merges cutting-edge products with exceptional customer service.

  Our journey began with a vision to redefine online shopping by offering a handpicked selection of products that embody quality, functionality, and trendsetting designs. Whether you're looking for the latest fashion trends, innovative gadgets, or stylish home decor, TrendHive is your go-to source.

  At TrendHive, we prioritize customer satisfaction above all else. Our dedicated team works tirelessly to ensure every aspect of your shopping experience exceeds expectations. 

  Join us in exploring the world of TrendHive, where style meets substance and innovation meets inspiration. Discover your next obsession and elevate your lifestyle with TrendHive today.
</p>


        </div>
      </div>
    </Layout>
  );
};

export default About;