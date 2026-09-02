import { auth } from "@/app/firebaseConfig";

export async function authenticatedFetch(url, options = {}) {
  const user = auth.currentUser;
  if (!user) throw new Error("You must be signed in to perform this action");

  const token = await user.getIdToken();
  return fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
}
