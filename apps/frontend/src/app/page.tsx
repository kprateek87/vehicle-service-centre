import { getUsers } from "@/api/users";

export default async function Home() {
  const users = await getUsers()
  console.log(users);
  
  return (
   <main className="p-6">
      <h1 className="text-3xl font-bold">Vehicle Service Centre</h1>
      <p className="mt-2 text-gray-600">
        Welcome to your dashboard. Choose an option from the sidebar.
      </p>
    </main>
  );
}
