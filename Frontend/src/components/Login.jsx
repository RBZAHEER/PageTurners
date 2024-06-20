import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal ">
          <div className="modal-box  dark:bg-slate-800 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <a
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                href="/"
              >
                ✕
              </a>

              <h3 className="font-bold text-lg ">Login!</h3>
              <div className="mt-5">
                <div className="input-container">
                  <label htmlFor="email">Email</label>
                  <div className="input input-bordered flex items-center gap-2 outline-none mt-2 dark:bg-slate-900 dark:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input
                      type="text"
                      className="grow p-4"
                      placeholder="Enter your Email to Login"
                      id="email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  {errors.email && (
                    <span className="text-sm text-red-600 block mt-2">
                      Email is required
                    </span>
                  )}
                </div>

                <div className="input-container mt-5">
                  <label htmlFor="password">Password</label>
                  <div className="input input-bordered flex items-center gap-2 mt-2  dark:bg-slate-900 dark:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="password"
                      className="grow  dark:text-white"
                      placeholder="Enter your Password to Login"
                      id="password"
                      {...register("password", { required: true })}
                    />
                  </div>
                  {errors.password && (
                    <span className="text-sm text-red-600 block mt-2">
                      Password is required
                    </span>
                  )}
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    type="submit"
                    className="text-white bg-pink-500 hover:bg-pink-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    Login
                  </button>
                  <h2 className="p-2">
                    Not Registered?{" "}
                    <Link
                      to={"/signup"}
                      className="underline text-blue-500 cursor-pointer"
                    >
                      Signup
                    </Link>
                  </h2>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
