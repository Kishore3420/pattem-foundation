import React from 'react';
import { Button } from '@/components/ui/Button';

const causes = [
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

export const Causes = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Causes
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join us in supporting these important causes and make a real difference in people's lives.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {causes.map((cause) => (
            <article
              key={cause.title}
              className="flex flex-col items-start"
            >
              <div className="relative w-full">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                    {Math.round((cause.raised / cause.goal) * 100)}% Funded
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {cause.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    {cause.description}
                  </p>
                </div>
                <div className="mt-6">
                  <Button variant="primary">Donate Now</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}; 