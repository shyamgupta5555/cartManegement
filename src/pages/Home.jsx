import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";

import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")` }}>
        <div className="headerContainer">
          <h1 style={{color :"white"}}>Food Website</h1>
          <p style={{color :"white"}}>Best Food In India</p>
          <Link to="/menu">
            <button >ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
