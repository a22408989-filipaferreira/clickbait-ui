export default function MagiaDoJSX() {
    const magia = <strong>HTML dentro de JavaScript!</strong>
    const tecnologias = "React e Next.js"

    return (
        <div className='bg-white rounded-xl'>
            <p className="m-0 text-black pl-2">Este é o meu componente MagiaDoJSX.</p>
            <p className="m-0 text-black pl-2">Um componente é uma função que retorna JSX - {magia}.</p>
            <p className="m-0 text-black pl-2">Os componentes são usados em {tecnologias}</p>
        </div>
    )
}