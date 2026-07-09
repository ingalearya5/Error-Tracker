import React from "react";
import Link from "next/link";

export const WelcomePage = () => {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-slate-50 px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-sky-700 drop-shadow-sm">
          Welcome
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Welcome to the onboarding process.
        </p>
        <Link href="/form">
          <button className="mt-8 rounded-lg bg-sky-700 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-sky-800 hover:cursor-pointer">
            Start
          </button>
        </Link>
      </div>
    </div>
  );
};
