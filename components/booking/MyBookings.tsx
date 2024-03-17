"use client";

import { IBooking } from "@/backend/models/booking";
import { MDBDataTable } from "mdbreact";
import Link from "next/link";
import React from "react";

interface Props {
  data: {
    bookings: IBooking[];
  };
}

const MyBookings = ({ data }: Props) => {
  const bookings = data?.bookings;

  const setBookings = () => {
    const data: { columns: any[]; rows: any[] } = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Job Posted On",
          field: "checkin",
          sort: "asc",
        },
        {
          label: "Amount Paid",
          field: "amountpaid",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
          sort: "asc",
        },
      ],
      rows: [],
    };

    bookings?.forEach((booking) => {
      data?.rows?.push({
        id: booking._id,
        checkin: new Date(booking?.checkInDate).toLocaleString("en-US"),
        amountpaid: `$${booking?.amountPaid}`,
        actions: (
          <>
            <Link href={`/bookings/${booking._id}`} className="btn btn-primary">
              {" "}
              <i className="fa fa-eye"></i>{" "}
            </Link>
            <Link
              href={`/bookings/invoice/${booking._id}`}
              className="btn btn-success ms-2"
            >
              {" "}
              <i className="fa fa-receipt"></i>{" "}
            </Link>
          </>
        ),
      });
    });

    return data;
  };

  return (
    <div className="container">
      <h1 className="my-5">My Listings</h1>
      <MDBDataTable
        data={setBookings()}
        className="px-3"
        bordered
        striped
        hover
        noBottomColumns={true}
      />
    </div>
  );
};

export default MyBookings;
