import Image from "next/image";

interface TecnologiaDetailsProps {
  title: string;
  image: string;
  description: string;
  rating: number;
}

export default function TecnologiaDetailsCard({
  title,
  image,
  description,
  rating,
}: TecnologiaDetailsProps) {
  return (
    <div className="bg-white w-80 p-6 rounded-xl shadow-xl flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">{title}</h2>

      <Image
        src={`/technologies/${image}`}
        alt={title}
        width={150}
        height={150}
      />

      <p className="text-gray-700 text-center text-sm">{description}</p>

      <p className="text-yellow-600 font-semibold text-lg">⭐ {rating}</p>
    </div>
  );
}