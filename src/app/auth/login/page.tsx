import Link from 'next/link';
import { BriefcaseIcon } from 'lucide-react';
import { AuthForm } from '@/components/auth/auth-form';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8 px-4 py-8">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Link href="/" className="flex items-center space-x-2">
            <BriefcaseIcon className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">JobHub</span>
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to access your account
          </p>
        </div>

        <AuthForm type="login" />

        <div className="text-center text-sm">
          <span className="text-muted-foreground">Don&apos;t have an account? </span>
          <Link href="/auth/register" className="text-primary hover:underline">
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
}