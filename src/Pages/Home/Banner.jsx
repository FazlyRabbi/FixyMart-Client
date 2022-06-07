import React from "react";

import bannerImg from "../../assets/images/bannerTools.webp";
import bg from "../../assets/images/bg.webp";

function Banner() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="bg-no-repeat">
      <div className="container mx-auto px-12 ">
        <div class="hero  ">
          <div class="hero-content max-w-fit flex-col py-[100px] flex-wrap lg:flex-row-reverse">
            <img src={bannerImg} class="lg:max-w-lg sm:max-w-sm   " />
            <div className="lg:mr-[200px]">
              <h1 class="text-[50px] leading-tight  text-[#000] font-bold uppercase ">
                top product
                <br />
                hand tool
                <br /> 2022
              </h1>
              <p class="py-6 font-bold">
                Exclusive email offers & Limited time <br /> discount specials
              </p>
              <button class="btn btn-neutral text-white">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
