import * as React from "react";
import B29Banner from "../components/B29Banner";
import DatesList from "../components/DatesList";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const indexPage = ({ data }) => (
   <div className="p-1 container mx-auto">
      <SEO title="June Tour 2021 | B29 MUSIC" />
      <B29Banner />
      <DatesList />
      <Footer />
    </div>
);

/*<Img fluid={data.textureBg.childImageSharp.fluid} className="fixed" />

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
*/

export default indexPage;