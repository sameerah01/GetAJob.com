"use client";

import { useAuthStore } from '@/store/auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Briefcase, Building } from 'lucide-react';
import Link from 'next/link';

export function DashboardOverview() {
  const { user } = useAuthStore();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Welcome back, {user?.full_name}
        </h2>
        <p className="text-muted-foreground">
          Here's an overview of your job search journey
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Resume Uploads
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              of {user?.subscription_tier === 'free' ? '2' : 'unlimited'} allowed
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Applications
            </CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              applications in progress
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Profile Views
            </CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              views this month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Quick Actions</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Link href="/dashboard/profile">
            <Button className="w-full" variant="outline">
              Complete Profile
            </Button>
          </Link>
          <Link href="/dashboard/resumes">
            <Button className="w-full" variant="outline">
              Upload Resume
            </Button>
          </Link>
          <Link href="/dashboard/jobs">
            <Button className="w-full" variant="outline">
              Browse Jobs
            </Button>
          </Link>
          <Link href="/pricing">
            <Button className="w-full" variant="outline">
              Upgrade Plan
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}