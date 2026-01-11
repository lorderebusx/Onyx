"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, CreditCard, PieChart, Wallet, Settings, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils"; 

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Wallet", icon: Wallet, path: "/wallet" },
  { name: "Transactions", icon: CreditCard, path: "/transactions" },
  { name: "Investments", icon: TrendingUp, path: "/investments" },
  { name: "Analytics", icon: PieChart, path: "/analytics" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (    
    <div className="h-screen w-64 border-r border-zinc-200 bg-white dark:bg-zinc-950 dark:border-zinc-800 hidden md:flex flex-col sticky top-0">
      
      {/* Header */}
      <div className="p-6 border-b border-zinc-100 dark:border-zinc-900">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Onyx.</h2>
      </div>
      
      {/* Navigation */}
      <div className="flex-1 py-6">
        <nav className="space-y-1 px-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900" 
                    : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50" 
                )}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User Footer */}
      <div className="p-4 border-t border-zinc-100 dark:border-zinc-900">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800" /> 
          <div className="text-xs">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">Demo User</p>
            <p className="text-zinc-500">Pro Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
}