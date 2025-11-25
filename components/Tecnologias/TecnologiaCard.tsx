import Image from "next/image";
import Link from "next/link";

interface TecnologiaCardProps {
  index: number;
  title: string;
  image: string;
  description: string;
}

export default function TecnologiaCard({
  index,
  title,
  image,
  description,
}: TecnologiaCardProps) {
  return (
    <Link href={`/tecnologia/${index}`}>
      <div className="bg-white w-64 h-[340px] rounded-xl shadow-lg p-5 flex flex-col items-center justify-between hover:shadow-2xl transition cursor-pointer">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

        <Image
          src={`/technologies/${image}`}
          alt={title}
          width={100}
          height={100}
          className="object-contain"
        />

        <p className="text-gray-600 text-sm text-center px-2">
          {description}
        </p>
      </div>
    </Link>
  );
}