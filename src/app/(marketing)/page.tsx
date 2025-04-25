import React from 'react';
import { Header } from '@/components/templates/layout/Header';
import { Footer } from '@/components/templates/layout/Footer';
import { Banner } from '@/components/templates/sections/Banner';
import { Causes } from '@/components/templates/sections/Causes';
import { Impact } from '@/components/templates/sections/Impact';

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
