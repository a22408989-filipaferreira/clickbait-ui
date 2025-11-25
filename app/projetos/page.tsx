/*import Projeto from "@/components/Projetos/Projeto";*/
import DescricaoProjetos from "@/components/Projetos/DescricaoProjetos";

export default function ProjetosPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">Projetos</h1>

      <div className="max-w-3xl mx-auto space-y-6">

        <DescricaoProjetos />

        {/*<Projeto
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
        />*/}

      </div>
    </div>
  );
}
