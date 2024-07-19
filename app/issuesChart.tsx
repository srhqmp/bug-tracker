"use client";

import { Ticket } from "@/lib/definitions";

import PieChart from "./components/pieChart";
import BarChart from "./components/barChart";

export default function IssuesChart({ tickets }: { tickets: Ticket[] }) {
  const high = tickets.filter((ticket: Ticket) => ticket.severity === "high");
  const medium = tickets.filter(
    (ticket: Ticket) => ticket.severity === "medium"
  );
  const low = tickets.filter((ticket: Ticket) => ticket.severity === "low");

  const pieData = [
    { name: "Low", value: low.length },
    { name: "Medium", value: medium.length },
    { name: "High", value: high.length },
  ];

  const barData = [
    { year: "2020", tickets: 0 },
    { year: "2022", tickets: 0 },
    { year: "2023", tickets: 0 },
    { year: "2024", tickets: tickets.length },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div>
      <div className="card md:flex justify-center gap-6 ">
        <div className="w-full text-center">
          <PieChart data={pieData} COLORS={COLORS} height={300} />
          <h3>Issues by severity</h3>
        </div>
        <div className="w-full text-center">
          <BarChart
            data={barData}
            height={300}
            label1="year"
            label2="tickets"
          />
          <h3>Issues per year</h3>
        </div>
      </div>
    </div>
  );
}
