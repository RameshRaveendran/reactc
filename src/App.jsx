import { useState } from "react";

import UserList
from "./components/UserList";

import useFetch
from "./hooks/useFetch";

function App() {

  const [search, setSearch] =
    useState("");

  const {
    data: users,
    loading,
    error,
  } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const filteredUsers =
    users.filter(user =>
      user.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  if (loading)
    return <h1>Loading...</h1>;

  if (error)
    return <h1>{error}</h1>;

  return (
    <div>

      <h1>
        User Search
      </h1>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
      />

      <UserList
        users={
          filteredUsers
        }
      />

    </div>
  );
}

export default App;