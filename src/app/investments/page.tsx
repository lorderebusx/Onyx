import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { investments, crypto } from "@/lib/mockData";
import { ArrowUpRight, ArrowDownRight, TrendingUp, TrendingDown, PieChart } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { InvestmentsChart } from "@/components/InvestmentCharts";

export default function InvestmentsPage() {
  return (
    <div className="p-8 space-y-8">
      
      {/* 1. Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Portfolio</h2>
          <p className="text-zinc-500">Real-time market data and holdings.</p>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        
        <Card className="bg-zinc-900 text-white border-zinc-800">
           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-zinc-400">Total Balance</CardTitle>
            <PieChart className="h-4 w-4 text-zinc-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,601,479.74</div>
            <p className="text-xs text-emerald-500 flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" /> +$5,969.21 (Today)
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-zinc-500">Top Performer</CardTitle>
            <TrendingUp className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">VanEck Semiconductor ETF</div>
            <p className="text-xs text-emerald-500 flex items-center mt-1">
              +2.75% <span className="text-zinc-500 ml-1">last 24h</span>
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-zinc-500">Worst Performer</CardTitle>
            <TrendingDown className="h-4 w-4 text-rose-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">NVIDIA Corp</div>
            <p className="text-xs text-rose-500 flex items-center mt-1">
              -0.095% <span className="text-zinc-500 ml-1">last 24h</span>
            </p>
          </CardContent>
        </Card>
      </div>

      <InvestmentsChart />
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-zinc-500">Brokerage Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              
              <div className="flex h-4 w-full overflow-hidden rounded-full">
                <div className="w-[56.3%] bg-zinc-900 dark:bg-zinc-100" /> {/* Vanguard */}
                <div className="w-[43.7%] bg-zinc-400 dark:bg-zinc-600" /> {/* Robinhood */}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                   <div className="flex items-center gap-2 mb-1">
                     <div className="h-2 w-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
                     <p className="text-sm font-medium">J.P. Morgan</p>
                   </div>
                   <p className="text-xl font-bold text-zinc-900 dark:text-white">$748,795.95</p>
                   <p className="text-xs text-zinc-500">56.3% of portfolio</p>
                </div>
                <div>
                   <div className="flex items-center gap-2 mb-1">
                     <div className="h-2 w-2 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                     <p className="text-sm font-medium">Merill Lynch</p>
                   </div>
                   <p className="text-xl font-bold text-zinc-900 dark:text-white">$580,736.30</p>
                   <p className="text-xs text-zinc-500">43.7% of portfolio</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card 2: Crypto Storage */}
        <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-zinc-500">Crypto Custody</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              
              <div className="flex h-4 w-full overflow-hidden rounded-full">
                <div className="w-[66.5%] bg-orange-500" /> {/* Ledger */}
                <div className="w-[29.8%] bg-blue-600" />   {/* Coinbase */}
                <div className="w-[3.7%] bg-purple-500" /> {/* Metamask */}
              </div>

              <div className="space-y-3">
                
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <div className="h-2 w-2 rounded-full bg-orange-500" />
                       <span className="text-sm font-medium">Ledger Stax</span>
                    </div>
                    <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">$180,945.04</span>
                 </div>
                 
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <div className="h-2 w-2 rounded-full bg-blue-600" />
                       <span className="text-sm font-medium">Coinbase Exchange</span>
                    </div>
                    <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">$81,002.45</span>
                 </div>

                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <div className="h-2 w-2 rounded-full bg-purple-500" />
                       <span className="text-sm font-medium">Metamask</span>
                    </div>
                    <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">$10,000</span>
                 </div>
              </div>

            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-1 mt-8">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Active Holdings</h3>
        <p className="text-sm text-zinc-500">
          Live market data for your stock and crypto positions.
        </p>
      </div>

      <div className="space-y-1 mt-8">
        <h4 className="text-lg font-regular text-zinc-500 dark:text-white">Stocks and MTFs</h4>
      </div>

      {/* 3. Asset Table */}
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-zinc-100 dark:border-white/10 hover:bg-transparent">
              <TableHead className="w-[300px] text-zinc-500">Asset</TableHead>
              <TableHead className="text-right text-zinc-500">Price</TableHead>
              <TableHead className="text-right text-zinc-500">24h Change</TableHead>
              <TableHead className="text-right text-zinc-500">Holdings</TableHead>
              <TableHead className="text-right text-zinc-500">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {investments.map((asset) => (
              <TableRow 
                key={asset.id} 
                className="border-b border-zinc-50 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors group"
              >
                <TableCell className="font-medium">
                   <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-white ring-1 ring-zinc-200 dark:ring-zinc-800 p-1 flex items-center justify-center">
                        <img src={asset.logo} alt={asset.name} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{asset.name}</p>
                        <p className="text-xs text-zinc-500">{asset.ticker}</p>
                      </div>
                   </div>
                </TableCell>

                <TableCell className="text-right text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {asset.price}
                </TableCell>

                <TableCell className="text-right">
                    <div className={cn(
                        "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
                        asset.trend === "up" 
                            ? "bg-emerald-500/10 text-emerald-500" 
                            : "bg-rose-500/10 text-rose-500"
                    )}>
                        {asset.change}
                    </div>
                </TableCell>

                <TableCell className="text-right text-sm text-zinc-500">
                    {asset.holdings} <span className="text-[10px] uppercase ml-0.5">{asset.ticker}</span>
                </TableCell>

                <TableCell className="text-right font-medium text-zinc-900 dark:text-zinc-100">
                    {asset.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="space-y-1 mt-8">
        <h4 className="text-lg font-regular text-zinc-500 dark:text-white">Crypto</h4>
      </div>
    
      {/* 4. Crypto Table */}
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-zinc-100 dark:border-white/10 hover:bg-transparent">
              <TableHead className="w-[300px] text-zinc-500">Asset</TableHead>
              <TableHead className="text-right text-zinc-500">Price</TableHead>
              <TableHead className="text-right text-zinc-500">24h Change</TableHead>
              <TableHead className="text-right text-zinc-500">Holdings</TableHead>
              <TableHead className="text-right text-zinc-500">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {crypto.map((asset) => (
              <TableRow 
                key={asset.id} 
                className="border-b border-zinc-50 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors group"
              >
                <TableCell className="font-medium">
                   <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-white ring-1 ring-zinc-200 dark:ring-zinc-800 p-1 flex items-center justify-center">
                        <img src={asset.logo} alt={asset.name} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{asset.name}</p>
                        <p className="text-xs text-zinc-500">{asset.ticker}</p>
                      </div>
                   </div>
                </TableCell>

                <TableCell className="text-right text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {asset.price}
                </TableCell>

                <TableCell className="text-right">
                    <div className={cn(
                        "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
                        asset.trend === "up" 
                            ? "bg-emerald-500/10 text-emerald-500" 
                            : "bg-rose-500/10 text-rose-500"
                    )}>
                        {asset.change}
                    </div>
                </TableCell>

                <TableCell className="text-right text-sm text-zinc-500">
                    {asset.holdings} <span className="text-[10px] uppercase ml-0.5">{asset.ticker}</span>
                </TableCell>

                <TableCell className="text-right font-medium text-zinc-900 dark:text-zinc-100">
                    {asset.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

    </div>
  );
}