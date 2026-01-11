"use client";

import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { portfolioHistory, cryptoHistory } from "@/lib/mockData";
import { cn } from "@/lib/utils";

const formatCurrency = (value: number) => {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `$${(value / 1000).toFixed(0)}k`;
  return `$${value}`;
};

export function InvestmentsChart() {
  const [activeTab, setActiveTab] = useState<"total" | "crypto">("total");
  const currentData = activeTab === "total" ? portfolioHistory : cryptoHistory;
  const color = activeTab === "total" ? "#10b981" : "#8b5cf6"; 

  return (
    <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div>
          <CardTitle className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            Performance History
          </CardTitle>
          <p className="text-sm text-zinc-500">
            {activeTab === "total" ? "Stocks and investments growth" : "Crypto assets volatility"}
          </p>
        </div>
        
        <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 p-1 rounded-md">
           <button
             onClick={() => setActiveTab("total")}
             className={cn(
               "px-3 py-1 text-xs font-medium rounded-sm transition-all",
               activeTab === "total" 
                 ? "bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm" 
                 : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
             )}
           >
             Total
           </button>
           <button
             onClick={() => setActiveTab("crypto")}
             className={cn(
               "px-3 py-1 text-xs font-medium rounded-sm transition-all",
               activeTab === "crypto" 
                 ? "bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm" 
                 : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
             )}
           >
             Crypto
           </button>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={currentData}>
              <defs>
                <linearGradient id={`gradient-${activeTab}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={color} stopOpacity={0}/>
                </linearGradient>
              </defs>
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
                 cursor={{ stroke: color, strokeWidth: 1, strokeDasharray: "4 4" }}
                 contentStyle={{ background: "#27272a", border: "1px solid #3f3f46", color: "#fff", borderRadius: "8px" }}
                 itemStyle={{ color: "#e4e4e7" }}
                 formatter={(value: any) => [
                   new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0}).format(value),
                   "Value"
                 ]}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke={color} 
                strokeWidth={2}
                fill={`url(#gradient-${activeTab})`} 
                animationDuration={1000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}