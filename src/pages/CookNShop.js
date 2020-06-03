import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CookNShopPage = () => (
  <Layout>
    <SEO title="Cook-N-Shop" />
    <main class="col-md-8 mx-auto mt-3 bg-white p-3">
      <div class="container">
        <h2 class="text-center">Summary</h2>
        <p>
          Cook-N-Shop is a simple website that users can use to upload, search,
          and share their favorite recipes.
        </p>

        <div>
          <h2 class="text-center">My contribution</h2>
          <ul>
            <li> Setting up the basic Express server </li>
            <li> Setting up the MySQL databse and Sequelize schema</li>
            <li> Setting up Handlebar.js pages and partials</li>
            <li>
              {" "}
              Creating routing for connecting the front end with database{" "}
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-center">Technology</h2>
          <ul>
            <li>Handlebar.js </li>
            <li>MySQL and Sequelize</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        <div class="d-flex justify-content-center">
          <a href="https://project2group2.herokuapp.com/" class="btn btn-link">
            Visit the website
          </a>
        </div>
      </div>
    </main>
  </Layout>
)

export default CookNShopPage
