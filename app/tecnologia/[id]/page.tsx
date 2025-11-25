import Image from "next/image";
import Link from "next/link";
import technologiesJSON from "@/app/data/technologies.json";

export default async function TecnologiaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // OBRIGATÓRIO NO NEXT 15/16
  const index = Number(id);

  const tech = technologiesJSON[index];

  if (!tech) {
    return (
      <div className="text-center p-10">
        <h1 className="text-2xl font-bold text-red-600">Tecnologia não encontrada</h1>
        <Link href="/technologies" className="text-blue-500 underline">
          Voltar
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-xl max-w-xl mx-auto flex flex-col items-center gap-6">

      <h1 className="text-3xl font-bold text-gray-900">{tech.title}</h1>

      <Image
        src={`/technologies/${tech.image}`}
        alt={tech.title}
        width={180}
        height={180}
        className="object-contain"
      />

      <p className="text-gray-700 text-center text-lg px-4">{tech.description}</p>

      <p className="text-yellow-500 text-xl font-bold">{tech.rating}</p>

      <Link
        href="/technologies"
        className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition"
      >
        Voltar
      </Link>
    </div>
  );
}
