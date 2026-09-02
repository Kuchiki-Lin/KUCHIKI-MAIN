import { auth } from "@/app/firebaseConfig";

export async function currentUserIsAdmin() {
  const user = auth.currentUser;
  if (!user) return false;
  const token = await user.getIdTokenResult();
  return token.claims.admin === true;
}
