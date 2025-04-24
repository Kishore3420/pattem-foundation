import { Banner } from '@/components/sections/Banner';
import { Causes } from '@/components/sections/Causes';
import Team from '@/components/sections/Team';
import { Footer } from '@/components/sections/Footer';

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
