
"use client";

import Link from "next/link";
import { useState } from "react";

export function LoginForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Authentication isn't connected yet.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-5 py-12 text-white">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="text-3xl font-bold tracking-tight">
            Noma<span className="text-indigo-500">.</span>
          </Link>

          <p className="mt-3 text-sm text-zinc-400">
            Welcome back. Sign in to continue.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8 shadow-2xl">
          <h1 className="text-2xl font-semibold">Sign in</h1>

          <p className="mt-2 text-sm text-zinc-400">
            Enter your username and password.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium text-zinc-200"
              >
                Username
              </label>

              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="Your username"
                required
                spellCheck={false}
                className="w-full rounded-lg border border-white/10 bg-zinc-950 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-zinc-200"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Your password"
                required
                className="w-full rounded-lg border border-white/10 bg-zinc-950 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            {message && (
              <p role="status" className="text-sm text-amber-400">
                {message}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold transition hover:bg-indigo-500 active:scale-[0.99]"
            >
              Sign in
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-zinc-400">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-indigo-400 hover:text-indigo-300"
            >
              Create one
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-600">
          By continuing, you agree to Spoke's Terms of Service.
        </p>
      </div>
    </main>
  );
}
