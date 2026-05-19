import React, { useEffect, useState } from "react";
import "./index.css"
const App = () => {

  const [user, setUsers] = useState([]);

  const getUser = () => {
    fetch("/api/user")
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setUsers(json)
      });
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container">
      {user.map((data) => {
        return (
          <div key={data.id} className="card">
            <h1 className="title">
              Name: {data.nome || data.name}
            </h1>

            <h2 className="username">
              Username: {data["nome de usuário"] || data.username}
            </h2>

            <p className="email">
              E-Mail: {data["e-mail"] || data.email}
            </p>
          </div>
        );
      })}
    </div>
  )
}

export default App;
