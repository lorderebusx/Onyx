import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CashFlowChart } from "@/components/CashFlowChart";
import { CategoryPieChart } from "@/components/CategoryPieChart";
import { categoryBreakdown } from "@/lib/mockData";
import { ArrowDown, Calendar } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="p-8 space-y-8">
      
      {/* 1. Header & Controls */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Analytics</h2>
          <p className="text-zinc-500">Deep dive into your financial habits.</p>
        </div>
        <div className="flex items-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-1 rounded-md">
           <Button variant="ghost" size="sm" className="h-8 text-zinc-500">1M</Button>
           <Button variant="ghost" size="sm" className="h-8 text-zinc-500">6M</Button>
           <Button variant="secondary" size="sm" className="h-8 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-none">YTD</Button>
           <Button variant="ghost" size="sm" className="h-8 text-zinc-500">ALL</Button>
        </div>
      </div>

      {/* 2. Main Charts Grid */}
      <div className="grid gap-4 md:grid-cols-7">
        
        {/* Cash Flow Chart (Takes 5/7 columns) */}
        <Card className="col-span-4 lg:col-span-5 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
          <CardHeader>
            <CardTitle>Income vs Expenses</CardTitle>
          </CardHeader>
          <CardContent className="pl-0">
             <CashFlowChart />
          </CardContent>
        </Card>

        {/* Categories Chart (Takes 2/7 columns) */}
        <Card className="col-span-3 lg:col-span-2 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
          <CardHeader>
            <CardTitle>Spending by Category</CardTitle>
          </CardHeader>
          <CardContent>
             <CategoryPieChart />
             {/* Legend */}
             <div className="mt-4 space-y-2">
               {categoryBreakdown.map((item) => (
                 <div key={item.name} className="flex items-center justify-between text-sm">
                   <div className="flex items-center gap-2">
                     <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                     <span className="text-zinc-500">{item.name}</span>
                   </div>
                   <span className="font-medium text-zinc-900 dark:text-zinc-100">${item.value}</span>
                 </div>
               ))}
             </div>
          </CardContent>
        </Card>
      </div>

      {/* 3. Insight Cards */}
      <div className="grid gap-4 md:grid-cols-3">
         <Card className="bg-emerald-500/10 border-emerald-500/20">
            <CardHeader className="pb-2">
               <CardTitle className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Savings Rate</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">32.4%</div>
               <p className="text-xs text-emerald-600/80 mt-1">Top 10% of users</p>
            </CardContent>
         </Card>

         <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
            <CardHeader className="pb-2">
               <CardTitle className="text-sm font-medium text-zinc-500">Average Monthly Spend</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="text-2xl font-bold text-zinc-900 dark:text-white">$3,240</div>
               <p className="text-xs text-zinc-500 mt-1 flex items-center">
                  <ArrowDown className="h-3 w-3 mr-1 text-emerald-500" /> 
                  <span className="text-emerald-500 font-medium">4%</span>
                  <span className="ml-1">vs last year</span>
               </p>
            </CardContent>
         </Card>

         <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
            <CardHeader className="pb-2">
               <CardTitle className="text-sm font-medium text-zinc-500">Projected Savings (Dec)</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="text-2xl font-bold text-zinc-900 dark:text-white">$42,500</div>
               <p className="text-xs text-zinc-500 mt-1">Based on current trends</p>
            </CardContent>
         </Card>
      </div>

    </div>
  );
}