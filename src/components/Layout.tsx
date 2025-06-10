import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from './Footer';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="mt-16 md:mt-40">{children}</main>
      <Footer />
    </div>
  );
}
