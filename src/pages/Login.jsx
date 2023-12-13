import React from "react";
import Forminput from "../components/Forminput";
import SubmitButton from "../components/SubmitButton";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-screen grid">
      <form
        method="post"
        className="card w-90 p-8 bg-amber-700 shadow-lg flex flex-col gap-y-4 items-center"
      >
        <h4 className="text-3xl">LOGIN</h4>
        <Forminput
          type="email"
          label="email"
          name="idetifier"
          value="name@mail.com"
        />

        <Forminput
          type="password"
          label="password"
          name="password"
          value="secret"
        />
        <div className="mt-4">
          <SubmitButton text="Login" />
          <button type="button" className="btn btn-primary">
            Continue as a guest
          </button>
          <p>
            Not a member yet ?{" "}
            <Link
              to="/register"
              className="ml-2 line-clamp-2 capitalize text-violet-500 text-xl"
            >
              {" "}
              Register{" "}
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
