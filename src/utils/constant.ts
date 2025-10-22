export interface TInvoice {
  invoice: string;
  paymentStatus: string;
  totalAmount: string;
  method: string;
  to: string;
  date: string;
  status: "active" | "pending" | "block";
  name: string;   
  email: string;  
}

export const invoices: TInvoice[] = [
  {
    invoice: "TXID001",
    paymentStatus: "Paid",
    totalAmount: "250.00",
    method: "Top up",
    to: "01712345678",
    date: "2025-10-01",
    status: "active",
    name: "Abdullah",
    email: "abdullah@example.com",
  },
  {
    invoice: "TXID002",
    paymentStatus: "Pending",
    totalAmount: "150.00",
    method: "Cash in",
    to: "01898765432",
    date: "2025-10-03",
    status: "pending",
    name: "Rahim Uddin",
    email: "rahim@example.com",
  },
  {
    invoice: "TXID003",
    paymentStatus: "Unpaid",
    totalAmount: "350.00",
    method: "Cash out",
    to: "01911223344",
    date: "2025-10-05",
    status: "block",
    name: "Karim Ali",
    email: "karim@example.com",
  },
  {
    invoice: "TXID004",
    paymentStatus: "Paid",
    totalAmount: "450.00",
    method: "Top up",
    to: "01655667788",
    date: "2025-10-07",
    status: "active",
    name: "Hasan Mahmud",
    email: "hasan@example.com",
  },
  {
    invoice: "TXID005",
    paymentStatus: "Paid",
    totalAmount: "550.00",
    method: "Cash in",
    to: "01599887766",
    date: "2025-10-10",
    status: "active",
    name: "Sadia Akter",
    email: "sadia@example.com",
  },
  {
    invoice: "TXID006",
    paymentStatus: "Pending",
    totalAmount: "200.00",
    method: "Cash out",
    to: "01344556677",
    date: "2025-10-12",
    status: "pending",
    name: "Nayeem Khan",
    email: "nayeem@example.com",
  },
  {
    invoice: "TXID007",
    paymentStatus: "Unpaid",
    totalAmount: "300.00",
    method: "Top up",
    to: "01422334455",
    date: "2025-10-15",
    status: "block",
    name: "Mitu Rahman",
    email: "mitu@example.com",
  },
];
