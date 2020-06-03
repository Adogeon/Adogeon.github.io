import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GeekversePage = () => (
  <Layout>
    <SEO title="Geekverse" />
    <main class="col-md-8 mx-auto mt-3 bg-white p-3">
      <div class="container">
        <h2 class="text-center">Summary</h2>
        <p>
          Geekverse is an ambitious project to help user to get into a fictional
          universe. Do you know how many movies the Star War franchise have ?
          How about comics ? Or TV shows ? We strive to resolve this by run user
          search through three different APIs (Marvel API, GoogleBookAPi, and
          OpenMDBApi) for results in comics, books, movie and tv-shows.
        </p>

        <div>
          <h2 class="text-center">My contribution</h2>
          <ul>
            <li> Writting the javascript for getting datafrom OpenMDBAPI </li>
            <li>
              {" "}
              Writting the main javascript to make the search bar functional
            </li>
            <li>
              {" "}
              Connect with Firebase database to store user current session{" "}
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-center">Technology</h2>
          <ul>
            <li>Google Firebase database</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        <div class="d-flex justify-content-center">
          <a
            href="https://valeriaszy.github.io/Project-One/"
            class="btn btn-link"
          >
            Visit the website
          </a>
        </div>
      </div>
    </main>
  </Layout>
)

export default GeekversePage
