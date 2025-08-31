# 💳 Digital Wallet Frontend (React + Redux Toolkit + RTK Query)

A modern and secure frontend application, built with **React**, **Redux Toolkit**, and **RTK Query**. Inspired by services like **bKash** or **Nagad**, this project provides a seamless user experience for Users, Agents, and Admins.

---

## 🚀 Features

### ✅ Public Pages
- **Home** — Landing page about our digital wallet
- **About** — ABout our company
- **Services/Features** — What we offer (send money, top-up, withdraw, etc.)
- **Contact** — Address and map section

### 🔐 Authentication
- JWT-based login/register
- Role selection during signup (User, Agent or Admin)
- Protected routes with role-based access
- Persisted login after refresh
- Logout with state cleanup

### 👤 User Dashboard
- Wallet balance & transaction history
- Send money, Top-Up, Withdraw
- Transaction history 
- Profile update

### 🧑‍💼 Agent Dashboard
- Cash-in and cash-out operations
- profile update

### 🛠️ Admin Dashboard
- View/manage all users and agents
- Block/suspend accounts
- Admin account management

---

## 🧩 Tech Stack

| Category       | Tech Used                            |
|----------------|--------------------------------------|
| **Frontend**   | React, TypeScript, Vite              |
| **State**      | Redux Toolkit, RTK Query             |
| **Routing**    | React Router DOM                     |
| **Styling**    | Tailwind CSS                         |
| **Icons**      | React Icons            |
| **UI Lib**     | shadcn/ui        |
| **Notifications** | Sonner (toast notifications)      |
| **Tour Guide** | React Joyride (guided feature tour)  |

---


## 🧪 Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/akashdnet/digital-wallet-frontend.git
cd digital-wallet-frontend

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev




src/
│
├── components/         # Reusable UI components
├── components/modules  # All isolated component for each pages, on folder name.         
├── pages/              # All pages
├── store/              # Redux slices and APIs (auth, user, transaction)
├── layouts/            # Dashboard layouts
├── router/             # Route protection and route config
├── hooks/              # Custom hooks
├── assets/             # Images, logos, etc.
└── utils/              # Helpers, constants
