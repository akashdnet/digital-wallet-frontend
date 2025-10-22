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
    date: "2025-01-05",
    status: "active",
    name: "Tony Stark",
    email: "ironman@avengers.com",
  },
  {
    invoice: "TXID002",
    paymentStatus: "Pending",
    totalAmount: "150.00",
    method: "Cash in",
    to: "01898765432",
    date: "2025-01-20",
    status: "pending",
    name: "Steve Rogers",
    email: "captain@avengers.com",
  },
  {
    invoice: "TXID003",
    paymentStatus: "Unpaid",
    totalAmount: "350.00",
    method: "Cash out",
    to: "01911223344",
    date: "2025-02-12",
    status: "block",
    name: "Natasha Romanoff",
    email: "blackwidow@avengers.com",
  },
  {
    invoice: "TXID004",
    paymentStatus: "Paid",
    totalAmount: "450.00",
    method: "Top up",
    to: "01655667788",
    date: "2025-03-03",
    status: "active",
    name: "Thor Odinson",
    email: "thor@asgard.com",
  },
  {
    invoice: "TXID005",
    paymentStatus: "Paid",
    totalAmount: "550.00",
    method: "Cash in",
    to: "01599887766",
    date: "2025-03-10",
    status: "active",
    name: "Bruce Banner",
    email: "hulk@avengers.com",
  },
  {
    invoice: "TXID006",
    paymentStatus: "Pending",
    totalAmount: "200.00",
    method: "Cash out",
    to: "01344556677",
    date: "2025-03-18",
    status: "pending",
    name: "Clint Barton",
    email: "hawkeye@avengers.com",
  },
  {
    invoice: "TXID007",
    paymentStatus: "Unpaid",
    totalAmount: "300.00",
    method: "Top up",
    to: "01422334455",
    date: "2025-03-25",
    status: "block",
    name: "Wanda Maximoff",
    email: "scarletwitch@avengers.com",
  },
  {
    invoice: "TXID008",
    paymentStatus: "Paid",
    totalAmount: "400.00",
    method: "Cash in",
    to: "01744556677",
    date: "2025-04-05",
    status: "active",
    name: "Peter Parker",
    email: "spiderman@marvel.com",
  },
  {
    invoice: "TXID009",
    paymentStatus: "Pending",
    totalAmount: "220.00",
    method: "Cash out",
    to: "01855667788",
    date: "2025-04-15",
    status: "pending",
    name: "Stephen Strange",
    email: "doctorstrange@marvel.com",
  },
  {
    invoice: "TXID010",
    paymentStatus: "Unpaid",
    totalAmount: "330.00",
    method: "Top up",
    to: "01966778899",
    date: "2025-04-28",
    status: "block",
    name: "T'Challa",
    email: "blackpanther@wakanda.com",
  },
];
