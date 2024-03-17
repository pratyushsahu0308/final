"use client";

import { IRoom } from "@/backend/models/room";
import React, { useEffect } from "react";
import RoomImageSlider from "./RoomImageSlider";
import RoomFeatures from "./RoomFeatures";
import ListReviews from "../review/ListReviews";
import NewReview from "../review/NewReview";

interface Props {
  data: {
    room: IRoom;
  };
}


const RoomDetails = ({ data }: Props) => {
  const { room } = data;


  return (
    <div className="container container-fluid" >
      <div style={{textAlign:"center"}}>
      <h1 className="mt-5">{room.name}</h1>
      <p>{room.address}</p>
      <div className="ratings mt-auto mb-3">
        <span >{room.numOfReviews} Application</span>
      </div>
      
    </div>

      <div className="row my-5">
        <div className="col-12 col-md-6 col-lg-6">
          <h3>Description</h3>
          <p>{room?.description}</p>

          <RoomFeatures room={room} />
        </div>
        <div className="col-12 col-md-6 col-lg-6">
        <RoomImageSlider images={room?.images} />

        </div>

      </div>

      <NewReview roomId={room?._id} />
      <ListReviews reviews={room.reviews} />
    </div>
  );
};

export default RoomDetails;
