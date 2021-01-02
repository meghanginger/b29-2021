import * as React from "react";
import B29Banner from "../components/B29Banner";
import DatesList from "../components/DatesList";
import Footer from "../components/Footer";
import Img from 'gatsby-image';

const indexPage = ({ data }) => (

   <div className="p-10">
      <B29Banner />
      <DatesList />
      <DatesList />
      <DatesList />
      <Footer />
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