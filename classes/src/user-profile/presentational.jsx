// src/user-profile/presentational.jsx

export default function UserProfile({ user, handleLike }) {
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
