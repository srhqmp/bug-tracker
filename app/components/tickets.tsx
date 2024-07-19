import Link from "next/link";

import { Ticket } from "@/lib/definitions";
import { getTickets } from "@/lib/utils";

export default async function TicketsList() {
  const tickets = await getTickets();

  if (!tickets) return null;

  return (
    <div>
      {tickets
        .sort(
          (a: Ticket, b: Ticket) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .map((ticket: Ticket) => (
          <Link
            href={`/tickets/${ticket.id}`}
            key={ticket.id}
            className="card block"
          >
            <h3>{ticket.title}</h3>
            <p>{ticket.description.slice(0, 25) + "..."}</p>
            <div className={`pill ${ticket.severity}`}>{ticket.severity}</div>
          </Link>
        ))}
    </div>
  );
}
