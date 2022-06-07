import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import call from "../../assets/icons/phone.svg";

function Info() {
  return (
    <div
      className="container grid sm:grid-cols-1 md:grid-cols-2 
        
    lg:grid-cols-3

    gap-10 justify-items-center mx-auto mt-[-80px] mb-[100px]"
    >
      <div className="card h-40 w-96  bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary">
        <div className="card-body flex flex-row justify-center">
          <figure>
            <img src={clock} alt="clock" className="pr-2" />
          </figure>
          <div className="text-white">
            <h1 className="font-bold  mb-2">Opening Hours</h1>
            <p>Lorem Ipsum is simply dummy text of the pri</p>
          </div>
        </div>
      </div>

      <div className="card  w-96 h-40 bg-base-100 shadow-xl bg-accent">
        <div className="card-body flex flex-row justify-center">
          <figure>
            <img src={marker} alt="clock" className="pr-2" />
          </figure>
          <div className="text-white">
            <h1 className="font-bold  mb-2">Visit our location</h1>
            <p>Brooklyn, NY 10036, United States</p>
          </div>
        </div>
      </div>

      <div className="card h-40 w-96 bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary">
        <div className="card-body flex flex-row justify-center">
          <figure>
            <img src={call} alt="clock" className="pr-2" />
          </figure>
          <div className="text-white">
            <h1 className="font-bold mb-2">Contact us now</h1>
            <p>+000 123 456789</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
