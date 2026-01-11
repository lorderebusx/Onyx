"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { yearlyAnalytics } from "@/lib/mockData";

const formatCurrency = (value: number) => {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `$${(value / 1000).toFixed(0)}k`;
  return `$${value}`;
};

export function CashFlowChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={yearlyAnalytics} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#3f3f46" opacity={0.4} />
        <XAxis 
          dataKey="month" 
          stroke="#71717a" 
          fontSize={12} 
          tickLine={false} 
          axisLine={false} 
          dy={10}
        />
        <YAxis
          stroke="#71717a"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={formatCurrency}
          width={60}
        />
        <Tooltip 
          contentStyle={{ background: "#27272a", border: "1px solid #3f3f46", color: "#fff", borderRadius: "8px" }}
          formatter={(value: any) => [
            new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value),
          ]}
        />
        <Area 
          type="monotone" 
          dataKey="income" 
          stroke="#10b981" 
          fillOpacity={1} 
          fill="url(#colorIncome)" 
          strokeWidth={2}
        />
        <Area 
          type="monotone" 
          dataKey="expense" 
          stroke="#ef4444" 
          fillOpacity={1} 
          fill="url(#colorExpense)" 
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}