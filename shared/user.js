const users = new Map();

users.set("1", {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  bio: "I love React",
  likes: 10,
});

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getUser(userId = "1") {
  await wait(100);
  return users.get(userId);
}

export async function likeUser(userId) {
  await wait(100);
  const user = users.get(userId);
  if (!user) throw new Error("User not found");

  const updatedUser = {
    ...user,
    likes: user.likes + 1,
  };
  users.set(userId, updatedUser);
  return updatedUser;
}
