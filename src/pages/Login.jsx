import { Link, NavLink, useNavigate } from "react-router-dom";

import GoogleLogin from "../components/Auth/GoogleLogin";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaLongArrowAltLeft } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const { user, googleLogin, EmailPassLogin, createUser, logout, authLoading } =useAuth();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, authLoading, navigate, from]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    await EmailPassLogin(email, password);
  };
  return (
    <div className="hero min-h-screen bg-base-200 relative">
      <NavLink to={from}>
        
        <div className="flex gap-2 items-center absolute left-0 top-0 z-40 m-5 hover:text-blue-600">
          <FaLongArrowAltLeft />
          <p>Go Back</p>
        </div>
      </NavLink>
      <div className="hero-content grid lg:grid-cols-2 w-full mx-auto">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Access your favorite recipes, save new ones, and connect with our
            vibrant community of food enthusiasts. Simply log in to continue
            your culinary journey with us.
          </p>
          <img src="" alt="" />
        </div>
        <div className="flex justify-end">
          <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

              <p className="text-center">
                Don&apos;t have any account ?{" "}
                <Link to={"/register"} className="text-orange-500">
                  Register
                </Link>
              </p>
            </form>
            <div className="  w-full ">
              <div className="flex flex-col gap-2 mx-7 mb-7">
                <GoogleLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
