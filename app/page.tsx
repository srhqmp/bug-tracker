import { getTickets } from "@/lib/utils";
import IssuesChart from "./issuesChart";

export default async function Home() {
  const tickets = await getTickets();

  return (
    <main>
      <section>
        <h2>Overview</h2>
        <div className="card md:flex gap-4 justify-center text-center">
          <div className="issues">
            <div className="count total">{tickets.length}</div>
            <h3>Total Issues</h3>
          </div>
          <div className="issues">
            <div className="count open">{tickets.length}</div>
            <h3>Open Issues</h3>
          </div>
          <div className="issues">
            <div className="count resolved">0</div>
            <h3>Resolved Today</h3>
          </div>
        </div>

        <h2>Bug Statistics</h2>
        <IssuesChart tickets={tickets} />
      </section>
    </main>
  );
}
