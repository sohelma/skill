import React, { useContext } from "react";
import Skills from "./Skills";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user && <h2>Welcome, {user.displayName || user.email}!</h2>}
      <Skills />
    </div>
  );
};

export default Home;
