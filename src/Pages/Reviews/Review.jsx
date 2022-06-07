import React from "react";
function Review({ review }) {
  return (
    <div className="w-80 mr-16 sm:mb-12">
      <div className="flex gap-5 items-center">
        <img src={review.imgUrl} alt="" className="rounded-full h-10" />
        <h6 className="font-bold text-[25px]">{review.userName}</h6>
        <h5>{review.ratting}</h5>
      </div>
      <div>
        <p className="text-justify text-[15px]">{review.des}</p>
      </div>
    </div>
  );
}

export default Review;
