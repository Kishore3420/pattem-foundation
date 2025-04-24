import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Banner } from '@/components/sections/Banner';
import { Causes } from '@/components/sections/Causes';
import { Impact } from '@/components/sections/Impact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Banner />
        <Causes />
        <Impact />
      </main>
      <Footer />
    </div>
  );
} 