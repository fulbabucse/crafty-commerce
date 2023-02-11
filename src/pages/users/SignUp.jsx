import { useSelect } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BsFillLockFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createUser } from "../../features/auth/authSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCreateUser = (data) => {
    dispatch(createUser({ email: data.email, password: data.password }));
  };
  return (
    <div className="max-w-md mx-auto my-10 p-4 rounded-md shadow-md">
      <h1 className="text-primary text-center text-2xl font-medium font-radio-canada mb-5">
        Create Account
      </h1>
      <form onSubmit={handleSubmit(handleCreateUser)} className="space-y-4">
        <div className="relative flex w-full flex-wrap items-stretch">
          <span className="z-10 h-full leading-snug font-normal text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
            <AiOutlineUser />
          </span>
          <input
            type="text"
            placeholder="Full Name"
            {...register("name", {
              required: "Name is required",
            })}
            className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-gray-100 rounded text-sm border-0 shadow focus:bg-white focus:ring-1 outline-none focus:outline-none w-full pl-10"
          />
          {errors.name && (
            <p className="text-red-400 text-xs font-medium">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="relative flex w-full flex-wrap items-stretch">
          <span className="z-10 h-full leading-snug font-normal text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
            <AiOutlineMail />
          </span>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
            placeholder="Email"
            className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-gray-100 rounded text-sm border-0 shadow focus:bg-white focus:ring-1 outline-none focus:outline-none w-full pl-10"
          />
          {errors.email && (
            <p className="text-red-400 text-xs font-medium">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="relative flex w-full flex-wrap items-stretch">
          <span className="z-10 h-full leading-snug font-normal text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
            <BsFillLockFill />
          </span>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password length should be 6 character",
              },
              pattern: {
                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                message: `At least 1 special character, 1 uppercase letter, and Number character make the password stronger`,
              },
            })}
            className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-gray-100 rounded text-sm border-0 shadow focus:bg-white focus:ring-1 outline-none focus:outline-none w-full pl-10"
          />
          {errors.password && (
            <p className="text-red-400 text-xs font-medium">
              {errors.password?.message}
            </p>
          )}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium font-radio-canada py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center gap-1 mt-4 text-sm">
        <p>Already have an account?</p>
        <Link to="/sign-in" className="text-blue-500 hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
