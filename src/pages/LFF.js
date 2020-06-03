import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const lffPage = () => (
  <Layout>
    <SEO title="LFF" />
    <main class="col-md-8 mx-auto mt-3 bg-white p-3">
      <div class="container">
        <div>
          <h2 class="text-center">Summary</h2>
          <p>
            The project started to resolve one simple problem: you have a plan
            for this weekend but noone to enjoy it with. To answer your cry of
            anguish, we develop Lonely Friend Finder. Simply go on the website,
            log in to your account and post you events. Then wait for lonely but
            fun-loving soul in your area petition to join your events. You
            decide who will join you on this adventure then simply show up and
            have a fun time with new-fangle friends.
          </p>
        </div>

        <div>
          <h2 class="text-center">My contribution</h2>
          <ul>
            <li> Setting up the database schema </li>
            <li> Set up the basic Express server </li>
            <li> Help debugging React pages </li>
            <li> Styling for the modals components</li>
          </ul>
        </div>

        <div>
          <h2 class="text-center">Technology</h2>
          <ul>
            <li>MongoDB & Mongoose.js</li>
            <li>React.js</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>React-bootstrap</li>
          </ul>
        </div>

        <div class="d-flex justify-content-center">
          <a
            href="https://blooming-escarpment-40701.herokuapp.com/"
            class="btn btn-link"
          >
            Visit the website
          </a>
        </div>
      </div>
    </main>
  </Layout>
)

export default lffPage
