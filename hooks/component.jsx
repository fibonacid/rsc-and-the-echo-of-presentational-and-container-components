// src/user-profile.tsx
import { useUserProfile } from "./hooks";

export default function UserProfile() {
  const { user, handleLike } = useUserProfile();
  if (!user) return null;
  return (
    <section>
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <p>{user.bio}</p>
      <button onClick={handleLike}>Like</button>
    </section>
  );
}
