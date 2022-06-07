import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";

function service() {
  return (
    <div className="container mx-auto">
      <div className="service my-[100px]">
        <div className="mb-16 ">
          <h3 className="font-bold text-secondary text-[20px] uppercase text-center">
            our services
          </h3>
          <h1 className=" capitalize text-[36px] text-center">
            Services We Provide
          </h1>
        </div>

        <div
          className="grid sm:grid-cols-1 md:grid-cols-2 
        
        lg:grid-cols-3

        gap-10 justify-items-center "
        >
          <div
            className="card w-96  text-primary-content"
            style={{ boxShadow: " 3px 4px 10px 2px rgba(0,0,0,0.1)" }}
          >
            <div className="card-body text-center flex items-center ">
              <img src={fluoride} className="h-auto w-30 mb-6" alt="fluoride" />
              <h2 className="text-[20px] font-semibold">Fluoride Treatment</h2>
              <p className="text-[16px]">
                Lorem Ipsum is simply dummy printing and typesetting indust
                Ipsum has been the
              </p>
            </div>
          </div>

          <div
            className="card w-96 text-primary-content  "
            style={{ boxShadow: " 3px 4px 10px 2px rgba(0,0,0,0.1)" }}
          >
            <div className="card-body text-center flex items-center ">
              <img src={cavity} className="h-auto w-24 mb-6" alt="fluoride" />
              <h2 className="text-[20px] font-semibold">Cavity Filling</h2>
              <p className="text-[16px]">
                Lorem Ipsum is simply dummy printing and typesetting indust
                Ipsum has been the
              </p>
            </div>
          </div>

          <div
            className="card w-96 text-primary-content "
            style={{ boxShadow: " 3px 4px 10px 2px rgba(0,0,0,0.1)" }}
          >
            <div className="card-body text-center flex items-center ">
              <img
                src={whitening}
                className="h-auto w-24 mb-6"
                alt="fluoride"
              />
              <h2 className="text-[20px] font-semibold">Teeth Whitening</h2>
              <p className="text-[16px]">
                Lorem Ipsum is simply dummy printing and typesetting indust
                Ipsum has been the
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* {next section} */}
      <div class="hero pt-6 mb-[200px]">
        <div class="hero-content flex-col lg:flex-row  lg:text-left sm:text-center ">
          <img
            src={treatment}
            class="max-w-sm rounded-lg shadow-2xl mr-[100px]"
          />
          <div>
            <h1 class="text-[48px] text-accent font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p class="py-6 text-[16px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button class="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default service;
