import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

interface TeamProps {
  people?: TeamMember[];
}

const defaultPeople: TeamMember[] = [
  {
    name: 'John Doe',
    role: 'Founder / CEO',
    imageUrl: '/team/john-doe.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Co-Founder / CTO',
    imageUrl: '/team/jane-smith.jpg',
  },
  // Add more team members as needed
];

export default function Team({ people = defaultPeople }: TeamProps) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the dedicated individuals who make our mission possible.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map(person => (
            <li key={person.name}>
              <div className="group relative">
                <div className="relative h-48 w-48 overflow-hidden rounded-full">
                  <Image
                    className="absolute inset-0 h-full w-full object-cover"
                    src={person.imageUrl}
                    alt={person.name}
                    width={192}
                    height={192}
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
