import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import {Helmet} from 'react-helmet';
import { Toaster } from 'react-hot-toast';


const Layout = ({ children ,title,desc,keywords,author}) => {
  return (
    <div>
      <Helmet>
    <meta charset="utf-8" />
    <meta
      name="description"
      content={desc}
    />
    <meta
      name="keywords"
      content={keywords}
    />
    <meta
      name="author"
      content={author}
    />
    <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Toaster/>
      <Footer />
    </div>
  );
};

export default Layout;

Layout.defaultProps={
  title:"Trend Hive-shop Now ",
  desc:"my project",
  keywords:"trending shopping clothes",
  author:"Harsh Saini"

}