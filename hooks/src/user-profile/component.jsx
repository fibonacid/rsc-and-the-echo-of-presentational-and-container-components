// hooks/src/user-profile/component.jsx
import { useUserProfile } from "./hooks";

export default function UserProfile() {
  const { user, handleLike } = useUserProfile();
  if (!user) return <div>Loading...</div>;
  return (
    <section>
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <p>{user.bio}</p>
      <button onClick={handleLike}>Like</button>
      <span>{user.likes}</span>
    </section>
  );
}
