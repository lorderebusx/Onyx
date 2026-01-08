"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { overviewChartData } from "@/lib/mockData";

export function OverviewChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={overviewChartData}>
        <XAxis 
          dataKey="name" 
          stroke="#888888" 
          fontSize={12} 
          tickLine={false} 
          axisLine={false} 
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip 
            cursor={{fill: '#27272a'}}
            contentStyle={{ background: "#27272a", border: "1px solid #3f3f46", color: "#fff", borderRadius: "8px" }}
            itemStyle={{ color: "#e4e4e7" }}
            // This formats the number to currency (USD)
            formatter={(value: any) => [
                new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value),
                // We don't need to change the name, so we leave it undefined to use the default
            ]}
        />
        {/* Legend to explain colors */}
        <Legend iconType="circle" />
        
        {/* Income Bar (Teal/Emerald) */}
        <Bar 
          dataKey="income" 
          name="Income"
          fill="#10b981" // Emerald-500
          radius={[4, 4, 0, 0]} 
        />
        
        {/* Expense Bar (Dark Gray/Black) */}
        <Bar 
            dataKey="expense" 
            name="Expense"
            fill="#52525b"  // Change this to "#52525b" (Lighter Zinc) or "#71717a" so it pops
            radius={[4, 4, 0, 0]} 
        />
      </BarChart>
    </ResponsiveContainer>
  );
}