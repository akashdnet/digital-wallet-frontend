


# D-Wallet Frontend

Hey there 👋 Welcome to the **D-Wallet Frontend** 🚀  
This is the frontend of our Fintech app. It’s basically the frontend with dashboard where users, agents and admins can log in, check stuff, and manage their money. We’ve kept it fast, clean, and simple so you don’t get lost in a mess of buttons.

---

## 🔑 What You Can Do Here

### 👨‍💻 Admins
- Get a **big picture view** of the whole system with charts and stats.  
- Manage all users (add, edit, delete, whatever you need).  
- Manage agents the same way.  
- Approve, activate or block new signups and users.  
- See every single transaction that happens on the platform.  

### 🧑‍💼 Agents
- Get your own **dashboard** to track your bussiness to see transactions.  
- Do the main money stuff: Cash In, Cash Out. 
- Check your full transaction history.  
- Update your profile and settings.  

### 🙋 Users
- See your **account balance** and recent activity at a glance.  
- Send money directly to other users.  
- Manage your wallet:  
  - Add money (Cash In / Top Up)  
  - Take money out (Cash Out)  
- Look back at your transaction history.  
- Update your info or change your password.  

---


## 🛠 Tech Stack

## 🛠 Tech Stack

- **Framework:** React + Vite  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS + shadcn/ui  
- **State Management:** Redux Toolkit  
- **Routing:** React Router  
- **Forms & Validation:** React Hook Form + Zod  
- **Data Fetching:** Axios + RTK Query  
- **Charts:** Chart.js (with react-chartjs-2)  
- **Linting:** ESLint  
- **Tour Guide:** react-joyride  
  

---

## 📂 Project Structure

```
/src
├── assets/              # Static assets (images, SVGs)
├── components/
│   ├── ui/              # Reusable UI (Button, Input, etc.)
│   ├── layouts/         # Layouts (DashboardLayout, CommonLayout)
│   └── modules/         # Feature-based components
│       ├── login/       # Login page
│       ├── overview/    # Dashboard charts & stats
│       ├── user-management/ # Admin user management
│       └── ...
├── config/              # App-level configs
├── hooks/               # Custom hooks (useAuth, useMobile)
├── lib/                 # Utilities & Axios setup
├── redux/               # Redux slices & store
├── routes/              # React Router config
└── utils/               # General helpers & constants
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js:** 20.x or higher recommended 
- **npm:** comes with Node.js 

### Installation
```bash
git clone https://github.com/akashdnet/digital-wallet-frontend.git
cd digital-wallet-frontend
npm install
```

### Run Dev Server
```bash
npm run dev
```
App will be available at: `http://localhost:3000`

---

## 📜 Scripts

- `npm run dev` → Start dev server  
- `npm run build` → Build for production    




## 🔗 Live Link

You can check out the live version of the project here:  
👉 [D-Wallet Frontend Live](digital-wallet-frontend-alpha.vercel.app)








