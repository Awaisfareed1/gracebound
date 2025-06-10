import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="p-4 bg-blue-600 text-white">
        <h1 className="text-xl font-bold">My Website</h1>
      </header>
      <main className="p-6">{children}</main>
      <footer className="p-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} My Website
      </footer>
    </div>
  );
}
