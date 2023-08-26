'use client'
import Link from "next/link";
import countriesData from 'public/countries.json';
import { useState } from "react";

export default function RegisterPage() {
  const [country, setCountry] = useState(countriesData[0].code);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-2">Country</label>
            <select
              className="input input-bordered w-full"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
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
              placeholder="**********"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="**********"
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
