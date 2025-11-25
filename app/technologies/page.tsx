"use client";

import TecnologiaCard from "@/components/Tecnologias/TecnologiaCard";
import technologiesJSON from "@/app/data/technologies.json";

interface Tech {
  title: string;
  image: string;
  description: string;
}

export default function TecnologiasPage() {
  const technologies: Tech[] = JSON.parse(JSON.stringify(technologiesJSON));

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center text-black mb-10">
        Tecnologias
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {technologies.map((tech, i) => (
          <TecnologiaCard
            key={i}
            index={i}
            title={tech.title}
            image={tech.image}
            description={tech.description}
          />
        ))}
      </div>
    </div>
  );
}
