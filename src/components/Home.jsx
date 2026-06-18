import { useTheme }
from "../context/ThemeContext";

function Home() {

  const { state } =
    useTheme();

  const styles = {
    background:
      state.theme === "dark"
        ? "#222"
        : "#fff",

    color:
      state.theme === "dark"
        ? "#fff"
        : "#000",

    padding: "30px",
    minHeight: "100vh",
  };

  return (
    <div style={styles}>
      <h1>
        Home Page
      </h1>

      <h2>
        Theme:
        {state.theme}
      </h2>
    </div>
  );
}

export default Home;