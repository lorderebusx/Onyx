import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { allTransactions } from "@/lib/mockData";
import { Search, Filter, Download } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TransactionsPage() {
  return (
    <div className="p-8 space-y-6">
      
      {/* 1. Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Transactions</h2>
          <p className="text-zinc-500">Monitor your financial activity.</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="gap-2">
             <Download className="h-4 w-4" /> Export
           </Button>
        </div>
      </div>

      {/* 2. Toolbar (Search + Filter) */}
      <div className="flex items-center justify-between gap-4 bg-white dark:bg-zinc-900 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
         <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
            <Input 
              placeholder="Search merchants..." 
              className="pl-9 bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800"
            />
         </div>
         <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" /> Filter
         </Button>
      </div>

      {/* 3. The Table */}
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
        <Table>
  <TableHeader>
    {/* Header: Very faint bottom border */}
    <TableRow className="border-b border-zinc-100 dark:border-white/10 hover:bg-transparent">
      <TableHead className="w-[300px] text-zinc-500 dark:text-zinc-400">Merchant</TableHead>
      <TableHead className="text-zinc-500 dark:text-zinc-400">Category</TableHead>
      <TableHead className="text-zinc-500 dark:text-zinc-400">Status</TableHead>
      <TableHead className="text-zinc-500 dark:text-zinc-400">Date</TableHead>
      <TableHead className="text-right text-zinc-500 dark:text-zinc-400">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {allTransactions.map((tx) => (
      <TableRow 
        key={tx.id} 
        // THE FIX: "dark:border-white/5" makes the line 95% transparent. 
        // "dark:hover:bg-white/5" makes the hover subtle.
        className="border-b border-zinc-50 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors group"
      >
        
        {/* Merchant Column */}
        <TableCell className="font-medium">
           <div className="flex items-center gap-3">
              {/* Added group-hover effect to logo border */}
              <div className="h-8 w-8 rounded-full bg-transparent border border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-600 transition-colors flex items-center justify-center overflow-hidden p-1">
                <img src={tx.logo} alt={tx.merchant} className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{tx.merchant}</p>
                <p className="text-xs text-zinc-500">{tx.method}</p>
              </div>
           </div>
        </TableCell>

        {/* Category Column - Simplified style */}
        <TableCell>
          <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 px-2 py-1 rounded-md inline-block">
            {tx.category}
          </div>
        </TableCell>

        {/* Status Column */}
        <TableCell>
           <Badge variant="outline" 
                  className={cn(
                    "rounded-md border-0 px-2 py-0.5 font-normal text-xs", // Removed border, flattened look
                    tx.status === "Completed" 
                      ? "bg-emerald-500/10 text-emerald-500" 
                      : "bg-zinc-100 text-zinc-500 dark:bg-white/10 dark:text-zinc-400"
                  )}>
              {tx.status}
           </Badge>
        </TableCell>

        {/* Date Column */}
        <TableCell className="text-zinc-500 text-xs">{tx.date}</TableCell>

        {/* Amount Column */}
        <TableCell className={cn(
          "text-right font-medium text-sm",
          tx.amount.startsWith("+") ? "text-emerald-500" : "text-zinc-900 dark:text-zinc-100"
        )}>
          {tx.amount}
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
      </div>

    </div>
  );
}