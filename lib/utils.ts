import { formatDistanceToNow } from "date-fns";

import { Ticket } from "./definitions";

export async function getTickets() {
  const res = await fetch("http://localhost:3000/api/tickets");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getTicket(id: string) {
  const tickets = await getTickets();

  const ticket = tickets.find((r: Ticket) => r.id === id);

  if (!ticket) {
    throw new Error("Failed to get ticket");
  }

  return ticket;
}

export const formatTimeAgo = (timestamp: string) => {
  if (!timestamp) return "";
  return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
};

interface Options {
  year: string;
  month: string;
  day: string;
  hour: string;
  minute: string;
  timeZone: string;
  timeZoneName: string;
}

export const convertDate = (dateString: string) => {
  if (!dateString) return null;

  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
    timeZoneName: "short",
  });
};
