import type { Despesa } from "../types/Despesa";

// calcula métricas do dashboard
export function calcularResumo(dados: Despesa[]) {

    // soma total
    const total = dados.reduce((acc, item) => acc + item.valor, 0);

    // maior valor
    const maior = Math.max(...dados.map(d => d.valor), 0);

    // quantidade
    const quantidade = dados.length;

    // top 3 maiores despesas
    const top3 = [...dados]
        .sort((a, b) => b.valor - a.valor)
        .slice(0, 3);

    return {
        total,
        maior,
        quantidade,
        top3
    };
}