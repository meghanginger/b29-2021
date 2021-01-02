import * as React from "react"
import B29Banner from "../components/B29Banner"
import DatesList from "../components/DatesList"
import Footer from "../components/Footer"
import ProofTailwindIsWorking from "../components/ProofTailwindIsWorking";

const indexPage = () => (
  <div className="text-gray">
    <ProofTailwindIsWorking />
    <B29Banner />
    <DatesList />
    <Footer />
  </div>
);

export default indexPage;