import { CreditCard } from "@/components/CreditCard";
import { myCards, bankAccounts, getAccountById } from "@/lib/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WalletPage() {
  return (
    <div className="p-8 space-y-8">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Wallet</h2>
          <p className="text-zinc-500">Manage your payment methods and liquid assets.</p>
        </div>
        <Button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:opacity-90">
          <Plus className="h-4 w-4" /> Add Card
        </Button>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {myCards.map((card) => (
          <Link key={card.id} href={`/wallet/${card.id}`}>
            <CreditCard 
              key={card.id}
              {...card} // Pass all properties (bank, color, etc.)
            />
          </Link>
        ))}
      </div>

      {/* Bank Accounts Section */}
      
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Linked Accounts</h3>
          <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
            <CardContent className="p-0">
              <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {bankAccounts.map((account) => (
                  <Link key={account.id} href={`/wallet/${account.id}`} className="block">
                    <div key={account.id} className="flex items-center p-6 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                      
                      {/* Bank Logo Placeholder */}
                      <div className="h-10 w-10 rounded-full bg-white p-1 flex items-center justify-center border border-zinc-200 dark:border-zinc-700 overflow-hidden">
                        <img 
                          src={account.logoUrl} 
                          alt={account.name} 
                          className="h-full w-full object-contain" 
                        />
                      </div>

                      {/* Account Info */}
                      <div className="ml-4 flex-1">
                        <p className="font-medium text-zinc-900 dark:text-zinc-100">{account.name}</p>
                        <p className="text-sm text-zinc-500">{account.type}</p>
                      </div>

                      {/* Balance */}
                      <div className="text-right mr-4">
                        <p className="font-medium text-zinc-900 dark:text-zinc-100">{account.balance}</p>
                      </div>
                        
                      {/* Action Icon */}
                      <Button variant="ghost" size="icon" className="text-zinc-400">
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
    </div>
  );
}