import Image from "next/image";

import type { Person } from "@/content/pages/company";

const initials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

export function TeamGrid({ people }: { people: Person[] }) {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {people.map((person) => (
        <li key={person.name} className="overflow-hidden rounded-2xl border border-border bg-card">
          {person.photo ? (
            <Image
              src={person.photo}
              alt={person.name}
              width={320}
              height={400}
              sizes="(min-width: 1024px) 220px, 45vw"
              className="aspect-[4/5] w-full object-cover"
            />
          ) : (
            <div
              aria-hidden="true"
              className="grid aspect-[4/5] place-items-center bg-surface text-h2 font-semibold text-purple"
            >
              {initials(person.name)}
            </div>
          )}
          <div className="p-4">
            <p className="font-semibold text-text">{person.name}</p>
            <p className="text-small text-subtle">{person.role}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
