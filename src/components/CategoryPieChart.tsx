"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { categoryBreakdown } from "@/lib/mockData";

export function CategoryPieChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={categoryBreakdown}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {categoryBreakdown.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
          ))}
        </Pie>
        <Tooltip 
             contentStyle={{ background: "#27272a", border: "1px solid #3f3f46", color: "#fff", borderRadius: "8px" }}
             formatter={(value: number) => `$${value}`}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}