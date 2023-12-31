// classes/src/user-profile/presentational.jsx

export default function UserProfile({ user, handleLike }) {
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
