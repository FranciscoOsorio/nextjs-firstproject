import Users from "@/components/Users";
async function fetchUsers() {
  const res = await fetch('https://reqres.in/api/users?page=2');
  const data = await res.json();
  return data.data;
}

async function HomePage() {
  const users = await fetchUsers();

  return <Users users={users} />
}

export default HomePage;