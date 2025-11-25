import Link from "next/link";

const lista = [
  "JSX mistura HTML com JavaScript",
  "Componentes tornam tudo mais modular",
  "Next.js tem routing automático",
  "Hooks permitem controlar estado e efeitos",
  "Renderização rápida e otimizada",
];

export default async function CaracteristicaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const index = Number(id);

  const item = lista[index];

  if (!item) {
    return (
      <div className="text-center p-10">
        <h1 className="text-2xl font-bold text-red-600">Característica não encontrada</h1>
        <Link href="/characteristics" className="text-blue-500 underline">
          Voltar
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center p-10 bg-white rounded-xl shadow max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Característica</h1>

      <p className="text-lg text-gray-700 mb-6">{item}</p>

      <Link
        href="/characteristics"
        className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
      >
        Voltar
      </Link>
    </div>
  );
}
