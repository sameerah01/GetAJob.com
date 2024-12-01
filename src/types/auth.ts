export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  phone_number?: string;
  location?: string;
  professional_summary?: string;
  subscription_tier: 'free' | 'pro' | 'enterprise';
  created_at: string;
  updated_at: string;
}

export interface AuthState {
  user: UserProfile | null;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  full_name: string;
  user_type: 'job_seeker';
}