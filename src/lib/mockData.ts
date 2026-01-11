// src/lib/mockData.ts

import { get } from "http";

export const kpiData = [
  {
    title: "Total Liquid Net Worth",
    value: "$721,404.29",
    change: "+2.4%",
    trend: "up", 
  },
  {
    title: "Monthly Spending",
    value: "$3,240.50",
    change: "-12.5%",
    trend: "down", // Good thing (spending less)
  },
  {
    title: "Active Investments",
    value: "$1,601,479.74",
    change: "+5.2%",
    trend: "up",
  },
];

export const recentTransactions = [
  {
    id: 1,
    merchant: "Apple Store",
    date: "Today, 2:40 PM",
    amount: "-$1,299.00",
    type: "expense",
    category: "Tech",
  },
  {
    id: 2,
    merchant: "Upwork Earnings",
    date: "Yesterday, 10:00 AM",
    amount: "+$850.00",
    type: "income",
    category: "Freelance",
  },
  {
    id: 3,
    merchant: "Whole Foods Market",
    date: "Jan 5, 2026",
    amount: "-$142.80",
    type: "expense",
    category: "Groceries",
  },
  {
    id: 4,
    merchant: "Spotify Premium",
    date: "Jan 2, 2026",
    amount: "-$11.99",
    type: "expense",
    category: "Subscription",
  },
];

export const overviewChartData = [
  { name: "Jul", income: 4500, expense: 3200 },
  { name: "Aug", income: 5200, expense: 4800 }, // High spend month
  { name: "Sep", income: 4800, expense: 2100 }, // Saved a lot
  { name: "Oct", income: 6100, expense: 3500 },
  { name: "Nov", income: 5900, expense: 5200 }, // Christmas shopping start?
  { name: "Dec", income: 7200, expense: 6500 }, // Holiday spending
  { name: "Jan", income: 4200, expense: 1200 }, // Fresh start
];

const getLogo = (domain: string) => 
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export const myCards = [
  {
    id: 10,
    bank: "American Express",
    network: "Amex",
    balance: "$4,253.68",
    number: "**** ****** 84005", // Amex has 15 digits usually
    expiry: "12/28",
    logoUrl: "/american-express.png",
    color: "from-zinc-300 via-zinc-400 to-zinc-500 border-zinc-400", 
    textColor: "text-zinc-900"
  },
  {
    id: 11,
    bank: "Chase Sapphire",
    network: "Visa Infinite",
    balance: "$1,890.50",
    number: "**** **** **** 4242",
    expiry: "09/29",
    logoUrl: getLogo("chase.com"),
    color: "from-blue-900 via-blue-950 to-black border-blue-900", 
    textColor: "text-white"
  },
  {
    id: 12,
    bank: "Apple Card",
    network: "Mastercard",
    balance: "$142.20",
    number: "**** **** **** 1290",
    expiry: "**/**",
    logoUrl: "/Apple-Logo-500x281.png",
    color: "from-zinc-50 via-zinc-100 to-zinc-200 border-zinc-200", 
    textColor: "text-zinc-800"
  },
  {
    id: 13,
    bank: "American Express",
    network: "Amex",
    balance: "$850.00",
    number: "**** ****** 71002",
    expiry: "07/27",
    logoUrl: "/american-express.png",
    color: "from-yellow-200 via-yellow-400 to-yellow-600 border-yellow-400", 
    textColor: "text-yellow-950"
  }
];

export const bankAccounts = [
  { 
    id: 1, 
    name: "Chase Checking", 
    type: "Cash & Checking", 
    balance: "$162,451.90", 
    logoUrl: getLogo("chase.com"),
    accountNumber: "****4590",
    routing: "****0210",
    status: "Active",
    monthlyFee: "$0.00"
  },
  { 
    id: 2, 
    name: "BoA Checking", 
    type: "Cash & Checking", 
    balance: "$94,332.71", 
    logoUrl: getLogo("bankofamerica.com"),
    accountNumber: "****8411",
    routing: "****9874",
    status: "Active",
    monthlyFee: "$0.00"
  },
  { 
    id: 3, 
    name: "Axos HY Savings", 
    type: "Savings (4.21% APY)", 
    balance: "$446,169.48", 
    logoUrl: getLogo("axosbank.com/"),
    accountNumber: "****1151",
    routing: "****+4545",
    status: "Active",
    interestEarned: "+$56,169.48$"
  },
  { 
    id: 4, 
    name: "Coinbase Wallet", 
    type: "Crypto", 
    balance: "$18,450.20", 
    logoUrl: getLogo("coinbase.com") ,
    accountNumber: "0x71C...9A2",
    routing: "N/A",
    status: "Active",
    network: "Ethereum Mainnet"
  },
];

export function getAccountById(id: number) {
  // First, try to find it in bank accounts
  const bank = bankAccounts.find(acc => acc.id === id);
  if (bank) return bank;

  // If not found, try to find it in credit cards
  // We adapt the card data structure to match the "Account" shape expected by the page
  const card = myCards.find(c => c.id === id);
  if (card) {
    return {
      id: card.id,
      name: card.bank,         // Map 'bank' to 'name'
      type: `${card.network} Credit`, // Create a type string
      balance: card.balance,
      logoUrl: card.logoUrl,     // Use the card image as the "logo"
      accountNumber: card.number,
      routing: "N/A",
      status: "Active"
    };
  }
  
  return undefined;
}

export const allTransactions = [
  {
    id: 1,
    accountId: 11,
    merchant: "Spotify",
    date: "Jan 7, 2026",
    amount: "-$11.99",
    status: "Pending",
    category: "Subscription",
    method: "Chase Sapphire",
    logo: getLogo("spotify.com")
  },
  {
    id: 2,
    accountId: 12,
    merchant: "Apple One",
    date: "Jan 4, 2026",
    amount: "-$19.95",
    status: "Completed",
    category: "Subscription",
    method: "Apple Card",
    logo: getLogo("apple.com")
  },
  {
    id: 3,
    accountId: 13,
    merchant: "Uber Eats",
    date: "Jan 2, 2026",
    amount: "-$52.50",
    status: "Completed",
    category: "Food",
    method: "Amex Gold",
    logo: getLogo("ubereats.com")
  },
  {
    id: 4,
    accountId: 3,
    merchant: "Direct Deposit",
    date: "Jan 3, 2026",
    amount: "+$5,000.00",
    status: "Completed",
    category: "Savings Deposit",
    method: "Axos HY Savings",
    logo: getLogo("axosbank.com")
  },
  {
    id: 5,
    accountId: 1,
    merchant: "ACH Credit",
    date: "Jan 2, 2026",
    amount: "+$52,450.00",
    status: "Completed",
    category: "Income",
    method: "Chase Checking",
    logo: getLogo("chase.com")
  },
  {
    id: 6,
    accountId: 10,
    merchant: "Steam Games",
    date: "Jan 3, 2026",
    amount: "-$59.99",
    status: "Completed",
    category: "Entertainment",
    method: "Chase Sapphire",
    logo: getLogo("steampowered.com")
  },
  {
    id: 7,
    accountId: 10,
    merchant: "Whole Foods",
    date: "Jan 2, 2026",
    amount: "-$442.80",
    status: "Completed",
    category: "Groceries",
    method: "Amex Platinum",
    logo: getLogo("wholefoodsmarket.com")
  },
  {
    id: 8,
    accountId: 11,
    merchant: "Netflix",
    date: "Jan 1, 2026",
    amount: "-$19.99",
    status: "Completed",
    category: "Subscription",
    method: "Chase Sapphire",
    logo: getLogo("netflix.com")
  },
  {
    id: 9,
    accountId: 12,
    merchant: "Apple Store",
    date: "Dec 28, 2025",
    amount: "-$1,299.00",
    status: "Completed",
    category: "Tech",
    method: "Apple Card",
    logo: getLogo("apple.com")
  },
  {
    id: 10,
    accountId: 10,
    merchant: "Shell Station",
    date: "Dec 26, 2025",
    amount: "-$55.00",
    status: "Completed",
    category: "Transport",
    method: "Amex Platinum",
    logo: getLogo("shell.com")
  },
  {
    id: 11,
    accountId: 13,
    merchant: "Amazon",
    date: "Dec 24, 2025",
    amount: "-$725.00",
    status: "Completed",
    category: "Shopping",
    method: "Amex Gold",
    logo: getLogo("amazon.com")
  },
  {
    id: 12,
    accountId: 13,
    merchant: "The Ranch",
    date: "Dec 23, 2025",
    amount: "-$72.50",
    status: "Completed",
    category: "Food",
    method: "Amex Gold",
    logo: getLogo("https://theranchlc.com")
  }
];

export const investments = [
  {
    id: 1,
    name: "NVIDIA Corp",
    ticker: "NVDA",
    price: "$184.82",
    change: "-0.095%",
    holdings: "1,900.0",
    value: "$351,158.00",
    logo: getLogo("nvidia.com"),
    trend: "down"
  },
  {
    id: 2,
    name: "Microsoft Corp",
    ticker: "MSFT",
    price: "$479.28",
    change: "+0.24%",
    holdings: "270.0",
    value: "$129,405.60",
    logo: getLogo("microsoft.com"),
    trend: "up"
  },
  {
    id: 3,
    name: "Amazon.com Inc",
    ticker: "AMZN",
    price: "$247.34",
    change: "+0.41%",
    holdings: "405.00",
    value: "$100,172.70",
    logo: getLogo("amazon.com"),
    trend: "up"
  },
  {
    id: 4,
    name: "Dodge & Cox's Stock Fund",
    ticker: "DODGX",
    price: "$17.01",
    change: "+0.12%",
    holdings: "9,900.0",
    value: "$168,399.00",
    logo: getLogo("dodgeandcox.com"),
    trend: "up"
  },
  {
    id: 5,
    name: "Vanguard S&P 500 ETF",
    ticker: "VOO",
    price: "$638.31",
    change: "+0.67%",
    holdings: "300.0",
    value: "$191,493.00",
    logo: getLogo("vanguard.com"),
    trend: "up"
  },
  {
    id: 6,
    name: "JPMorgan Equity Premium Income ETF",
    ticker: "JEPI",
    price: "$58.25",
    change: "+0.36%",
    holdings: "775.0",
    value: "$45,143.75",
    logo: getLogo("jpmorgan.com"),
    trend: "up"
  },
  {
    id: 7,
    name: "VanEck Semiconductor ETF",
    ticker: "SMH",
    price: "$389.34",
    change: "+2.75%",
    holdings: "280",
    value: "$109,015.20",
    logo: getLogo("vaneck.com"),
    trend: "up"
  },
  {
    id: 8,
    name: "Goldman Sachs Group Inc",
    ticker: "GS",
    price: "$938.98",
    change: "+0.44%",
    holdings: "250.0",
    value: "$234,745.00",
    logo: getLogo("goldmansachs.com"),
    trend: "up"
  }
];

export const crypto = [
  {
    id: 1,
    name: "Bitcoin",
    ticker: "BTC",
    price: "$90,472.52",
    change: "+0.03%",
    holdings: "2.0",
    value: "$180,945.04",
    logo: getLogo("bitcoin.org"),
    trend: "up"
  },
  {
    id: 2,
    name: "Ethereum",
    ticker: "ETH",
    price: "$3105.83",
    change: "+0.76%",
    holdings: "15.0",
    value: "$46,587.45",
    logo: getLogo("ethereum.org"),
    trend: "up"
  },
  {
    id: 3,
    name: "Solana",
    ticker: "SOL",
    price: "$137.66",
    change: "+1.42%",
    holdings: "250.00",
    value: "$34,415.00",
    logo: getLogo("solana.com"),
    trend: "up"
  },
  {
    id: 4,
    name: "USDC Stablecoin",
    ticker: "USDC",
    price: "$1.00",
    change: "+0.00%",
    holdings: "10,000.0",
    value: "$10,000.00",
    logo: getLogo("usdc.com"),
    trend: "up"
  }
];

// src/lib/mockData.ts

export const portfolioHistory = [
  { month: "Jul", value: 54000 },
  { month: "Aug", value: 58500 },
  { month: "Sep", value: 57200 }, // slight dip
  { month: "Oct", value: 62400 },
  { month: "Nov", value: 68900 },
  { month: "Dec", value: 70472 },
];

export const cryptoHistory = [
  { month: "Jul", value: 14000 },
  { month: "Aug", value: 12500 }, // dip
  { month: "Sep", value: 16800 }, // pump
  { month: "Oct", value: 15200 },
  { month: "Nov", value: 18400 },
  { month: "Dec", value: 20812 },
];

export const yearlyAnalytics = [
  { month: "Jan", income: 4500, expense: 3200 },
  { month: "Feb", income: 5200, expense: 4800 },
  { month: "Mar", income: 4800, expense: 4100 },
  { month: "Apr", income: 6100, expense: 3500 },
  { month: "May", income: 5900, expense: 5200 },
  { month: "Jun", income: 7200, expense: 4500 },
  { month: "Jul", income: 6800, expense: 3800 },
  { month: "Aug", income: 7400, expense: 5100 },
  { month: "Sep", income: 7100, expense: 4200 },
  { month: "Oct", income: 8200, expense: 4800 },
  { month: "Nov", income: 7900, expense: 5600 },
  { month: "Dec", income: 9200, expense: 6100 },
];

export const categoryBreakdown = [
  { name: "Housing", value: 1800, color: "#3b82f6" }, // Blue
  { name: "Food", value: 650, color: "#10b981" },    // Emerald
  { name: "Transport", value: 450, color: "#f59e0b" }, // Amber
  { name: "Utilities", value: 250, color: "#6366f1" }, // Indigo
  { name: "Entertainment", value: 350, color: "#ec4899" }, // Pink
];