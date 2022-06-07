import React from "react";
import quote from "../../assets/icons/quote.svg";
import person1 from "../../assets/images/people1.png";
import person2 from "../../assets/images/people2.png";
import person3 from "../../assets/images/people3.png";

function Testimonial() {
  return (
    <div className="testimonial py-6 relative mb-16 ">
      <div className="container mx-auto">
        <div className="upper mb-16">
          <div className="text-left ml-16">
            <h3 className="text-[20px] text-secondary font-bold">
              {" "}
              Testimonial
            </h3>
            <h1 className="text-[36px]   "> What Our Patients Says</h1>
          </div>

          <img
            src={quote}
            alt="quote"
            className="  absolute right-0 top-0 w-32"
          />
        </div>
        <div className="bottom grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 justify-items-center">
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <p className="pt-4">
                It is a long established fact that by the readable content of a
                lot layout. The point of using Lorem a more-or-less normal
                distribu to using Content here, content
              </p>
              <div class="card-actions justify-start mt-12">
                <div className="flex items-center">
                  <div class="avatar mr-6">
                    <div class="w-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={person1} />
                    </div>
                  </div>
                  <div className="info">
                    <h4 className="text-[20px] font-semibold text-accent">
                      Winson Herry
                    </h4>
                    <p className="text-[16px]">California</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <p className="pt-4">
                It is a long established fact that by the readable content of a
                lot layout. The point of using Lorem a more-or-less normal
                distribu to using Content here, content
              </p>
              <div class="card-actions justify-start mt-12">
                <div className="flex items-center">
                  <div class="avatar mr-6">
                    <div class="w-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={person2} />
                    </div>
                  </div>
                  <div className="info">
                    <h4 className="text-[20px] font-semibold text-accent">
                      Winson Herry
                    </h4>
                    <p className="text-[16px]">California</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <p className="pt-4">
                It is a long established fact that by the readable content of a
                lot layout. The point of using Lorem a more-or-less normal
                distribu to using Content here, content
              </p>
              <div class="card-actions justify-start mt-12">
                <div className="flex items-center">
                  <div class="avatar mr-6">
                    <div class="w-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={person3} />
                    </div>
                  </div>
                  <div className="info">
                    <h4 className="text-[20px] font-semibold text-accent">
                      Winson Herry
                    </h4>
                    <p className="text-[16px]">California</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
