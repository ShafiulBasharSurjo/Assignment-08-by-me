"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleRegister = async (data) => {
    const { data: res, error } = await authClient.signUp.email({
      email: data.email,
      password: data.password,
      name: data.name,
      image: data.photoUrl,
      callbackURL: "/",
    });
    if (error) {
      console.error("Registration error:", error);
    } else {
      console.log("Registration successful:", res);
    }
  };
  return (
    <>
      <div className="container mx-auto min-h-[80vh] flex items-center justify-center">
        <div className="p-4 rounded-lg bg-amber-100 max-w-md">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Register for an account
          </h2>
          <form onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="fieldset mb-4">
              <legend className="fieldset-legend">Name</legend>
              <input
                type="text"
                className="input"
                placeholder="Type your name here"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </fieldset>
            <fieldset className="fieldset mb-4">
              <legend className="fieldset-legend">Photo Url</legend>
              <input
                type="text"
                className="input"
                placeholder="Type your photo URL here"
                {...register("photoUrl", { required: "Photo URL is required" })}
              />
              {errors.photoUrl && (
                <p className="text-red-500">{errors.photoUrl.message}</p>
              )}
            </fieldset>
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
            <button className="btn w-full bg-blue-950 text-white">
              Register
            </button>
          </form>

          <p className="mt-2">
            Already have an account?
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
