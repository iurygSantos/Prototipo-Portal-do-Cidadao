import type { Dispatch, SetStateAction } from "react";

// tipagem das props
interface Props {
    busca: string;
    setBusca: Dispatch<SetStateAction<string>>;

    valorMin: number;
    setValorMin: Dispatch<SetStateAction<number>>;

    carregarMais: () => void;
}

export default function Filtros({
    busca,
    setBusca,
    valorMin,
    setValorMin,
    carregarMais
}: Props) {

    return (
        <div>

            {/* input de busca */}
            <input
                type="text"
                placeholder="Buscar por descrição"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
            />

            {/* input valor mínimo */}
            <input
                type="number"
                placeholder="Valor mínimo"
                onChange={(e) => setValorMin(Number(e.target.value))}
            />

            {/* botão paginação */}
            <button onClick={carregarMais}>
                Carregar mais
            </button>

        </div>
    );
}