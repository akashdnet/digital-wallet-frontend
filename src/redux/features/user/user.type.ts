export interface TAuthProvider {
  provider: string;
  providerId: string;
  _id: string;
}

export interface TWallet {
  balance: number;
  createdAt: string;
  updatedAt: string;
  status: string;
  user: string;
  __v: number;
  _id: string;
}

export interface TUser {
  _id: string;
  name: string;
  email: string;
  phone: number;
  avatar: string;
  role: string[]; // e.g. ['user']
  agentStatus: string;
  authProviders: TAuthProvider[];
  wallet: TWallet;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
