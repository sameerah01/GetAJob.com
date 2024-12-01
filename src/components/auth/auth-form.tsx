"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useAuthStore } from '@/store/auth';
import { LoginFormData, RegisterFormData, loginSchema, registerSchema } from '@/lib/validations/auth';

interface AuthFormProps {
  type: 'login' | 'register';
}

export function AuthForm({ type }: AuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { login, register } = useAuthStore();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<LoginFormData | RegisterFormData>({
    resolver: zodResolver(type === 'login' ? loginSchema : registerSchema),
    defaultValues: {
      email: '',
      password: '',
      ...(type === 'register' && { full_name: '', user_type: 'job_seeker' as const }),
    },
  });

  async function onSubmit(data: LoginFormData | RegisterFormData) {
    setIsLoading(true);
    try {
      if (type === 'login') {
        await login(data as LoginFormData);
      } else {
        await register(data as RegisterFormData);
      }
      router.push('/dashboard');
    } catch (error) {
      toast({
        title: 'Error',
        description: (error as Error).message,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      {type === 'register' && (
        <div className="space-y-2">
          <Label htmlFor="full_name">Full Name</Label>
          <Input
            id="full_name"
            {...form.register('full_name')}
            disabled={isLoading}
          />
          {form.formState.errors.full_name && (
            <p className="text-sm text-destructive">
              {form.formState.errors.full_name.message}
            </p>
          )}
        </div>
      )}
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...form.register('email')}
          disabled={isLoading}
        />
        {form.formState.errors.email && (
          <p className="text-sm text-destructive">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          {...form.register('password')}
          disabled={isLoading}
        />
        {form.formState.errors.password && (
          <p className="text-sm text-destructive">
            {form.formState.errors.password.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            <span>Please wait...</span>
          </div>
        ) : (
          <span>{type === 'login' ? 'Sign In' : 'Create Account'}</span>
        )}
      </Button>
    </form>
  );
}