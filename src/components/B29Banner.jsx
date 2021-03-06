import React from 'react';

const B29Banner = () => (
  <div className="flex flex-col items-center">
    <img className="lg:w-2/3 xs:w-7/10 mx-auto py-4" src={require("../images/home-image.jpg")} alt="b29 artwork" />
    <h2 className="text-2xl text-center">JUNE 2021</h2>
    <h2 className="text-lg text-center font-bold">NORTONS, DIGBETH</h2>
    <hr className="border border-black w-2/3 my-3" />
  </ div>
)

export default B29Banner;