import * as React from "react";
import B29Banner from "../components/B29Banner";
import DatesList from "../components/DatesList";
import Footer from "../components/Footer";
import Img from 'gatsby-image';

const indexPage = ({ data }) => (
  <div className="w-screen h-screen">
    <Img fluid={data.textureBg.childImageSharp.fluid} className="fixed z-0 w-screen h-screen" />
    <div className="p-10 fixed top-0 right-0">
      <B29Banner />
      <DatesList />
      <Footer />
    </div>
  </div>
);

// <Img fluid={data.textureBg.childImageSharp.fluid} className="fixed" />

export const query = graphql`
  query {
    textureBg: file(relativePath: { eq: "bg-min.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default indexPage;