import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <main class="col-md-8 mx-auto mt-3 bg-white p-3">
      <div class="col-md-10">
        <div class="row">
          <div class="col-md-12">
            <h1 class="text-primary">Portfolio</h1>
          </div>
        </div>
        <div class="row d-flex justify-content-between my-3">
          <div class="card col-md-4 p-0 border-0 text-center bg-secondary">
            <a href="Geekverse.html" class="btn">
              <img
                src="asset/images/Geekverse logo.jpg"
                alt="Project1"
                class="card-img-top my-4"
              />
              <div class="card-body bg-info text-light">
                <p class="card-text">Geekverse</p>
              </div>
            </a>
          </div>
          <div class="card col-md-4 p-0 border-0 text-center bg-secondary">
            <a href="Cook-N-Shop.html" class="btn">
              <img
                src="asset/images/Cook-N-Shop.png"
                alt="Project2"
                class="card-img-top my-5"
              />
              <div class="card-body bg-info text-light">
                <p class="card-text">Cook-N-Shop</p>
              </div>
            </a>
          </div>
        </div>
        <div class="row d-flex justify-content-between my-3">
          <div class="card col-md-4 p-0 border-0 text-center bg-secondary">
            <a href="LFF.html" class="btn">
              <img
                src="asset/images/LonelyFriendFinder.jpg"
                alt="Project3"
                class="card-img-top my-4"
              />
              <div class="card-body bg-info text-light">
                <p class="card-text">Lonely Friend Finder</p>
              </div>
            </a>
          </div>
        </div>
        <div class="row d-flex justify-content-between my-3">
          <div class="card col-md-4 p-0 border-0 text-center bg-secondary">
            <a href="LFF.html" class="btn">
              <img
                src="asset/images/LonelyFriendFinder.jpg"
                alt="Project4"
                class="card-img-top my-4"
              />
              <div class="card-body bg-info text-light">
                <p class="card-text">Habit Tracker</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  </Layout>
)

export default PortfolioPage
