import { useDespesas } from "../../hooks/useDespesas";
import { calcularResumo } from "../../utils/dashboard";

import "./styles.css";

export default function Home() {

    const { dados, loading, error } = useDespesas({
        ano: 2022,
        mes: 1,
        pagina: 1
    });

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;

    const resumo = calcularResumo(dados);

    return (
        <div className="dashboard-container">

            <h1 className="dashboard-title">Dashboard</h1>

            {/* RESUMO */}
            <table className="table">
                <thead>
                    <tr>
                        <th>Total de Despesas</th>
                        <th>Maior Despesa</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="valor">
                            R$ {resumo.total.toLocaleString()}
                        </td>
                        <td className="valor">
                            R$ {resumo.maior.toLocaleString()}
                        </td>
                        <td>{resumo.quantidade}</td>
                    </tr>
                </tbody>
            </table>

            {/* TOP 3 */}
            <h2>Maiores despesas</h2>

            <table className="table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Órgão</th>
                        <th>Valor</th>
                    </tr>
                </thead>

                <tbody>
                    {resumo.top3.map(item => (
                        <tr key={item.id}>
                            <td>{item.descricao}</td>
                            <td>{item.orgao}</td>
                            <td className="valor">
                                R$ {item.valor.toLocaleString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}