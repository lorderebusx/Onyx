// src/lib/mockData.ts

import { get } from "http";

export const kpiData = [
  {
    title: "Total Net Worth",
    value: "$142,384.00",
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
    value: "$84,210.20",
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

// src/lib/mockData.ts

export const myCards = [
  {
    id: 1,
    bank: "American Express",
    network: "Amex",
    balance: "$4,253.68",
    number: "**** ****** 84005", // Amex has 15 digits usually
    expiry: "12/28",
    // Gunmetal Silver gradient
    color: "from-zinc-300 via-zinc-400 to-zinc-500 border-zinc-400", 
    textColor: "text-zinc-900"
  },
  {
    id: 2,
    bank: "Chase Sapphire",
    network: "Visa Infinite",
    balance: "$1,890.50",
    number: "**** **** **** 4242",
    expiry: "09/29",
    // Deep Blue gradient
    color: "from-blue-900 via-blue-950 to-black border-blue-900", 
    textColor: "text-white"
  },
  {
    id: 3,
    bank: "Apple Card",
    network: "Mastercard",
    balance: "$142.20",
    number: "**** **** **** 1290",
    expiry: "**/**",
    color: "from-zinc-50 via-zinc-100 to-zinc-200 border-zinc-200", 
    textColor: "text-zinc-800"
  },
  {
    id: 4,
    bank: "American Express",
    network: "Amex",
    balance: "$850.00",
    number: "**** ****** 71002",
    expiry: "07/27",
    // Gold gradient
    color: "from-yellow-200 via-yellow-400 to-yellow-600 border-yellow-400", 
    textColor: "text-yellow-950"
  }
];

const getLogo = (domain: string) => 
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export const bankAccounts = [
  { 
    id: 1, 
    name: "Chase Checking", 
    type: "Cash & Checking", 
    balance: "$162,451.90", 
    // Uses Chase's official domain logo
    logoUrl: getLogo("chase.com")
  },
  { 
    id: 2, 
    name: "BoA Checking", 
    type: "Cash & Checking", 
    balance: "$94,332.71", 
    // Uses Chase's official domain logo
    logoUrl: getLogo("bankofamerica.com")
  },
  { 
    id: 3, 
    name: "Axos HY Savings", 
    type: "Savings (4.21% APY)", 
    balance: "$445,208.88", 
    // Marcus by Goldman Sachs
    logoUrl: getLogo("axosbank.com/") 
  },
  { 
    id: 4, 
    name: "Coinbase Wallet", 
    type: "Crypto", 
    balance: "$18,450.20", 
    logoUrl: getLogo("coinbase.com") 
  },
];

export const allTransactions = [
  {
    id: 1,
    merchant: "Spotify",
    date: "Jan 7, 2026",
    amount: "-$14.99",
    status: "Completed",
    category: "Subscription",
    method: "Chase Sapphire",
    logo: getLogo("spotify.com")
  },
  {
    id: 2,
    merchant: "Uber Eats",
    date: "Jan 6, 2026",
    amount: "-$32.50",
    status: "Completed",
    category: "Food",
    method: "Amex Gold",
    logo: getLogo("ubereats.com")
  },
  {
    id: 3,
    merchant: "Upwork Inc",
    date: "Jan 5, 2026",
    amount: "+$1,450.00",
    status: "Completed",
    category: "Income",
    method: "BoA Checking",
    logo: getLogo("upwork.com")
  },
  {
    id: 4,
    merchant: "Steam Games",
    date: "Jan 4, 2026",
    amount: "-$59.99",
    status: "Pending",
    category: "Entertainment",
    method: "Chase Sapphire",
    logo: getLogo("steampowered.com")
  },
  {
    id: 5,
    merchant: "Whole Foods",
    date: "Jan 2, 2026",
    amount: "-$142.80",
    status: "Completed",
    category: "Groceries",
    method: "Amex Gold",
    logo: getLogo("wholefoodsmarket.com")
  },
  {
    id: 6,
    merchant: "Netflix",
    date: "Jan 1, 2026",
    amount: "-$19.99",
    status: "Completed",
    category: "Subscription",
    method: "Chase Sapphire",
    logo: getLogo("netflix.com")
  },
  {
    id: 7,
    merchant: "Apple Store",
    date: "Dec 28, 2025",
    amount: "-$1,299.00",
    status: "Completed",
    category: "Tech",
    method: "Amex Platinum",
    logo: getLogo("apple.com")
  },
  {
    id: 8,
    merchant: "Shell Station",
    date: "Dec 26, 2025",
    amount: "-$45.00",
    status: "Completed",
    category: "Transport",
    method: "Chase Sapphire",
    logo: getLogo("shell.com")
  },
];

