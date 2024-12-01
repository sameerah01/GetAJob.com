import { Metadata } from 'next';
import { DashboardOverview } from '@/components/dashboard/overview';

export const metadata: Metadata = {
  title: 'Dashboard - JobHub',
  description: 'Manage your job search journey',
};

export default function DashboardPage() {
  return <DashboardOverview />;
}