import { createAuthClient } from "better-auth/react";

// Omit baseURL in the browser so Better Auth uses `window.location.origin`.
// Set `BETTER_AUTH_URL` on the server (Vercel). Use `NEXT_PUBLIC_BETTER_AUTH_URL` only if the API origin differs.
export const authClient = createAuthClient({
  ...(process.env.NEXT_PUBLIC_BETTER_AUTH_URL
    ? { baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL }
    : {}),
});

export const { signIn, signUp, useSession } = authClient;
