interface ProjetoProps {
  nome: string;
  url: string;
}

export default function Projeto({ nome, url }: ProjetoProps) {
  return (
    <p className="text-black mb-2">
      O projeto <strong>{nome}</strong> pode ser visto aqui:{" "}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-amber-600 underline hover:text-amber-400"
      >
        Abrir
      </a>
    </p>
  );
}