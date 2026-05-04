"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { authClient } from "@/lib/auth-client";

const Profile = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      image: "",
    },
  });

  useEffect(() => {
    reset({
      name: user?.name ?? "",
      image: user?.image ?? "",
    });
  }, [reset, user?.image, user?.name]);

  const onUpdateProfile = async (data) => {
    await authClient.updateUser({
      name: data.name,
      image: data.image,
    });
  };

  if (isPending) {
    return (
      <div className="container mx-auto min-h-[80vh] flex items-center justify-center">
        <span className="loading loading-dots loading-lg" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto min-h-[80vh] flex items-center justify-center">
        <div className="p-6 rounded-lg bg-amber-100 max-w-md w-full">
          <h1 className="text-2xl font-bold mb-2">My Profile</h1>
          <p className="mb-4">You must be logged in to view this page.</p>
          <Link href="/login" className="btn bg-blue-950 text-white w-full">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto min-h-[80vh] flex items-center justify-center px-2 bg-blue-950">
        <div className="p-6 rounded-lg bg-amber-100 max-w-3xl w-full">
          <h1 className="text-2xl font-bold mb-4">My Profile</h1>

          <div className="flex items-start gap-4 mb-6">
            <div className="avatar">
              <div className="w-32 rounded-full  bg-white">
                <Image
                  src={user.image || "https://i.ibb.co/0jvB4Yh/user.png"}
                  alt={user.name || "User"}
                  width={80}
                  height={80}
                  unoptimized
                />
              </div>
            </div>

            <div className="flex-1">
              <p className="font-semibold">{user.name}</p>
              {user.email ? (
                <p className="text-sm opacity-80">{user.email}</p>
              ) : null}
              <p className="text-xs opacity-70 mt-2">User ID: {user.id}</p>
            </div>
          </div>

          <div className="divider">Update profile</div>

          <form onSubmit={handleSubmit(onUpdateProfile)} className="space-y-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Name</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Your name"
                {...register("name", { required: true })}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Image URL</legend>
              <input
                type="url"
                className="input w-full"
                placeholder="https://..."
                {...register("image", { required: true })}
              />
            </fieldset>

            <button
              className="btn bg-blue-950 text-white w-full"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Saving..." : "Save changes"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
