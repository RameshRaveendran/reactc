import {
  useState,
  useEffect,
} from "react";

import UserList
from "./components/UserList";

import {
  getUsers,
} from "./api/userApi";

function App() {

  const [users, setUsers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {

    async function fetchUsers() {

      try {

        const data =
          await getUsers();

        setUsers(data);

      } catch (err) {

        setError(
          err.message
        );

      } finally {

        setLoading(false);

      }

    }

    fetchUsers();

  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return (
      <h1>
        Error:
        {error}
      </h1>
    );
  }

  return (
    <div>
      <h1>
        API Fetch Example
      </h1>

      <UserList
        users={users}
      />
    </div>
  );
}

export default App;