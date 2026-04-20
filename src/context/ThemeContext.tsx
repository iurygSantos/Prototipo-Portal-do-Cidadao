import { createContext, useState, useEffect, useContext } from "react";

// cria o contexto
const ThemeContext = createContext();

// provider que envolve a aplicação
export function ThemeProvider({ children }) {

    // estado do tema
    const [theme, setTheme] = useState("light");

    // carrega tema salvo
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    // salva sempre que mudar
    useEffect(() => {
        localStorage.setItem("theme", theme);

        // aplica no body (classe CSS)
        document.body.className = theme;

    }, [theme]);

    // alterna tema
    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// hook customizado
export function useTheme() {
    return useContext(ThemeContext);
}