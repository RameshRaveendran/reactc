import UserList
from "./components/UserList";

import useFetch
from "./hooks/useFetch";

function App() {

  const {
    data: users,
    loading,
    error,
  } = useFetch(
 "https://jsonplaceholder.typicode.com/todos"
);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return (
      <h1>Error: {error}</h1>
    );
  }

  return (
    <div>
      <h1>
        Custom Hook Example
      </h1>

      <UserList
        users={users}
      />
    </div>
  );
}

export default App;