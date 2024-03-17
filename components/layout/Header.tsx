"use client";

import { setIsAuthenticated, setUser } from "@/redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const { data } = useSession();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data?.user));
      dispatch(setIsAuthenticated(true));
    }
  }, [data]);

  const logoutHandler = () => {
    signOut();
  };

  return (
    <nav className="navbar sticky-top py-2">
      <div className="container">
        <div className="col-6 col-lg-3 p-0">
          <div className="navbar-brand">
            <a href="/home">
              <img
                style={{ cursor: "pointer", width: "50%", height: "45%"}}
                src="/images/Job_Connect_transparent.png"
                alt=""
              />
            </a>
          </div>
        </div>

        <button 
  onClick={() => window.location.href = 'https://placement-predict-o1ix.onrender.com/'}
  style={{
    padding: '10px 20px',
    backgroundColor: '#e61e4d',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
    marginLeft:'100px',
  }}
>
  Placement Prediction
</button>


        <SearchBar />
        <div className="col-6 col-lg-3 mt-3 mt-md-0 text-end">
          
          {user ? (
            <div className="ml-4 dropdown d-line">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={
                      user?.avatar
                        ? user?.avatar?.url
                        : "/images/default_avatar.jpg"
                    }
                    alt=""
                    className="rounded-circle placeholder-glow"
                    height="50"
                    width="50"
                  />
                </figure>
                <span className="placeholder-glow ps-1"> {user?.name}</span>
              </button>

              <div
                className="dropdown-menu w-100"
                aria-labelledby="dropdownMenuButton1"
              >
                {user?.role === "admin" && (
                  <Link href="/admin/dashboard" className="dropdown-item">
                    Dashboard
                  </Link>
                )}
                <Link href="/bookings/me" className="dropdown-item">
                  My Listings
                </Link>
                <Link href="/me/updatve" className="dropdown-item">
                  Profile
                </Link>
                <Link
                  href="/"
                  className="dropdown-item text-danger"
                  onClick={logoutHandler}
                >
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            <>
              {data === undefined && (
                <div className="placeholder-glow">
                  <figure className="avatar avatar-nv placeholder bg-secondary"></figure>
                  <span className="placeholder w-25 bg-secondary ms-2"></span>
                </div>
              )}
              {data === null && (
                <Link
                  href="/login"
                  className="btn btn-danger px-4 text-white login-header-btn float-right"
                >
                  Login
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;