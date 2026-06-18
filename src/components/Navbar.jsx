import { useTheme }
from "../context/ThemeContext";

function Navbar() {

  const {
    state,
    dispatch,
  } = useTheme();

  return (
    <nav>
      <h2>
        Current Theme:
        {state.theme}
      </h2>

      <button
        onClick={() =>
          dispatch({
            type:
              "TOGGLE_THEME",
          })
        }
      >
        Toggle Theme
      </button>
    </nav>
  );
}

export default Navbar;