import Projeto from "@/components/Projetos/Projeto";

export default function DescricaoProjetos() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Os meus Projetos</h2>

      <p className="text-gray-700 mb-4">
        Consultar todos os meus projetos no meu portefólio.
      </p>

      <div className="space-y-3 text-black">
        <Projeto
          nome="Aplicação HTML, CSS e responsividade"
          url="https://a22408989-filipaferreira.github.io/lab3/index.html"
        />

        <Projeto
          nome="Interatividade JS"
          url="https://a22408989-filipaferreira.github.io/lab5/index.html"
        />

        <Projeto
          nome="Loja"
          url="https://a22408989-filipaferreira.github.io/lab7/index.html"
        />
      </div>

      {/*<a
        href="https://a22408989-filipaferreira.github.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-amber-600 font-semibold underline hover:text-amber-400"
      >
        Projetos
      </a>*/}
    </div>
  );
}
