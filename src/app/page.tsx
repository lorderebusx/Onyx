import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { kpiData, recentTransactions } from "@/lib/mockData";
import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Wallet,
  TrendingUp,
  BanknoteArrowDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { OverviewChart } from "@/components/OverviewChart";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8">
      {/* 1. Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Dashboard
          </h1>
          <p className="text-zinc-500 mt-2 dark:text-zinc-400">
            Welcome back to Onyx.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
            Jan 7, 2026
          </span>
        </div>
      </div>

      {/* 2. KPI Cards (The Top Row) */}
      <div className="grid gap-4 md:grid-cols-3">
        {kpiData.map((item, i) => {
          let Icon = DollarSign;
          let href = "/"; // Default fallback

          // Logic to determine Icon and Link destination
          if (item.title.includes("Investments")) {
            Icon = TrendingUp;
            href = "/investments";
          } else if (item.title.includes("Spending")) {
            Icon = Wallet;
            href = "/transactions";
          } else if (item.title.includes("Net Worth")) {
            href = "/wallet";
          }

          return (
            <Link
              key={i}
              href={href}
              className="block group"
            >
              <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 transition-colors hover:border-zinc-300 dark:hover:border-zinc-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {item.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-zinc-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                    {item.value}
                  </div>
                  <p
                    className={cn(
                      "text-xs flex items-center mt-1",
                      item.trend === "up" ? "text-emerald-600" : "text-rose-600"
                    )}
                  >
                    {item.trend === "up" ? (
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 mr-1" />
                    )}
                    <span className="font-medium">{item.change}</span>
                    <span className="text-zinc-500 ml-1">from last month</span>
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* 3. Main Content Area (Chart + Recent Transactions) */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Link href="/analytics" className="col-span-4 block">
          <Card className="h-full bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <CardContent className="pl-2">
                <OverviewChart />
              </CardContent>
            </CardContent>
          </Card>
        </Link>

        <Link href="/transactions" className="col-span-3 block">
          <Card className="h-full bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {recentTransactions.map((tx) => (
                  <div key={tx.id} className="flex items-center">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none text-zinc-900 dark:text-zinc-100">
                        {tx.merchant}
                      </p>
                      <p className="text-xs text-zinc-500">{tx.category}</p>
                    </div>

                    <div
                      className={cn(
                        "ml-auto font-medium text-sm",
                        tx.type === "income"
                          ? "text-emerald-600"
                          : "text-zinc-900 dark:text-zinc-100"
                      )}
                    >
                      {tx.amount}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
