import Caracteristica from "@/components/Caracteristicas/Caracteristica";

const lista = [
  "JSX mistura HTML com JavaScript",
  "Componentes tornam tudo mais modular",
  "Next.js tem routing automático",
  "Hooks permitem controlar estado e efeitos",
  "Renderização rápida e otimizada",
];

export default function CaracteristicasPage() {
  return (
    <div className="p-6 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold mb-4">Características</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        {lista.map((texto, index) => (
          <Caracteristica key={index} index={index} texto={texto} />
        ))}
      </div>
    </div>
  );
}
