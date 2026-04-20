// simula resposta da API
import type { Despesa } from "../types/Despesa";

export const despesasMock: Despesa[] = [

    {
        id: "1",
        descricao: "Compra de materiais escolares",
        valor: 1500,
        orgao: "Ministério da Educação"
    },

    {
        id: "2",
        descricao: "Manutenção de veículos",
        valor: 3200,
        orgao: "Ministério da Defesa"
    },

    {
        id: "3",
        descricao: "Serviços de TI",
        valor: 8700,
        orgao: "Ministério da Economia"
    },

    {
        id: "4",
        descricao: "Reforma de prédio público",
        valor: 12500,
        orgao: "Infraestrutura"
    }

];