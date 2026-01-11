import { cn } from "@/lib/utils";
import { Wifi } from "lucide-react";

interface CreditCardProps {
  bank: string;
  balance: string;
  number: string;
  expiry: string;
  color: string;
  textColor: string;
}

export function CreditCard({ bank, balance, number, expiry, color, textColor }: CreditCardProps) {
  return (
    <div className={cn(
      "relative w-full aspect-[2.3/1.5] rounded-xl p-6 shadow-xl flex flex-col justify-between border bg-gradient-to-br select-none",
      color,
      textColor
    )}>
      
      <div className="flex justify-between items-start">
        <h3 className="font-bold tracking-wider">{bank}</h3>
        <Wifi className="h-6 w-6 rotate-90 opacity-70" />
      </div>
      
      <div className="flex items-center gap-4">
         <div className="h-8 w-10 bg-yellow-200/80 rounded-md border border-yellow-400/50 flex items-center justify-center">
             <div className="grid grid-cols-2 gap-[2px]">
                 <div className="w-2 h-2 border border-yellow-600/50 rounded-sm"></div>
                 <div className="w-2 h-2 border border-yellow-600/50 rounded-sm"></div>
                 <div className="w-2 h-2 border border-yellow-600/50 rounded-sm"></div>
                 <div className="w-2 h-2 border border-yellow-600/50 rounded-sm"></div>
             </div>
         </div>
      </div>
      
      <div>
        <div className="text-xl font-mono tracking-widest mb-4 opacity-90">
            {number}
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs opacity-70 font-light uppercase">Balance</p>
            <p className="font-semibold tracking-wide">{balance}</p>
          </div>
          <div className="text-right">
            <p className="text-xs opacity-70 font-light uppercase">Expires</p>
            <p className="font-semibold tracking-wide">{expiry}</p>
          </div>
        </div>
      </div>
    </div>
  );
}