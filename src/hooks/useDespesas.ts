

import { useEffect, useState } from "react";
import api from "../services/api";
import type { Despesa } from "../types/Despesa";
import { despesasMock } from "../mocks/despesasMock";

// tipagem dos filtros
interface Filtros {
    ano: number;
    mes: number;
    pagina: number;
}

export function useDespesas(filtros: Filtros) {

    const [dados, setDados] = useState<Despesa[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const USE_MOCK = false;

        if (USE_MOCK) {

            async function fetchData() {

                setLoading(true);

                try {

                    const response = await api.get("/despesas", {
                        params: filtros
                    });

                    // mapeia e tipa corretamente
                    const dadosTratados: Despesa[] = response.data.map((item: any) => ({

                        id: item.codigo + "-" + filtros.pagina, //evita duplicata,  id da API
                        descricao: item.descricao,
                        valor: Number(item.valor),
                        orgao: item.orgaoNome || "Não informado"

                    }));

                    setDados(prev => [...prev, ...dadosTratados]);

                } catch (err) {

                    setError("Erro ao buscar dados");

                } finally {

                    setLoading(false);
                }
            }
        }
        else {


            async function fetchData() {

                setLoading(true);

                try {

                    // simula delay de API real
                    await new Promise(resolve => setTimeout(resolve, 1000));

                    // simula paginação
                    const dadosPaginados = despesasMock.map((item, index) => ({
                        ...item,
                        id: item.id + "-" + filtros.pagina + "-" + index
                    }));

                    setDados(prev => [...prev, ...dadosPaginados]);

                } catch (err) {

                    setError("Erro ao buscar dados");

                } finally {

                    setLoading(false);
                }
            }

            fetchData();
        }

        // reseta dados quando muda filtro
        setDados([]);
    }, [filtros.ano, filtros.mes]);

    return { dados, loading, error };
}
