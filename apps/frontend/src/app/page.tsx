import { getUsers } from "@/api/users";

export default async function Home() {
  // const users = await getUsers()
  // console.log(users);

  return (
    <main className="p-5">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div>01</div>
        <div>09</div>
        <div>02</div>
        <div>08</div>
      </div>
    </main>
  );
}
