"use client";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = (data) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = () => {};

  return (
    <>
      <div className="container mx-auto min-h-[80vh] flex items-center justify-center bg-slate-100">
        <div className="p-4 rounded-lg bg-amber-100 max-w-md">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Login your account
          </h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset mb-4">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="email"
                className="input"
                placeholder="Type your email here"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </fieldset>
            <fieldset className="fieldset mb-4">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input"
                placeholder="Type your password here"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </fieldset>
            <button className="btn w-full bg-blue-950 text-white">Login</button>
          </form>

          <p className="mt-2">
            Donot have an account?
            <a href="/register" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
