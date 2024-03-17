"use client";

import { useRegisterMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import React, {
  ChangeEventHandler,
  FormEvent,
  useEffect,
  useState,
} from "react";
import { toast } from "react-hot-toast";
import ButtonLoader from "../layout/ButtonLoader";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });

  const { name, email, password,role } = user;

  const router = useRouter();

  const [register, { isLoading, error, isSuccess }] = useRegisterMutation();

  useEffect(() => {
    if (error && "data" in error) {
      toast.error(error?.data?.errMessage);
    }

    if (isSuccess) {
      router.push("/login");
      toast.success("Account Registered. You can login now");
    }
  }, [error, isSuccess]);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      role,
      password,
    };

    register(userData);
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onChangeSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="wrapper">
      <div className="col-10 col-lg-5">
        <form className="shadow rounded bg-body" onSubmit={submitHandler}>
          <h2 className="mb-4">Join Us</h2>

          <div className="mb-3">
            <label htmlFor="name_field" className="form-label">
              {" "}
              Full Name{" "}
            </label>
            <input
              type="text"
              id="name_field"
              className="form-control"
              name="name"
              value={name}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="email_field">
              {" "}
              Email{" "}
            </label>
            <input
              type="email"
              id="email_field"
              className="form-control"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="password_field">
              {" "}
              Password{" "}
            </label>
            <input
              type="password"
              id="password_field"
              className="form-control"
              name="password"
              value={password}
              onChange={onChange}
              disabled={isLoading}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="role_field" className="form-label">
              Role
            </label>
            <select
              id="role_field"
              className="form-select"
              name="role"
              value={role}
              onChange={onChangeSelect}
              required
            >
              <option value="user">Job Seeker</option>
              <option value="admin">Recruiter</option>
            </select>
          </div>

          <button type="submit" className="btn form-btn w-100 py-2">
            {isLoading ? <ButtonLoader /> : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
