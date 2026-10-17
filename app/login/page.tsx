"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

function LoginForm() {
  const searchParams = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    setLoading(false);

    if (res.ok) {
      const dest = searchParams.get("from") || "/";
      window.location.href = dest;
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Incorrect username or password.");
    }
  }

  return (
    <div className="w-full max-w-sm">
      <p className="text-center font-display text-2xl tracking-wide text-black">
        COMMON<span className="text-gold">THREADS</span>
      </p>
      <p className="mt-2 text-center text-sm text-ink/60">
        This is a private preview. Enter the password to continue.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-ink/70">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
            className="mt-1 w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm text-black outline-none focus:border-gold"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-ink/70">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm text-black outline-none focus:border-gold"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-gold disabled:opacity-60"
        >
          {loading ? "Checking..." : "Enter Site"}
        </button>
      </form>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-5">
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
