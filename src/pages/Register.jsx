import Forminput from "../components/Forminput";
import SubmitButton from "../components/SubmitButton";

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="h-screen grid">
      <form
        method="post"
        className="card w-90 p-8 bg-amber-700 shadow-lg flex flex-col gap-y-4 items-center"
      >
        <h4 className="text-3xl">REGISTER</h4>
        <Forminput type="text" label="name" name="iusername" />

        <Forminput type="email" label="email" name="email" />

        <Forminput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitButton text="Register" />
          <p>
            Already a member ?{" "}
            <Link
              to="/login"
              className="ml-2 line-clamp-2 capitalize text-violet-500 text-xl"
            >
              {" "}
              Login{" "}
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Register;
