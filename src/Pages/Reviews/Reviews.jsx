import React, { useEffect, useState } from "react";
import Review from "./Review";

export default function Reviews() {
  const [reviews, setReview] = useState();
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className="py-16">
      <h1 className="uppercase mb-16 mt-16 font-bold text-center text-[30px] mb-2">
        Customer Reviews
      </h1>
     
      <div className="flex flex-wrap justify-center">
        {reviews?.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
    </div>
  );
}
