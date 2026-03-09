"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://admin.nurul-haque-nur.com/api/v1";

export interface Volunteer {
  id: number;
  full_name: string;
  email: string;
  mobile: string;
  image: string | null;
  district: string;
  upazila: string;
  ward: string;
  skills: string | string[] | null;
  preferred_tasks: string | string[] | null;
  availability: string | string[] | null;
  created_at?: string;
  updated_at?: string;
}

interface AuthContextType {
  volunteer: Volunteer | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshVolunteer: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [volunteer, setVolunteer] = useState<Volunteer | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("volunteer_token");
    const storedVolunteer = localStorage.getItem("volunteer_data");

    if (storedToken && storedVolunteer) {
      try {
        setToken(storedToken);
        setVolunteer(JSON.parse(storedVolunteer));
      } catch {
        localStorage.removeItem("volunteer_token");
        localStorage.removeItem("volunteer_data");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const res = await fetch(`${API_BASE_URL}/volunteers/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.message || "লগইন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।");
    }

    const apiToken: string = data.data.token;
    const vol: Volunteer = data.data.volunteer;

    setToken(apiToken);
    setVolunteer(vol);
    localStorage.setItem("volunteer_token", apiToken);
    localStorage.setItem("volunteer_data", JSON.stringify(vol));
  };

  const logout = async () => {
    if (token) {
      try {
        await fetch(`${API_BASE_URL}/volunteers/logout`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
      } catch {
        // Proceed with local logout even if API call fails
      }
    }

    setVolunteer(null);
    setToken(null);
    localStorage.removeItem("volunteer_token");
    localStorage.removeItem("volunteer_data");
  };

  const refreshVolunteer = async () => {
    const t = localStorage.getItem("volunteer_token");
    if (!t) return;
    try {
      const res = await fetch(`${API_BASE_URL}/volunteers/profile`, {
        headers: { Accept: "application/json", Authorization: `Bearer ${t}` },
      });
      const data = await res.json();
      if (res.ok && data.success && data.data) {
        setVolunteer(data.data);
        localStorage.setItem("volunteer_data", JSON.stringify(data.data));
      }
    } catch {
      // Keep existing state on failure
    }
  };

  return (
    <AuthContext.Provider
      value={{
        volunteer,
        token,
        isAuthenticated: !!volunteer && !!token,
        login,
        logout,
        refreshVolunteer,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
