"use client";

import { useParams, useRouter } from "next/navigation";
import { getAccountById, allTransactions, myCards } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CreditCard as CardIcon, Calendar, Percent, ShieldCheck, Copy, Settings, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { CreditCard } from "@/components/CreditCard"; // Import our visual card
import { cn } from "@/lib/utils";

export default function AccountDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  const id = Number(params.id);
  
  // 1. Try to find the raw card data (for the visual component)
  const rawCard = myCards.find(c => c.id === id);
  const isCreditCard = !!rawCard;
  
  // 2. Get the standardized account data (for the transactions/balance)
  const account = getAccountById(id);

  if (!account) return <div className="p-8">Account not found</div>;

  // Filter transactions for this ID
  const accountTransactions = allTransactions.filter(tx => tx.accountId === id);

  // --- LAYOUT 1: CREDIT CARD VIEW ---
  if (isCreditCard && rawCard) {
    return (
      <div className="p-8 space-y-8 max-w-6xl mx-auto">
        <Button variant="ghost" className="pl-0 gap-2 text-zinc-500" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" /> Back to Wallet
        </Button>

        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Left: The Visual Card & Actions */}
          <div className="space-y-8">
            <div className="max-w-md mx-auto lg:mx-0 transform hover:scale-[1.02] transition-transform duration-500">
               {/* Reuse the component we built earlier */}
               <CreditCard {...rawCard} />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button className="w-full" size="lg">Pay Card</Button>
              <Button variant="outline" className="w-full" size="lg">Manage Lock</Button>
            </div>

            {/* Credit Specific Stats */}
            <div className="grid grid-cols-3 gap-4">
               <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center">
                  <div className="flex justify-center mb-2"><Percent className="h-5 w-5 text-zinc-400" /></div>
                  <div className="text-2xl font-bold">24.99%</div>
                  <div className="text-xs text-zinc-500">APR</div>
               </div>
               <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center">
                  <div className="flex justify-center mb-2"><Calendar className="h-5 w-5 text-zinc-400" /></div>
                  <div className="text-2xl font-bold">Feb 14</div>
                  <div className="text-xs text-zinc-500">Due Date</div>
               </div>
               <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center">
                  <div className="flex justify-center mb-2"><ShieldCheck className="h-5 w-5 text-emerald-500" /></div>
                  <div className="text-2xl font-bold text-emerald-600">Active</div>
                  <div className="text-xs text-zinc-500">Status</div>
               </div>
            </div>
          </div>

          {/* Right: Transactions List */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Latest Transactions</h3>
            <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
               <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {accountTransactions.length > 0 ? (
                    accountTransactions.map((tx) => (
                      <div key={tx.id} className="flex items-center justify-between px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                          <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center p-2">
                                  <img src={tx.logo} className="w-full h-full object-contain" />
                              </div>
                              <div>
                                  <p className="font-medium text-sm text-zinc-900 dark:text-zinc-100">{tx.merchant}</p>
                                  <p className="text-xs text-zinc-500">{tx.date}</p>
                              </div>
                          </div>
                          <div className="font-medium text-sm text-zinc-900 dark:text-zinc-100">
                              {tx.amount}
                          </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center text-zinc-500">No transactions yet.</div>
                  )}
               </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // --- LAYOUT 2: BANK ACCOUNT VIEW (The original one) ---
  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto">
      <Button variant="ghost" className="text-zinc-500 pl-0 gap-2" onClick={() => router.back()}>
        <ArrowLeft className="h-4 w-4" /> Back to Wallet
      </Button>

      {/* Standard Header for Banks */}
      <div className="flex items-start justify-between">
         <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-white ring-1 ring-zinc-200 dark:ring-zinc-800 p-2 flex items-center justify-center overflow-hidden shadow-sm">
                <img 
                  src={account.logoUrl} 
                  alt={account.name} 
                  className={cn(
                    "w-full h-full object-contain transition-transform",
                    account.name === "American Express" && "scale-150"
                  )} 
                />
            </div>
            <div>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">{account.name}</h2>
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
         <div className="flex gap-2">
            <Button variant="outline" size="icon"><Settings className="h-4 w-4" /></Button>
            <Button>Transfer Funds</Button>
         </div>
      </div>

      <Separator className="dark:bg-zinc-800" />

      {/* Grid for Bank Details */}
      <div className="grid gap-8 md:grid-cols-3">
         <div className="md:col-span-2 space-y-6">
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

            <div>
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                    <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                        {accountTransactions.length > 0 ? (
                           accountTransactions.map((tx) => (
                               <div key={tx.id} className="flex items-center justify-between p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                                   <div className="flex items-center gap-3">
                                       <div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center p-2">
                                           <img src={tx.logo} className="w-full h-full object-contain" />
                                       </div>
                                       <div>
                                           <p className="font-medium text-sm text-zinc-900 dark:text-zinc-100">{tx.merchant}</p>
                                           <p className="text-xs text-zinc-500">{tx.date}</p>
                                       </div>
                                   </div>
                                   <div className="font-medium text-sm">{tx.amount}</div>
                               </div>
                           ))
                        ) : (
                           <div className="p-8 text-center text-zinc-500">No transactions yet.</div>
                        )}
                    </div>
                </Card>
            </div>
         </div>

         <div className="space-y-6">
            <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                <CardHeader><CardTitle className="text-base">Account Details</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-zinc-100 dark:border-zinc-800">
                        <span className="text-sm text-zinc-500">Status</span>
                        <span className="text-sm font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">{account.status}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-100 dark:border-zinc-800">
                        <span className="text-sm text-zinc-500">Routing Number</span>
                        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-200">{account.routing}</span>
                    </div>
                </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}