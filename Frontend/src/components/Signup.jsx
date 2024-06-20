import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Replace with your submit logic
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100  dark:bg-slate-800 dark:text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative bg-white p-8 rounded-lg shadow-md w-full max-w-md  dark:bg-slate-700 dark:text-white dark:border dark:border-white"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg ">Signup!</h3>
          <a
            href="/"
            className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
          >
            ✕
          </a>
        </div>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700  dark:text-white"
          >
            Username :
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="username"
              className="input-field w-4/5  dark:bg-slate-800 dark:text-white dark:border dark:border-white rounded-lg h-10"
              placeholder=" &nbsp; Enter your Username"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="text-xs text-red-600 block mt-1">
                Username is required
              </span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Email :
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="email"
              className="input-field w-4/5  dark:bg-slate-800 dark:text-white dark:border dark:border-white rounded-lg h-10"
              placeholder="&nbsp; Enter your Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-xs text-red-600 block mt-1">
                Email is required
              </span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Password :
          </label>
          <div className="mt-1">
            <input
              type="password"
              id="password"
              className="input-field w-4/5  dark:bg-slate-800 dark:text-white dark:border dark:border-white rounded-lg h-10"
              placeholder="Enter your Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-xs text-red-600 block mt-1">
                Password is required
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
          >
            Signup
          </button>
        </div>

        {/* Uncomment below to show login link */}
        {/* <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p> */}
      </form>
    </div>
  );
}

export default Signup;
