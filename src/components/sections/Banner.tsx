'use client';

import React from 'react';
import { Button } from '@/components/Button/Button';
import Image from 'next/image';

export const Banner = () => {
  return (
    <div
      className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20"
      data-testid="banner-container"
    >
      <div
        className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40"
        data-testid="banner-content"
      >
        <div
          className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"
          data-testid="banner-text"
        >
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Making a Difference Together
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join us in our mission to create positive change through sustainable development,
            education, and community empowerment. Your support can transform lives.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button variant="primary" size="lg" data-testid="button-primary-lg">
              Donate Now
            </Button>
            <Button variant="outline" size="lg" data-testid="button-outline-lg">
              Learn More
            </Button>
          </div>
        </div>
        <div
          className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
          data-testid="banner-image-container"
        >
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <Image
              src="/images/banner-image.webp"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
