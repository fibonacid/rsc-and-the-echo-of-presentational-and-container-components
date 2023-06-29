// src/user-profile/container.jsx
import Presentational from "./presentational";
import { getUser, likeUser, USER_TAG } from "./user";

// In RSC revalidation is handled by the Framework (Next.js)
import { revalidateTag } from "next/cache"

export default async function UserProfile() {
  const user = await getUser();

  async function handleLike() {
    "use server"
     await likeUser(user.id);
     revalidateTag(USER_TAG);
  } 
  
  return <Presentational user={user} handleLike={handleLike} /> 
}