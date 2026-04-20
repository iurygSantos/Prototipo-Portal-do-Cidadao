
import { useState, useRef, useEffect } from "react";
import { useDespesas } from "../../hooks/useDespesas";

import Filtros from "../../components/Filtros";
import TabelaDespesas from "../../components/TabelaDespesas";

export default function Dados() {

    // cria uma referência para o elemento "sentinela"
    const loaderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // cria o observer (observador de scroll)
        const observer = new IntersectionObserver((entries) => {

            // pega o primeiro elemento observado
            const target = entries[0];

            if (target.isIntersecting) {
                carregarMais(); // 👈 faltou isso
            }
        });

        // começa a observar o elemento
        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }


        // limpa o observer quando sair da tela
        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };

    }, []);

    // filtros da API
    const [filtros, setFiltros] = useState({
        ano: 2022,
        mes: 1,
        pagina: 1
    });

    // busca
    const [busca, setBusca] = useState("");
    const [valorMin, setValorMin] = useState(0);

    // hook
    const { dados, loading, error } = useDespesas(filtros);

    // filtro final
    const dadosFiltrados = dados
        .filter(item =>
            item.descricao.toLowerCase().includes(busca.toLowerCase())
        )
        .filter(item => item.valor >= valorMin);

    // função paginação
    const carregarMais = () => {
        setFiltros(prev => ({
            ...prev,
            pagina: prev.pagina + 1
        }));
    };

    return (
        <div>

            <h1>Despesas Públicas</h1>

            {/* filtros */}
            <Filtros
                busca={busca}
                setBusca={setBusca}
                valorMin={valorMin}
                setValorMin={setValorMin}
                carregarMais={carregarMais}
            />

            {/* estados */}
            {loading && <p>Carregando...</p>}
            {error && <p>{error}</p>}

            {/* tabela */}
            {!loading && !error && (
                <TabelaDespesas dados={dadosFiltrados} />
            )}

            <div ref={loaderRef} style={{ height: "20px" }} />
        </div>

    );
}