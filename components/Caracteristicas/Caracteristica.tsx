import Link from "next/link";

interface CaracteristicaProps {
  index: number;
  texto: string;
}

export default function Caracteristica({ index, texto }: CaracteristicaProps) {
  return (
    <Link
      href={`/caracteristica/${index}`}
      className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center"
    >
      <p className="text-lg font-medium text-gray-800">{texto}</p>
    </Link>
  );
}