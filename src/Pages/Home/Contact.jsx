import React from "react";
import appointment from "../../assets/images/appointment.png";

function Contact() {
  return (
    <div
      className="contact p-10 bg-no-repeat bg-center"
      style={{ backgroundImage: `  url(${appointment})` }}
    >
      <div className="container mx-auto ">
        <div className="title text-center mb-10">
          <h3 className="text-[20px] text-secondary">Contact Us</h3>
          <h2 className="text-[36px] text-white">Stay connected with us</h2>
        </div>

        <div className="data ">
          <form action="submit" className=" flex flex-col items-center ">
            <input
              type="email"
              placeholder="Email Address"
              class=" input mb-4 input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Subject"
              class=" input mb-4  input-bordered input-secondary w-full max-w-xs"
            />

            <textarea
              class="textarea textarea-bordered block w-80 mb-4 "
              placeholder="Your message"
            ></textarea>

            <button className="btn  btn-primary font-bold text-white bg-gradient-to-r from-secondary capitalize to-primary align-center">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
