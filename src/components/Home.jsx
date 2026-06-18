import { useTheme }
from "../context/ThemeContext";

function Home() {

  const { state } =
    useTheme();

  return (
    <div>
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