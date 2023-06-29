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
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
        }}
      >
        <button onClick={handleLike}>Like</button>
        <span
          style={{
            opacity: user._optimistic ? 0.5 : 1,
          }}
        >
          {user.likes}
        </span>
      </div>
    </section>
  );
}
