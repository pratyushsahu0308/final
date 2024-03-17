import { IReview } from "@/backend/models/room";
import React from "react";
import StarRatings from "react-star-ratings";
// import Link from "next/link";

interface Props {
  reviews: IReview[];
}

const ListReviews = ({ reviews }: Props) => {
  return (
    <div className="reviews w-75 mb-5">
      <h3>{reviews?.length} Applications Submitted</h3>
      <hr />

      {reviews?.map((review) => (
        <div className="review-card my-3">
          <div className="row">
            <div className="col-3 col-lg-1">
              <img
                src={
                  review?.user?.avatar
                    ? review?.user?.avatar?.url
                    : "/images/default_avatar.jpg"
                }
                alt={review?.user?.name}
                width={60}
                height={60}
                style={{borderRadius:"2rem"}}
              />
            </div>
            <div className="col-9 col-lg-11">
              {/* <StarRatings
                rating={review?.rating}
                starRatedColor="#e61e4d"
                numberOfStars={5}
                starDimension="24px"
                starSpacing="1px"
                name="rating"
              /> */}
              <p className="mt-1"><h5>{review?.user?.name}</h5></p>
              <a href={`${review?.comment}`}>
               <button
          type="button"
          className="btn form-btn mt-1 mb-4"
        >
        View Resume
        </button></a>
            </div>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListReviews;
