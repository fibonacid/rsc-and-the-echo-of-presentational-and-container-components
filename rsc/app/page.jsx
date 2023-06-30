// rsc/app/page.jsx

import { getUser, likeUser } from "../../shared/user";
import Presentational from "./Presentational";

// In RSC revalidation is handled by the Framework (Next.js)
import { revalidatePath } from "next/cache";

export default async function UserProfile() {
  const user = await getUser();

  async function handleLike() {
    "use server";
    await likeUser(user.id);
    revalidatePath("/");
  }

  return <Presentational user={user} handleLike={handleLike} />;
}
