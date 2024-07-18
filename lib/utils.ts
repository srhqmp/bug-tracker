export async function getTickets() {
  const res = await fetch("http://localhost:3000/api/tickets");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
