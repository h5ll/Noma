
"use client";

import Link from "next/link";
import { useState } from "react";

export function RegisterForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const password = data.get("password");
    const confirmPassword = data.get("confirmPassword");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setMessage("Authentication isn't connected yet.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-5 py-12 text-white">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="text-3xl font-bold tracking-tight">
            Spoke<span className="text-indigo-500">.</span>
          </Link>

          <p className="mt-3 text-sm text-zinc-400">
            Create an account to get started.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8 shadow-2xl">
          <h1 className="text-2xl font-semibold">Create account</h1>

          <p className="mt-2 text-sm text-zinc-400">
            Choose a username and password.
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
                placeholder="Choose a username"
                minLength={3}
                maxLength={32}
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
                autoComplete="new-password"
                placeholder="Create a password"
                minLength={8}
                required
                className="w-full rounded-lg border border-white/10 bg-zinc-950 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-zinc-200"
              >
                Confirm password
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                placeholder="Confirm your password"
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
              Create account
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-zinc-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-indigo-400 hover:text-indigo-300"
            >
              Sign in
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-600">
          By creating an account, you agree to Spoke's Terms of Service.
        </p>
      </div>
    </main>
  );
}
