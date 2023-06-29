import { getUser, likeUser } from "./user";
import { useState, useCallback } from "react";

export function useUser() {
  const [user, setUser] = useState();

  const revalidate = useCallback(() => {
    getUser().then(setUser);
  }, []);

  useEffect(() => {
    revalidate();
  }, [revalidate]);

  return { user, revalidate };
}

export function useLikeUser() {
  const likeUser = useCallback((userId) => {
    return likeUser(userId);
  }, []);
  return likeUser;
}

export function useUserProfile() {
  const { user, revalidate } = useUser();
  const likeUser = useLikeUser();
  const handleLike = useCallback(async () => {
    if (user) {
      await likeUser(user.id);
      revalidate();
    }
  }, []);

  return {
    user,
    handleLike,
  };
}
