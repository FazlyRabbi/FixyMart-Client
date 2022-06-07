import React from "react";

import sub1 from "../../assets/images/sub1.webp";
import sub2 from "../../assets/images/sub2.webp";
import sub3 from "../../assets/images/sub3.webp";

function SubBanner() {
  return (
    <div className="container mx-auto mb-16">
      <div className="flex justify-center flex-wrap">
        <div>
          <img
            src={sub1}
            alt="img"
            className="mx-w-sm   lg:h-[495px]  sm:h-[300px] p-[10px]"
          />
        </div>
        <div>
          <img
            src={sub2}
            alt="img"
            className="p-[10px] lg:h-auto sm:h-[150px] "
          />
          <img
            src={sub3}
            alt="img"
            className="p-[10px] lg:h-auto sm:h-[150px] "
          />
        </div>
      </div>
    </div>
  );
}

export default SubBanner;
