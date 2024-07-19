import { convertDate, getTicket } from "@/lib/utils";
import ReturnButton from "@/app/components/returnButton";

export default async function Ticket({ params }: { params: { id: string } }) {
  const id = params.id;
  const ticket = await getTicket(id);

  return (
    <main>
      <div className="flex w-full justify-end">
        <ReturnButton path="/tickets" />
      </div>
      <div className="card">
        <div className="info mb-8">
          <h1 className="text-3xl mb-2">
            <span className="text-red-700">BUG:</span> {ticket.title}
          </h1>
          <div>
            <small>
              added by <span className="text-primary">{ticket.addedBy}</span> on{" "}
              {convertDate(ticket.createdAt)}
            </small>
          </div>
          <div>
            <small>last updated on {convertDate(ticket.updatedAt)}</small>
          </div>
        </div>
        <div className="details">
          <h2 className="my-2">Description</h2>
          <div>{ticket.description}</div>
        </div>
        <div className={`pill ${ticket.severity}`}>{ticket.severity}</div>
      </div>
    </main>
  );
}
