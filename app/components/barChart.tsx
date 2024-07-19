"use client";

import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface BarChartProps {
  data: any[];
  height: number;
  label1: string;
  label2: string;
}

export default function BarChart({
  data,
  height,
  label1,
  label2,
}: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={label1} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={label2} fill="#8884d8" />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}
