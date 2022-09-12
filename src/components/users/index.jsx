import React, { useEffect, useState } from "react";
import axios from "axios";
import NavigationBar from "../header/navigation";
import Card from "./card";

const Users = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((resp) => setUsers(resp.data));
  }, []);
  if (!users) return null;
  return (
    <>
      <header className="header">
        <NavigationBar loginPage={true} />
      </header>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding:"4%" }}>
        {users.map((item) => {
          return (
            <Card
              key={item.login}
              style={{ color: "#000" }}
              img={item.avatar_url}
              login={item.login}
            >
              {item.login}
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Users;
