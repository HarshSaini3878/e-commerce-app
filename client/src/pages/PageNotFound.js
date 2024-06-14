import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

function PageNotFound() {
  return (
    <div>
      <Layout 
      title= "404 Page Not Found - Trend Hive"
      desc= "Oops! The page you're looking for does not exist. Go back to the homepage or contact us for assistance."
      keywords= "404, page not found, Trend Hive, error page"
      author= "Harsh Saini">
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops ! Page Not Found</h2>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>
      </Layout>
    </div>
  )
}

export default PageNotFound
