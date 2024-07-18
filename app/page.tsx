import { getTickets } from "@/lib/utils";
import { Ticket } from "@/lib/definitions";

import TicketsList from "./components/tickets";
import IssuesChart from "./components/issuesChart";

export default async function Home() {
  const tickets = await getTickets();
  const high = tickets.filter((ticket: Ticket) => ticket.severity === "high");
  const medium = tickets.filter(
    (ticket: Ticket) => ticket.severity === "medium"
  );
  const low = tickets.filter((ticket: Ticket) => ticket.severity === "low");

  return (
    <main>
      <section>
        <h2>Overview</h2>
        <div className="card">
          <div className="issues">
            <div className="count">{tickets.length}</div>
            <h3>Total Issues</h3>
          </div>
          <div className="issues">
            <div className="count">{tickets.length}</div>
            <h3>Open Issues</h3>
          </div>
          <div className="issues">
            <div className="count">0</div>
            <h3>Resolved Issues Today</h3>
          </div>
        </div>

        <h2>Issue Statistics</h2>
        <IssuesChart />
      </section>
    </main>
  );
}
