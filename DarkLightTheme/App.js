import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext";

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{
      height: "100vh",
      padding: "20px",
      background: theme === "light" ? "#fff" : "#111",
      color: theme === "light" ? "#000" : "#fff",
      transition: "0.3s",
      textAlign: "center"
    }}>
      <h1>{theme.toUpperCase()} MODE</h1>
      <button onClick={toggleTheme}
        style={{
          padding: "10px 12px",
          fontWeight: "bold",
          fontSize: "14px",
          borderRadius: "10px"
        }}>
        Toggle Theme
      </button>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
