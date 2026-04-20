import type { Despesa } from "../../types/Despesa";

interface Props {
    dados: Despesa[];
}

export default function TabelaDespesas({ dados }: Props) {

    return (
        <table>

            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Órgão</th>
                    <th>Valor</th>
                </tr>
            </thead>

            <tbody>

                {dados.map(item => (
                    <tr key={item.id}>

                        {/* descrição */}
                        <td>{item.descricao}</td>

                        {/* órgão */}
                        <td>{item.orgao}</td>

                        {/* valor formatado */}
                        <td>
                            {item.valor.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            })}
                        </td>

                    </tr>
                ))}

            </tbody>

        </table>
    );
}