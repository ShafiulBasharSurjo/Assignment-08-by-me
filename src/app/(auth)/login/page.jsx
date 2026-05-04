"use client";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const LoginPage = (data) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleLogin = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: `${window.location.origin}/`,
    });
    if (error) console.error("Google sign-in:", error);
    else console.log(data, "google login");
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: `${window.location.origin}/`,
    });
  };

  return (
    <>
      <div className="container mx-auto min-h-[80vh] flex items-center justify-center">
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
            <fieldset className="fieldset mb-4 relative">
              <legend className="fieldset-legend">Password</legend>
              <input
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="Type your password here"
                {...register("password", { required: "Password is required" })}
              />
              <span
                className="absolute right-2 top-4.5"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </fieldset>
            <button className="btn w-full bg-blue-950 text-white">Login</button>
          </form>
          <button className="btn w-full mt-1" onClick={handleGoogleLogin}>
            <FaGoogle className="inline mr-2" />
            Login with Google
          </button>

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
