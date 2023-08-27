"use client";
import Link from "next/link";
import countriesData from "public/countries.json";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  name: string;
  country: string;
  password: string;
  passwordConfirmation: string;
};

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [message, setMessage] = useState({
    error: false,
    message: "",
  });

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({
          error: false,
          message: "Registration successful! You can now login.",
        });
      } else {
        setMessage({
          error: true,
          message: data.message,
        });
      }
    } catch (error) {
      setMessage({
        error: true,
        message: "There was an error during registration. Please try again.",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-96">
        {message.message && (
          <div
            className={`alert mb-4 ${
              message.error ? "alert-error" : "alert-success"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  message.error
                    ? "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    : "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                }
              />
            </svg>
            <span>{message.message}</span>
          </div>
        )}
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              required={true}
              placeholder="you@example.com"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              required={true}
              placeholder="John Doe"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-2">Country</label>
            <select
              className="input input-bordered w-full"
              defaultValue="AU"
              {...register("country", { required: true })}
            >
              {countriesData.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              className="input input-bordered w-full"
              required={true}
              placeholder="**********"
              {...register("password", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              required={true}
              placeholder="**********"
              {...register("passwordConfirmation", { required: true })}
            />
          </div>
          <button type="submit" className="btn btn-primary w-full mb-2">
            Register
          </button>
        </form>
        <div className="text-center">
          <span>Already have an account? </span>
          <Link href="/auth/signin" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
