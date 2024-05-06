export default function Profile({ user }) {
  console.log(user);
  return <div>Welcome, {user.name}!</div>;
}
