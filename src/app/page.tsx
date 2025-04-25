import { Banner } from '@/components/templates/sections/Banner';
import { Causes } from '@/components/templates/sections/Causes';
import Team from '@/components/templates/sections/Team';
import { Footer } from '@/components/templates/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <Causes />
      <Team />
      <Footer />
    </main>
  );
}
