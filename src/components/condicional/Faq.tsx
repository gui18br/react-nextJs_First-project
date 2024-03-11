import { use, useState } from "react";
import Pergunta from "./Pergunta";
import { set } from "mongoose";

export default function Faq() {
  const [ativo, setAtivo] = useState<number>(0);

  function alternarVisibilidade(indice: number) {
    if (indice === ativo) {
      setAtivo(-1);
    } else {
      setAtivo(indice);
    }
  }
  return (
    <div className="flex flex-col gap-2 w-[90%]  md:w-3/4">
      <Pergunta
        indice={0}
        aberto={ativo === 0}
        texto="Quem descobriu o Brasil?"
        resposta="asdasdasd"
        alternarVisibilidade={alternarVisibilidade}
      />
      <Pergunta
        indice={1}
        aberto={ativo === 1}
        texto="O que é TS?"
        resposta="asdasdasd"
        alternarVisibilidade={alternarVisibilidade}
      />
      <Pergunta
        indice={2}
        aberto={ativo === 2}
        texto="React é um framework?"
        resposta="asdasdasd"
        alternarVisibilidade={alternarVisibilidade}
      />
      <Pergunta
        indice={3}
        aberto={ativo === 3}
        texto="Quais as principais funcionalidades do NextJs"
        resposta="asdasdasd"
        alternarVisibilidade={alternarVisibilidade}
      />
    </div>
  );
}
