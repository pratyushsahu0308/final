"use client";

import { IRoom } from "@/backend/models/room";
import Image from "next/image";
import Link from "next/link";
import React from "react";
//import StarRatings from "react-star-ratings";

interface Props {
  room: IRoom;
}

const RoomItem = ({ room }: Props) => {
  return (
  <>
    <div className="col-sm-12 col-md-6 col-lg-3 my-3 d-flex booking-card shadow p-3">
      <div className="card p-2 w-100">
        <Image
          className="card-img-top mx-auto"
          src={
            room?.images?.length > 0
              ? room.images[0].url
              : "/images/default_room_image.jpg"
          }
          alt={room?.name}
          height={170}
          width={100}
        />
        <div className="card-body d-flex flex-column">
        <h4 className="card-title">
            <Link href={`/rooms/${room?._id}`}>{room?.name}</Link>
          </h4>
          <div className="mt-auto">
            <p className="card-text mt-2">
              

              
            </p>
          </div>
          <div>
            <div className="d-flex">
             
              <span className="no-of-reviews">
              {room?.numOfReviews} Application
              </span>
            </div>
            <Link
              className="btn view-btn mt-3 w-100"
              href={`/rooms/${room?._id}`}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>);
};

export default RoomItem;
