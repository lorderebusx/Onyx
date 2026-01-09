"use client";

import { useParams, useRouter } from "next/navigation";
import { getAccountById, allTransactions } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Copy, MoreHorizontal, ArrowUpRight, ArrowDownLeft, Settings } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function AccountDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  // Convert string ID to number
  const id = Number(params.id);
  const account = getAccountById(id);

  // const accountTransactions = allTransactions.filter(tx => tx.accountId === id);

  if (!account) {
    return <div className="p-8">Account not found</div>;
  }

  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto">
      
      {/* 1. Top Nav */}
      <Button 
        variant="ghost" 
        className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 pl-0 gap-2"
        onClick={() => router.back()}
      >
        <ArrowLeft className="h-4 w-4" /> Back to Wallet
      </Button>

      {/* 2. Account Header */}
      <div className="flex items-start justify-between">
         <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-white ring-1 ring-zinc-200 dark:ring-zinc-800 p-2 flex items-center justify-center overflow-hidden shadow-sm">
                <img src={account.logoUrl} alt={account.name} className={cn("w-full h-full object-contain transition transform", account.name === "American Express" && "scale-133", account.name === "Apple Card" && "scale-100")} />
            </div>
            <div>
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">{account.name}</h1>
                <div className="flex items-center gap-2 text-zinc-500 mt-1">        
                    <span className="text-sm">{account.type}</span>
                    <span>•</span>
                    <span className="text-sm font-mono bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded flex items-center gap-1">
                        {account.accountNumber}
                        <Copy className="h-3 w-3 cursor-pointer hover:text-zinc-900" />
                    </span>
                </div>
            </div>
         </div>
         
         {/* Action Buttons */}
         <div className="flex gap-2">
            <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
            </Button>
            <Button>
                Transfer Funds
            </Button>
         </div>
      </div>

      <Separator className="dark:bg-zinc-800" />

      {/* 3. Main Content Grid */}
      <div className="grid gap-8 md:grid-cols-3">
         
         {/* Left Column: Balance & Stats */}
         <div className="md:col-span-2 space-y-6">
            
            {/* Big Balance Card */}
            <Card className="bg-zinc-900 text-white border-zinc-800">
                <CardHeader className="pb-2">
                    <CardTitle className="text-zinc-400 font-medium text-sm">Available Balance</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-4xl font-bold">{account.balance}</div>
                    <div className="flex items-center gap-4 mt-4">
                        <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 gap-2">
                            <ArrowDownLeft className="h-4 w-4" /> Deposit
                        </Button>
                        <Button size="sm" variant="secondary" className="bg-zinc-800 text-white hover:bg-zinc-700 gap-2">
                            <ArrowUpRight className="h-4 w-4" /> Withdraw
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Recent Activity List */}
            <div>
                <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-white">Recent Activity</h3>
                <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                    <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                        {/* We reuse the global transactions but pretend they are for this account */}
                        {allTransactions.slice(0, 5).map((tx) => (
                        //{accountTransactions.map((tx) => (
                            <div key={tx.id} className="flex items-center justify-between p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                                        <img src={tx.logo} className="h-6 w-6 object-contain" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm text-zinc-900 dark:text-zinc-100">{tx.merchant}</p>
                                        <p className="text-xs text-zinc-500">{tx.date}</p>
                                    </div>
                                </div>
                                <div className={`font-medium text-sm ${tx.amount.includes('+') ? 'text-emerald-500' : 'text-zinc-900 dark:text-zinc-100'}`}>
                                    {tx.amount}
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
         </div>

         {/* Right Column: Info Sidebar */}
         <div className="space-y-6">
            <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                <CardHeader>
                    <CardTitle className="text-base">Account Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-zinc-100 dark:border-zinc-800">
                        <span className="text-sm text-zinc-500">Status</span>
                        <span className="text-sm font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">{account.status}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-100 dark:border-zinc-800">
                        <span className="text-sm text-zinc-500">Routing Number</span>
                        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-200">{account.routing}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-100 dark:border-zinc-800">
                        <span className="text-sm text-zinc-500">Type</span>
                        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-200">{account.type}</span>
                    </div>
                </CardContent>
            </Card>
         </div>

      </div>
    </div>
  );
}