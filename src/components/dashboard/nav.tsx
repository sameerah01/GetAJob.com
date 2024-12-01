"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { BriefcaseIcon } from 'lucide-react';

const navItems = [
  {
    title: 'Overview',
    href: '/dashboard',
  },
  {
    title: 'Profile',
    href: '/dashboard/profile',
  },
  {
    title: 'Resumes',
    href: '/dashboard/resumes',
  },
  {
    title: 'Applications',
    href: '/dashboard/applications',
  },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-6">
      <Link href="/" className="flex items-center space-x-2">
        <BriefcaseIcon className="h-6 w-6" />
        <span className="font-bold">JobHub</span>
      </Link>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            pathname === item.href
              ? 'text-primary'
              : 'text-muted-foreground'
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}