import React from "react";
import Navbar from "../Shared/Navbar";
import mypic from "../../img/mypic.jpg";

function MyPortfolio() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex  flex-col align-center items-center ">
        <img src={mypic} className="object-center mt-20 h-[600px] w-[500px] " />
        <div className="text-center">
          <h1 className="font-bold text-[25px]">Name: Md. Fojlul Karim</h1>
          <h1 className="font-semibold">
            Department of Account Govt Shahsultan College Bogura
          </h1>
          <p className=" mt-2 ">
            My goal is to be a full Stack web-developer but my present focus on
            frontend development. After finishing my frontend jurney i search
            fro job.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyPortfolio;
