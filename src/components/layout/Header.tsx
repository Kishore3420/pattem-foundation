import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/Button/Button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Causes', href: '/causes' },
  { name: 'Donate', href: '/donate' },
  { name: 'Contact', href: '/contact' },
];

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              Pattem Foundation
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-700 hover:text-primary-600"
              >
                {item.name}
              </Link>
            ))}
            <Button variant="primary">Donate Now</Button>
          </div>
          <div className="flex md:hidden">
            <Button variant="ghost" className="text-gray-700">
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
