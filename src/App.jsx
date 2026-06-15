

import UserContext
from "./context/UserContext";

function App() {

  const user = {
    name: "Ramesh"
  };

  return (

    <UserContext.Provider
      value={user}
    >

      <Navbar />

    </UserContext.Provider>

  );
}

export default App;