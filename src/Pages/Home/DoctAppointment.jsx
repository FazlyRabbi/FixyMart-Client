import React from "react";
import doctoSmall from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";

function DoctAppointment() {
  return (
    <div
      class="hero pt-6 justify-center mb-[130px]"
      style={{ backgroundImage: ` url(${appointment})` }}
    >
      <div className="container mx-auto">
        <div class="hero-content pb-0 flex-col lg:flex-row  lg:text-left sm:text-center ">
          <img
            src={doctoSmall}
            class="mt-[-110px] rounded-lg max-w-lg mr-[100px] lg:block sm:hidden "
          />
          <div>
            <h3 className="text-transparent font-bold text-[20px]  bg-clip-text bg-gradient-to-r from-secondary to-primary">
              Appointment
            </h3>
            <h1 class="text-[36px] text-white font-semibold">
              Make an appointment Today
            </h1>
            <p class="py-6 text-[16px] text-white">
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

export default DoctAppointment;
