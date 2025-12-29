import { notFound } from "next/navigation";

async function fetchUserData(id: string) {
    const res = await fetch(`https://dummyjson.com/users/${id}`);
        if (!res.ok) {
            return null;
        }
        const user = await res.json();
        return user;
}

interface UserPageProps {
    params: Promise<{userId: string}>;
}
export default async function UserPage({params}: UserPageProps) {
    const {userId} = await params;
    const user = await fetchUserData(userId);

    if (!user) {
        notFound();
    }
    return (
      <div>
        <h1>User Page Details</h1>
        <p>
          <strong>User ID:</strong> {user.id}
        </p>
        <p><strong>firstName</strong> {user.firstName}</p>
        <p><strong>email</strong> {user.email}</p>
      </div>
    );
}