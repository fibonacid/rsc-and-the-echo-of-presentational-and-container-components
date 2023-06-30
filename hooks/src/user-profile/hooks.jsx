// hooks/src/user-profile/hooks.jsx

import { getUser, likeUser } from "../../../shared/user";
import { useState, useCallback, useEffect } from "react";

export function useUser() {
  const [user, setUser] = useState();

  const revalidate = useCallback(() => {
    getUser().then(setUser);
  }, []);

  useEffect(revalidate, [revalidate]);

  return { user, revalidate };
}

export function useLikeUser() {
  return useCallback(likeUser, []);
}

export function useUserProfile() {
  const { user, revalidate } = useUser();
  const likeUser = useLikeUser();

  const handleLike = useCallback(async () => {
    if (!user) return;
    await likeUser(user.id);
    revalidate();
  }, [user]);

  return {
    user,
    handleLike,
  };
}
