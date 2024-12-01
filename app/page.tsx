import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BriefcaseIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center space-x-2">
            <BriefcaseIcon className="h-12 w-12 text-primary" />
            <h1 className="text-4xl font-bold">JobHub</h1>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight">
            Your Career Journey Starts Here
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-[600px]">
            Connect with top employers, showcase your skills, and find your dream job
            with our powerful platform.
          </p>

          <div className="flex gap-4">
            <Link href="/auth/register" className="inline-block">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/auth/login" className="inline-block">
              <Button variant="outline" size="lg">Sign In</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-2">Professional Profile</h3>
              <p className="text-muted-foreground">
                Create a stunning professional profile that showcases your skills and experience.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-2">Resume Management</h3>
              <p className="text-muted-foreground">
                Upload and manage multiple resumes, tailored for different opportunities.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-2">Job Matching</h3>
              <p className="text-muted-foreground">
                Get matched with relevant job opportunities based on your skills and preferences.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}