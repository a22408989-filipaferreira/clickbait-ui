"use client";

import { useState } from "react";

export default function Page() {
  const caracteristicas = [
    "JSX, sintaxe que mistura HTML e JS.",
    "Componentes, funções que retornam JSX.",
    "Componentes Reutilizáveis e Modulares.",
    "Roteamento Automático e APIs.",
    "Hooks: useState, useEffect e useSWR.",
    "Renderização Rápida e SEO Friendly.",
    "TypeScript Seguro e Escalável.",
    "Comunidade Ativa e Popularidade.",
  ];

  const [active, setActive] = useState<number | null>(null);

  return (
    <div>
      <h2>Características do React e Next.js</h2>
      <ul>
        {caracteristicas.map((caracteristica, i) => (
          <li
            key={i}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            style={{
              cursor: "pointer",
              color: active === i ? "orange" : "black",
            }}
          >
            {caracteristica}
          </li>
        ))}
      </ul>
    </div>
  );
}
