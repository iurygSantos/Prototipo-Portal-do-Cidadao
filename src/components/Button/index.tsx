import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {

    const { theme, toggleTheme } = useTheme();

    return (
        <div style={{ marginBottom: "20px" }}>

            <button onClick={toggleTheme}>
                Tema atual: {theme}
            </button>

        </div>
    );
}