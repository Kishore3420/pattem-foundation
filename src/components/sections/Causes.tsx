import React from 'react';
import { Button } from '@/components/Button/Button';
import Image from 'next/image';

interface Cause {
  title: string;
  description: string;
  image: string;
  raised: number;
  goal: number;
}

interface CausesProps {
  causes?: Cause[];
}

const defaultCauses: Cause[] = [
  {
    title: 'Education for All',
    description: 'Providing quality education to underprivileged children across India.',
    image: '/images/education.jpg',
    raised: 250000,
    goal: 500000,
  },
  {
    title: 'Clean Water Initiative',
    description: 'Bringing clean drinking water to rural communities.',
    image: '/images/water.jpg',
    raised: 180000,
    goal: 300000,
  },
  {
    title: 'Healthcare Access',
    description: 'Improving healthcare access in remote areas.',
    image: '/images/healthcare.jpg',
    raised: 320000,
    goal: 600000,
  },
];

export const Causes = ({ causes = defaultCauses }: CausesProps) => {
  return (
    <section className="py-24 bg-white sm:py-32" role="region" aria-label="Our Causes">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Causes
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join us in supporting these important causes and make a real difference in people&apos;s
            lives.
          </p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {causes.map(cause => (
            <article key={cause.title} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <Image
                  src={cause.image}
                  alt={cause.title}
                  width={500}
                  height={300}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="flex items-center mt-8 text-xs gap-x-4">
                  <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                    {Math.round((cause.raised / cause.goal) * 100)}% Funded
                  </div>
                </div>
                <div className="relative group">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {cause.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{cause.description}</p>
                </div>
                <div className="mt-6">
                  <Button
                    variant="primary"
                    data-testid={`donate-button-${cause.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Donate Now
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
