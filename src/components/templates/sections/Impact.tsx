import React from 'react';

const stats = [
  { id: 1, name: 'Children Educated', value: '10,000+' },
  { id: 2, name: 'Communities Served', value: '500+' },
  { id: 3, name: 'Water Projects', value: '100+' },
  { id: 4, name: 'Healthcare Camps', value: '250+' },
];

export const Impact = () => {
  return (
    <section className="bg-primary-600 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Impact</h2>
            <p className="mt-4 text-lg leading-8 text-primary-100">
              Together, we&apos;ve made a significant difference in communities across India.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(stat => (
              <div key={stat.id} className="flex flex-col bg-primary-500/50 p-8">
                <dt className="text-sm font-semibold leading-6 text-primary-100">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
