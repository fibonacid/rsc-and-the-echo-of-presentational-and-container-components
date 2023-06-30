"use client";

// rsc/app/Presentational.jsx

import { useTransition } from "react";

export default function UserProfile({ user, handleLike }) {
  const [isPending, startTransition] = useTransition();
  return (
    <section>
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <p>{user.bio}</p>
      <button
        onClick={() => {
          startTransition(handleLike);
        }}
      >
        Like
      </button>
      <span>{user.likes}</span>
    </section>
  );
}
