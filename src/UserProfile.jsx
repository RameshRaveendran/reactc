import {
  useContext
} from "react";

import UserContext
from "./context/UserContext";

function UserProfile() {

  const user =
    useContext(UserContext);

  return (
    <h1>
      {user.name}
    </h1>
  );
}