"use client";

import Image from "next/image";
import technologiesJSON from "@/app/data/technologies.json";
import { FaStar } from "react-icons/fa";

interface Tech {
  title: string;
  image: string;
  description: string;
  rating: number;
}

export default function Page() {
  const technologies: Tech[] = JSON.parse(JSON.stringify(technologiesJSON));

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Tecnologias Exploradas</h1>

      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        
        {technologies.map((tech: Tech, i: number) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition border p-6"
          >
            
            <div className="flex flex-col items-center text-center">

              {/* image */}
              <Image
                src={`/technologies/${tech.image}`}
                alt={tech.title}
                width={180}
                height={180}
                className="rounded-lg mb-4"
              />

              {/* title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>

              {/* description */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {tech.description}
              </p>

              {/* rating */}
              <div className="flex items-center gap-2 text-yellow-500 font-bold mb-4">
                <FaStar /> {tech.rating}
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}