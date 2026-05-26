export type AuthUserRole = "admin" | "member";

export type AuthUser = {
  id: string;
  email: string;
  name: string;
  role: AuthUserRole;
  canAccessInternal: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
};

type RequestOptions = RequestInit & {
  expectedStatuses?: number[];
};

const authApiBaseUrl = (import.meta.env.VITE_AUTH_API_URL || "http://127.0.0.1:8787").replace(/\/+$/, "");

const readErrorMessage = async (response: Response) => {
  try {
    const data = (await response.json()) as { error?: string };
    return data.error || `Request failed with status ${response.status}.`;
  } catch {
    return `Request failed with status ${response.status}.`;
  }
};

const request = async <T>(path: string, options: RequestOptions = {}) => {
  const { expectedStatuses = [200], headers, ...rest } = options;
  const response = await fetch(`${authApiBaseUrl}${path}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...rest,
  });

  if (!expectedStatuses.includes(response.status)) {
    throw new Error(await readErrorMessage(response));
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
};

export const authClient = {
  baseUrl: authApiBaseUrl,
  getCurrentUser: async () => {
    return request<{ user: AuthUser }>("/api/auth/me");
  },
  login: async (email: string, password: string) => {
    return request<{ user: AuthUser }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  },
  logout: async () => {
    return request<void>("/api/auth/logout", {
      method: "POST",
      expectedStatuses: [204],
    });
  },
  requestPasswordReset: async (email: string) => {
    return request<{ ok: true }>("/api/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
  },
  resetPassword: async (token: string, newPassword: string) => {
    return request<{ ok: true }>("/api/auth/reset-password", {
      method: "POST",
      body: JSON.stringify({ token, newPassword }),
    });
  },
  listUsers: async () => {
    return request<{ users: AuthUser[] }>("/api/admin/users");
  },
  createUser: async (payload: {
    email: string;
    name: string;
    password: string;
    role?: AuthUserRole;
    canAccessInternal?: boolean;
  }) => {
    return request<{ user: AuthUser }>("/api/admin/users", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },
  updateUser: async (
    userId: string,
    payload: Partial<Pick<AuthUser, "name" | "role" | "canAccessInternal" | "active">>
  ) => {
    return request<{ user: AuthUser }>(`/api/admin/users/${userId}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
    });
  },
  sendResetLink: async (userId: string) => {
    return request<{ ok: true; outboxPath: string }>(`/api/admin/users/${userId}/send-reset`, {
      method: "POST",
    });
  },
};
